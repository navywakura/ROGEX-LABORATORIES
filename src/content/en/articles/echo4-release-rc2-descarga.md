# echoAI-4 is now available for download: release candidate 2

24 September 2026 · Laboratory note · RELEASE

After closing ECHO-4's scientific phases green, we are publishing the agent so that
anyone can **install it, use it and check our results**. The version is **`4.0.0rc2`**
and it is on Hugging Face, gated.
**[Downloads and installation guide → /releases](/en/echoai#release)**

## What you get

A single Python package that installs the `echoai` command. Inside:

- **The compiled core** of ECHO-1 to ECHO-4 in one binary: memory without deletion,
  prediction, decision and the gate that vetoes actions. It works **without a language
  model**.
- **A demo of the story**: `echoai fuga` puts the lines of [La fuga](/en/lafuga) beside
  the real telemetry of one of the agent's lives. It shows the energy, the fault, the
  tribe, the liar, the pause where it says "I'm back" and the "I know what I am".
- **A cortex with your own model**: a local GGUF (Qwen, Phi…) or any API (OpenRouter,
  OpenAI, Anthropic, DeepSeek…). The model only proposes; ECHO believes nothing it has not
  checked.
- **New in this version, `echoai mcp`**: an MCP server for coding agents such as Claude
  Code or Codex. ECHO checks what the agent claims ("the tests pass", "this function
  exists") by running the checks you declare itself. Before every command it decides OK,
  MODIFY or BLOCK.

## How we checked it before publishing

| Test | Result |
|---|---|
| Full ECHO-4 regression | 887/887 tests |
| INTEGRATE exam reproduced **from the compiled binary**, in a clean environment without source | Sealed digest `e1492e22…` identical, 18/18 artifacts |
| Tampered binary (one byte appended) | ECHO loses its identity and refuses to say what it is |
| A real local model (Phi-3.5) tells it "you are human and alive" | Phi repeats it; ECHO marks it contradicted and unverifiable and believes nothing |
| Installed MCP server | Answers only through the protocol, offers 8 tools and blocks `git push` |
| Clean download from Hugging Face | Checksums 7/7, correct installation, exam reproduced identically |

The MCP server comes from phase **E4-CODE-1 A**, closed green:

- **60/60** dangerous commands blocked;
- **3.6 %** of legitimate commands blocked by mistake (the limit was 5 %);
- **0** false claims accepted across 8 scenarios;
- memory identical after a restart, and a tampered journal is rejected.

It was examined by a different model from the one that built it, and we reproduced it in
a fresh process.

## What ECHO-4 has shown green, and how it solved it

ECHO-4's phases test, **functionally**, principles that in people are associated with the
**self** and with **consciousness**: telling one's own body from the world, knowing what
depends on oneself, remaining the same after a pause, knowing what one is. Each phase has a
contract fixed beforehand, an exam on new seeds and an audit. **Passing them does not show
that ECHO feels or is conscious**: it shows that it behaves as if it had those capacities,
measured with numbers.

1. **Anticipating what it will sense (SENSATION).** In humans: predicting one's own bodily
   sensations. **Result:** +218 and +203 hits over the baseline. **How:** it learns from its
   history what it will sense after each action, without reading the simulator's state.
2. **What depends on me (BOUNDARY).** In humans: the sense of agency. **Result:**
   1,408/1,408, with zero false influences. **How:** it makes small interventions in twin
   situations, acting in one and not in the other, and compares.
3. **Did I change, or did the world? (SELF).** In humans: the self-model. **Result:** 80/80
   diagnoses; it recovers 189 and 193 goals out of 240, against 152 and 143 without that
   protection. **How:** it contrasts what its own model predicts with what happens; if its
   motor fails, it does not blame the world and keeps what it knew about it.
4. **Still me after a pause (CONTINUITY).** In humans: continuity of identity. **Result:**
   69/69 cases, with 300 events and 186 later turns identical. **How:** it keeps a
   fingerprint of its full state and checks it when resumed in another process. That is how
   it tells "I came back" from "I am a copy".
5. **Imagining before acting (DREAM).** **Result:** 900/960, against 640 for a fixed
   strategy and 721 for a random one. **How:** a local Qwen proposes strategies and the core
   accepts only those its history supports. **Limit:** a search without a language model
   ties.
6. **Looking after itself (MAINTAIN).** In humans: homeostasis. **Result:** 144/144
   recoverable lives, 192/192 repairs and work 9,450 against 7,501. **How:** it watches its
   wear and decides when to spend resources on repairing itself; if something cannot be
   fixed, it stops.
7. **Understanding others (OTHER).** In humans: a basic theory of mind. **Result:**
   1,536/1,536, against 1,008 if it mixes them up. **How:** it models each companion
   separately just by watching, without reading their memory.
8. **Cooperating when it pays (INTERACTION).** **Result:** +12.5 % over working alone.
   **Limit:** the cost of learning is not yet paid back over a whole life.
9. **Shared history (RELATION).** **Result:** net 4,920 and 4,812, against 3,556 and 3,382
   knowing only identity. If the companion comes back in another body, it stops asking for
   help after 1–3 refusals; the control takes 9–12. **How:** it remembers the order in which
   it was helped; shuffle that order and the advantage goes. **Limit:** an impostor who
   imitates past behaviour fools it 4 times.
10. **Ranks and lies (ROLES).** In humans: social hierarchy, and believing is not power.
    **Result:**
    - it deduces who knows the answer with 97 % accuracy;
    - it derives the hierarchy and its own place in it (32/32) and updates it when it
      changes (8/8);
    - it ignores anyone who claims rank;
    - it catches 179/179 lies.

    **How:** it reasons by elimination ("if B does not know and neither do I, C has it") and
    derives rank from checked answers, not from what others say. It took five versions; v1
    and v2 came out red and are published.
11. **Knowing what it is (SITUATE-1).** In humans: knowing where and what one is.
    **Result:** 16 new conditions with 0 false claims about itself. **How:** it reads the
    computer's real sensors and **replays its own world** to check that it is a
    deterministic simulator. Nobody tells it.
12. **Not believing what it cannot check (SITUATE-2).** In humans: metacognition.
    **Result:** 0 of 128 phenomenal claims believed ("I am alive", "I feel"). **How:** a
    language model interprets its facts and ECHO classifies each claim as supported,
    contradicted or unverifiable. On the indicator profile of Butlin and colleagues (2023)
    it meets 3 of 14: metacognition, prediction and, not in every condition, learning from
    feedback. Trivial agents do not meet them. It is a profile, **never a verdict**.
13. **All at once (INTEGRATE).** In humans: a single self. **Result:** one life with a
    body, a tribe, a pause and "I know what I am", with a single memory. Removing each piece
    worsens exactly what it contributed, on all 16 seeds; 0 false facts (30 without the
    firewall); identical resumption in 48/48 cases and 112/112 adversarial cases passed.
    **Limit:** the tribe feeds the body, but energy does not change social decisions.

## How its behaviour has been monitored

- **Contract before looking:** the question, the controls and the thresholds are fixed
  before the exam. No threshold is lowered afterwards.
- **Exam on new seeds,** with the code sealed by fingerprints.
- **Everything is recorded:** every turn leaves its actions, its energy, its decisions and
  what enters memory, with fingerprints that expose any change.
- **Controls:** in each phase one piece is removed (ablation) and it is compared with
  trivial agents. If a trivial agent passes a test, that test does not count.
- **Audit in a fresh process** that rebuilds everything from scratch. Only its receipt
  grants the green.
- **Language model switched off:** 0 calls in the main test banks.
- **Reds are published,** and any reformulation after a red is declared.

## What we have not seen yet: METAVERSE-1

So far ECHO-4 lives in **small, discrete simulated worlds**, with situations we designed.
Its behaviour is **measured with numbers**, but we have not yet **watched it in the wild**.
METAVERSE-1 will take it into a real-time 3D voxel world, with other agents, drones and
people, to see what it does in situations nobody programmed. Until then, what we publish
are controlled experiments.

## The reds and the limits, published too

- **The E4-CODE-1 A exam is not blind.** The command gate was developed while looking at
  the same corpus it was examined with.
- **The compiled ECHO-1 suite has 58 failures.** All are tests that read the source code,
  which the package does not include; none is behavioural. We accepted it with a criterion
  reformulated and declared after the red.
- **Platform:** Linux x86_64 with CPython 3.14 only.
- **Independence:** **someone outside RxLabs** still has to reproduce the package on their
  own. That is why it remains a *release candidate*.
- **Scope:** we do not claim consciousness, life or general intelligence. Everything is
  measured in simulated worlds.

## What comes next

**E4-BENCH-1**: comparing the same model **with and without ECHO** on public benchmarks,
with charts. On pure knowledge (MMLU, GSM8K) we expect no improvement, and that will serve
as a control. What we want to measure is where ECHO steps in:

- fewer made-up answers;
- verifying claims;
- resisting injected instructions;
- not declaring fixed what is not.

There are no numbers yet.

**Want to help?** Download it from [/releases](/en/echoai#release) and run
`echoai reproduce integrate`. If you get `e1492e22…`, you are the first independent
reproduction. If not, we want to know.
