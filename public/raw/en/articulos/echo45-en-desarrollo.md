# ECHO-4.5 is in development: an untrained ECHO that learns concepts and plays to discover rules

26 September 2026 · In development · ECHO-4.5 · ARC-AGI-1, 2 and 3

After publishing [ECHO-4's benchmarks](/en/articulos/echo4-benchmarks-resultados) we asked ourselves
an uncomfortable question: ECHO is very good at saying "I don't know", but **on ARC it knows almost
nothing**. On ARC-AGI-3 it completes levels by exploring, with hundreds of actions, and its official
score is 0.07 out of 100. On ARC-AGI-2, without a language model, it solved 0 of 120.

That is how **ECHO-4.5** was born: an **untrained ECHO seed** that is cloned into sandboxes and
**learns there**. It learns concepts from what it solves and reuses them on problems it has never
seen. This note says where we are: four phases green, one red, and what is left.

<figure class="article-chart"><img src="/media/echoai/echo45/g50t-portada.png" alt="ARC-AGI-3 game g50t: ECHO's square reaches the U frame after opening the gate" loading="lazy" /></figure>

## The idea

- **A seed that knows very little:** a few dozen small operations on grids.
- **Clonable sandboxes:** each copy has its own concept library, its own learning curve and a
  **hash-chained journal** that records every fact and every concept born.
- **It learns in two phases:**
  - **awake**, it searches for programs and only keeps as a fact what reproduces **every** example;
  - **asleep**, it turns what repeats across different tasks into a new concept.
- **The official evaluations are sealed by code** and are not opened until the final exam.

## Where we are

<figure class="article-chart"><img src="/media/echoai/echo45/progreso-en.svg" alt="ECHO-4.5 progress: held-out tasks from 15 to 24 and score on development games from 0.506 to 0.678; S4 red" loading="lazy" /></figure>

| Phase | What it does | Result |
|---|---|---|
| **S0** | seed, sandboxes and a gym of 1009 tasks | ✅ done |
| **S1** | seeing grids as **objects** | ✅ from 15 to **21** held-out tasks |
| **S2** | learning better: intuition, a wider vocabulary and deterministic search | ✅ from 21 to **24** |
| **S3** | seeing **games** as objects | ✅ score on development games from 0.506 to **0.678** |
| **S4** | working out a game's **goal** and planning | 🔴 **in progress**: two iterations red |
| **S5** | our own game simulator for training | pending |

The "held-out tasks" are 201 training tasks that ECHO **never uses to learn**. They measure whether
what it learned **transfers** to new problems.

## What we learned along the way

- **Learning is useless if you cannot reach the answer.** For three training rounds learning added
  nothing, because the vocabulary could not reach the solutions. Searching four times longer changed
  nothing either. What worked was **widening the vocabulary**: grids split by lines, outlines, holes,
  counting objects.
- **More vocabulary, added blindly, makes things worse.** Adding operations just like that **made
  it worse**. It needed an **intuition** that tries first what has worked most often. We also trained
  a neural network on a GPU with 150,000 tasks "dreamt" by ECHO itself: it is right 79 % of the time
  on invented tasks, but on real ones it ties with the simple intuition.
- **ECHO discovers who it is.** In keyboard games it works out by itself which object is its body,
  because it is the one that moves when it acts.
- **Knowing who you are is not enough without a goal.** Exploring without knowing where to go does
  not add levels.

## The most interesting red: understanding a mechanic

<figure class="article-chart"><img src="/media/echoai/echo45/g50t-copia-interruptor.png" alt="Five frames of the game g50t: a red copy on the switch opens the gate and the square reaches the U frame" loading="lazy" /></figure>

In the game **g50t** you control a maroon square in a maze. The goal is a U-shaped frame of the same
colour. A gate blocks the way. The **ACTION5** key leaves a **copy** of you and sends you back to
the start. If you leave the copy **on the switch** (the end of the light-blue pipe), the gate opens
and you can reach the goal.

ECHO did it **by chance**, after 1800 actions. A person works it out in a few dozen. When we measured
with three seeds per game we saw that this win was luck: it happened in 1 of 3. That is why S4 is
still red.

**What is missing now is causality.** ECHO has to notice that "when something of mine was at that
spot, the gate changed", check it by acting, and plan in two steps: first the cause, then the goal.
It is S4's third iteration.

## How we will measure it

**The final ECHO-4.5 exam** will compare the trained ECHO with the untrained seed:

| | Requirement |
|---|---|
| **ARC-AGI-1** | above 0 % and above the seed |
| **ARC-AGI-2** | above 0 % and above the seed |
| **ARC-AGI-3** | complete at least **20 % of the levels** of 16 games it has not touched (11.6 % today) |
| **Audit** | full |

We are also competing in **ARC Prize 2026** on Kaggle as team RxLabs. We start very low: today the
ARC-AGI-3 leader has 19.45 points and we have less than 1. What interests us is measuring **how much
ECHO contributes** and reporting it in the paper track.

## What we do not claim

- That ECHO "understands" like a person. Here "understanding" means reusing a verified concept on
  new tasks.
- That it will win ARC Prize.
- That the results about ECHO's "self" are consciousness: they are functional and measured from
  outside.

The technical side is in the [ECHO-4.5 documentation](/en/docs/echoai/echo45). We will publish every
phase, green or red.
