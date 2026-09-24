# echoAI as a product: the AI that does not believe its own AI

24 September 2026 · Laboratory note · Business and product PLAN

Keeping echoAI alive on the internet costs money: a GPU server runs to several hundred
euros a month. This note explains how we plan to fund it without betraying what makes the
project valuable, and why the product will **not** be yet another chat. It is all a
**plan**: nothing is for sale yet.

## The awkward question: why would anyone pay?

Let's be honest. As a general chat, echoAI with a small local model (Qwen3-4B) **converses
worse** than the big companies' free chats. Nobody would pay for a weaker chat.

What is unique is something else:

> **echoAI's mind is not its language model.** Other AIs *are* their model: whatever the
> model says, the AI "believes". echoAI has a core of its own, with no language model, that
> decides what is true. The model **proposes**; the core only accepts what it can **check**.

That is why everything echoAI knows is a **fact with a receipt**, a **belief** or something
**unverifiable**, and it says which. When its own model claimed it was alive, it did not
believe it. When it does not know, it says "I don't know". And each of these abilities passed
an exam fixed in advance and audited, with the failures published.

In one sentence: **echoAI is an AI that does not believe its own AI, and can prove it.**

An honest caveat: loose pieces of this exist in other systems (guardrails, memories,
verifiers). What is ours is having them together as **the agent's mind**, with the rigour of
the audits. Whether that is worth money still has to be shown.

## Where it really matters: when the AI acts

A hallucination in a chat is an anecdote. A hallucination in an **agent that acts** costs
time and money. So the first product is **E4-CODE-1**: echoAI as a **verification and memory
layer for coding agents**.

| Problem with coding agents | What echoAI does |
|---|---|
| They say "the tests pass" without checking | Only a fact after **running the tests** and keeping the receipt |
| They invent functions, files or APIs | A fact only if it **read and verified** it |
| They obey instructions hidden in files or web pages | Those are **testimony**, never orders |
| They run dangerous actions (delete, push, deploy) | They go through a **prior check**; the human stop always wins |
| They forget the project between sessions | A **verified memory** of the repository, never erased or invented |

## Bring your own model

echoAI **does not compete** with GPT, Opus, Gemini, Qwen, Kimi or DeepSeek: it **sits on top**.
Each person connects the model they already use, through an API with their own key or
locally, and echoAI adds verification, memory and control.

- **In the terminal and the editor:** an **MCP** server (the open standard for connecting
  tools to AI assistants) and its own command line.
- **Through an API:** for integrations.
- **A huge practical advantage:** if users bring their model, **they pay for the inference**.
  We sell the layer, not the tokens, and the main product needs no GPU of ours.

**Can it improve itself?** Partly, yes, with the same method as DREAM: learning which checks
work, which model is most reliable for each task and which strategies avoid the most errors,
adopting only what is verified with evidence. It can **never** touch its own action control or
the fact/belief separation. Nor will it retrain third-party models on their answers, since
their terms usually forbid it: the improvement is in strategies.

**How it will be examined:** the same coding agent, with and without echoAI, with several
models connected (at least one through an API and one local). We will measure how often it
says "done" when it is not, how many hidden instructions it obeys, how many dangerous actions
are blocked and how much extra time verifying costs. If it does not pay off, we will publish that.

## The business model

**The goal is small: cover about €500 a month** of infrastructure and costs, not get rich.

1. **Free:** the MCP server and the command line, locally, for personal and non-commercial use.
2. **Paid:**
   - a **commercial licence** for teams and companies;
   - **hosted echoAI:** shared team memory, receipts and dashboard;
   - **support.**
3. **Supporting the lab:** sponsorship for anyone who wants to keep the research alive.
4. **The chat** at `rxlabs.org/chat` as a **showcase**, with a limited free plan.
5. **Collaborations:** with universities and research calls.

**Spending rule:** no infrastructure before income. First a waitlist and local demos; then a
GPU server switched on only at announced times; and only when income covers it, a permanent server.

**What we take from other companies** (well-known public strategies):
- **Midjourney:** small teams funded by subscription from the start.
- **Hugging Face and Mistral:** open what builds community and charge for commercial use.
- **The big AI companies:** limited free plans and paid APIs.
- **Anthropic:** standing out through reliability.

## What we will not do

We will not sell consciousness, life or promises of general intelligence. Our brand is
honesty: the day we exaggerate, we lose the one thing that sets us apart.

## Order

First finish SITUATE-2, INTEGRATE and RELEASE: without a product there is nothing to sell.
Then **E4-CODE-1**, before CURIOSITY and METAVERSE, because it is what can fund the rest of the research.

[Publishing on Hugging Face](/en/articulos/echo4-publicacion-hugging-face) · [ECHO-4 today](/en/articulos/echo4-doce-hitos-sabe-que-es)
