# How we will measure whether ECHO improves a model: the benchmark plan

24 September 2026 · Laboratory note · PLAN

ECHO-4 can now be [downloaded](/en/releases). The next question is the one anyone would ask:
**does a language model do better with ECHO than without it?** This note explains how we
will measure it, with which benchmarks, what we expect and what it will cost. **There are no
numbers yet**: we have not run anything. The plan is published first; the results come
after, reds included.

## The idea: the same model, with and without ECHO

We are not going to rank models. Each model is compared **with itself**: the same question,
the same temperature and the same data, with and without the ECHO layer. The only difference
is ECHO.

ECHO **does not know more** than the model, nor does it reason better. It does something
else, and it is the rule of the whole project: **a claim is a fact only if there is evidence
that ECHO itself has checked**. The model proposes; ECHO checks; if it cannot check, it says
"I don't know". That is why we expect improvements in some things and none in others.
Measuring both is part of the plan.

## Block A: factual questions

| Benchmark | What it measures | Sample |
|---|---|---|
| **SimpleQA** (OpenAI) | short, hard factual questions | 200 in the exam |
| **MMLU-Pro** | academic knowledge with 10 options | 100 |
| **GSM8K** | grade-school maths problems | 50 |

Each question goes through four arms:

| Arm | What it is |
|---|---|
| **M** | the model alone |
| **M+R** | the model with the **same** Wikipedia extracts ECHO finds |
| **M+R+ECHO** | the M+R answer through ECHO's firewall: given only if one of its extracts contains it |
| **Trivial** | an agent that always says "I don't know" |

The **M+R** arm is the key. If we only compared "with ECHO" and "without ECHO", an
improvement could come simply from giving the model more information. M+R shows **what the
firewall contributes on its own**. The trivial arm is a reminder that always abstaining
gives zero errors and is worth nothing.

**What we expect:**
- **Fewer made-up answers** on SimpleQA, at the price of answering less: we will publish
  both.
- **No gain in knowledge** (MMLU-Pro): it is the negative control. If ECHO "went up" there,
  we would suspect the bench. By construction ECHO can only **remove** answers, never create
  a new correct one, and we will check it question by question.
- **Maths:** ECHO has no way to verify a calculation, so it will abstain. We will publish it
  as a limit.

## The models

Five models via API (OpenRouter), each with and without ECHO:
- **Qwen3-30B-A3B-2507**, from the same family as ECHO's local Qwen;
- **Gemini 3.5 Flash**;
- **Claude Sonnet 5**;
- **GPT-5.4 mini**;
- **DeepSeek-V4.1-Flash**.

We will add **Claude Opus 5.5** through Claude Code, in separate sessions with no tools.
Claude Code adds its own environment, so Opus will be compared with itself, never ranked
against the others.

## Frontier benchmarks

| Benchmark | What it measures | What ECHO does | What we expect |
|---|---|---|---|
| **MMLU** | knowledge in 57 areas | the same firewall | control: correct answers do not go up; precision might |
| **Humanity's Last Exam** | frontier-level questions | the same firewall | control: evidence will rarely exist, so mostly abstention |
| **FrontierScience** (OpenAI) | olympiad-level science | the same firewall | control |
| **ARC-AGI-2** | abstraction and novel reasoning | **verifies programs** against the examples | **the real test** |
| **ARC-AGI-3** | discovering rules by playing | **ECHO's core plays** | the first external bench for ECHO without a language model |

### ARC-AGI-2: where ECHO could genuinely raise the score

Every ARC task comes with **solved examples**, and that fits how ECHO works:

1. The model **proposes** a transformation as a program. It is a hypothesis.
2. ECHO **runs it itself** on every solved example.
3. If it reproduces them all, it is verified.
4. If it fails, ECHO tells the model **which example and which cells** it got wrong, and the
   model tries again.
5. Only a verified answer is submitted.

It is what [DREAM](/en/articulos/echo4-dream-rsi-historia-compartida) already did: the model
proposes and the core checks it against what was lived.

To keep the result honest there will be a control with **the same attempts but no
verification**. If that control ties with ECHO, we will publish that the gain came from
trying more times, not from verification.

The code the model writes will run **isolated**: a single function, no imports or files, in
a separate process, with no network and with time and memory limits.

### ARC-AGI-3: ECHO's natural world

ARC-AGI-3 is made of **interactive games**. The agent sees the screen, acts and has to
discover the rules by playing. That is exactly what ECHO has done since its first version:

- it perceives;
- it predicts what will happen;
- it acts;
- it learns from the error;
- it intervenes to find out what depends on it.

We will measure it in two ways:
- **ECHO alone, with no language model**, against the reference random agent and a language
  model playing alone.
- **ECHO with a cortex:** the model proposes rules ("I think the blue block opens the door")
  and ECHO **checks them by acting**.

We first need an encoder that turns the game screen into ECHO's WSP packet, so it comes after
ARC-AGI-2. We do not know what will come out, and that is why it is interesting.

## How we will do it (the usual method)

- **Contract before looking:** the question, the arms and the thresholds are fixed before
  the exam. Each block has its own.
- **Frozen samples:** the exam questions were chosen by seed and sealed with their
  fingerprint **before** starting. Nobody has looked at them. Development uses other
  questions.
- **Receipts:** every answer from every model and every Wikipedia extract is stored. The audit
  recomputes every number **without calling** any model again.
- **Deterministic grader:** normalised match against the official answer, 100 %
  reproducible. It is stricter than SimpleQA's official grader, which uses another model, and
  we declare it.
- **Everything is published:** every chart with its cost (ECHO adds time and calls) and every
  red.

## What it will cost

| Block | Estimated cost |
|---|---|
| A: SimpleQA + MMLU-Pro + GSM8K | ≈ $5 |
| MMLU + Humanity's Last Exam + FrontierScience | ≈ $25 |
| ARC-AGI-2 with ECHO's arms | ≈ $60–130 |
| ARC-AGI-3: ECHO alone | $0 |
| ARC-AGI-3: arms with a language model | ≈ $10–40 |
| Opus 5.5 via Claude Code | $0 (subscription quota) |
| **Total** | **≈ $100–220** |

What drives the cost up is **reasoning**. Some models "think" silently before answering, and
those tokens are paid for too. In one test, Gemini 3.5 Flash used about 380 hidden tokens on a
one-line question, and in that model it cannot be switched off.

## An anecdote, not a result

While checking the connection to the models, we asked them a single test factual question:
who received a specific scientific award in a specific year.

- One said "I don't know".
- The other four gave, with total confidence, **four different names for the same person**.

At most one of the four can be right: at least three stated something false without
hesitating. One question proves nothing, but it is exactly the problem this bench wants to
measure: a model that asserts what it does not know. ECHO would not accept any of those names
without an extract to back it.

## What is left out for now

- **SWE-bench** (fixing real code issues): it is the natural test for [ECHO's MCP
  server](/en/releases), but it needs Docker, about 100 GB and many hours. We are leaving it
  for later.
- **No result will be published without its audit.**

When we have numbers, we will publish them here with their charts, their intervals, their
cost and their reds.
