# echoAI — limitations

The laboratory's policy is to separate results, plans and hypotheses.


## ECHO-3 · 20/09/2026

Green means one version answers its bench's question, with controls and an auditor able to reject it. Earlier red versions remain preserved. Each component's B/C belongs to its own partition: it does not close TRANSFER-3's sealed exam. Functional tests, replay and SITL flights have different denominators and are reported separately.

**TRANSFER-3** closed green with a sealed campaign: what was learned in A improves B and C against the same agent without that experience. It is static two-wall simulation; it certifies neither hardware nor real flight.

**DRONE-3** has closed its SITL leg: the complete mission in a single PX4/Gazebo session, 12/12 in validation and 12/12 in confirmation. The milestone also demands hardware-in-the-loop and a cage, and that remains pending: `drone3_green` is `false` and ECHO-3 stays at 14/15. The instrumented battery, latencies on real hardware and combined faults in physical flight are unmeasured.

The certified domain uses three-metre cells and 21 × 15 m rooms. A home cage does not admit that scale: before flying in a cage a scaled version must be declared and validated in simulation.

[Roadmap](/en/docs/echoai/ruta) · [DRONE-3](/en/docs/echoai/drone3) · [TRANSFER-3](/en/docs/echoai/transfer)


## What ECHO-2 does not demonstrate

- It is not general intelligence or an artificial person.
- It recognises held-out symbolic families, not objects in real images.
- It does not perform SLAM, flight control or certified navigation.
- It does not yet operate with noise, wind, physical latency or incomplete sensors.
- Its demonstrated survival occurs in discrete worlds, not on a physical drone.
- It does not contain an AKD1500 M.2 or another physical NPU.
- It does not turn performance in a synthetic world into a robotics safety claim.

## Visible debt

WALK-1 without an integer remainder does not propagate value all the way to the
goal and remains an `expectedFailure`. The opt-in CREDIT-1 variant does walk,
but the default algorithm was not changed.

The local Qwen solved SIGN-C's canonical examples and beat the stub on
paraphrases, but selected `approach` for two non-canonical threats and received
`-16`. This demonstrates why its output is a proposal rather than a safe order.

SLEEP-2 consolidates 8,208 rows into 144 rules without rewriting CAM/T/Q, but
the worlds remain small. The 3D GUI represents Body3D; it does not yet simulate
aerodynamics, IMU, motors, wind or PID.

## Conditions for robotics

Before flying, ECHO-3 must demonstrate:

- deadlines and P99 latency under load;
- sensor synchronisation and expiry;
- watchdog, return and landing after loss of the companion computer;
- independent veto under contradictory observations;
- battery, mass, temperature and vibration limits;
- a reproducible log of every decision;
- simulation, HIL and cage tests before open-field operation;
- compliance with applicable regulations and emergency human operation.

A neural model, an LLM or an NPU will not be the only barrier against a
collision. The autopilot and safety mechanisms remain separate.

## Akida

There is no AKD1500 M.2 in the laboratory. The M.2 board is planned for October
2026 and appears in the purchase list at [planned hardware](/en/docs/echoai/hardware);
until it is on the bench it remains an absence. Manufacturer power or learning
figures are not RxLabs results. When a board arrives, compatibility, exact model,
toolchain, measured power and a comparison against CPU/Jetson will be published
before any advantage is claimed.

## Status vocabulary

- **Fact:** a reproducible report and a green gate exist.
- **Measured red:** the experiment runs and does not reach its KPI.
- **Plan:** proposed order; not yet a capability.
- **Absent:** does not exist in the laboratory.

— R.N.
