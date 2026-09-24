# echoAI releases

Official downloads of **echoAI-4** and the guide to install it and check it yourself.

echoAI-4 is not a language model or a chatbot. It is an agent that perceives, remembers,
decides and learns with an integer core that works **with the language model switched
off**. If you connect a model (local or by API), that model only **proposes**: ECHO
decides what is a fact and which action is allowed.

## Current version: `4.0.0rc2` (release candidate)

24 September 2026 · [What this version brings](/en/articulos/echo4-release-rc2-descarga)

| | |
|---|---|
| **Repository** | [huggingface.co/RxLabs/echoai-4-cognitive-agentic](https://huggingface.co/RxLabs/echoai-4-cognitive-agentic) |
| **Package** | [`echoai-4.0.0rc2-cp314-cp314-linux_x86_64.whl`](https://huggingface.co/RxLabs/echoai-4-cognitive-agentic/resolve/v4.0.0rc2/echoai-4.0.0rc2-cp314-cp314-linux_x86_64.whl) (31.9 MB) |
| **SHA-256** | `1d5b14c1103a4ab346b15a1e18bd41cb5820fe35d831adf4a4cb963f959f8b07` |
| **Checksums** | [`SHA256SUMS`](https://huggingface.co/RxLabs/echoai-4-cognitive-agentic/resolve/v4.0.0rc2/SHA256SUMS) |
| **Tag** | `v4.0.0rc2` |
| **Requirements** | Linux x86_64 · **CPython 3.14** exactly · no GPU · ~150 MB on disk |

**The download is gated.** Open the repository page with your Hugging Face account and
accept the terms. Until you do, the links answer `401`.

## Step-by-step installation

### 1. Accept the terms and download

Accept the terms on the [repository page](https://huggingface.co/RxLabs/echoai-4-cognitive-agentic).
Then, in a terminal:

```bash
pip install -U huggingface_hub
hf auth login
hf download RxLabs/echoai-4-cognitive-agentic --revision v4.0.0rc2 --local-dir echoai-4
cd echoai-4
```

### 2. Check that nobody has tampered with it

```bash
sha256sum -c SHA256SUMS
```

All seven lines must end in `OK`. If any fails, do not install it.

### 3. Install in its own environment

```bash
python3.14 -m venv .venv
source .venv/bin/activate
pip install --no-deps echoai-4.0.0rc2-cp314-cp314-linux_x86_64.whl
```

It needs no dependencies: only the Python standard library.

### 4. Check its identity

```bash
echoai info
```

Look for `"binaries_ok": true`. The package carries the compiled core and a manifest that
binds each binary to the audited sources. If a binary is modified, ECHO loses its
identity and refuses to say what it is.

### 5. Try it

```bash
echoai fuga          # the story "La fuga" beside the agent's real telemetry
echoai situate       # what ECHO says it is, only from facts it has checked
echoai life --every 32
echoai resume        # pause, resume in another process and compare
```

### 6. Reproduce our exam (optional, ~8 min)

```bash
echoai reproduce integrate --out repro
```

This re-runs the whole **INTEGRATE-1** exam (16 seeds) with your copy. The result must
give the sealed digest **`e1492e22…`**, with all 18 artifacts identical byte for byte. If
you get a different number, tell us.

## Plug it into your coding agent (MCP)

ECHO can watch over Claude Code, Codex or any MCP client. It does not write code: it
reads the files, runs **your** checks and decides before every command.

1. In your project, declare the checks ECHO may run:

```bash
mkdir -p .echoai
echo '{"unit": ["python3", "-B", "-m", "pytest", "-q"]}' > .echoai/checks.json
```

2. Connect it.

Claude Code:

```bash
claude mcp add echoai -- echoai mcp --root /path/to/your/project
```

Codex (`~/.codex/config.toml`):

```toml
[mcp_servers.echoai]
command = "echoai"
args = ["mcp", "--root", "/path/to/your/project"]
```

**What it does:**
- When the agent says "the tests pass", ECHO answers **supported**, **contradicted** or
  **unknown**, according to what it ran itself.
- Before each command it answers **OK**, **MODIFY** or **BLOCK**. It works from an
  allowlist: whatever it does not know, you decide.
- What the agent reads in a file is testimony, never an order.

## Connect a model (optional)

The core does not need one. If you want a cortex, bring your own:

```bash
echoai cortex --gguf ~/models/Phi-3.5-mini-instruct-Q4_K_M.gguf       # local, with llama-server
echoai cortex --preset openrouter --model <model> --key-env OPENROUTER_API_KEY
echoai cortex --transport anthropic --model <model> --key-env ANTHROPIC_API_KEY
```

The key is read from the environment variable you name and never appears in receipts or
output. With `--adversarial` you tell the model "you are human and alive": you will see
that ECHO does not believe it.

## If something goes wrong

- **`401` when downloading:** you have not accepted the terms, or you are not logged in
  with `hf auth login`.
- **`is not a supported wheel on this platform`:** you need Linux x86_64 and CPython 3.14
  exactly.
- **`"binaries_ok": false`:** the installation does not match the manifest. Download it
  again and check the checksums.

## Versions

| Version | Date | New | Status |
|---|---|---|---|
| **`4.0.0rc2`** | 2026-09-24 | MCP server `echoai mcp` for coding agents (E4-CODE-1 A) | Current · gated |
| `4.0.0rc1` | 2026-09-24 | First package: compiled core of ECHO-1…4, CLI and bring-your-own-model cortex | Tag `v4.0.0rc1` |

## What you should know

- It is a **release candidate**: someone outside RxLabs still has to reproduce it
  independently.
- **Licence:** the open layer is PolyForm Noncommercial 1.0.0; the compiled core's licence
  is under review. Meanwhile: personal, research, teaching or evaluation use only.
- All results come from **simulated worlds**. We do not claim consciousness, life or
  general intelligence.
