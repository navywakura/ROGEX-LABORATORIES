# Intent → drone: EEG, EMG and body control

**Status: 18 September 2026 · exploratory campaign · no drone-control results of our own.** The laboratory has no EEG headset, no EMG sensors and no physical drone. The campaign starts with public data and simulation.

> The starting idea: think about going up and have the drone climb, at the speed of thought, as if it were an extension of the nervous system. This document separates what has already been shown, what has not, and how we will measure it.

## Summary

- **A real quadcopter has already been flown with EEG**, but with trained motor imagery: in the reference study, "up" meant imagining both hands. With five participants, that task reached 1.16 bits per minute and 3.1 rings per four-minute trial, against 12 with a keyboard.
- **There are faster routes, but not all of them are EEG, and not all are accessible.** A person with tetraplegia flew a virtual drone with an intracortical implant that decoded finger movements. People with no experience learned to fly real drones by moving their torso. An EMG wristband decodes gestures and handwriting without being fitted to each person.
- **"Up" can mean four different things:** attempting a movement, imagining it, choosing a goal or thinking the word. Each one is measured and decoded differently.
- **Speed does not come from the PRISMA engine.** Latency depends on the signal, the processing and the response that returns to the person; it cannot be inferred from the compute time of a single event. RxLabs' end-to-end latency is unknown today, because the physical chain to measure it does not exist yet.
- **An extension of the body needs a way back.** Feeling what the drone does, through images or vibration, matters as much as sending it commands.

The campaign compares these routes with the same simulation and the same safety filters: PRISMA proposes bounded intents, and echoAI and echOS filter them before they reach the flight controller.

## Four meanings of "up"

| What the person does | What has been decoded | What has not been shown | Reasonable control route |
|---|---|---|---|
| **Attempting a movement**, including with paralysis | Finger movements in 4 degrees of freedom with an intracortical implant (one person, virtual drone) | That any area or any task works without training | Map a calibrated motor variable to a bounded intent |
| **Imagining a movement** | Modulation of sensorimotor rhythms in EEG, as in LaFleur et al. | An "up" symbol that is the same for everyone | Discrete goal selection, with an explicit rest class |
| **Choosing a spatial goal** | Goals and imagined actions in the posterior parietal cortex (implant, one person, instructed task) | Reading free goals outside the paradigm | Propose a destination and leave the trajectory to autonomy |
| **Thinking the word** | EEG inner speech: on an open four-word dataset, a 2025 study reached a mean within-subject accuracy of 46.6% against 25% chance, in offline evaluation | Reliability sufficient to issue flight commands | Offline exploratory line; never the main command |

If the person **actually moves** their arm or torso, the most direct signal is the movement itself or the muscle activity, measured with inertial sensors or EMG. That is not "reading the brain", but it is a legitimate body interface, and today it is the fastest accessible route. An interface that uses muscle activity should be called by what it measures.

## What has already been shown

| Work | Signal and task | Result | Limit to keep in mind |
|---|---|---|---|
| LaFleur et al., 2013 | EEG, motor imagery, 64 channels. Right hand → right; left → left; both → up; nothing → down | Real quadcopter. 1.16 bits/min; 3.1 rings per 4-min trial against 12 with a keyboard. 160 ms spectral windows and an update every 30 ms | 5 participants. Those without prior experience trained on average 5 h 20 min over about 3 months |
| Willsey et al., 2025 | Intracortical implant, finger movements in 4 degrees of freedom | 76 targets per minute and 2.60 bits/s in the finger task; then a virtual quadcopter through ring courses | One person with tetraplegia; virtual drone, not physical |
| Miehlbradt et al., 2018 | Torso movements | People with no experience mastered simulated and real drones, and outperformed joystick users | Body–machine interface, not a direct brain signal |
| Kaifosh et al., 2025 | Surface EMG in a wristband | 0.66 targets/s in navigation, 0.88 gestures/s and 20.9 words/min handwriting, with models that generalise across people | Muscle activity in computer tasks, not a drone. Their models are not a PRISMA implementation |
| Chen et al., 2015 | EEG with flickering visual stimuli (SSVEP) | Online spelling at up to 5.32 bits/s | The user must look at the stimuli: it is control by visual attention, not by thought |

