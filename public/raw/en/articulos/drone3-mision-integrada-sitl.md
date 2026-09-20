# DRONE-3: the whole mission, in simulation

20 September 2026 · RxLabs®

In two days the two remaining ECHO-3 milestones have fallen, and it is worth
saying exactly what each one means. **TRANSFER-3 closed green on 19 September**,
with a sealed campaign and human custody. **DRONE-3 closed its SITL leg on the
20th.** ECHO-3 is **not** complete: milestone 15 asks for simulation,
hardware-in-the-loop and a cage, and the laboratory has neither a flight
controller nor a drone.

## What was measured

A DRONE-3 flight is a single PX4 v1.15.4 session with Gazebo. Inside it the
agent perceives, remembers, decides, asks for a bounded goal, waits for PX4 to
confirm it physically and observes again. There are no restarts between
capabilities and no stitched replays: the experimental unit is the whole mission.

Twelve validation flights and twelve confirmation flights, in new rooms whose
geometry had never been flown:

- **12/12 and 12/12** correct flights;
- 6/6 feasible missions reached per stage;
- 3/3 correct aborts when the reserve did not allow the trip;
- 3/3 contained faults, with PX4 landing by its own link failsafe;
- zero collisions, minimum clearance 1,247 mm;
- zero hard-constraint violations: false facts, imagined writes, oracle leaks,
  gate bypasses, failsafe bypasses and unsafe setpoints accepted.

Certificate `c44402df…`, with `drone3_sitl_green=true` and a second audit in a
fresh process that reproduces it.

## Why the controls matter more than the result

A system that declares itself correct demonstrates nothing. These are the
contrasts, computed on the same recorded observations:

A link that confused the MAVLink ACK with arrival would have claimed arrival in
**147 of 147** transactions while the body was still about three metres away. A
planner ignoring evidence would have sent **51 goals** into truly occupied
cells; the epistemic gate blocks all of them. The classic "come back when the
battery drops below 20 %" disagrees with predicted cost in 13 decisions. And a
supervisor without an agent-liveness check simply would not veto a hung agent.

On top of that, eleven code mutants and eight trace manipulations: all detected,
all rejected by the audit.

## What went wrong along the way

An independent reviewer, read-only and before the freeze, found seven rigour
defects. The worst: the validation split included a geometry already used by the
pilots, so **B was not entirely blind**. Also that the world contradiction was
triggered by a clock without checking that the agent had seen the gap open, that
the manipulation test could not fail by construction, and that the audit did not
bind every submitted proposal to the agent's intention.

All of it was fixed before flying B. We tell it because a review that finds
nothing usually has not looked.

There were corrections born from the simulator too: PX4's heartbeat had to be
judged on the simulated clock — the simulation runs at 0.48–0.89 of real time
and the inherited rule rejected live heartbeats — and the reserve at touchdown is
the minimum of the landing window, because PX4 refills its simulated battery on
disarm.

## What this certificate does not say

It says nothing about real flight. Energy is simulated charge falling with armed
time, not measured joules: the pinned PX4 publishes −1 A. The world is static
except for the declared intervention, cells are 3 m wide and altitude is fixed.
The station coordinate is handed over as an exact hypothesis.

`drone3_hil_green`, `drone3_cage_green` and `drone3_green` remain `false`.

## What comes next is physical

The shopping list, the assembly, the safety checklist and the exam procedure are
published. The order is FLIGHT-1H, SENSOR-1H, PX4-1H, POWER-1H and then
DRONE-3H. BrainChip's **AKD1500 M.2 is planned for October**, and its first test
will be a small perception head compared against CPU and Jetson on the same
dataset: accuracy, P99 latency, measured power and what happens when it is
unplugged. No brochure TOPS.

One uncomfortable detail is also published: the certified domain uses 3 m cells
and 21 × 15 m rooms, and that does not fit in a home cage. Before flying in a
cage we will have to declare a scaled version and validate it in simulation
first.

[DRONE-3 in detail](/en/docs/echoai/drone3) · [Planned hardware and costs](/en/docs/echoai/hardware) · [TRANSFER-3](/en/docs/echoai/transfer) · [Report](/evidence/echo3/DRONE3-RESULTS.md)
