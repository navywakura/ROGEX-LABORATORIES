# METAVERSE-1: how we will do it

21 September 2026 · RxLabs®

ECHO-3 can fly a whole mission in simulation. What it still cannot do is **let
itself be watched while it flies one**, in a world that looks like a place
rather than a 7 × 7 grid of cells.

METAVERSE-1 is the phase that deals with that. This article lays out the whole
plan: what is done, what is missing, in what order, what each piece will be
able to demonstrate and — the part that takes the most effort to write — what
it will still not demonstrate once it is finished.

## First, the small print

The roadmap asked for a complete ECHO-3 before opening this phase, and ECHO-3
stands at **14/15**. It was opened anyway, by an explicit decision, and the
exception is written into the contract instead of being implied.

What DRONE-3 is missing is physical: hardware-in-the-loop and a flight cage,
which need a platform that does not exist in the laboratory. Hence the
consequence that is not negotiable:

> **METAVERSE-1 cannot close DRONE-3 or take ECHO-3 to 15/15.** No result from
> this phase counts as hardware.

`drone3_hil_green`, `drone3_cage_green` and `drone3_green` stay `false`
whatever happens here. Working on a richer simulation while waiting for the
platform is reasonable; declaring the milestone closed because of it is not.

## What METAVERSE-1 actually is

It is not "making the simulator pretty". It is widening the **scale, fidelity
and instrumentation** of the laboratory that is already closed, without
touching anything certified.

That is precisely the main risk of the phase: contaminating an already
published exam, because it enlarges worlds that already served as benches.
Four hard rules:

1. The B/C exams of a closed phase are never reopened.
2. A geometry that has already been flown is never reused for a new bench.
   DRONE-3 paid for that mistake once: a reviewer found that the validation
   split included a geometry from the pilots, and it had to be redone.
3. No sealed file is edited — the 137 in DRONE-3's `lock.json`, the 69 in
   TRANSFER-3's.
4. The frozen physics backend does not change: raising visual detail cannot
   alter trajectories, events or scoring.

## The authority rule

This is the decision that orders everything else, and it is frozen:

```
Blender  ────────────►  geometry authoring
                             │
                             ▼
Gazebo + PX4  ──────────►  physics, dynamics and mission   ← sole causal authority
                             │
                             ▼
append-only logs  ─────►  telemetry
                             │
                ┌────────────┴────────────┐
                ▼                         ▼
             replay                   live adapter
                └────────────┬────────────┘
                             ▼
                   Godot / GUI  ───────►  READ-ONLY render
```

The viewer **does not decide collisions, does not integrate dynamics, does not
compute arrival and does not control PX4**. If the renderer could influence
the outcome, the simulation would stop being an experiment and become an
animation.

The usual invariants still hold: a single 16-byte cognitive WSP, no second
thought bus, no LLM in NEXUS-0, and zero new files under `nexus0/` — four
sealed phases close their inventory with a sweep of that folder, so writing
there breaks somebody else's lock.

## The eight sub-phases

| Sub-phase | What it widens | State |
|---|---|---|
| **META-WORLD-2** | world scale and visual fidelity | ✅ green |
| **FLIGHT-2** | higher-fidelity dynamics | pending |
| **SENSOR-2** | more sensors and conditions | pending |
| **PX4-2** | flight control extension | pending |
| **COMMAND-1** | verified human orders | pending |
| **TRANSFER-META-1** | scale and transfer between bodies | pending |
| **GUI-METAVERSE-1** | viewer, timeline, tutorial and replay | pending |
| **CHIMP-1** | a tool with physics and a composite task | pending |

One done, seven ahead.

## What is already done

### META-WORLD-2 — the region lattice

COMPOSE-1 used a fixed slab of 7 × 7 three-metre cells. META-WORLD-2 replaces
it with a **lattice of regions**, and the detail that makes it possible is an
eight-bit invariant that was already there, unused:

- a region holds at most **256 cells**, so the *local* index fits in one byte —
  that is what `seq` identifies, local state, never the raw world index;
- the region is **another byte**: the `region` field that FUSION-1's packet
  already reserved and that was always 0 until now.

Two bytes address 65,536 cells. The certified world used 49.