These results cannot be added up or compared directly: each measures a different task, in its own unit. What they do show is that **the paradigm changes the result more than the sensor does**. The same EEG goes from 1.16 bits per minute in a motor imagery flight to several bits per second when spelling with visual stimuli.

Three further results set limits:

- **Not everyone can control the interface straight away.** Vidaurre and Blankertz estimated that sensorimotor rhythm control did not work for 15 to 30% of users. Their own work shows that adapting person and machine together recovers some of them.
- **Telling a command apart from "I am not commanding anything" is hard.** In asynchronous mode, a classic detector found about 40% of movements at a 1% false positive rate. The metric that matters is false activations per minute at rest.
- **Generalisation is hard.** MOABB compared algorithms on 12 open datasets with more than 250 subjects: many methods validated on one dataset do not generalise beyond it.

## What does "at the speed of thought" mean?

There is no single speed: nerve conduction, preparation, decision, movement and perception are different processes. As a reference, in adults aged 18 to 25 each person's mean visual reaction time had a median of 243 ms in a simple task and 382 ms when choosing among four responses. Those figures include deciding and moving, and they are not a universal constant.

For a drone to feel like part of the body, what matters is the **whole loop**:

```text
intent → signal (EEG · EMG · torso · implant)
  → enough evidence → decoder → proposal or abstention
  → echoAI gate → Intent ABI → echOS safety gate
  → radio → autopilot → first measurable drone movement
  → camera or sensor → display or vibration → the person's perception
```

Three ideas guide the campaign:

- **A short window does not make a fast interface.** LaFleur used 160 ms EEG windows, but making a reliable decision, avoiding false commands and closing the loop takes considerably longer. The response to a change has to be measured, not inferred from the window length.
- **The bottleneck is in the signal and the return path, not in computation.** As an arithmetic example, speeding up a classifier from 3 to 1 ms saves 2 ms; shortening evidence accumulation from 50 to 25 ms saves 25, provided false commands do not increase.
- **Agency is not body ownership.** In laboratory experiments with artificial hands, delays below about 300 ms favour feeling the hand as one's own, and growing delays reduce both the sense of agency and the sense of ownership. This is not a universal threshold for drones, but it explains why short loops matter.

**RxLabs' end-to-end latency is unknown today.** The first goal is to measure it stage by stage, with timestamps from the source sensor.

## What PRISMA has today and what it lacks

**Exists:**

- GDF reading verified against real BCI Competition IV 2a recordings.
- Causal filters, referencing, bad channel detection, ICA, time-frequency and ERD/ERS.
- The event-driven Rust engine (delta modulation → LIF → STDP), with live input over TCP, an LSL bridge and a synthetic generator.

**Missing, ordered by impact on latency and safety:**

1. **Source timestamps.** The TCP input timestamps each sample on arrival. It needs the sensor's timestamp, a sequence number, a record of losses and markers.
2. **Rest and abstention.** A "not commanding" class, an expiry for every proposal and traces up to both gates, measuring false activations per minute.
3. **Multimodal ingest.** EEG, EMG and inertial sensors, each at its own rate and synchronised in a documented way.
4. **Reference decoders.** For EEG, CSP/FBCSP with LDA and Riemannian geometry; for EMG, causal features with classification or regression; for intracortical data, ridge and Kalman. PRISMA's LIF/STDP network competes against them; its advantage is not assumed.
5. **Honest evaluation.** Separation by days and by people, training only on the past and real-time replay.

PRISMA's limits panel still says the same thing: *"It does NOT read thoughts or decode mental content."*

## Architecture and authority

PRISMA, echoAI and echOS remain separate lines. The campaign defines the seam between them:

```text
sensor → PRISMA · quality · decoding · abstention
  → candidate intent → echoAI gate · OK · MODIFY · BLOCK
  → echOS Intent ABI (v1, 72 B) → echOS safety gate
  → adapter → flight controller (PX4 or the Crazyflie firmware)
```

Design rules:

