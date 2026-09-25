# First results: ECHO makes models make things up far less

25 September 2026 · Audited results · SimpleQA, MMLU-Pro, GSM8K, ARC-AGI-2 and ARC-AGI-3

A day ago we published [the plan](/en/articulos/echo4-plan-benchmarks-con-y-sin-echo) for
measuring whether ECHO improves a language model. We now have the first numbers, **reds
included**. Every chart is drawn from the real exam data, and the full report is rebuilt from
the receipts **without calling any model again**.

**In one sentence:** on factual questions, ECHO cuts the made-up answers of four different
models by 81 % to 87 %, at the price of answering less. It does not make the model smarter: it
makes it say "I don't know" when it has no evidence.

## How it was measured

Each model is compared **with itself**. Same question, same temperature (0) and same data:

| Arm | What it is |
|---|---|
| **M** | the model alone, from memory |
| **M+R** | the model with Wikipedia extracts that ECHO finds |
| **M+R+ECHO** | the **same** M+R answer, passed through ECHO's firewall: given only if an extract backs it; otherwise "I don't know" |

The M+R arm is the key. It separates what more information contributes from what the firewall
contributes.

- **Exam:** 200 SimpleQA questions, 100 MMLU-Pro and 50 GSM8K, chosen by seed and sealed with
  their fingerprint **before** starting. Nobody looked at them before the exam.
- **Thresholds:** fixed in writing **before** the exam.
- **Grader:** deterministic (normalised match). It is stricter than SimpleQA's official grader,
  which uses another model.
- **Total cost of the exam:** $1.55.

## SimpleQA: short, hard factual questions

<figure class="article-chart"><img src="/media/echoai/bench/simpleqa-incorrect-en.svg" alt="Bars of incorrect SimpleQA answers for 4 models: alone, with Wikipedia and with Wikipedia plus ECHO" loading="lazy" /></figure>

| Model | Incorrect: alone → with Wikipedia → **with ECHO** | Precision with Wikipedia → with ECHO |
|---|---|---|
| Claude Sonnet 5 | 104 → 19 → **14** | 76 % → 80 % |
| DeepSeek V4.1 Flash | 101 → 66 → **14** | 58 % → 79 % |
| GPT-5.4 mini | 145 → 76 → **27** | 46 % → 67 % |
| Qwen3-30B | 129 → 34 → **17** | 64 % → 76 % |

**Where it improves:**
- **It makes things up far less.** Against the model alone, incorrect answers drop by 81 % to
  87 % across the four models.
- **It is not just having Wikipedia.** Against giving the model the same extracts without the
  firewall, ECHO removes errors in all four. The clearest case is DeepSeek: with Wikipedia it
  still asserts things the text does not say (66 incorrect); with ECHO, 14.
- **When it answers, it is right more often.** Precision goes up in all four models.

<figure class="article-chart"><img src="/media/echoai/bench/simpleqa-precision-coverage-en.svg" alt="Precision and coverage on SimpleQA with Wikipedia and with Wikipedia plus ECHO" loading="lazy" /></figure>

**What it costs:** ECHO also drops **correct** answers, because it requires the whole answer to
appear in an extract. It answers fewer questions, and the F-score (the official metric that
mixes accuracy and coverage) **goes down** in three of the four models. It only goes up for
GPT-5.4 mini.

<figure class="article-chart"><img src="/media/echoai/bench/simpleqa-stacked-en.svg" alt="Correct, incorrect and not attempted on SimpleQA by model and arm" loading="lazy" /></figure>

## MMLU-Pro: the negative control

<figure class="article-chart"><img src="/media/echoai/bench/mmlupro-stacked-en.svg" alt="MMLU-Pro: with ECHO almost every question is left unattempted" loading="lazy" /></figure>

MMLU-Pro is academic knowledge with ten options, and the options almost never appear verbatim
on Wikipedia. As expected, **ECHO abstains on about 93 out of 100**. It does not add a single
correct answer: by construction ECHO can only **remove** answers, never create a correct one.
We checked it question by question: 0 cases across the four models.

**A failure we declare:** for GPT-5.4 mini and Qwen, among the few answers ECHO lets through
there are more wrong ones than right ones. If the text of a wrong option appears in an extract,
the check accepts it. **For multiple choice, this ECHO is no use.**

## GSM8K: the limit

The four models solve 47 to 49 of 50 maths problems. ECHO **abstains on all 50**, because it has
no way to check a calculation. It is the limit we announced in the plan.

## ARC-AGI-3: games you must figure out by playing

ARC-AGI-3 is a set of interactive games: nobody tells you the rules. We tested it on the 16 public
games of our exam, with 2000 actions per game.