| | minimal | 3 × 2 regions | 4 × 4 regions |
|---|---:|---:|---:|
| Regions | 1 | 6 | 16 |
| Cells | 49 | 294 | 784 |
| Size | 21 × 21 m | 63 × 42 m | 84 × 84 m |

What was measured: **48/48 traces identical** to the certified world — 12
seeds × 4 conditions, comparing the scan, the result of each step, the
distance home and the oracle distance, turn by turn; **12/12** on visual
detail without moving a collision box; **4/4** addressable lattices; and zero
branches on a seed or a world name, checked by analysing the engine's syntax
tree rather than with `grep`.

Five mutants, all five caught. And one deliberate decision: the lattice does
**not** inherit from the certified world's class, because a subclass would
make the comparison unable to fail. A test checks that.

### Asset custody — repaired today

A nasty defect turned up on resuming. The world builder wrote its receipt to
`<name>.json`; when the input declaration had that same name in that same
folder, **the receipt overwrote the source**. One world — `wide-3x2` — lost
its declaration that way: what remained was a file citing itself as its own
origin. The mesh existed; the proof of what produced it did not.

There are now three fixed, distinct paths:

```
<world>.declaration.json     immutable source
<world>.glb                  visual result
<world>.build-receipt.json   tool, parameters and hashes
```

And the order matters: hash the declaration, export, read the GLB back as a
glTF container, **have Blender re-import what Blender just wrote**, check the
declaration has not changed, and *only then* write the receipt. If anything
fails, no receipt is written at all: a broken build must not leave a
green-looking receipt for someone to trust later.

The lost world was regenerated from its parameters, and the result was better
than expected: the rebuilt GLB is **byte-for-byte identical** to the original
(`89dd499e…`). It remains formally a reconstruction — the source file was lost
and that cannot be undone, and the receipt says so — but it produces the same
artefact bit for bit.

Twelve new tests, each breaking its own rule on purpose. **40/40 green.**

### The tools, chosen with a reason

Measured against the real machine: integrated AMD, Mesa 25.3, OpenGL 4.6,
**no CUDA**.

| Piece | Choice | Why |
|---|---|---|
| Physics and flight | Gazebo Harmonic + PX4 v1.15.4 | it is the backend that certified five phases; changing it would force recertifying them |
| 3D modelling | Blender by script | free, exports glTF, and generates geometry reproducibly instead of by hand |
| Viewer | VTK today, Godot 4.7 as candidate | a separate renderer is only acceptable if it improves presentation without touching physics or logs |
| Video | ffmpeg with libopenh264 | the system ffmpeg has no libx264; the encoder is detected, not assumed |

Rejected: **Isaac Sim** (needs RTX and is not free), **Unreal** (licence and
this GPU), **O3DE** (too heavy for what it adds) and **Webots** (good, but it
means changing the physics backend and throwing away certificates).

## What is missing, stage by stage

### Stage 1 · FLIGHT-2 — Gazebo/PX4 parity

**The question:** the enlarged world reproduces the certified world *in
Python*. Does it also reproduce it **inside the simulator**?

This is the gap META-WORLD-2 declared in its own report, and it is honest to
put it that way: a lattice giving the same traces as the fixed slab does not
prove the enlarged SDF behaves the same once Gazebo loads it.

The work: generate the SDF from the same canonical declaration, start with the
minimal case, then 2 × 2 and 3 × 2, fly the mission on the frozen backend and
compare pose, contacts, events, arrival and scoring against the current
contracts.

**Exit criterion:** the mission passes in the target world with reproducible
evidence, and the renderer plays no part in the result.

### Stage 2 · The telemetry contract — TRANSFER-META-1

An adapter, outside the core, that reads the sources that already exist and
produces **one schema** serving both what is happening now and what is replayed
later. It must normalise a monotonic clock and a source clock, position and
orientation, sensors, the observed WSP, CAM/T/PATTERN/Q when available, the
gate, the setpoint, the ACK, arrival and reward, the world's identity, and the
origin of each datum — never mixed.

It is read-only with respect to flight: it introduces no side commands.

**Exit criterion:** the same sequence replays deterministically and feeds a
live consumer with the same schema.

### Stage 3 · The viewer, read-only

Import the validated GLB, document and test the axis conversion between
Blender, Gazebo and Godot — which is where the silent mistakes are made —,
draw the pose from the adapter with no physics of its own, and add free, chase
and FPV cameras, plus a trail, obstacles and start/goal markers.

