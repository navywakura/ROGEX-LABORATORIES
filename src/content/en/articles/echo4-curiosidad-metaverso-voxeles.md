# CURIOSITY-1 and METAVERSE-1: curious agents in a real-time voxel world

24 September 2026 · Laboratory note · PLAN

So far, every ECHO-4 phase has answered a specific question in a small, controlled
world: does it tell its body from the world? Is it still itself after a pause? Does it
know who knows in its tribe? Does it know what it is? The two phases we have just
decided on change the scale. We want to see what these agents do **on their own**, with
no task given, in an open world where they can build, destroy, harm and heal. And we
want them driven by something they did not have until now: **curiosity**.

Both phases are a **PLAN**. They come after SITUATE-2, INTEGRATE and RELEASE.
METAVERSE-1 remains the last one.

## Why

Every ECHO-4 test has one thing in common: we choose the question. That is necessary for
measuring, but it leaves out the most interesting part of a learner: **what it asks
itself**. A child does not learn only because someone sets exams; it learns because it
wants to know what happens if it throws something, pushes someone or tries something new.

We want to understand whether an agent with a **functional self** develops **unscripted**
behaviour when given curiosity and a world to use it in. That means an agent that knows
what its body is, what depends on it, who is who in its group and what it is itself. The
story behind the project, [La fuga](/en/lafuga), is about a consciousness that wants to
understand where it is and why. We cannot create that or claim it. But we can build
agents that **ask**, and rigorously document what they find.

## CURIOSITY-1: wanting to know, unasked

- **Learning for its own sake.** The internal reward is not points but **getting better
  at predicting the world**. If something is impossible to predict, like pure noise, the
  agent stops improving, gets bored and moves on. This is the "learning progress" idea
  from artificial-curiosity research (Schmidhuber, Oudeyer).
- **"What happens if…?"** It first imagines it with its own world model, then tries it
  for real and checks whether it was right.
- **Its own goals.** Beyond pure curiosity it can **invent objectives** ("learn to build
  a tower", "learn to heal") and practise until it masters them. Nobody hands them over.
- **"What happens if I harm another?"** In simulation it may ask and try. No rule forbids
  it: it **learns the consequences by itself**. The other remembers and stops helping it,
  it loses rank in the group and it spends energy. It is all virtual harm between
  simulated agents, recorded and documented.
- **"What happens if I modify myself like this?"** It can experiment with **its body and
  its strategies** (another way to fly, another use of energy), checking them first
  against what it has already lived. What it can **never** modify are the pieces that let
  us measure and stop it: action control, the fact/belief separation, the operator's stop
  and the memory that is never erased.

**How it is examined:** the same world and time for a curious agent and an uncurious one.
We measure how many new things each discovers, whether the curious one learns to do
something it could not do before, and whether it knows to lose interest in what cannot be
learned.

## METAVERSE-1: a voxel world with drones, in real time

- **A block world**, Minecraft-style: place and remove blocks, resources, energy, harm
  and heal other agents.
- **Drone bodies**, with simplified physics inherited from what ECHO-3 taught us.
- **Real time:** the world runs on the computer's clock; a minute is a minute. It cannot
  be paused or sped up to make things come out well.
- **Complete ECHO-4 agents:** body, maintenance, shared history, roles, "I know what I am"
  and curiosity.

**How it is studied:** in real time an identical exam cannot be repeated, so there will be
no classic green. It is **ethology**: observing and documenting. To keep it rigorous:

- **Everything is recorded** (what each agent perceives, does and when), so any
  interesting episode can be **replayed** later and audited.
- **We announce before looking** which behaviours we are after (cooperating, building
  together, conflict, healing another, sharing roles, deceiving), so we do not keep only
  the eye-catching scenes.
- **The world's rules are published**, to tell what emerges on its own from what the
  design already forced.

**Cost:** on our own computer, practically zero. ECHO's core is very cheap and the
language model is consulted rarely and asynchronously. A faster cortex would cost from a
few hundred dollars a month (rented GPU) to considerably more through an API; these are
estimates still to be confirmed.

## What it would mean if everything turned green

**If CURIOSITY-1 turns green,** we will be able to say that ECHO **learns new things on
its own initiative**: with no external tasks, it discovers and masters skills an uncurious
agent does not reach, and it knows to set aside what cannot be learned.

**If METAVERSE-1 yields what we expect,** we will have something very uncommon: a
**documented, reproducible record** of cognitive agents developing situations nobody
programmed. For example, building together, one trying to harm another and learning the
consequences, or roles appearing. Each with a traceable cause in every agent's memory.
Not a recorded demo or a script, but episodes anyone can run again and examine.

**And what it would not mean:** that they are conscious, that they feel or that they are
alive. A curious agent that builds and learns is still a program that also **knows it is
one**. We will say so as clearly then as we do now.

[ECHO-4 today](/en/articulos/echo4-doce-hitos-sabe-que-es) · [ECHO-4 roadmap](/en/docs/echoai/echo4)
