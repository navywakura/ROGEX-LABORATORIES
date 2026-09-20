# Planned hardware

Updated: 20 September 2026. echoAI currently closes software and PX4 SITL:
[DRONE-3](/en/docs/echoai/drone3) has demonstrated the whole mission in
simulation. What is missing is physical. This page lists what has to be bought,
what it costs, how it is assembled and which demonstrations are planned.
**None of it is operational hardware yet: these are candidate purchases.**

## What exactly is missing

Milestone 15 asks for three legs: simulation, hardware-in-the-loop and a cage.
The first is closed. The other two need a real flight controller, a body,
sensors, measured energy and external ground truth, so the judge never has to
believe the agent.

Three differences force new work, and they are worth stating before spending:

1. **Scale.** The certified domain uses 3 m cells and 21 × 15 m rooms. A home
   cage cannot host that scale, and the perception constants are frozen. A
   re-scaled version, 1 m for instance, must be validated in simulation first,
   with fresh seeds.
2. **Sensors.** The agent expects a 360° 2D LiDAR, four depth views and RGB with
   capture and delivery stamps. A different real kit means repeating SENSOR-1
   and GROUND-1 on the real sensor.
3. **Energy.** In simulation energy is simulated charge, because the pinned PX4
   publishes −1 A. On hardware, POWER must be measured with a power module and
   recalibrated.

## Cost

Store prices checked on 20 September 2026, in US dollars, **excluding tax and
shipping**. Items marked as estimates are unverified and only give an order of
magnitude.

### Leg 1 · Hardware-in-the-loop