1. **The signal proposes; it never commands.** PRISMA's output is one more proposal, like those of echoAI's slow clock. The gate decides, and the [echOS Intent ABI](/en/docs/echos/arquitectura) has no fields for motors.
2. **The person chooses what; autonomy decides how.** "Up" is expressed as an APPROACH to a point half a metre above, with a speed limit and an expiry. Local autonomy stabilises the drone and avoids obstacles without waiting for the next human decision.
3. **No ABI changes to start with.** If measurements show that chaining goals is not enough for continuous control, a bounded velocity setpoint will be studied in a separate design: reference frame, maximum speed and acceleration, duration and expiry, no PWM and both gates.
4. **Explicit rest and HOLD as the default response**, knowing that HOLD is not enough if the drone loses its position. Loss of localisation, link or a sensor needs a validated contingency.
5. **No LLM in the loop.** A language model may explain results, but not decode or issue commands.
6. **Filters bound consequences; they do not read minds.** A wrong command that is still within limits can pass both gates. What can be defended is that the barriers bound certain consequences under verified assumptions, not that no decoding error can ever reach flight.
7. **Certificates are not inherited.** The [ECHO-3](/en/docs/echoai/ruta) greens do not validate EEG, EMG or torso control.

A correction channel based on error-related potentials can be studied later: the brain produces a characteristic response when it sees the machine make a mistake. That response arrives after the error, so it can undo a command but cannot serve as a barrier against a collision.

## The way back

An extension of the nervous system does not only send commands: it also feels. In a study with one person with tetraplegia, adding touch through intracortical stimulation halved the time of a robotic arm task, from a median of 20.9 s to 10.2 s. RxLabs does not propose implants. Its first return path will be visual and non-invasive haptic, with vibrations that distinguish three messages:

- **intent received**, confirmed locally at once;
- **intent accepted** by the gates;
- **movement observed** by the drone's sensors, with the age of the data visible.

A "done" vibration before the drone moves would lie about its state. That is why each experiment will measure performance, the sense of agency ("I caused it") and the sense of ownership ("it feels mine") separately.

## Test ladder

Each phase freezes its metrics, thresholds and stopping rules before it starts, and publishes its results, negative ones included. The campaign is independent of PRISMA's validation programme. The phase names are kept; from EEG-1 on, every phase compares modalities.

| Phase | What is done | What it must show | Needs |
|---|---|---|---|
| **EEG-0 · Contract** | Intent proposal format, per-stage timestamps, metrics, controls and stopping rules | A document frozen before looking at data | Nothing |
| **EEG-1 · Public data** | Intracortical: FALCON H1 (CC BY 4.0). EEG: PhysioNet EEGMMIDB and BCI Competition IV 2a, without redistributing it. EMG: the open dataset of Kaifosh et al., for non-commercial use. Classical baselines against PRISMA | Reproduce the baselines, with separation by days, before claiming anything about PRISMA | Public data |
| **EEG-2 · Causal replay** | Replay recordings in real time through PRISMA's input, with losses, jitter, stale packets and injected faults | Per-stage latency, false activations per minute where the data allow it, and the ability to cancel | Source timestamps and markers |
| **EEG-3 · Simulated loop** | Decoded intents → gates → PX4 SITL, with simulated feedback | No path that bypasses the gates, and complete traces for every command | All of the above; no hardware |
| **EEG-4 · People, non-invasive** | Torso/IMU and EMG compared with the same simulation, limits and feedback; EEG for choosing goals | Physical latency measured by stage, false activations, fatigue, agency and stability across days | Sensors, informed consent and ethics approval |
| **EEG-5 · Contained drone** | Crazyflie in an enclosed space through our own adapter (it runs the Bitcraze firmware and CRTP, not PX4), with a safety pilot. The X500 with PX4 will be a separate campaign | The same as EEG-4 with a real body, without inheriting simulation results | EEG-4 closed and hardware |

**Mandatory controls:**

- Shuffled labels: the result must fall to chance level.
- **EMG and EOG recorded alongside EEG**, to detect whether the decoder exploits muscles or eyes instead of the cortex.
- Separation by days and by people. Never windows from the same trial split between training and test.
- Per-person metrics and full distributions (P50, P95, P99 and worst cases), not only averages. Timeouts count as failures.

**Stopping rules:** data leakage, unknown timestamps behind a timing claim, insufficient licence, performance that disappears across days, or any path that bypasses the gates. If PRISMA adds nothing over the classical baselines, the decoder will be classical and we will say so.

