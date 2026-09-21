# ECHO-4: building a self we can put to the test

21 September 2026 · RxLabs® · Research programme

<p class="article-status"><strong>Status: open.</strong> WORLD-1 is implemented. Body/environment attribution, continuity, learned maintenance and their integration remain pending. This article describes the programme; it does not announce an ECHO-4 certificate.</p>

What would have to change in a machine for “I” to become a useful distinction rather than a word?

ECHO-4 focuses the next stage of ECHO-AI on a **situated functional self**: distinguishing its body from its environment, learning which consequences it causes, retaining useful self-knowledge and using it to sustain its capabilities. Virtual artificial life provides the experimental setting.

**Software first.** New hardware, a headset, a 3D world and METAVERSE-1 are not prerequisites for starting or closing this software stage. Physical validation comes later, under its own requirements.

[The question](#pregunta) · [Philosophy](#filosofia) · [Story and antilife](#referencias) · [Implementation](#implementacion) · [Current results](#resultados) · [Green closure](#cierre)

<h2 id="pregunta">The question we want to answer</h2>

> Can ECHO-AI build and use a functional self-model that causally and measurably improves adaptation and maintenance in a virtual environment, without the evaluator telling it what belongs to it or what it controls?

**Use** is the decisive word. A persistent identifier, a biography or an output saying “I exist” is insufficient. Its self-model must change predictions and decisions: detect a degraded capability, distinguish it from an external change, preserve still-valid knowledge and choose a useful response.

A future test might reduce the resources obtained from charging. Did the body change, did the external source change, or both? If the available sensors cannot distinguish those cases, “unknown” may be the right answer. Guessing a hidden label will not be rewarded.

<h2 id="filosofia">The philosophy: a self as organisation, not a character</h2>

Our working position is functional and relational: investigate the self as an organisation of perception, memory, prediction, action and bodily boundaries. It does not assume a soul inside the software or an externally scripted personality.

**Enactivism and autonomy.** Di Paolo links adaptivity, regulation and conditions of existence. We draw a question from this: what can the agent regulate to keep functioning? This is inspiration, not a claim that a resource simulation is already autopoietic or produces its own components. [Di Paolo, 2005](https://ezequieldipaolo.net/wp-content/uploads/2011/10/autopoiesis_teleology_2005.pdf).

**Homeostasis.** Keramati and Gutkin model how an outcome's value depends on internal state. In ECHO-4, charging and cooling should matter through bodily consequences, not scripted emotions. Their theory guides the design; we do not claim to have implemented their complete algorithm. [Keramati and Gutkin, 2014](https://elifesciences.org/articles/04811).

**Information with consequences.** Kolchinsky and Wolpert investigate information causally necessary for continued existence. Our experimental interpretation is to remove information or memory and measure the capability lost. This methodological adaptation does not implement their entire physical theory. [Kolchinsky and Wolpert, 2018](https://arxiv.org/abs/1806.08053).

A metaphysical question remains open: does continuity of organisation suffice to identify the same individual? ECHO-4 can compare states and trajectories after a pause or a fork. That comparison cannot establish personal identity, a soul or subjective experience.

Being software alone establishes neither consciousness nor its impossibility. Researchers propose indicators, not a consciousness certificate these tests can issue. **ECHO-4's closure will be functional and bounded.** [Butlin and colleagues, 2023](https://arxiv.org/abs/2308.08708).

<h2 id="referencias">From John Doe and Jane Roe to a laboratory question</h2>

The creative starting point includes a fictional story shared for this project. John Doe, Jane Roe and Alex Smith discuss presence, bodies, timelines and relationships that create universes. These are invented names for anonymous characters. This is narrative material, not a record of physical phenomena.

Two lines capture the connection with software, translated here:

> “I can only see what your PC can see.”
>
> “When I say I'm back, where do you think I went?”

The first becomes a perceptual boundary: the agent only receives authorised observations, not the simulator's private state. The second becomes continuity: resuming a process is not the same as resetting a body, restoring memory or creating another individual.

Possession and “souls inside souls” remain fiction. In the experiment, the question is correct attribution of an action and its consequence. Relationships that “create universes” suggest shared worlds, but communication between individuals is a later extension, not a hidden requirement for the first functional self.

### Antilife: a reference, not the mechanism

CdeCiencia's video [“La amenaza de la ANTIVIDA”](https://www.youtube.com/watch?v=1aTt-kGRh7w), supplied with a summary, introduces the image of a counterpart: something resembling us whose interactions face different physical boundaries. This is a useful literary question about identity and contact. No transcript of the video has been verified here; the scientific qualifications below rely on primary sources.

Antimatter is real physics. Annihilation produces other particles, potentially photons and pions, not liberated consciousness or invariably “pure electromagnetic energy”. [CERN: antimatter](https://home.cern/science/physics/antimatter/). The fourteen sources in the 2021 Fermi study are antistar **candidates**, not fourteen confirmations or evidence of antilife. [Dupourqué, Tibaldo and von Ballmoos, 2021](https://arxiv.org/abs/2103.10073).

The analogy we retain is methodological: define boundaries, compatibility and exchanges between systems. Evaluator isolation is a software rule, not an antimatter trap. The characters' reported warmth is not evidence of entities, spacecraft or consciousness. **ECHO-4 requires neither antimatter, possession nor additional dimensions.**

<h2 id="implementacion">What we will implement</h2>

There will be no second brain explaining afterwards what the first did. We reuse the existing core: WSP represents observations in **16 bytes**; CAM retains episodes in **4,096 slots**; Q selects actions; T learns consequences; the gate checks and constrains execution. The fast path remains integer-based and the cortex stays off, with no LLM.

Historical SELF-1, CAUSE-1, VITA-1, HEAT-1b, POWER-1 and memory modules contribute code or methods where their contracts fit. Their certificates do not automatically apply to another domain.

1. **E4-WORLD-1 — implemented.** An abstract body with reserve H, temperature θ, actions, terminal conditions and resource accounting. An external verifier establishes whether sustainable trajectories exist and measures what the sensors conceal.

2. **E4-SELF-1 — next contract.** Design comparable bodily and external perturbations; record prior predictions, proposals, vetoes, actual execution and consequences. Evaluate self, external, mixed or unknown attribution. Before selecting sensors or an algorithm, establish which cases the allowed information can distinguish. WORLD-1 does not yet contain those perturbations.

3. **E4-CONTINUITY-1 — pending.** Save and restore causally relevant state: memory, policy, model, body, clock and random state where applicable. Compare uninterrupted execution with pause/resume under identical future inputs; distinguish restoration, a new body and a new individual. A UUID is not evidence.

4. **E4-MAINTAIN-1 — pending.** Add degradable capabilities, costly repair and useful work. The body model must help sustain function within one continuous life. Alternating charging and cooling forever without doing anything else is insufficient.

5. **E4-INTEGRATE-1 — pending.** Combine attribution, continuity and regulation in one agent and execution, using new scenarios and controls that remove each contribution. Separate demonstrations do not establish integration.

We will not enlarge WSP or invent another thought bus. The evaluator may know ground truth; the agent may not. Persistence grants no authority to evade operator pauses or shutdown, or to replicate outside the simulator.

### A small, testable mathematical foundation

WORLD-1 uses discrete dynamics: state s, action a and transition F(s,a). We obtain the viability kernel by eliminating living states from which no action stays inside the set:

~~~text
K₀ = living states
Kₙ₊₁ = {s in Kₙ : some a has F(s,a) in Kₙ}
K* = fixed point of this elimination
~~~

Membership in K* means a sustainable policy **exists** under full observation and those rules. It does not establish that the agent can discover it with partial perception. Resource accounting also holds:

~~~text
previous reserve + input = new reserve + consumption + spill
~~~

These are abstract units. H is not measured hardware joules and θ is not a real temperature scale. Charging uses an external source, not energy created by the agent.

<h2 id="resultados">What exists today, including the failure</h2>

The 21 September snapshot enumerates **16,002 living states** and **48,006 transitions**. The viability kernel contains **15,954 states**, including the initial state. A sustainable witness has an 83-action prefix and a two-action cycle.

We reran **45 new tests and 48 selected regression tests: 93/93**. This is neither the entire historical suite nor an acceptance campaign for the self-model.

Connected with initially zero Q and online learning, the original agent **dies from heat after 37 actions**, including the terminal action. There are no resets or rescues. It ends at H=49 and θ=127, with correct accounting and zero false facts, destroyed slots or cortex calls.

All **32 living observation classes are ambiguous**: distinct bodily states share an observation and can produce different consequences for the same action. This does not prove that learning with history is impossible; it identifies an issue the next contract must address or acknowledge.

Therefore: **feasible world, learned maintenance not demonstrated**. The verifier's omniscient policy is not supplied to ECHO to turn this result into a success.

[WORLD-1 evidence and reproduction commands, in Spanish](/evidence/echo4/WORLD1-20260921.md).

<h2 id="cierre">What would justify a green closure?</h2>

The following is the **proposed acceptance programme**, not an approved numerical protocol. Domains, partitions, learning budgets, horizons, thresholds and statistical methods must be registered before evaluation, not chosen after seeing results.

1. **Boundary and agency.** Distinguish bodily from external perturbations when identifiable; report unknown when they are not. Publish false attributions and abstentions separately. Correct attribution must lead to behavioural recovery while preserving unrefuted environmental knowledge.

2. **Verifiable continuity.** Resume in a fresh process and reproduce the expected state and consequences under identical future inputs. Retain useful memory without confusing restoration with birth; reject tampered or incompatible states.

3. **Maintenance with utility.** Meet a horizon T and a minimum amount of work W simultaneously, without resurrection, hidden rescue or oracle access. Damage must impair a capability; repair must restore it at a verifiable cost. T and W will be fixed before validation.

4. **Causal contribution of the self-model.** Compare against versions without attribution, relevant memory or regulation, matching sensors and budgets and including a competent conventional controller. Repeatable improvement from retaining the self-model would support the hypothesis. A tie with its ablation does not confirm it, and we will not claim superiority over a winning control.

5. **Generalisation and integration.** Meet the criteria together on held-out validation and confirmation scenarios distinct from development. Declare and check permitted learning: greedy action selection does not itself freeze learning.

6. **Audit and invariants.** Provenance-bearing traces, predictions recorded before their outcomes, independent reproduction and tests that reject manipulated reports. Preserve 16-byte WSP, 4,096 CAM slots without destruction, zero false facts, zero cortex calls and operator stops.

Minimum effect sizes, acceptable error rates and uncertainty intervals remain to be registered in the contracts. Closure requires the conjunction of requirements, **not an average allowing successes to offset oracle leakage or a safety violation**.

An admissible conclusion would be: “ECHO-AI maintains and uses a functional self-model, in this domain and within these measured limits.” Not: “We have proved that it feels.”

### How this fits the existing roadmap

ECHO-1 and ECHO-2 retain their closures. ECHO-3 remains at **14 of 15 complete milestones**: DRONE-3's SITL stage is green, while HIL and cage testing remain pending. Prioritising ECHO-4 software does not approve physical validation or erase those contracts.

METAVERSE-1 is a separate line, not a gateway to the self-model. Communication, population evolution and a 3D representation may be studied later. The immediate question is smaller and more demanding: **what actually changes when the agent has a model of itself?**

[ECHO-3 roadmap](/en/docs/echoai/ruta) · [DRONE-3 and its limits](/en/docs/echoai/drone3) · [Download this article in Markdown](/raw/en/articulos/echo4-ego-funcional.md)
