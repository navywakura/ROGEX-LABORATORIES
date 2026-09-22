# ECHO-4: a shared history and a cortex that learns to explore

22 September 2026 · Programme vision · DREAM is planned

**ECHO-4 aims to connect a model of self, a model of another agent and a history that changes how they act.** We add another question: can the local cortex use recorded experience to improve how it investigates?

The core has bounded results in perception, causal influence and self-modelling. Continuity has started. The counterpart, relationship and cortical loop are not built yet. This publication records the architecture and a development pause, not a completed ECHO-4.

## The story: two people, one universe

In the fictional inspiration, John Doe meets Jane Doe. Each arrives with memories, expectations and limits. Their encounters create something neither possessed alone: a history together. Yesterday changes the meaning of today's actions.

The story calls this “two consciousnesses meeting and creating a universe”. Here, that universe means a shared timeline of events, agreements, mistakes and trust, not a physical cosmos created by observation.

Our philosophical interpretation is relational and pragmatic: study a functional self through what it distinguishes, preserves and makes possible; study a relationship through its effects on later decisions. This is a research hypothesis, not a complete account of consciousness. The earlier “anti-life” reference remains a literary image of a counterpart; antimatter is not the physical basis of this software.

The testable question is: **does remembering real interaction help an agent model itself and another agent, and learn when cooperation is worthwhile?**

## Two learning timescales

“Reptilian brain” and “neocortex” are informal metaphors for computation, not a literal division of the human brain.

| Layer | Role | Permitted changes |
|---|---|---|
| Fast ECHO core | Acts, records experience and updates learned models and policy. | Contract-governed memory and estimates, not self-authorised changes to invariants. |
| Slow local cortex | Will propose and compare exploration-budget strategies. | A validated strategy artifact; initially no Qwen weight changes. |
| Evaluator and operator | Check outcomes, limits, promotion and rollback. | Explicit versioned changes; candidates cannot rewrite their exam. |

The core retains its 16-byte WSP, CAM, Q, T and gate. There is no second cognitive bus. Basal benches remain LLM-free; cortical experiments will explicitly report their calls, tokens and latency. Improvement must be measured separately for each layer.

## The Dream-RSI inspiration

The preprint evaluates exploration policies through historical-tree replay while keeping its agents and evaluator fixed. Recorded continuations bound that replay. It does not validate our local Qwen or ECHO-4. [Primary paper, section 3](https://arxiv.org/html/2609.14858v1#S3).

The following is our proposed E4-DREAM-1 architecture, not a claim to reproduce the entire framework.

## Our proposed loop

1. **Explore within a budget.** A fixed controller schedules authorised WORLD-1 experiments, branches, batches and stopping conditions. Online means running the environment, even on a local machine.
2. **Record attempts.** Store parent IDs, public observations, proposals, configuration, evaluator versions, results, errors and costs. Qwen does not receive private causal labels.
3. **Replay without fabrication.** Reveal recorded results only after the strategy selects the corresponding branch. Missing continuations return unknown. A new prompt cannot borrow an old prompt's outcome and call it exact.
4. **Develop strategies.** Qwen takes a separate policy-development role, producing bounded declarative priorities, budgets and stopping rules. A fixed interpreter executes them, not arbitrary model-generated Python.
5. **Select, then test afresh.** Compare candidates with the incumbent. Historical winners face new trials and can be rejected or rolled back. Only executed outcomes extend the archive.

Initially Qwen changes experimental scheduling, not core code, rewards, the gate or SELF certification. A broader discovery-agent role would need a separate contract.

Our working formalisation is:

```text
H = versioned collection of executed attempts
R(H, branch) = recorded outcome, or UNKNOWN
J(strategy) = verified quality − cost penalty
promotion = improvement on new trials AND every invariant satisfied
```

Costs, thresholds and budgets must be fixed before the exam. Report replay costs, proposal-generation costs and avoided environment runs separately. Historical selection can overfit; it cannot grant closure.

## The local Qwen

The repository already has a llama.cpp adapter using `llama-server` or `llama-cli`; an earlier record identifies quantised Qwen3-4B-Instruct-2507. Its restricted signal interface is not a DREAM orchestrator. We must identify the actual model file, hash, quantisation and settings before testing.

The official model card describes Instruct-2507 as non-thinking. Adding thought tags does not turn it into the Thinking variant. We will request structured proposals, brief justifications and verifiable tests. [Official Qwen card](https://huggingface.co/Qwen/Qwen3-4B-Instruct-2507).

This architecture can be tested locally; the 4B model's effectiveness remains unknown. No external per-token bill does not mean free GPU/CPU time or energy. Generating strategies still requires inference. We promise neither ten thousand strategies in minutes nor infinite growth, self-replication or weight improvement.

## Current evidence

WORLD is implemented. SENSATION, BOUNDARY and SELF have bounded closures. SELF selective reuse reaches 189/240 and 193/240 targets in B/C, versus 152/240 and 143/240 without protection. Mixed cases remain imperfect, and safety outside the prior is not established.

CONT-A resumes the nominal agent in a fresh process: 52/52 subsequent steps match across five scenarios, including a terminal state that does not revive. Active recovery, descendant/fork semantics and the final continuity exam remain pending. DREAM is not implemented. [Evidence and limitations](/evidence/echo4/ECHO4-STATUS-20260922.md).

The sequence is continuity → DREAM cortical branch → maintenance → other → interaction → relationship → roles → integration. DREAM will not block the LLM-free core; integration must test cortex OFF/ON separately. Hardware follows software. **METAVERSE-1 stays last.** [Full roadmap](/en/docs/echoai/echo4).

OTHER means a second instance with its own body and private memory. It is not the distinction between core and cortex, and neither layer is declared conscious by its name.

## What would an all-green result mean?

We could demonstrate that a shared history has measurable consequences: self-modelling protects useful learning, memory changes later decisions, modelling another agent helps coordination, and reviewing experience improves exploration-budget allocation.

New trials, strong controls, complete costs and ablations must support each link. Remove history, self-model, other-model or Qwen proposals and measure the loss. Include situations where cooperation is harmful or independent action is better.

That is the exciting possibility: **a shared history that does something, rather than merely being narrated**. Functional success would not prove subjective experience, souls, human consciousness or a universal theory of social hierarchy.

## Pause checkpoint

We freeze this work checkpoint for a rest, preserving existing evidence and visible unfinished phases. This is neither global green closure nor a frozen experimental contract for unbuilt modules. When work resumes, **CONT-B** is the next coding task, before DREAM implementation.

[Official roadmap](/en/docs/echoai/echo4) · [Historical announcement](/en/articulos/echo4-inicio-roadmap-oficial) · [Markdown](/raw/en/articulos/echo4-dream-rsi-historia-compartida.md)
