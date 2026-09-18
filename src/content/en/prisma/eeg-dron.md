# Open campaign: can PRISMA guide a drone with EEG?

**Status: 18 September 2026 · open campaign · no results of our own yet.** The laboratory has no EEG headset and no physical drone. This document sets out the question, what is already known, what is not, and how we will measure it.

> The starting idea: record EEG with PRISMA, translate it into a pattern that echoAI and echOS understand, and have the drone act on it. For example, think about going up and the drone climbs. Or raise an arm.

## Honest summary

- **A drone has been flown with non-invasive EEG.** But not by reading the thought "up": the person learns to modulate their sensorimotor rhythms by imagining movements, and each pattern is mapped to a command. In the reference study, "up" meant imagining both hands at once.
- **It is slow.** In that study, real flight carried 1.16 bits per minute, slightly more than one perfect yes/no decision per minute. Pilots flew through 3.1 rings per four-minute trial; with a keyboard, 12.0.
- **It does not work equally for everyone.** An estimated 15 to 30% of users cannot control this kind of interface.
- **"Thinking up" cannot be reliably decoded today.** On an open dataset of four inner-speech words (*up, down, left, right*), a 2025 study reaches 46.6% per subject, against 25% chance.
- **PRISMA's microsecond latency is not the interface's latency.** A motor imagery decision needs EEG windows of one or two seconds. Physiology sets the pace, not the engine.

So the campaign does not try to pilot a drone with the mind. It tries something narrower and testable: **PRISMA proposing a few discrete, slow and reliable intents, in a way where a decoder error can never become a flight error.**

## Three different things that often get mixed up

| What the person does | What EEG measures | Useful for a drone? |
|---|---|---|
| **Thinks "up"** (mental content, inner speech) | No specific, stable pattern on the scalp | Not today. On *Thinking out loud* (10 participants, 136 channels), a 2025 study gets 46.6% per subject and 32% across subjects with four words; chance is 25%. Reviews note that most studies are offline and synchronous. |
| **Imagines moving hands or feet** (motor imagery) | Desynchronisation of mu and beta rhythms (8–30 Hz) over the sensorimotor cortex: C3, Cz, C4 | Yes, with training and few classes. This is the demonstrated route. The mapping to commands is arbitrary: "both hands = up". |
| **Actually raises an arm** (real movement) | A readiness potential about 500 ms before the movement, stronger desynchronisation and muscle activity that contaminates the signal | Technically yes, but if the arm moves, an inertial sensor or EMG measures it sooner, better and cheaper. EEG only makes sense if the person cannot move, or as a comparison. |

There is a fourth route, evoked paradigms (SSVEP, P300): the person looks at flickering stimuli and EEG detects which one they attend to. They reach high accuracy — according to UTS, a system developed with the Australian Army controlled a quadruped robot with up to 94% — but they depend on looking at a screen or augmented reality glasses. That is control by visual attention, not by thought.

## What has already been shown

| Work | Paradigm | Result | Cost or limit |
|---|---|---|---|
| LaFleur et al., 2013 | Motor imagery, 64 channels. Right hand → right; left → left; both → up; imagining nothing → down. Automatic forward motion at 0.69 m/s | 5 subjects; 79.2% of valid targets as a group, up to 90.5% individually | 1.16 bits/min; 3.1 rings per 4-min trial against 12.0 with a keyboard. Naive subjects trained on average 5 h 20 min in virtual environments over about 3 months before flying |
| Duan et al., 2019 | Hybrid: motor imagery to turn, LED SSVEP to climb and descend, blinks to switch modes | Calibration: SSVEP 83.44%, motor imagery 80.45%, blinks 99.07%. Complex flight task: 86.5% | 1.69 bits/min against 3.90 with a remote control. 1.5 s windows and one command per second; mental fatigue |
| BCI Competition IV, dataset 2a | 4 motor imagery classes, 9 subjects, 22 channels, 250 Hz | Winner (FBCSP): kappa 0.57, where chance is 0 | Offline benchmark, no flight |
| Faisal et al., 2023 (UTS) | SSVEP with dry graphene electrodes and augmented reality glasses | Up to 94% controlling a quadruped robot, according to UTS | Requires looking at flickering stimuli |

Three further results set the limits:

- **Users who cannot control it.** Vidaurre and Blankertz estimate that control does not work for 15 to 30% of users. Their own work shows that adapting user and machine together can recover some of them.
- **Knowing when the person wants to command.** In asynchronous mode the system must tell a command apart from "I am not commanding anything". A classic detector of this kind found about 40% of movements at a 1% false positive rate. If that 1% is measured per decision and the system decides several times per second, it becomes several false alarms per minute.
- **Generalisation.** MOABB compared algorithms on 12 open datasets with more than 250 subjects: many methods validated on one dataset do not generalise beyond it.

## What PRISMA has for this today

**Exists:**

