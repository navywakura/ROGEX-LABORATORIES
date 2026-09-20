# TRANSFER-3: learning is not enough

18 September 2026 · RxLabs® · State: red, no candidate

> Archive from 18/09/2026. TRANSFER-3 closed green on 19/09 with Plan C: transferred perceptual calibration, sealed campaign and human custody. [TRANSFER-3](/en/docs/echoai/transfer) · [20/09 update](/en/articulos/drone3-mision-integrada-sitl).

**TRANSFER-3 must demonstrate that learning in one environment helps solve others, without carrying the map or solution, against the same agent without that experience.**

Saving a table is only part of that question. The learned parameter must change behaviour and improve outcomes with the same sensors, budget and constraints. We have not demonstrated that advantage under the ECHO-3 contract. This is software research: the laboratory has no physical drone, sensors or Akida board.

## From transferred Q values to body calibration

Early trials transferred action values. We found duplicate ingestion, coverage and representation problems, as well as a planner that used Q only as a late tie-breaker. Repairs did not produce a robust advantage. Learning can change a table without changing mission decisions enough.

We then tested reusable body properties. Plan A calibrated movement and turning costs. Its confirmations failed; in 256 rooms, a programmed prior produced the same behaviour as the learned value. Numerical precision did not improve the decision.

Plan B tested actuation gain: how far a burst moves per command. An initial filter confused room rotation with the parameter's effect. Aligned geometry showed an apparent improvement. We also tested whether keeping multi-step plans explained it: commitment was behaviourally inert. We withdrew that architectural explanation.

## The school works; the exam decides

B2 learns exact gain from odometry and observations before and after **eight moves per condition**. It receives no simulator gain value. Four gains and their counts are transferred to an isolated consumer, without a map, coordinates or school episodes. The exam freezes the model.

The first pilot reproduced the filter's goal counts: at gain 2, 21/24 against nominal's 17/24; at gain 3, 20/24 against 19/24. The independent judge found **38 and 48 reserve violations** in those learned arms. The return estimate discounted the maximum gain even though only one direction was accelerated. That improvement breached the contract.

Repairing reserve estimation removed observed violations and left 51/72 learned arrivals against 52/72 nominal. The last variant, B3, added braking at already observed walls: free-space gain alone does not describe a burst near an obstacle.

| Latest B3 pilot | Learned | Nominal |
|---|---:|---:|
| Arrivals | 51/72 | 52/72 |
| Simulated exam energy | 7004 | 6936 |
| School + exam | 7100 | 6936 |
| Observed safety violations | 0 | 0 |

On jointly successful missions, the learned arm consumed 120 more units. It recovered four arrivals and lost five achieved by nominal. It beat both fixed priors in aggregate arrivals, but not the main control.

These are **24 public shapes with three conditions each**, not 72 independent samples or a prospective exam. Gym resets have no modelled cost; this is not a physical calibration budget.

## What remains open

All three B2/B3 audits reproduce their hashes in fresh processes, and all 261 TRANSFER-3 tests pass. This supports the implementation and its figures; the usefulness criterion still fails. The global suite retains a memory limitation in another bench and remains unverified.

The red screen stopped confirmation on 256 fresh shapes. **No real TRANSFER-3 B/C partition was generated or opened.** A prospective candidate must come first, followed by a campaign with prior commitments, freezing and external custody.

The bounded gain branch is red. Delay and other Plan B primitives remain untested. Plan C, reusable perceptual calibration, has not started. The next hypothesis must explain why the learned information changes a useful decision and distinguish that from a generic controller improvement.

Publishing the red result prevents exact learning from becoming a claim of transfer that the controls do not support.

[TRANSFER-3 documentation](/en/docs/echoai/transfer) · [Thirteen phases](/en/articulos/echo3-trece-fases-verdes) · [B2 report](/evidence/echo3/TRANSFER3-PLAN-B2-RESULTS.md) · [B3 report](/evidence/echo3/TRANSFER3-PLAN-B3-RESULTS.md) · [Data and source hashes](/data/echo3-status.json)
