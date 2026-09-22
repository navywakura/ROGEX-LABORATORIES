# ECHO-4 · RELATION-A: a history that can be reconstructed

22 September 2026 · Lab note

RELATION-A is implemented and validated as the first increment of **E4-RELATION-1**. It is a deliberately modest infrastructure step: the agent can store encounter episodes in its existing memory and reconstruct their sequence later. We have not shown that this history helps it make better decisions.

## One shared history, two private memories

The inspiration is simple: two agents interact and, over time, that sequence might change what each expects from the other. In the implementation, “shared” only means both took part in an encounter. Each observer keeps its own record; there is no common global memory and no access to the counterpart's Q, resources or private incentives.

Each episode records context, actions actually observed, tick, the observer's own cost and output. Links traverse encounters in global order or by known identity. If identity or a receipt is missing, the history preserves that uncertainty: it invents neither a pair nor an action. An intention or attempt does not automatically become success.

The contract keeps the 16-byte WSP intact, leaves E[6] at zero and stores receipts in existing CAM host fields. It adds no bus or policy, changes no Agent.turn, T, Q or gate, and makes no LLM calls. Summaries are derived on query; they add neither facts nor a “trust” score.

## What the tests say

The bank used three development seeds —113, 127 and 139— with 144 rounds each: 96 training and 48 greedy. **912 primary episodes** were reconstructed. It ran 7,440 native turns counting controls, reversed order and partial observation.

The key check is also a negative result: with and without recording, actions, costs, predictions and outcomes were identical. Reversing order reproduced traces and history digests. This shows that A stores and reconstructs encounters without changing the policy. We do not yet know whether relational biography adds a new capability.

**36 new tests** and **181 distinct tests** including selected regressions passed. They cover capacity and tick limits, different perspectives, unidentified encounters, corruption, receipts and partial failures. If storage fails after the environment executes an action, costs are preserved and the session stops; software does not pretend to undo physics.

## The missing test

RELATION-B will put history to work: decisions in a new task, with the same budget and opportunities for each condition. We will compare complete history against no-history controls, OTHER-only, grouped identity and order-removed conditions. We will also measure the cost of learning that history: an advantage that costs more than it returns would not be practical.

Then come C (rupture, reunion and contradictory or incomplete history) and D (a new examination fixed before execution and reconstructed by an independent audit). Until those tests close, **RELATION-1 remains open**. A does not establish felt trust, subjective consciousness or self-repair. It is an auditable record on which we can now build a causal experiment.

[RELATION-A contract and documentation](/en/docs/echoai/relation) · [ECHO-4 roadmap](/en/docs/echoai/echo4).
