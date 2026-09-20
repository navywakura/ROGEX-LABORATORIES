# ECHO-3 — roadmap

State: 20 September 2026. **14/15 software certificates; TRANSFER-3 green; DRONE-3 with its SITL leg closed and HIL and cage pending.**

ECHO-3 has **14 of 15 milestones with green certificates within their software scope**, and the fifteenth, DRONE-3, has closed only its simulation leg. ECHO-1 and ECHO-2 are closed; the robotics programme remains open. Adding certificates does not amount to a mission on a physical robot: there is no hardware in the laboratory.

```text
sensor → WSP → CAM/evidence → T/PATTERN → search/Q → gate → PX4 → consequence
```

WSP retains 16 bytes and remains the only cognitive bus. CAM records observed episodes; T/PATTERN support predictions; Q prioritises actions; the gate accepts, modifies or blocks. PX4 retains stabilisation and failsafes. The cortex is off in these benches; an LLM neither writes facts nor commands motors.

## What each green demonstrates

| Phase and version | Result and limit |
|---|---|
| [SIM-3](/evidence/echo3/SIM3-RESULTS.md) | Three declarative worlds, with evaluator and agent separated. No map, seed or solution is delivered to the consumer. |
| [FLIGHT-1S v6](/evidence/echo3/FLIGHT1S-V6-RESULTS.md) | X500 flight in PX4 SITL under measured disturbances. PX4 provides stabilisation; this does not demonstrate echoAI flight decisions. |
| [SENSOR-1S v3](/evidence/echo3/SENSOR1S-V3-RESULTS.md) | Simulated camera, LiDAR and IMU with timestamps, provenance, noise, latency and loss. Some LiDAR geometries are excluded from bias evaluation. |
| [GROUND-1 v2](/evidence/echo3/GROUND1-V2-RESULTS.md) | Translation of simulated physical observations into WSP and memory, with temporal integrity. Memory is structural; vertical ambiguity has declared limits. |
| [DYNAMIC-1 v2](/evidence/echo3/DYNAMIC1-V2-RESULTS.md) | 29 flights; tracking a face normal from hover and short prediction. No general compensation for self-motion. |
| [PATTERN-1R v4](/evidence/echo3/PATTERN1R-V4-RESULTS.md) | 4591/4866 correct identities, 45 confusions and 230 unknowns. Two LiDAR families; learning and exam by replay. |
| [FUSION-1](/evidence/echo3/FUSION1-RESULTS.md) | 864 functional episodes and 240 reduced replay windows. Preserves provenance, expiry and conflict; it does not itself grant flight permission. |
| [COMPOSE-1 v4](/evidence/echo3/COMPOSE1-V4-RESULTS.md) | 6144 functional missions and 32 new SITL flights; full agent reaches 6/6 feasible goals, reactive Q 0/6. Extruded rooms, fixed altitude and abstract energy; ties conventional planning in physical movements. |
| [CAUSE-1](/evidence/echo3/CAUSE1-RESULTS.md) | B/C: 16/16 correct attributions versus temporal control's 8/16 per stage. Planar wall, experimental intentions and nominal prediction. |
| [PX4-1](/evidence/echo3/PX41-RESULTS.md) | B/C: 4/4 flights per stage, 48/48 invalid attempts blocked and four failsafe landings. One-metre north/south goals, one supervised transaction. |
| [POWER-1](/evidence/echo3/POWER1-RESULTS.md) | Per B/C stage, 128/128 feasible goals versus fixed percentage's 64/128, and 320/320 episodes retaining reserve. Simulated energy; instrumented battery remains pending. |
| [SAFE-1 v2](/evidence/echo3/SAFE1-V2-RESULTS.md) | Per B/C stage, 6/6 flights and 512/512 functional episodes. Ten native PX4 fault landings; maximum veto delay 288 ms. Containment within the bench, not universal safety. |
| [HOST-1](/evidence/echo3/HOST1-RESULTS.md) | Per B/C stage, 1536/1536 useful choices versus control's 768/1536. Authority updated by consequences; supervised calibration on machine tape, not general human trust. |
| [TRANSFER-3](/evidence/echo3/TRANSFER3-PLAN-C1-RESULTS.md) | Sealed campaign under human custody: B 38/0 blocks and C 48/1, zero losses attributable to the calibration. Static two-wall rooms; no hardware and no flight. |

Green means one version answers its bench's question, with controls and an auditor able to reject it. Earlier red versions remain preserved. Each component's B/C belongs to its own partition: it does not close TRANSFER-3's sealed exam. Functional tests, replay and SITL flights have different denominators and are reported separately.

## DRONE-3: SITL closed, physical pending

[DRONE-3](/en/docs/echoai/drone3) integrates the complete mission in a single PX4/Gazebo session per flight: perception, evidence with TRANSFER-3's transferred calibration, composition, epistemic gate, energy gate, SAFE supervisor, a bounded-goal gateway and PX4 keeping its failsafes. Validation and confirmation score 12/12 in fresh rooms, with zero collisions and zero hard-constraint violations; eleven mutants detected and eight manipulations rejected.

That closes the SITL leg and **nothing more**. Milestone 15 also demands hardware-in-the-loop and a cage, and there `drone3_green` remains `false`. The instrumented battery, latencies on real hardware and combined faults in physical flight are still unmeasured.

## What comes next

The work stops being software. The shopping list with prices, the assembly, the safety checklist and the planned demonstrations are in [planned hardware](/en/docs/echoai/hardware): FLIGHT-1H, SENSOR-1H, PX4-1H, POWER-1H and then DRONE-3H, each with its own contract. The AKD1500 M.2 is planned for October and its first bench will be a measured comparison against CPU and Jetson.

One warning that is already published: the certified domain uses three-metre cells and 21 × 15 m rooms, which do not fit in a home cage. The scaled version will have to be validated in simulation first.

[DRONE-3](/en/docs/echoai/drone3) · [TRANSFER-3](/en/docs/echoai/transfer) · [DRONE-3: the whole mission, in simulation](/en/articulos/drone3-mision-integrada-sitl) · [Data and source reports](/data/echo3-status.json)
