# ECHO-3 has passed the halfway point

> 8 of 15 software phases closed · 14 September 2026

ECHO-3 is no longer a list of imagined parts. It is a decision bank for a simulated body: it receives signals with source and time, keeps what it has observed, tests a next step, checks what happened and leaves a trace that can be recalculated.

```text
sensor → WSP → memory/evidence → prediction and search → gate → PX4 → consequence
```

No language model drives motors. The 16-byte WSP package carries the operative fact; CAM keeps episodes; T predicts; Q orders alternatives; and the gate decides whether the next step may leave. PX4 still stabilises the vehicle and applies its protections.

## What runs now

| Phase | What its test bank demonstrates |
|---|---|
| SIM-3 | Three A/B/C rooms run from declarative manifests without giving the agent their map, seed or answer. |
| FLIGHT-1S | The simulated X500 takes off, holds position and recovers stability after measured disturbances. |
| SENSOR-1S | Camera, LiDAR and IMU provide observations with time, noise, latency, loss and provenance. |
| GROUND-1 | Those observations enter the one WSP and the agent memory, without a hidden oracle coordinate. |
| DYNAMIC-1 | The agent separates a changing object from a still scene and keeps a short prediction. |
| PATTERN-1R | Identity does not depend on an exact view: the same item can reappear from another position. |
| FUSION-1 | Two disagreeing sensors remain two pieces of evidence. The agent lowers certainty and does not invent an opening. |
| COMPOSE-1 | With a blocked goal, it composes known alternatives, verifies every step and plans again. |

The last test is easy to picture. A charging station is visible but the direct route is closed. The agent is not told “turn left”. It retrieves where it saw the station, compares available accesses, estimates the cost of the next move and executes only a move that passes the gate. If an access does not appear within budget, it ends with `access_not_found` and returns.

COMPOSE-1 closed with 6,144 functional B/C missions. In its simulated physical part, six reachable goals closed 6/6 with composition and 0/6 without a horizon; it also includes 32 new PX4 SITL flights. A conventional planner tied the physical distance in that scenario. It is published that way because the goal is to identify exactly what each part of the contract contributes.

## How it is programmed and checked

Every phase begins with a small question, one metric and one control. Room A is for building. B validates frozen parameters. C stays sealed until the exam. The manifest creates walls, sensors and conditions; that same manifest is never handed to the agent as memory.

Controls then remove one cause at a time: a reactive policy, a one-action horizon, a conventional planner and mutants that try to leak the map or bypass verification. The report keeps seeds, hashes, traces and a red result when it appears. A green result is not obtained by moving the goalposts after a run.

## The second half

CAUSE-1 is next: paired scenes will let the agent separate “this changed because I acted” from “this changed outside me”. Then come bounded PX4 targets, predicted energy, sensor failures, signs with an operator, A→B/C transfer and the drone body closure in SITL, HIL and a cage.

After that chain closes, the next step is a richer 3D world: Blender geometry, new routes, moving objects, IMU, motors, PID, aerodynamics and wind. The current work is its contract: the way to check that a good-looking scene says something real.
