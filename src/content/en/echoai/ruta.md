# ECHO-3 — roadmap

ECHO-1 and ECHO-2 are closed. ECHO-3 has crossed its midpoint: **8 of 15 software phases** have a test bank, controls, report and reproducible certificate.

Its thesis is specific: a local decision layer for a robot that keeps evidence with source and age, recomposes a next step when an assumption fails and leaves an auditable decision trace.

```text
sensor → WSP → CAM/evidence → T/PATTERN → search/Q → gate → PX4 → consequence
```

WSP remains the only bus. CAM records facts; T and Pattern predict; Q orders alternatives; the gate accepts, modifies or blocks. PX4 stabilises, executes the setpoint and keeps its failsafes. No LLM writes facts, memories, accepted setpoints or motors.

## Closed

- [x] **SIM-3** — A, B and C come from declarative manifests; the agent receives no map, seed, room id or solution.
- [x] **FLIGHT-1S v6** — the X500 in SITL takes off, holds and recovers stability after a measured disturbance.
- [x] **SENSOR-1S v3** — camera, LiDAR and IMU publish time, noise, latency, loss and provenance.
- [x] **GROUND-1 v2** — an adapter brings these observations into WSP and memory without oracle coordinates or a second bus.
- [x] **DYNAMIC-1 v2** — separates external change from a stable scene and keeps short predictions.
- [x] **PATTERN-1R v4** — retains object identity across held-out views.
- [x] **FUSION-1** — keeps independent evidence on disagreement, lowers certainty and does not complete the fact.
- [x] **COMPOSE-1 v4** — composes known accesses for a blocked goal and verifies each step before continuing.

COMPOSE-1 closed 6,144 functional B/C missions. In the physical branch there are six reachable goals: composition closed 6/6 and the one-action control 0/6; the bank also includes 32 PX4 SITL flights. A conventional planner tied the physical distance in that scenario, so it remains a control rather than a claimed advantage.

## Next block

- [ ] **CAUSE-1** — pair scenes to distinguish “it changed because I acted” from “it changed outside me”.
- [ ] **PX4-1** — deliver bounded goals to PX4 without touching PID, attitude control or failsafes.
- [ ] **POWER-1** — choose return or abort from predicted cost, reserve and uncertainty.
- [ ] **SAFE-1** — sustain frozen sensors, disconnection and wrong proposals without accepting an inadmissible step.
- [ ] **HOST-1** — learn a sign’s value from observed source, context and signal consequences.
- [ ] **TRANSFER-3** — freeze what was learned in A and measure improvement in B/C over scratch, without a map or room name.
- [ ] **DRONE-3** — close the same mission through SITL, HIL and a cage with causal traceability.

## After closure

ECHO-3 prepares **METAVERSE-1**: three richer 3D maps, Blender geometry, new routes, fixed and moving obstacles, more voxels and headings, IMU, motors, PID/PX4, aerodynamics, wind and user orders such as landing or going to a coordinate. The same contract will tell a visual demo from a behaviour that passed a test bank.

AKD1500 M.2 enters when the card is present in the lab. It will be a perception coprocessor compared with CPU on the same task. WSP, CAM, VERIFY, T, Q and gate remain on CPU.