And an indicator that cannot be missed: **live** or **replay**.

**Exit criterion:** the same replay gives the same visible trajectory, and
closing the viewer does not affect the mission.

### Stage 4 · Real time

Follow the active run's stream: define buffering, temporal ordering and what
happens to a late event. Measure end-to-end latency and jitter. Test
disconnection and reconnection.

The rule when the renderer cannot keep up: **drop or interpolate visual
frames, never custody telemetry.** The picture may stutter; the record may
not.

### Stage 5 · Timeline and GUI-4

Play, pause, scrub, variable speed, a direct jump to a gate, an ACK, arrival
or an anomaly, and a choice between live and replay. Visual markers are bound
to the real events, and the operator's private truth stays separate from the
public view.

No purely visual action may write to the mission.

### Stage 6 · Deciding the official renderer

This has to be resolved in writing, not by inertia:

- **VTK inside GUI-4** — the shortest path to a single native Python window,
  but it demands raising the current 3D scene a great deal.
- **Separate Godot** — better quality and better 3D tooling, but only valid if
  the final requirement allows two processes and two windows.
- **Embedded integration** — not assumed; tested and measured before anything
  is committed.

GUI-METAVERSE-1 is not declared closed until it is documented which of the
three meets the requirement and there are end-to-end tests.

### Stage 7 · Closure and regression

A deterministic replay bench; tests that the viewer alters neither mission nor
logs; coordinate, orientation and synchronisation tests; measured budgets for
FPS, latency, memory and visual losses; separate evidence for live and replay;
and a rerun of the NEXUS-0, flight, METAVERSE-1 and GUI-4 regressions.

## What it will be able to demonstrate

Once closed, this phase will allow showing — and auditing — things that are
not possible today:

- **A complete ECHO-3 mission seen from inside the world**, not as a table of
  numbers: the body moving, the trail, the obstacle it avoids, the exact
  moment the gate says BLOCK.
- **The same mission, replayed afterwards** from stored evidence, with the same
  world and the same temporal contract. Seeing something twice and getting the
  same thing is what separates an experiment from a demo.
- **Correlating scene and decision.** Jumping to the instant of the ACK and
  seeing what the agent saw, which WSP came in, which Q row was consulted and
  what the gate said.
- **That scale does not change the physics.** An 84 × 84 m world scoring the
  same as the 21 × 21 slab wherever the geometry did not change.
- **That the viewer is innocent.** Closing the window and the mission carrying
  on unchanged; changing the visual detail and the collision digest not
  moving.

## What it will still not demonstrate

This is the part worth writing down beforehand, not afterwards:

- **Nothing about hardware.** There is no physical drone, no cage, no
  hardware-in-the-loop. ECHO-3 stays at 14/15 however this phase ends.
- **Nothing about new intelligence.** What grows here is the scenario, not the
  agent. Whether ECHO-3 solves 84 × 84 m rooms is **unmeasured**, and measuring
  it is COMPOSE-at-scale work, not METAVERSE-1's.
- **A pretty world is not a valid world.** Visual fidelity is deliberately kept
  separate from collision geometry, and the only reason that can be asserted is
  that there is a digest checking it.
- **Variety, today, is modest.** Two templates, rectangular regions of the same
  size and a fixed height: the Z axis still goes unused.
- **A local animation is not a closure.** Until there is a real mission seen
  live and replayed afterwards, GUI-METAVERSE-1 stays open however good a
  recording looks.

## How we will know it is finished

There is a single condition, and it is demanding on purpose:

> A real ECHO-3 mission in Gazebo/PX4 can be seen in real time and replayed
> afterwards from persisted evidence, with the same world and the same
> temporal contract, **without Blender, Godot or the GUI creating a second
> physical truth or modifying the mission**.

While any of those conditions is unmet, the phase stays open. And if it turns
out along the way that the single-window requirement clashes with a separate
viewer, that gets decided and written down; it does not get resolved by
pretending it never existed.

[ECHO-3 roadmap](/en/docs/echoai/ruta) ·
[DRONE-3](/en/docs/echoai/drone3) ·
[GUI-4: how to read the recordings](/en/articulos/gui4-como-visualizar-las-grabaciones) ·
[Data and source reports](/data/echo3-status.json)
