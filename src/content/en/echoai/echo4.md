# ECHO-4 — official roadmap

21 September 2026 · Version 1 · Development started

**Objective:** develop functional representations of self, other and shared history, and learn when interaction improves outcomes for both agents.

The hypothesis is that reciprocity and memory of encounters can contribute to each agent's adaptation. We will measure individual outcomes, joint outcomes and coordination costs separately, including situations where independent action is preferable.

This document establishes the expanded programme's official order and supersedes the preliminary sequence in the first ECHO-4 article. Each pending phase still needs a contract specifying sensors, memory, learning, controls and thresholds before evaluation.

## Starting point

NEXUS-0 supplies WSP, CAM, Q, T and the gate. ECHO-1 and ECHO-2 retain their closures. ECHO-3 has 14/15 complete milestones within its software scope; DRONE-3 has closed SITL, with HIL and cage testing pending.

**E4-WORLD-1 is implemented.** Its report enumerates 16,002 living states, 48,006 transitions and a viability kernel of 15,954 states. It documents 45 new and 48 selected regression tests. The initial agent dies from heat after 37 actions; learned maintenance remains pending. All 32 living observation classes exhibit dynamic ambiguity. [Evidence and reproduction](/evidence/echo4/WORLD1-20260921.md).

Development continues with **E4-SENSATION-1**. Publishing this roadmap does not implement its pending modules.

## Technical order and acceptance requirements

1. **E4-WORLD-1 · Implemented.** Virtual body, resources, temperature, actions and terminal conditions. The verifier establishes sustainable trajectories under full observation. Its witness policy stays outside the agent.

2. **E4-SENSATION-1 · Next phase; contract and implementation pending.** Compare current observation against histories of 2 and 4 steps including executed actions. Estimate trends, outcomes and uncertainty using bounded memory and integer arithmetic. Measure resolved ambiguity, predictive improvement on new trajectories and resource cost. Unexpected outcomes do not identify their cause. History length is experimental.

3. **E4-BOUNDARY-1 · Pending.** Estimate causal influence over variables and capabilities through comparable interventions, vetoed actions, delays and perturbations. Distinguish own effects from coincidences and retain unknown as an outcome. Controlling a door does not establish bodily membership; predicting a clock does not establish control. SELF investigates bodily membership.

4. **E4-SELF-1 · Pending.** Combine bodily capabilities, prediction and evidence to distinguish own, external, mixed or unknown changes. Attribution must improve behavioural recovery while preserving unrefuted environmental knowledge. Historical SELF-1 contributes methods; this domain requires new evidence.

5. **E4-CONTINUITY-1 · Pending.** Preserve causal state, useful memory, event order and duration. Compare continuous execution against pause/resume in a fresh process with identical future inputs. Distinguish restoration, body changes and new individuals; reject incompatible states.

6. **E4-MAINTAIN-1 · Pending.** Introduce functional damage, costly repair and useful work. Meet an activity horizon and minimum work simultaneously, with resource accounting and no hidden rescues. Compare against removal of the self-model to measure its contribution.

7. **E4-OTHER-1 · Pending.** Two instances with separate bodies, memories and observations. Learn expectations about the counterpart from accessible behaviour. Predict in new situations and adjust decisions to information differences without reading the other's private memory.

8. **E4-INTERACTION-1 · Pending.** Actions and signals with consequences for both agents. Learn when coordination helps and demonstrate that blocking or replacing signals changes relevant decisions. Compare reciprocal interaction with recordings and matched controls; report each agent's benefit, joint results and costs.

9. **E4-RELATION-1 · Pending.** Encounter memory and expectations specific to a relationship. Use shared history in new encounters, revise reliability by context and adapt to behavioural changes. Remove that memory to measure its contribution beyond identifiers or fixed rules.

10. **E4-ROLES-1 · Pending.** Differences in information, resources and capabilities, with delegation and changing coordination. Roles must follow relevant competence as conditions change. Human hierarchy inspires questions; we assume neither a universal explanation of it nor permanent ranks.

11. **E4-INTEGRATE-1 · Pending; ECHO-4 software closure.** Combine capabilities in continuous executions and held-out validation and confirmation scenarios. Meet joint requirements and demonstrate contributions of self-model, other-model and shared history through ablations.

12. **Physical validation · After software.** Transfer relevant capabilities to actual sensors and bodies, resuming ECHO-3's physical, HIL and cage contracts. Virtual results do not grant physical approval; resources and energy require measurement in that domain.

13. **METAVERSE-1 · Last phase.** Represent agents, relationships and trajectories in an observable, interactive 3D environment after the software programme and planned physical validations. The renderer must faithfully reflect recorded decisions. Its visualisation contract remains separate from cognitive closure.

## First deliverable: the SENSATION contract

Start with a temporal audit comparing current observations with 2- and 4-step histories on declared trajectories. Count remaining cases requiring incompatible decisions, prediction errors and abstentions. Compare against the existing predictor under identical data access.

Exact reserve and temperature registers exist to update physiology. The contract must specify what the predictor receives: direct access would be an explicitly declared sensor expansion, rather than an improvement obtained solely from remembering observations.

A four-state summary—compatible, small deviation, large deviation, insufficient evidence—may help inspection. Keep prediction error and uncertainty separate. An integer linear predictor is a candidate to evaluate, not an algorithm already selected or implemented.

## Architecture and invariants

WSP retains **16 bytes and its frozen layout**; it has no spare 4–5 bytes to reassign. History and estimates require a fixed, declared budget within the existing architecture, without a second cognitive bus.

CAM retains episodes in 4,096 slots without destruction. Q retains policy and T the transition model. Learned models remain estimates; confidence does not convert predictions into facts. The fast path uses integers, the cortex stays off and these benches use no LLM.

Individuals keep separate state and authorised observations. Public interactions enter the existing representation; the protocol grants no access to private labels, seeds, evaluator solutions or the counterpart's memory. Operator stops retain authority.

## What green closure means

Before validation, each contract will fix domain, held-out data, learning and memory budgets, horizon, acceptable errors, minimum improvement and uncertainty treatment. Final numerical thresholds for pending phases are not yet approved.

Publish negative results, competent conventional controls, ablations, provenance-bearing traces and fresh-process reproduction. Removing memory, self-model, other-model or reciprocity must permit assessment of its contribution. Greedy does not mean frozen learning.

Software closure requires joint criteria, zero false facts, zero destroyed slots, zero cortex calls and no oracle access. Average success cannot offset a broken invariant.

Success would support bounded capacities for self-representation, another's perspective, continuity and learned cooperation. Claiming interaction improves self-representation requires that specific effect against controls. Subjective experience and a general explanation of consciousness remain additional questions.

## Why investigate?

Positive results could separate what behaviour owes to the body, memory and learning with another agent. Intervening and reproducing histories is the laboratory's value. Negative results can also locate missing information or capabilities.

Other-agent modelling has precedents: [Machine Theory of Mind](https://arxiv.org/abs/1802.07740). Signal evaluation must test effects: [On the Pitfalls of Measuring Emergent Communication](https://arxiv.org/abs/1903.05168). Our research target is integration under ECHO-AI's constraints; specific novelty must be assessed against existing work.

[Development announcement](/en/articulos/echo4-inicio-roadmap-oficial) · [Philosophy and inspiration](/en/articulos/echo4-ego-funcional) · [ECHO-3 roadmap](/en/docs/echoai/ruta) · [Markdown](/raw/en/echoai/echo4.md)