| Item | What for | Price |
|---|---|---|
| [Holybro PX4 Development Kit X500 v2](https://holybro.com/products/px4-development-kit-x500-v2) with Pixhawk 6C, M10 GPS and telemetry | body and flight controller, the same airframe as the simulator | from $533 |
| [RadioMaster TX16S](https://radiomasterrc.com/collections/tx16s) with an ELRS receiver | manual control and the **human kill switch** | ~$250 |
| 3 × 4S/6S batteries, balance charger and fire-safe bags | repeatable flights and comparable margins | $200–300 (estimate) |
| Power module with current sensing (PM02D or equivalent) | POWER on real charge, not simulated | $50–70 (estimate) |
| [Jetson Orin Nano Super Developer Kit](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/nano-super-developer-kit/) | companion computer: caged agent, supervisor and gates | $399 |
| Cabling, DC converters, NVMe and spares | assembly and logging | ~$200 (estimate) |
| **Subtotal** | | **≈ $1,630–1,750** |

The Jetson launched at $249 in December 2024; NVIDIA raised the range in July
2026 and it now lists at $399.

### Leg 2 · Cage

| Item | What for | Price |
|---|---|---|
| [Luxonis OAK-D Pro](https://shop.luxonis.com/products/oak-d-pro) | RGB, stereo, depth and IMU with global shutter | $399 |
| 360° 2D LiDAR (LD19 or RPLIDAR class) | geometry, a family independent from the camera | $100–350 (estimate) |
| Closed net or cage and anchors | physical enclosure, on top of PX4's geofence | $300–600 (estimate) |
| Ground truth: overhead camera with markers, or motion capture | the private judge needs real pose; the agent never sees it | $150–300 with markers; thousands with mocap |
| **Subtotal** | | **≈ $950–1,650** |

### Optional and future

| Item | What for | Price |
|---|---|---|
| [BrainChip AKD1500 M.2 B+M Key](https://shop.brainchipinc.com/collections/all) | neuromorphic coprocessor for a small perception head | **$129**, in stock; **planned for October 2026** |
| [Livox Mid-360](https://www.livoxtech.com/mid-360) | 360° 3D cloud for richer worlds | ~$734 at resellers; Livox announces the Mid-360S as its replacement |
| [Crazyflie 2.1 Brushless](https://store.bitcraze.io/products/crazyflie-2-1-brushless) with Flow Deck | low-risk indoor bench for link and watchdog | ~$400 (estimate) |

**Reaching the cage costs on the order of $2,600–3,400**, excluding tax and
shipping, plus the AKD1500 if bought in October.

## How it is assembled

```text
[sensors] ──USB/UART──> [companion computer]
                          ├─ bwrap cage: agent (WSP + prediction)
                          ├─ SAFE supervisor + epistemic and energy gates
                          └─ cell gateway ──MAVLink serial──> [Pixhawk PX4 v1.15.4]
                                                               └─ ESCs and motors (PX4 only)
[RC with kill switch] ───────────────────────────────────────> [Pixhawk]
[operator telemetry] <── read-only ── [Pixhawk]
[ground truth] ──> private judge, outside the companion computer
```

Assembly rules that are not negotiable:

- The firmware must be **PX4 v1.15.4**, the simulator's version. Another version
  means repeating PX4-1.
- The agent never runs on the flight controller, and never touches motors,
  modes, parameters or arming.
- PX4's geofence strictly inside the cage, with clearance to the ceiling.
- Order of authority: **human with the kill switch > PX4 and its failsafes >
  SAFE supervisor > agent**. The kill switch depends on no echoAI software.
- After a supervisor veto the operator sends no rescue command: if they do, the
  flight is recorded as human intervention and does not count as native
  containment.

The X500 kit assembles in about half an hour without soldering. The real work is
the companion wiring, sensor calibration and clock synchronisation with ground
truth.

## Planned demonstrations

These are plans, not results. Each will have a prior contract, controls, an
audit and published limits, exactly like the previous ones.

1. **HIL-1 · the same mission with the real controller in the loop.** Simulated
   sensors, physical Pixhawk. Same criteria as the SITL leg and its own
   denominator. It separates "the code works" from "the link and the timings
   work on hardware".
2. **POWER-1H · measured energy.** With the power module, recalibrate the cost
   per step, return and landing on real charge and repeat the reserve bench.
   This is where energy stops being simulated.
3. **CAGE-1 · the scaled mission, actually flying.** A re-scaled domain
   validated in simulation first, external ground truth and the four conditions:
   reachable mission, insufficient reserve, world contradiction and an
   integrated fault. Zero net contacts is a criterion; any human kill makes the
   flight red with its cause on record.
4. **AKIDA-1 · the coprocessor, measured.** With the AKD1500 M.2 planned for
   October: a small perception head compared against CPU and Jetson on the same
   dataset, publishing accuracy, P99 latency, measured power and what happens
   when it is unplugged. It will not enter VERIFY, the WSP or the safety chain.
   Manufacturer figures are not our results.
5. **Public video and logs for each**, with the same hashes and raw files
   already published from the simulator. Video illustrates; JSON, ULog and
   hashes are the evidence.

## Recommended purchase order

1. Safety first: radio with kill switch, batteries, charger and bags.
2. X500 with Pixhawk 6C and the power module, for HIL-1 and POWER-1H.
3. Companion computer and camera, to build the pipeline on the bench.
4. Cage, net and ground truth, before the first autonomous flight.
5. AKD1500 M.2 once the small perception task to compare exists. $129 does not
   justify jumping the queue without a bench.
6. 3D LiDAR only once the scaled domain is closed.

## Condition of use

No new component feeds motors directly. The route is always:

```text
sensor → adapter → WSP state → memory/prediction → gate
       → high-level command → autopilot → actuators
```

Simulation first, then hardware-in-the-loop, then the cage, and only finally an
authorised outdoor environment, with applicable regulation met and human
emergency operation available.

[DRONE-3](/en/docs/echoai/drone3) · [Full hardware handoff](/evidence/echo3/DRONE3-HARDWARE-HANDOFF.md) · [Limits](/en/docs/echoai/limites)

— R.N.
