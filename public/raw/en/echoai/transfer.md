# TRANSFER-3 — contract and state

Updated: 20 September 2026. **Green within its software scope, with a sealed campaign and human custody.**

Demonstrate that what was learned in A improves behaviour in other environments against the same agent without that experience, without carrying a map or a solution. Budget, sensors, actuators and constraints are matched across arms. The exam freezes learning but keeps perception and tracking alive.

## What is transferred

The **camera mount offset**: two integers learned in A by watching where camera and LiDAR agree and where they do not. No map travels, no episodes, no Q. In the exam the agent re-registers the camera before fusing; fusion still demands two independent families to admit a cell, so the calibration never weakens VERIFY.

## Sealed campaign result

| Split | Learned | Uncalibrated | Blocks | Attributable losses |
|---|---:|---:|---:|---:|
| B | 342/576 | 44/576 | 38/0 | 0 |
| C | 432/576 | 65/576 | 48/1 | 0 |

The learned arm matches, mission by mission, an agent with perfect calibration. Certificate `8c77aead…` carries `transfer3_green=true`; both exams were audited in fresh processes with identical hashes.

## How self-deception was avoided

1. A public screen with controls, including hand-set priors: a fixed prior matched the learned behaviour in earlier plans, which is why they were discarded.
2. Prospective confirmation with size, criteria and rules frozen before looking at new rooms.
3. A final campaign with commitments published before training, custody out of reach of the agents, a single opening of B and C only after a green B.

The first real attempt was consumed without evaluating a single room because of an infrastructure failure; it is kept on record, and the retry used an independent protocol excluding the rooms already revealed. Plans A and B stayed red and are preserved.

## Limits

Static two-wall simulation, noiseless sensors, and one cell of offset equals three metres. It does not certify hardware, HIL or real flight. The transferred calibration is then used in [DRONE-3](/en/docs/echoai/drone3), where for that body it is the identity: that the channel is live is shown by control, not by a non-zero offset.

[Article and reasoning](/en/articulos/transfer3-aprender-no-basta) · [C1 report](/evidence/echo3/TRANSFER3-PLAN-C1-RESULTS.md) · [B2 report](/evidence/echo3/TRANSFER3-PLAN-B2-RESULTS.md) · [B3 report](/evidence/echo3/TRANSFER3-PLAN-B3-RESULTS.md) · [Data and hashes](/data/echo3-status.json)
