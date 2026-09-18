# ECHO-3 — roadmap

State: 18 September 2026. **13/15 software certificates; TRANSFER-3 red; DRONE-3 pending.**

ECHO-3 has **13 of 15 milestones with green certificates within their software scope**. ECHO-1 and ECHO-2 are closed; the robotics programme remains open. Components have been tested with controls and audits, but adding certificates does not demonstrate an integrated mission in a physical robot.

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

Green means one version answers its bench's question, with controls and an auditor able to reject it. Earlier red versions remain preserved. Each component's B/C belongs to its own partition: it does not close TRANSFER-3's sealed exam. Functional tests, replay and SITL flights have different denominators and are reported separately.

## The two remaining milestones

**TRANSFER-3** must demonstrate useful improvement from learning in A on new environments, against the same agent without that experience, without carrying a map or solution. It is red with no candidate. The gain school learns exactly, but the latest safe B3 pilot reaches 51/72 against nominal's 52/72 and costs more including school. It did not advance to prospective confirmation or open real B/C.

**DRONE-3** must integrate the complete mission with causal traceability in SITL, HIL and a cage. Link, energy and safety certificates do not replace that joint closure. Instrumented battery, latency under load and combined faults must be checked during integration. The laboratory has no robotics hardware or Akida; HIL and cage work require that platform.

## What we are researching

The Plan B gain branch stopped after its red screen. Other primitives and delays remain untested; Plan C's perceptual calibration has not started. Each new hypothesis needs a testable mechanism, controls with the same information and a prior stopping rule. Thirteen greens support more precise questions; the remaining two still need their own evidence.

Richer 3D worlds and any neuromorphic coprocessor are future work. Useful transfer and integration of the current contract must close first. Absent hardware remains declared absent.

[TRANSFER-3 research](/en/docs/echoai/transfer) · [ECHO-3: thirteen green phases and two open questions](/en/articulos/echo3-trece-fases-verdes) · [Data and source reports](/data/echo3-status.json)
