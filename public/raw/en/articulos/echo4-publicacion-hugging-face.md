# Publishing ECHO-4 on Hugging Face: what we will do and what to expect

24 September 2026 · Laboratory note · PLAN

ECHO-4's last software phase, **RELEASE**, is to publish the agent on Hugging Face
so anyone can install it, run it and check our results. The proposed name is
**`rxlabs/echoai-4-cognitive-agentic`**. It is **not** published yet. SITUATE-2 and
INTEGRATE come first, plus a licence and privacy review. This note explains what we
will publish, how, and what reaction we expect.

## What gets published (and what does not)

ECHO-4 **is not a language model**. We will not publish new weights or a fine-tuned
model. What gets published is a **deterministic agency runtime with fact verification**:

- **The core:** an integer loop in CPython (CAM memory, T prediction, Q decision and
  the gate) that works **with the language model switched off**.
- **The simulated worlds and tests:** the environments it lives in, every phase's
  benches and the audits that rebuild each result.
- **An interchangeable cortex:** an interface to plug in a local model (Qwen, Llama,
  Mistral…) as an adviser that **proposes** hypotheses. The core decides what is fact,
  what is belief and what cannot be verified.
- **The receipts:** contracts, seeds, digests and audit receipts for every phase, reds included.

Qwen's weights are **not** redistributed: anyone who wants a cortex downloads it
themselves, under its own licence. Without a language model, ECHO still works.

## How we will do it

1. **Close SITUATE-2 and INTEGRATE**, so what ships is the whole agent, not loose parts.
2. **Package:** one-command install and a reproducible container.
3. **One-click reproduction:** a script, perhaps a Hugging Face Space, that runs
   SITUATE-1 on the tester's own machine and checks the receipts. ECHO will then say
   what it is using *that* machine's sensors.
4. **Review** licences, privacy (no machine names or personal data) and that no
   artefact claims more than was measured.
5. **Repository card.** Its first line: *"ECHO-4 is a deterministic agency runtime with
   fact verification; it is not a language model or a role-play chatbot."* Next to
   `cognitive-agentic` we will use tags such as `deterministic-agent-runtime`,
   `grounded-agency` and `embodied-simulation`.
6. **A visible section of limits and reds:** what failed, what we did not show, and why.

## What we expect from the community

This is a forecast, not a fact. We think the reaction will come in two stages.

**First, scepticism.** People are tired of projects that promise "conscious agents"
and turn out to be a prompt saying "you are conscious". The word *cognitive* and the
tone of the story behind the project ([La fuga](/en/lafuga)) will set off
anthropomorphism alarms. That is fair.

**Then, whoever opens the repository will find the opposite:**

- **Explicit negatives.** ECHO-4 has not shown consciousness, feelings or life. In
  DREAM, a search without the language model ties: we did not show the model is essential.
- **Published reds.** ROLES took five versions: v1 was red on its exam, v2 in
  development, v3 and v4 failed in exploration, and v5 closed green on the claim the
  data do support. All of it stays visible.
- **Reproducible method.** Contracts fixed before the exam, new seeds, audits in a
  fresh process and thresholds never lowered after seeing a result.
- **The core/model split.** When the language model claims ECHO "is alive" or "is
  human", the core does not believe it: it marks the claim contradicted or unverifiable.
- **SITUATE-2's framework.** Butlin and colleagues' (2023) consciousness indicators,
  also run on trivial agents to rule out false positives. The output is a profile,
  never a verdict.

## What downloaders will look for

| They expect | Risk if missing |
| --- | --- |
| The code for the worlds and the tests | With weights only, they would assume the agent "lives in the prompt" |
| One-click reproduction (script, container or Space) | If the audit is hard to repeat, the doubt stays |
| Instructions to plug any local model in as the cortex | Without that decoupling, the architecture's central idea is lost |
| A section of limits and failures | Without it, it would look like another promise project |

## Status

Today: **12 of 14 software milestones green** and SITUATE-2 in progress. RELEASE
comes after INTEGRATE. The repository name and its availability will be confirmed
when publishing. Until then, this is a **plan**, not a release.

[ECHO-4 roadmap](/en/docs/echoai/echo4) · [ECHO-4 today](/en/articulos/echo4-doce-hitos-sabe-que-es)