- GDF reading verified against real BCI Competition IV 2a recordings: 288 epochs per session, 72 per class.
- Causal filters, referencing, bad channel detection, ICA, time-frequency and ERD/ERS, the basic measure of motor imagery.
- The event-driven Rust engine (delta modulation → LIF → STDP), with live input over TCP, an LSL bridge and a synthetic generator.

**Does not exist:**

- **Any BCI decoder.** No CSP/FBCSP, no Riemannian geometry, no LDA, no MOABB-style evaluation.
- **Source clock on live input.** The current TCP protocol timestamps each sample on arrival: it cannot tell delay, loss or silence apart, and it carries no markers.
- **Hardware.** The laboratory has no EEG headset and no physical drone.

The engine keeps a line in its limits panel that this campaign does not change: *"It does NOT read thoughts or decode mental content."*

## Proposed architecture: a contract, not a merger

PRISMA, echoAI and echOS remain separate lines. The campaign defines the seam between them:

```text
EEG (public dataset replayed as if live)
  → PRISMA · QC · causal filter · decoder · per-class probability
  → accumulated evidence · threshold · dwell time · "rest" class
  → intent proposal: class, confidence, causal window, expiry
  → echoAI gate · OK · MODIFY · BLOCK
  → echOS Intent ABI · HOLD · APPROACH · AVOID · RETURN_HOME · LAND · ABORT
  → echOS safety gate → PX4 (stabilisation and failsafes)
```

Design rules:

1. **EEG proposes; it never commands.** PRISMA's output is one more proposal, like those of echoAI's slow clock. The gate decides, and the [echOS Intent ABI](/en/docs/echos/arquitectura) has no fields for motors.
2. **HOLD by default.** Without enough evidence, the drone holds. The "rest" class is mandatory.
3. **Few, high-level commands.** "Up" is expressed as an APPROACH to a point half a metre above, with a speed limit and an expiry. The person chooses *what* to do; autonomy decides *how* to fly.
4. **Shared autonomy.** While a decision is on its way, the drone keeps covering distance: at LaFleur's 0.69 m/s and a 1.5 s window like Duan's, slightly more than a metre. Avoiding obstacles and respecting the geofence belongs to echoAI, echOS and PX4, not to EEG.
5. **No LLM in the loop.** As in echoAI and PRISMA, a language model may explain results, but not decode or issue commands.
6. **Certificates are not inherited.** The [ECHO-3](/en/docs/echoai/ruta) greens do not validate EEG control, and PRISMA's microsecond latency is not the interface's latency.

A veto based on error-related potentials can be studied later: the brain produces a characteristic response when it sees the machine make a mistake, and more than a decade of work shows it can be detected in a single trial. It would serve to undo a misdecoded command, not to issue commands.

## Phased plan

Each phase freezes its metrics, thresholds and stopping rules before it starts, and publishes its results, negative ones included.

| Phase | What is done | What it must show | Needs |
|---|---|---|---|
| **EEG-0 · Contract** | Intent proposal format, metrics, controls and stopping rules | A document frozen before looking at any data | Nothing |
| **EEG-1 · Offline** | Decoding on BCI IV 2a (4 classes, 9 subjects) and PhysioNet EEGMMIDB (109 subjects, real and imagined movement; up and down targets with both fists or both feet). Baselines: CSP+LDA, FBCSP and Riemann; PRISMA as the experimental arm | Reproduce the published baselines before claiming anything about PRISMA, and measure whether event features add anything | Public data |
| **EEG-2 · Pseudo-online** | Replay continuous recordings through PRISMA's live input, causally | Decision latency, false activations per minute at rest and time to the correct command | Source clock and markers in the protocol |
| **EEG-3 · Simulated loop** | Intents decoded from replay enter the echoAI gate, echOS and PX4 SITL | Tasks completed against a keyboard, commands blocked or corrected by the gate and **zero unsafe commands reaching PX4** | All of the above; no hardware |
| **EEG-4 · Real person** | Calibration and online control, still in simulation | Per-person performance, including those who cannot control it | Headset with sensorimotor coverage, informed consent and ethics approval |
| **EEG-5 · Caged drone** | Physical flight with a safety pilot and a kill switch | The same as EEG-3, with a real body | DRONE-3 closed and hardware; no date |

**Mandatory controls from EEG-1:**

- Shuffled labels: the result must fall to chance.
- **Artefact control:** a classifier that only sees frontal and temporal channels, where eyes and muscles dominate. If it performs almost as well as the one using C3, Cz and C4, the decoder is reading artefacts, not the motor cortex.
- Cross-session and cross-subject validation. Never windows from the same trial split between training and test.
- Per-person metrics, not only averages: kappa, accuracy, Wolpaw ITR and how many subjects exceed the significant chance threshold.

**Stopping rules:**

- If the published baselines cannot be reproduced, the campaign stops and the pipeline is fixed.
- If PRISMA features add nothing over CSP or Riemann with the same information, the decoder will be classical and we will say so. PRISMA's value would then lie in the infrastructure: quality control, real time and traceability.
- If false activations at rest do not drop below the frozen threshold, there is no closed loop.