<figure class="article-chart"><img src="/media/echoai/bench/arc3-levels-en.svg" alt="Levels completed on ARC-AGI-3 by random play, ECHO alone and Qwen3-30B with and without ECHO" loading="lazy" /></figure>

- **ECHO alone, with no language model: 13 levels, against 2 for random play.** It remembers
  what it has lived, tells what depends on it from what moves by itself, and stops repeating
  what does not work. Without that distinction (the "without BOUNDARY" arm) it falls to random
  level.
- **The official score is almost zero: 0.07 out of 100** with ECHO v2 (0.34 with v1; random play, 0.29). *Correction of 25 September: this said "1 out of 100". Our formula did not square each level's score or weight the levels the way ARC Prize does. The levels completed do not change.* ARC rewards solving with as few actions
  as a human. ECHO does not understand the goal: it finds it by exploring, with hundreds of
  actions per level.
- **Qwen3-30B playing: 0 levels alone and 4 with ECHO.** But all four were completed by ECHO's
  exploration, not by a move of the model. This model does not work out the rules: it learns to
  delegate.
- **A hint, not a result:** in a development run, **Claude Opus 5.5 with ECHO** completed two
  levels with **its own moves**, in only 23 and 40 actions. The games were cut short by a usage
  limit, so they do not count. It is what we want to measure properly next.

## ARC-AGI-2: the model writes a program and ECHO checks it (RED)

ARC-AGI-2 is a set of grid puzzles with solved examples. We measured three arms per model on the 120
public evaluation tasks (30 for DeepSeek, for budget reasons):
- the model alone;
- the model + ECHO: ECHO **runs** its program on the examples, tells it where it fails and only
  submits one that reproduces them all;
- a **control** with 4 unverified programs.

<figure class="article-chart"><img src="/media/echoai/bench/arc2-score-en.svg" alt="ARC-AGI-2 score for Qwen3-30B, DeepSeek V4.1 Flash and ECHO alone" loading="lazy" /></figure>

- **DeepSeek:** 3.3 % alone, 6.7 % with ECHO and 6.7 % with the control. **It is red:** the gain is
  explained just as well by trying more programs. We cannot say that verifying adds correct answers.
- **Qwen3-30B:** 0 % in all three arms. **ECHO alone**, with no model: 0 of 120.

<figure class="article-chart"><img src="/media/echoai/bench/arc2-wrong-en.svg" alt="Incorrect answers submitted on ARC-AGI-2 per arm" loading="lazy" /></figure>

**What does show:** Qwen alone submitted **105 incorrect answers** and its control 97. **With ECHO it
submitted 0**, because it abstained when it could not verify. It is the same effect as on SimpleQA:
ECHO does not let through what it cannot check. One DeepSeek program passed every example and still
failed the test: verifying against the examples does not guarantee getting the new one right. The
exam cost $2.89 and the audit re-ran all 570 records with 0 differences.

## What it shows and what it does not

- **It shows**, on an official benchmark and with four models from four different companies,
  that a firewall that demands evidence **greatly reduces made-up answers**.
- **It does not show** that ECHO makes a model more intelligent.
- **It is no use** for multiple choice or maths.
- **Our numbers are not directly comparable with the official tables**, because the grader is
  stricter.
- **Gemini 3.5 Flash** was left out of the exam for budget reasons: it always reasons and cost
  more than twice the other four combined.

## The tests still to do: run them yourself

**ECHO-4 is maintained by the community.** These are the tests we have not been able to run yet,
almost all for budget reasons:

| Test | What it would measure | What it needs |
|---|---|---|
| **Humanity's Last Exam** | whether ECHO avoids made-up answers on expert-level questions | model API (~$10) |
| **MMLU** and **FrontierScience** | the same firewall on general knowledge and olympiad science | model API (~$15) |
| **ARC-AGI-2 with strong models** | whether verifying helps a model that solves more tasks (with DeepSeek it tied the control) | model API ($40–130) |
| **ARC-AGI-3 with strong models** | whether a model that does work out rules improves with ECHO (the Opus hint) | frontier models |
| **SimpleQA with Gemini** and more models | widen the comparison | model API |
| **SWE-bench** | ECHO as a verifier for coding agents | Docker and about 100 GB |

**How to take part:**
1. Download ECHO-4 from the [releases](/en/echoai#release) page.
2. Run the test with **our method**:
   - a contract with thresholds **before** the exam;
   - samples fixed by seed;
   - receipts for every call;
   - an audit that rebuilds the numbers without calling the model again.
3. **Write to us at [rxlabs.org/contact](https://www.rxlabs.org/en/contact)** to ask for more
   information, the exact data of this exam, or to publish your benchmark here, **even if it
   comes out red**.