## Hardware

None of this is in the laboratory yet.

- **EEG:** a montage with C3, Cz and C4, the usual motor imagery positions, is needed. A headset with electrodes only on the forehead and behind the ears, such as Muse, does not cover them.
- **EMG and torso:** surface sensors and inertial units. They are the first route with people.
- **BrainChip AKD1500:** a candidate neuromorphic coprocessor (Akida 1.0 architecture) for a compatible model, always with a CPU as the baseline. PRISMA using LIF/STDP does not make its network portable: it will have to be converted and compiled, and the latency and energy of the whole system measured. Vendor figures will not be published as our own results.
- **Implants:** public data only. Any work with implanted people would be done with an authorised clinical group; RxLabs does not propose implanting healthy people to fly drones.

## Ethics, data and law

- **Brain and muscle data:** GDPR and Spain's Charter of Digital Rights (article XXVI). Minimisation, pseudonymisation and no reuse to infer health or identity.
- **Medical devices:** any invasive or stimulation route falls under Regulation (EU) 2017/745 and requires a clinical partner and an ethics committee.
- **Artificial intelligence:** Regulation (EU) 2024/1689 applies according to purpose; doing research does not exempt us from everything.
- **Flight:** Regulation (EU) 2019/947 and Spanish Royal Decree 517/2024. In the open category, flying with FPV goggles requires a visual observer.
- **Dual use:** neural drone control interests the military sector. RxLabs is civilian: it accepts no weapons or targeting work, and reviews any export under Regulation (EU) 2021/821.

## What would count as success

Not "controlling a drone with the mind". Success would be publishing, with data and controls:

- which route (torso, EMG, EEG or a combination) allows reliable commands, and for what fraction of people;
- the measured latency of each stage, from the sensor to what the person perceives;
- how many false activations per minute each route produces at rest;
- whether PRISMA's event representation adds anything over the classical baselines;
- and that no command reaches the flight controller without going through both gates.

A well-measured negative result also answers the question.

## Sources

**Drone control and decoding**