## Hardware for the phases with people

A consumer headset with four electrodes on the forehead and behind the ears (such as Muse: TP9, AF7, AF8 and TP10) does not cover the sensorimotor cortex and is not suitable for motor imagery. A montage with C3, Cz, C4 and their neighbours is needed. Open 8- to 16-channel boards based on the ADS1299, such as OpenBCI Cyton with Daisy, are a reasonable starting point, preferably with gel electrodes. The choice will be made in EEG-4, not before.

## Ethics and data

EEG is data about brain processes. Spain's Charter of Digital Rights (2021, article XXVI) calls for guaranteeing its confidentiality and security, each person's control over their identity and their self-determination. In this campaign:

- Phases 0 to 3 use only public datasets, under their licences.
- Any recording of our own will require informed consent, ethics committee approval and data minimisation.
- PRISMA is not a medical device and this campaign has no clinical purpose.
- Any physical flight will take place in a cage, with a safety pilot and in line with regulations.

## What would count as success

Not "controlling a drone with the mind". Success would be publishing, with data and controls:

- what fraction of people can give two or three reliable commands;
- how long it takes them and with how many false activations per minute;
- whether PRISMA's event representation adds anything or not;
- and that, in simulation, no misdecoded command reaches PX4 without going through the gate.

A well-measured negative result also answers the question.

## Sources

- LaFleur K. et al. (2013). *Quadcopter control in three-dimensional space using a noninvasive motor imagery-based brain–computer interface.* J. Neural Eng. 10(4):046003. [doi:10.1088/1741-2560/10/4/046003](https://doi.org/10.1088/1741-2560/10/4/046003) · [full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC3839680/)
- Duan X. et al. (2019). *Quadcopter flight control using a non-invasive multi-modal brain computer interface.* Front. Neurorobot. 13:23. [doi:10.3389/fnbot.2019.00023](https://doi.org/10.3389/fnbot.2019.00023)
- BCI Competition IV, dataset 2a results. [bbci.de](https://www.bbci.de/competition/iv/results/)
- Faisal S. N. et al. (2023). *Noninvasive sensors for brain–machine interfaces based on micropatterned epitaxial graphene.* ACS Appl. Nano Mater. 6(7):5440–5447. [doi:10.1021/acsanm.2c05546](https://doi.org/10.1021/acsanm.2c05546) · [UTS note](https://www.uts.edu.au/news/2023/08/advancing-biosensor-tech-and-brain-computer-interfaces)
- Vidaurre C., Blankertz B. (2010). *Towards a cure for BCI illiteracy.* Brain Topogr. 23(2):194–198. [doi:10.1007/s10548-009-0121-6](https://doi.org/10.1007/s10548-009-0121-6)
- Bashashati A., Ward R. K., Birch G. E. (2007). *Towards development of a 3-state self-paced brain-computer interface.* Comput. Intell. Neurosci. [doi:10.1155/2007/84386](https://doi.org/10.1155/2007/84386)
- Jayaram V., Barachant A. (2018). *MOABB: trustworthy algorithm benchmarking for BCIs.* J. Neural Eng. 15(6):066011. [doi:10.1088/1741-2552/aadea0](https://doi.org/10.1088/1741-2552/aadea0)
- Lew E. et al. (2012). *Detection of self-paced reaching movement intention from EEG signals.* Front. Neuroeng. 5:13. [doi:10.3389/fneng.2012.00013](https://doi.org/10.3389/fneng.2012.00013)
- Nieto N. et al. (2022). *Thinking out loud, an open-access EEG-based BCI dataset for inner speech recognition.* Sci. Data 9:52. [doi:10.1038/s41597-022-01147-2](https://doi.org/10.1038/s41597-022-01147-2)
- Radwan Y. A. et al. (2025). *Stochasticity as a solution for overfitting — a new model and comparative study on non-invasive EEG prospects.* Front. Hum. Neurosci. 19:1484470. [doi:10.3389/fnhum.2025.1484470](https://doi.org/10.3389/fnhum.2025.1484470)
- Lopez-Bernal D. et al. (2022). *A state-of-the-art review of EEG-based imagined speech decoding.* Front. Hum. Neurosci. 16:867281. [doi:10.3389/fnhum.2022.867281](https://doi.org/10.3389/fnhum.2022.867281)
- Chavarriaga R., Sobolewski A., Millán J. d. R. (2014). *Errare machinale est: the use of error-related potentials in brain-machine interfaces.* Front. Neurosci. 8:208. [doi:10.3389/fnins.2014.00208](https://doi.org/10.3389/fnins.2014.00208)
- *EEG Motor Movement/Imagery Dataset* (Schalk et al., BCI2000), PhysioNet. [physionet.org](https://physionet.org/content/eegmmidb/1.0.0/)
- Charter of Digital Rights, Government of Spain (2021). [espanadigital.gob.es](https://espanadigital.gob.es/lineas-de-actuacion/carta-de-derechos-digitales)

— R.N.
