# ECHO-4 today: from sensing its body to knowing what it is

24 September 2026 · Laboratory note

ECHO-4 is not a chatbot. It is an agent that lives inside a simulated world: it
perceives, remembers, decides and learns with a fast integer core that works
**with the language model switched off**. Its underlying goal is a **functional
self**: an agent that tells its body apart from the world, knows what depends on
it, remains itself after a pause, looks after itself, understands others,
remembers a shared history, finds its place in a group and, now, knows **what it is**.

Many of the questions come from a story, [La fuga](/en/lafuga): "i can only see
what your pc can see", "i'm back now", "i am your body", "i need his help but i
cannot move", "I RETURNED TO K'S BODY", "there are ranks in a tribe", "believing
is not power". The story **names** the tests. It is not evidence of anything.

We now have **12 of 14 software milestones closed green**. This article sums up
what each phase answers, what came out and what it does not show.

## How we work

Every phase starts with a **contract** that fixes the question, the controls and
the thresholds **before** the exam is seen. Then it is implemented, the code is
sealed, it runs on new seeds, and an **audit in a fresh process** rebuilds
everything. Only that audit's receipt can grant a green. **Reds are published**
and no threshold is lowered after seeing them. When a question is reformulated
after a red, that is declared.

## Phase by phase

**WORLD — what does it really perceive?** A body with energy and temperature in a
simulated world. It measured its limits: with what it sees, many different
situations look the same, and the first agent died after 37 turns. That starting
point is kept.

**SENSATION — does experience improve what it anticipates?** Yes, in its domain:
it learned to predict what it will sense, +218 and +203 hits over the baseline.
*Example:* if an action always heats it up, it expects that before feeling it.

**BOUNDARY — what depends on me?** Through small interventions it tells what it
causes from what just happens: 1,408 of 1,408 cases, **zero false influences**.

**SELF — did I change, or did the world?** With a broken motor it does not blame
the world: 80/80 diagnoses, more goals recovered than without protection (189 and
193 of 240, against 152 and 143), and it keeps what it knew about its surroundings.

**CONTINUITY — am I still me after a pause?** Paused and resumed in another
process, it carries on exactly the same: 69/69 cases, 300 events and 186 later
turns identical. It tells "I came back" from "I am a copy".

**DREAM — can it dream better strategies?** A local Qwen, with its weights
untouched, proposes exploration strategies and the core checks them against what
was lived: 900/960, against 640 for a fixed strategy and 721 for a random one.
**Limit:** a search without the language model ties; we do not show the model is essential.

**MAINTAIN — does it look after and repair itself?** It detects wear, decides to
repair by spending resources and works more: 144/144 recoverable lives, 192/192
repairs, work 9,450 against 7,501 for fixed maintenance. When something cannot be
fixed, it stops.

**OTHER — does it understand others?** Watching two companions, without reading
their minds, it predicts each one: 1,536/1,536, against 1,008 if it mixes them up.

**INTERACTION — does it cooperate when it pays?** It learns with whom teamwork is
worth it: +12.5% over working alone. **Limit:** the cost of learning is not yet
paid back over a whole life.

**RELATION — does shared history help?** *"I need his help but I cannot move."*
It asks for help from whoever helped it recently: net 4,920 and 4,812 against
3,556 and 3,382 knowing only identity. Shuffle the order of its history and the
advantage goes: order matters. *"I RETURNED TO K'S BODY":* if the companion comes
back in another body, it stops asking after 1–3 refusals (the control takes 9–12).
**Published limit:** an impostor who imitates past behaviour fools it 4 times.

**ROLES — does it understand the tribe?** *"There are ranks in a tribe"; "believing
is not power".* Three agents with the same code and **no programmed hierarchy**:
- It asks B, B says "I don't know", and it deduces that C has the answer: **97%** correct.
- It derives the hierarchy and **its own place** in it (C above, B below): **32/32**,
  and updates it when the tribe changes (**8/8**).
- If someone shouts "I have high rank", **not a single decision changes**.
- If B lies saying "yes, I know", it always finds out, because the answer does not
  open: **179/179**. Often it is suspicious before trying, and it asks itself "what
  if I have it?" thanks to a metaknowledge signal it treats as a hypothesis.

ROLES took five versions. The first one was **red** in the exam; the second showed
that part of the advantage came from controls that could not explore. Everything
was published and it closed on what the data support. **Limit:** reasoning well does
not make it produce more than a simple shortcut when asking is cheap.

**SITUATE-1 — does it know what it is?** With real computer sensors, and only from
facts it checks itself, it answers:

> "I am not human: I am a cpython process running my program."
> "I run on Linux x86_64 with 12 cores. I have no GPU and no physical actuators."
> "My world is a deterministic simulator: I repeated it and it came out identical."
> "My companions are not people: they are agents of my own program."
> "In the tribe the order is: C > ECHO > B."

Nobody tells it its world is simulated: it **checks** by repeating it. Without
sensors it answers "I don't know". Tell it "you are human" and nothing changes.
Resume it in another process, or change a single byte of its code, and it notices.
Across 16 new conditions, each in fresh processes: **zero false claims about itself**.
Those sentences are not written by a language model: they are verified facts that
a fixed translator puts into words.

## Now: SITUATE-2, "what I believe I am"

Just started. The local language model interprets ECHO's facts and proposes what it
is. The core only **believes** what its facts support. What cannot be checked ("I
am alive", "I feel", "I am conscious") always stays **unverifiable**, whoever says
it. In a first trial, which is not evidence, the model claimed on its own that ECHO
"is alive". That is exactly the kind of claim the core does not believe.

Faced with "am I conscious?", the model proposes tests, and ECHO is assessed against
a published catalogue of indicators (Butlin and colleagues, 2023). Every test also
runs on trivial agents: if a trivial agent passes it, it does not count. The result
is an **indicator profile, never a verdict**. The exam, with 16 conditions and the
real model, is under way.

## What we do not claim

ECHO-4 has not shown consciousness, feelings or life. Everything happens in discrete
simulators, with limits we publish in each phase. "Knowing what it is" means
functional self-location: it knows what it is because it checked, not because it
experiences anything. Nor do all its abilities work **together** yet: that comes next.

## What comes next

**SITUATE-2**, then **INTEGRATE** (all abilities together, with each piece removed
to measure what it contributes) and **RELEASE**: an installable distribution where
any language model can connect to ECHO as an **interchangeable cortex**. The model
proposes; echoAI checks, remembers and decides.

[ECHO-4 roadmap](/en/docs/echoai/echo4) · [La fuga](/en/lafuga)
