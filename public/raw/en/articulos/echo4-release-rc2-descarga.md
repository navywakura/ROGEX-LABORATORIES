# echoAI-4 is now available for download: release candidate 2

24 September 2026 · Laboratory note · RELEASE

After closing ECHO-4's scientific phases green, we are publishing the agent so that
anyone can **install it, use it and check our results**. The version is **`4.0.0rc2`**
and it is on Hugging Face, gated.
**[Downloads and installation guide → /releases](/en/releases)**

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

**Want to help?** Download it from [/releases](/en/releases) and run
`echoai reproduce integrate`. If you get `e1492e22…`, you are the first independent
reproduction. If not, we want to know.
