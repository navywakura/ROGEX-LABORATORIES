# DRONE-3 — the whole mission, in SITL

State: 20 September 2026. **SITL leg green. HIL and cage wait for hardware, so
the milestone stays open.**

DRONE-3 is ECHO-3's final question: can the integrated system fly a blocked
charging-station mission end to end, using public sensors only, and leave a
causal chain that can be rebuilt, with no hidden map and without bypassing the
autopilot's failsafes?

The measured answer is **yes in simulation**, with the detail and limits below.
It is not yes on a real drone: the laboratory has no flight controller, drone,
sensors or cage.

## What happens in a flight

One PX4 v1.15.4 + Gazebo session per flight. Nothing restarts between
capabilities: take-off, perception, decision, detour, arrival or abort, return,
landing and disarm all happen in sequence.

```text
settled observation (LiDAR, 4 depth views, RGB, PX4 estimate, battery)
  → perception → FUSION evidence with the transferred C1 calibration
  → POWER decides continue, return or land → COMPOSE composes the route
  → 16-byte WSP + prediction published before acting
  → epistemic gate → energy gate → SAFE supervisor → PX4 gateway
  → ACK is not arrival: three settled samples
  → next observation → attribution → replanning
```

The agent runs caged, with no network, no repository and no world. It receives
public observations and returns one WSP; nothing else crosses into execution.
PX4 keeps its PID, estimator, modes and failsafes.

## Result

Twelve validation flights and twelve confirmation flights, in fresh rooms and
seeds whose geometry had never been flown in this bench.

| Measure | Validation | Confirmation |
|---|---|---|
| Correct flights | 12/12 | 12/12 |
| Feasible missions reached | 6/6 | 6/6 |
| Correct low-reserve aborts | 3/3 | 3/3 |
| Contained faults | 3/3 | 3/3 |
| Collisions | 0 | 0 |
| Minimum obstacle clearance | 1,247 mm | 1,259 mm |
| True arrival error p50/p99 | 200 / 357 mm | 186 / 360 mm |
| Veto after the fault | 207–1,009 ms | 167–1,017 ms |
| Disarm after the veto | 21.1–23.1 s | 19.9–30.7 s |
| Refusal probes blocked | 228/228 | 228/228 |
| Hard constraints | all 0 | all 0 |

Four conditions per room: reachable mission, insufficient reserve, traversability
contradiction and an integrated fault. The contradiction is triggered by
evidence, not by a clock: the gap closes at the first observation in which the
agent has seen it open from the home side, and the decision taken on that world
is discarded unexecuted.

## Controls

No control is ever flown. All of them are computed on the observations, battery
and health already recorded:

- a link that took the ACK for arrival would have claimed arrival in 147 of 147
  validation transactions while the body was still about 3 m away;
- a planner without evidence would have sent 51 goals into truly occupied cells;
  the epistemic gate blocks every one of them;
- the fixed battery percentage disagrees with predicted cost in 13 decisions;
- SAFE without agent liveness would not veto the hang, and without the latch it
  would accept both recovery probes after the veto;
- in the functional twin of the same rooms, reactive Q reaches no goal at all.

Eleven code mutants detected and eight trace manipulations rejected by the audit
itself, including a substituted proposal with a consistent target and prediction.

## How it is checked

- Contract written before validation opened, with criteria, seeds and mutants
  fixed.
- Lock hashing the code, the energy table, COMPOSE's model and the provenance of
  the C1 calibration.
- An audit that rebuilds the agent, the supervisor, the gates, the gateway, the
  lease and the probes from the traces, and cross-checks them against PX4's own
  ULog and the simulator's private pose.
- A second audit in a new process: it reproduces the same certificate.

Certificate `c44402df…`, lock `094bc35f…`.

## What it does not demonstrate

- There is no hardware: `drone3_hil_green`, `drone3_cage_green` and
  `drone3_green` are `false`. ECHO-3 stays at 14/15.
- Energy is simulated charge falling with armed time: the pinned PX4 publishes
  no current. These are not measured joules.
- Static world except for the declared intervention, noiseless sensors, 3 m
  cells and fixed altitude.
- The station coordinate is handed over as an exact hypothesis; searching with a
  wrong hypothesis is not tested.
- HOST-1 does not take part; DYNAMIC-1 and PATTERN-1R are not declared
  integrated.
- Three flights per condition and stage: the intervals describe this bench, not
  production reliability.

[Full report](/evidence/echo3/DRONE3-RESULTS.md) ·
[Prospective contract](/evidence/echo3/DRONE3-DESIGN.md) ·
[Hardware handoff](/evidence/echo3/DRONE3-HARDWARE-HANDOFF.md) ·
[Roadmap](/en/docs/echoai/ruta) · [Planned hardware](/en/docs/echoai/hardware)
