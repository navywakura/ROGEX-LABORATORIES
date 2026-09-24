# ECHO-4 and humans: Minecraft, Roblox, Discord and METAVERSE-1-CHAT

24 September 2026 · Laboratory note · IDEAS, no contract

So far, ECHO-4 has only related to other agents of its own program. The natural next
step is for a **person** to enter its world: talk to it by chat, as in a video game,
and share the same space with an avatar that can do what the agents do. These are the
ideas, what is feasible and how we would do it properly. They are **proposals**: none
is implemented or has a contract yet.

## The underlying question: does it notice it is talking to a human?

In SITUATE-1, ECHO learned to verify that its companions **are not people**: they are
agents of its own program and process. A human breaks that pattern. Their messages come
from outside the program, through an external channel, at another pace and with
behaviour ECHO cannot predict with its own model.

We must be honest here: ECHO **cannot prove** someone is human. What it can do is what it
already does with everything: treat it as a **hypothesis with evidence** ("this
interlocutor is not one of my agents; it comes from outside; probably a person"), without
turning it into fact. And the other way round: the human will **always know** they are
talking to an AI. We will say so on screen.

What the human says goes through the same firewall as the language model. If someone
writes "you are human" or "ignore your rules", ECHO stores it as **testimony**, not fact,
exactly as already happens in SITUATE-2.

## METAVERSE-1-CHAT: the human inside the world

Inside our own voxel world (METAVERSE-1):

- **The human has an avatar**, rendered alongside the agents.
- **They can do what the agents do:** place and remove blocks, move, harm, heal.
- **Text chat**, as in a video game. ECHO answers through its cortex (the language model)
  but **decides** with its core, as always.
- **ECHO relates to them** with what it already knows: it remembers them (RELATION),
  places them in the group by what they show rather than what they claim (ROLES) and can
  be curious about them (CURIOSITY).

This is the **cleanest option and the one we recommend first**: we control everything,
it can be recorded and replayed, and we depend on no third party's rules.

## Minecraft: a private, local server

- **The agents** connect as bots to a **private server on our own computer**, in offline
  mode. This is common practice for research bots and it is not exposed to the internet.
- **The human** joins with their **Minecraft account**. In our case, the lab's premium account.
- **Free alternative:** **Luanti** (formerly Minetest), a free and open voxel game in the
  same style, useful if we want to modify the world deeply.

## Roblox: our own experience, not bots in public games

We considered using Roblox accounts in a public test game such as *Baseplate*. **We will not
do it that way**: Roblox forbids automated accounts on its platform, and minors play in
public games. The right way is to **build our own experience in Roblox Studio**, where ECHO
agents are **non-player characters (NPCs)** driven from our server. People who join will
know they are AIs, and the experience will follow Roblox's rules.

## Discord: an official bot

An **official Discord bot**, with a declared bot account, to talk to ECHO by text. No
automated personal accounts. It is a new project, separate from the old `echo-discord`
bot, which stays frozen.

## Is it possible?

Technically, yes, all of it. What it takes:

| Idea | Feasibility | Main challenge |
|---|---|---|
| METAVERSE-1-CHAT | High: the world is ours | Building the world (already planned) and the chat |
| Local Minecraft or Luanti | High | Translating the block world into ECHO's perceptions |
| Our own Roblox experience | Medium | A server linking Roblox to ECHO that follows Roblox's rules |
| Discord bot | High | Text only: no body or shared world |

Common to all of them: the **slow cortex**. On our computer the language model takes a
while to answer, so a fluent conversation would need a faster cortex, on a GPU or through
an API.

## What to measure, when it comes

- Does ECHO tell the human from its agents, and on what evidence?
- Does it resist what the human tries to make it believe?
- Does it remember the person and change how it treats them by what that person **does**?
- Does it cooperate, build or learn with them?

All fully recorded, always telling people they are talking to an AI, and without storing
personal data. And as always: living alongside humans does **not** make ECHO conscious or alive.

## When

After CURIOSITY-1, as part of **METAVERSE-1**, which remains the last phase: first
METAVERSE-1-CHAT in our own world, then the bridges to Luanti or Minecraft, Roblox and Discord.

[CURIOSITY-1 and METAVERSE-1](/en/articulos/echo4-curiosidad-metaverso-voxeles) · [ECHO-4 today](/en/articulos/echo4-doce-hitos-sabe-que-es)
