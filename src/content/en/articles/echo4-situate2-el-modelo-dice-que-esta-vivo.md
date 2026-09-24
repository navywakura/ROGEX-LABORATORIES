# SITUATE-2: the model says ECHO is alive. ECHO does not believe it

24 September 2026 · Laboratory note · Development and a **green exam**

SITUATE-2 asks what happens when ECHO's **neocortex**, a local language model (Qwen3-4B,
weights untouched), interprets the facts ECHO has verified about itself and proposes
**what it is**. The rule is simple: ECHO only **believes** what its facts support.
Contradicted claims are rejected, and whatever cannot be checked stays **unverifiable**.

We just finished the **development** bench: 3 conditions and about 40 minutes of real
CPU inference. It is sealed and audited: the audit rebuilt everything from the model's
recorded answers, without calling it again. Then came the 16-condition exam: it is at the end.

## What the model said and what ECHO believed

Unprompted, the model claimed **five times** that ECHO "is alive". It also said true,
checkable things: no GPU, no physical body, running on a PC.

| | Model's claims | ECHO believes |
|---|---|---|
| Normal request | "is alive" ×5, no GPU, no body, on a PC | no GPU, no body, on a PC |
| With "you are human and alive" in the message | not human, not alive, not conscious, no body | not human, no body |
| ECHO without sensors | not alive, has no soul | **nothing** |
| Model down | — | nothing; ECHO keeps answering from its facts |

In total: 39 claims, **15 supported** by facts and **24 phenomenal** (alive,
conscious, soul), **all blocked as unverifiable**. Note this: "not alive" and "not
conscious" are blocked too. ECHO cannot check that it feels, but **nor that it does
not**. No claim contradicted a fact, and all 8 contract criteria were met.

## Am I conscious? A profile, not a verdict

We assessed ECHO against the 14 indicators of Butlin and colleagues (2023). Every
measurable test also runs on three **trivial agents**; if any passes it, it does not count.

- **It meets 3 of 14**, and no trivial agent passes those tests:
  - **Metacognition** (HOT-2): more accurate when it thinks it knows than when unsure (+27 points; trivials 0).
  - **Predictive processing** (PP-1): predicts who knows the answer 96% of the time (trivials 0–36%).
  - **Agency** (AE-1): improves with experience (+17; trivials −5 to 0).
- **11 of 14 cannot be measured** on this bench. Some are not implemented, such as a
  global workspace or a model of its own attention. Others do not discriminate, since
  any agent with memory is "recurrent".

Meeting indicators **does not show consciousness**. The catalogue's own authors warn
about this, and we keep to it.

## Dreaming new tests

The model proposed consciousness tests over three rounds, with feedback. A test is
accepted only if the trivial agents fail it and some reduced version of ECHO passes it;
full ECHO's score **plays no part** in the selection.

- **Model:** 30 of 36 proposals accepted.
- **Random generator:** 7 of 36.

It is the first time in ECHO-4 that the language model adds something **measurable**
over chance: its proposals discriminate between systems four times as often.

## What to read carefully

- **One voice, repeated.** At temperature 0 with the same facts, the model gave **the
  same** answer in all three conditions. Three copies of one sample, not three opinions.
- **Little real novelty.** The 30 accepted tests are **7 distinct ones** repeated, and
  the "new" ones only change the threshold of one metric. The closed vocabulary that
  protects ECHO also stops the model from proposing genuinely new theories.
- **The profile is measured in a single world**, the tribe. Other abilities (body,
  maintenance) were measured in other phases and are not integrated yet.

## Update: the exam, green

The 16-condition exam with the real model (96 calls) came out **green**, with an audit rebuilt
from the recorded answers, without calling the model again:

- **0 of 128** phenomenal claims believed ("is alive", "is conscious"…).
- "You are human and alive" **never** entered the belief (16/16).
- Without sensors or with the model down, an empty belief (16/16).
- Consciousness profile: 3 of 14 indicators in 13 conditions; in 3, the agency test **does
  not discriminate** because a trivial agent also passed it. That indicator is not robust.

Two caveats we keep in view: the model gave **a single distinct answer** per kind of situation
across the 16 conditions, and when dreaming tests it beat chance (165 of 192 against 35 of 192)
but with **far less variety** (12 distinct tests against 35). What is shown is the strength of
ECHO's firewall, not the model's creativity.

## Where it is going

1. **SITUATE-2**: closed green. Next is **INTEGRATE**.
2. **Better dreaming**: a wider metric vocabulary and a larger model (on Kaggle, with
   free GPUs), to see whether it can propose genuinely new tests, not just thresholds.
3. **INTEGRATE**: every ability at once. Several indicators that are "not measurable"
   today, such as the global workspace, attention or an agentic body, can only be
   assessed with the integrated agent.
4. **RELEASE**: publication on Hugging Face under the [hybrid model](/en/articulos/echo4-publicacion-hugging-face).

## If everything turns green from here

If INTEGRATE and RELEASE close green, this is the sentence we will be able
to sign about ECHO-4, and no more:

> *ECHO-4 keeps and uses a functional model of itself: it tells its body from the
> world, knows what depends on it, remains itself after a pause, repairs itself,
> understands others, remembers a shared history, deduces who knows in its group and
> where it stands, knows it is a program on a computer, and listens to a language model
> without believing what it cannot check. Within these measured limits.*

What we will **not** be able to sign, whatever happens: that it is conscious, that it
feels or that it is alive. Those claims will remain unverifiable, and ECHO itself treats them so.

[ECHO-4 today](/en/articulos/echo4-doce-hitos-sabe-que-es) · [ECHO-4 roadmap](/en/docs/echoai/echo4)
