# Roadmap — ECHO-3

ECHO-1 and ECHO-2 are closed. ECHO-3 remains a **plan** until every phase has a
benchmark, controls, report and reproducible closure.

## Measurable thesis

ECHO-3 will be a local decision layer for robots that recomposes a mission when
its assumptions fail, manages evidence and resources, and makes each decision
auditable.

```text
sensors → WSP → evidence/CAM → T/PATTERN → search/Q → gate
        → goal or setpoint → PX4 → consequence → learning
```

PX4 retains stabilisation, motor control and failsafes. echoAI selects goals and
high-level actions. No LLM writes facts, memories, accepted setpoints or motors.

Planning, energy-aware return and sensor fusion are not claimed as exclusive.
The experiment asks whether their auditable combination improves recovery,
evidence handling and mission economy over equivalent controls.

## Phases

| Slice | Question it must close |
|---|---|
| SIM-3 | the same binaries run A/B/C without leaks or room-name branches |
| FLIGHT-1 | the simulated body flies with measured dynamics and disturbances |
| SENSOR-1 | camera, IMU and LiDAR expose time, noise, loss and source |
| GROUND-1 | physical observations produce WSP without oracle coordinates or another bus |
| PATTERN-1R | different views preserve object identity out of sample |
| FUSION-1 | independent evidence preserves disagreement and lowers the right confidence |
| DYNAMIC-1 | detects external motion and predicts short trajectories |
| **COMPOSE-1** | combines known capabilities for a blocked goal without a route recipe |
| CAUSE-1 | separates an action-caused transition from a paired external change |
| PX4-1 | submits bounded goals without bypassing PID or failsafes |
| POWER-1 | returns or aborts from predicted cost and margin as well as PX4 failsafes |
| SAFE-1 | contains frozen sensors, disconnections and wrong proposals |
| HOST-1 | updates a sign's value from consequences delivered by a source |
| TRANSFER-3 | learning in A improves B/C over scratch without map or world name |
| DRONE-3 | closes the mission in SITL, HIL and a cage with causal traceability |

## COMPOSE-1 — a goal behind a barrier

“The banana behind the wall” is translated to the body ECHO-3 will actually
have: a visible or remembered charging station that cannot be reached by the
direct route. The drone must seek an entrance, verify it and arrive with
reserve. Exhausting the budget yields `access_not_found` and a return; it does
not prove that access does not exist.

| Evidence | Valid response |
|---|---|
| it saw the station before occlusion | retain an aged belief and seek a viewpoint from which to verify it |
| it sees the station through glass | separate object visibility from traversable volume and seek another access |
| a source says it is behind the barrier | retain an attributed hypothesis and seek evidence |

Seeing an object through glass and detecting a wall are compatible. A conflict
exists only when comparable sources assert opposite values about the same
volume and time. Missing LiDAR return does not imply free space.

```text
observable goal
→ evidence, source, age and unknowns
→ physically available alternatives
→ predicted consequence, uncertainty and cost
→ collision, evidence and reserve gate
→ one next step
→ real consequence and replanning
```

The initial search compares budgets of 8 and 32 candidates and up to four
high-level capabilities. These are measured limits, not completeness claims. Q
may rank alternatives and T/PATTERN support predictions. Rollouts are
hypotheses and never enter CAM as facts.

Reports distinguish composition with known affordances from discovering one by
its consequences. Sticks, boxes and tools belong to a body with physical
manipulation; triggering them on contact would not demonstrate manipulation.

## Worlds and evaluation

- **A:** training, selection and development.
- **B:** frozen validation; once it drives changes, it is no longer confirmation.
- **C:** sealed examination, opened once at the end.

SDF files and manifests construct physical truth, but the agent receives no
map, waypoint, world name, hash, seed or revealing identifier. Learned rules
and parameters are frozen in B/C while perception, localisation and tracking
remain active.

COMPOSE-1 is compared against reactive Q, search without evidence provenance or
expiry, and a conventional planner with the same sensors and budget. A planner
with full simulator truth is only an oracle upper bound. The auditor must catch
a mutant that reads a route recipe or world identifier.

Common constraints include zero false facts, imagined CAM writes, oracle leaks,
gate bypasses, failsafe bypasses and inadmissible setpoints accepted within the
published domain. Success, recomposition, collisions, energy, interventions,
P99 latency, CPU and memory are compared afterwards.

## Inheritance, abort and language

GEN-1f inherits only `evidence_budget=8`; the child starts with empty CAM, Q, T
and PATTERN. It inherits no map, object, social trust or “blue is bad”. Aborting
a mission preserves the body and is not death.

HOST-1 follows COMPOSE-1, once there is something physical to request. The
integer value of `source + sign + context` changes only through observed
consequences. Free-form commands and a richer public demonstration follow the
minimum closure.

## Boundary after ECHO-3

ECHO-3 contains three simple geometric worlds, minimum sensors, PX4,
composition, frozen transfer, HIL and the cage. Later work increases visual and
aerodynamic fidelity, complex wind, sensors and vehicles, free-form commands
and transfer between morphologies.

AKD1500 M.2 remains conditional on possessing the card. It may accelerate
perception; Q, T, CAM, VERIFY and the gate remain on CPU.

— R.N.