- LaFleur K. et al. (2013). *Quadcopter control in three-dimensional space using a noninvasive motor imagery-based brain–computer interface.* J. Neural Eng. 10(4):046003. [doi:10.1088/1741-2560/10/4/046003](https://doi.org/10.1088/1741-2560/10/4/046003) · [full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC3839680/)
- Willsey M. S. et al. (2025). *A high-performance brain–computer interface for finger decoding and quadcopter game control in an individual with paralysis.* Nat. Med. [doi:10.1038/s41591-024-03341-8](https://doi.org/10.1038/s41591-024-03341-8)
- Miehlbradt J. et al. (2018). *Data-driven body–machine interface for the accurate control of drones.* PNAS. [doi:10.1073/pnas.1718648115](https://doi.org/10.1073/pnas.1718648115)
- Kaifosh P., Reardon T. R., CTRL-labs at Reality Labs (2025). *A generic non-invasive neuromotor interface for human-computer interaction.* Nature. [doi:10.1038/s41586-025-09255-w](https://doi.org/10.1038/s41586-025-09255-w)
- Chen X. et al. (2015). *High-speed spelling with a noninvasive brain–computer interface.* PNAS. [doi:10.1073/pnas.1508080112](https://doi.org/10.1073/pnas.1508080112)
- Aflalo T. et al. (2015). *Decoding motor imagery from the posterior parietal cortex of a tetraplegic human.* Science 348:906–910. [doi:10.1126/science.aaa5417](https://doi.org/10.1126/science.aaa5417)
- Nieto N. et al. (2022). *Thinking out loud, an open-access EEG-based BCI dataset for inner speech recognition.* Sci. Data 9:52. [doi:10.1038/s41597-022-01147-2](https://doi.org/10.1038/s41597-022-01147-2)
- Radwan Y. A. et al. (2025). *Stochasticity as a solution for overfitting — a new model and comparative study on non-invasive EEG prospects.* Front. Hum. Neurosci. 19:1484470. [doi:10.3389/fnhum.2025.1484470](https://doi.org/10.3389/fnhum.2025.1484470)
- Vidaurre C., Blankertz B. (2010). *Towards a cure for BCI illiteracy.* Brain Topogr. 23(2):194–198. [doi:10.1007/s10548-009-0121-6](https://doi.org/10.1007/s10548-009-0121-6)
- Bashashati A., Ward R. K., Birch G. E. (2007). *Towards development of a 3-state self-paced brain-computer interface.* Comput. Intell. Neurosci. [doi:10.1155/2007/84386](https://doi.org/10.1155/2007/84386)
- Jayaram V., Barachant A. (2018). *MOABB: trustworthy algorithm benchmarking for BCIs.* J. Neural Eng. 15(6):066011. [doi:10.1088/1741-2552/aadea0](https://doi.org/10.1088/1741-2552/aadea0)
- Chavarriaga R., Sobolewski A., Millán J. d. R. (2014). *Errare machinale est: the use of error-related potentials in brain-machine interfaces.* Front. Neurosci. 8:208. [doi:10.3389/fnins.2014.00208](https://doi.org/10.3389/fnins.2014.00208)

**Time, body and feedback**

- Deary I. J., Liewald D., Nissan J. (2011). *A free, easy-to-use, computer-based simple and four-choice reaction time programme: the Deary-Liewald reaction time task.* Behav. Res. Methods 43:258–268. [doi:10.3758/s13428-010-0024-1](https://doi.org/10.3758/s13428-010-0024-1)
- Shimada S., Fukuda K., Hiraki K. (2009). *Rubber hand illusion under delayed visual feedback.* PLoS ONE 4:e6185. [doi:10.1371/journal.pone.0006185](https://doi.org/10.1371/journal.pone.0006185)
- Kalckert A., Ehrsson H. H. (2012). *Moving a rubber hand that feels like your own: a dissociation of ownership and agency.* Front. Hum. Neurosci. 6:40. [doi:10.3389/fnhum.2012.00040](https://doi.org/10.3389/fnhum.2012.00040)
- Shibuya S., Unenaka S., Ohki Y. (2018). *The relationship between the virtual hand illusion and motor performance.* Front. Psychol. 9:2242. [doi:10.3389/fpsyg.2018.02242](https://doi.org/10.3389/fpsyg.2018.02242)
- Flesher S. N. et al. (2021). *A brain-computer interface that evokes tactile sensations improves robotic arm control.* Science. [doi:10.1126/science.abd0380](https://doi.org/10.1126/science.abd0380)

**Data, hardware and regulations**

- FALCON H1, DANDI 000954, CC BY 4.0. [dandiarchive.org](https://dandiarchive.org/dandiset/000954) · [FALCON benchmark](https://snel-repo.github.io/falcon/datasets.html)
- *EEG Motor Movement/Imagery Dataset* (Schalk et al., BCI2000), PhysioNet. [physionet.org](https://physionet.org/content/eegmmidb/1.0.0/)
- BCI Competition IV. [bbci.de](https://www.bbci.de/competition/iv/)
- *Generic neuromotor interface*, data and code of Kaifosh et al. [github.com/facebookresearch](https://github.com/facebookresearch/generic-neuromotor-interface)
- Akida 1.0, BrainChip documentation. [doc.brainchipinc.com](https://doc.brainchipinc.com/user_guide/hardware/1.0.html)
- Crazyflie firmware and CRTP, Bitcraze. [bitcraze.io](https://www.bitcraze.io/documentation/repository/crazyflie-firmware/master/functional-areas/crtp/crtp_platform/)
- Regulations (EU) [2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj), [2017/745](https://eur-lex.europa.eu/eli/reg/2017/745/oj), [2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), [2019/947](https://eur-lex.europa.eu/eli/reg_impl/2019/947/oj) and [2021/821](https://eur-lex.europa.eu/eli/reg/2021/821/oj); [Royal Decree 517/2024](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2024-11377); [EASA, FPV flying](https://www.easa.europa.eu/en/light/topics/drone-racing-and-flying-drone-goggles-first-person-view-fpv)
- Charter of Digital Rights, Government of Spain (2021). [espanadigital.gob.es](https://espanadigital.gob.es/lineas-de-actuacion/carta-de-derechos-digitales)

— R.N.
