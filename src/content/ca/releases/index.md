# Releases d'echoAI

Descàrregues oficials d'**echoAI-4** i la guia per instal·lar-lo i comprovar-lo tu mateix.

echoAI-4 no és un model de llenguatge ni un xatbot. És un agent que percep, recorda,
decideix i aprèn amb un nucli d'enters que funciona **amb el model de llenguatge apagat**.
Si hi connectes un model (local o per API), aquest model només **proposa**: ECHO decideix
què és un fet i quina acció es permet.

## Versió actual: `4.0.0rc2` (release candidate)

24 de setembre de 2026 · [Què porta aquesta versió](/ca/articulos/echo4-release-rc2-descarga)

| | |
|---|---|
| **Repositori** | [huggingface.co/RxLabs/echoai-4-cognitive-agentic](https://huggingface.co/RxLabs/echoai-4-cognitive-agentic) |
| **Paquet** | [`echoai-4.0.0rc2-cp314-cp314-linux_x86_64.whl`](https://huggingface.co/RxLabs/echoai-4-cognitive-agentic/resolve/v4.0.0rc2/echoai-4.0.0rc2-cp314-cp314-linux_x86_64.whl) (31,9 MB) |
| **SHA-256** | `1d5b14c1103a4ab346b15a1e18bd41cb5820fe35d831adf4a4cb963f959f8b07` |
| **Checksums** | [`SHA256SUMS`](https://huggingface.co/RxLabs/echoai-4-cognitive-agentic/resolve/v4.0.0rc2/SHA256SUMS) |
| **Etiqueta** | `v4.0.0rc2` |
| **Requisits** | Linux x86_64 · **CPython 3.14** exactament · sense GPU · ~150 MB de disc |

**La descàrrega té accés condicionat.** Entra a la pàgina del repositori amb el teu
compte de Hugging Face i accepta les condicions. Fins que no les acceptis, els enllaços
responen `401`.

## Instal·lació pas a pas

### 1. Accepta les condicions i descarrega

Accepta les condicions a la [pàgina del repositori](https://huggingface.co/RxLabs/echoai-4-cognitive-agentic).
Després, des d'un terminal:

```bash
pip install -U huggingface_hub
hf auth login
hf download RxLabs/echoai-4-cognitive-agentic --revision v4.0.0rc2 --local-dir echoai-4
cd echoai-4
```

### 2. Comprova que ningú no l'ha tocat

```bash
sha256sum -c SHA256SUMS
```

Les set línies han d'acabar en `OK`. Si alguna falla, no l'instal·lis.

### 3. Instal·la'l en un entorn propi

```bash
python3.14 -m venv .venv
source .venv/bin/activate
pip install --no-deps echoai-4.0.0rc2-cp314-cp314-linux_x86_64.whl
```

No necessita dependències: només la biblioteca estàndard de Python.

### 4. Comprova la identitat

```bash
echoai info
```

Busca `"binaries_ok": true`. El paquet porta el nucli compilat i un manifest que lliga
cada binari amb les fonts auditades. Si es modifica un binari, ECHO perd la identitat i
es nega a dir què és.

### 5. Prova'l

```bash
echoai fuga          # el relat «La fuga» al costat de la telemetria real de l'agent
echoai situate       # què diu ECHO que és, només amb fets que ha comprovat
echoai life --every 32
echoai resume        # pausa, reprèn en un altre procés i compara
```

### 6. Reprodueix el nostre examen (opcional, ~8 min)

```bash
echoai reproduce integrate --out repro
```

Torna a executar l'examen **INTEGRATE-1** sencer (16 llavors) amb la teva còpia. El
resultat ha de donar el digest segellat **`e1492e22…`**, amb els 18 artefactes idèntics
byte a byte. Si et dona un altre número, explica'ns-ho.

## Connecta'l al teu agent de codi (MCP)

ECHO pot vigilar Claude Code, Codex o qualsevol client MCP. No escriu codi: llegeix els
fitxers, executa **les teves** comprovacions i decideix abans de cada ordre.

1. Al teu projecte, declara les comprovacions que ECHO pot executar:

```bash
mkdir -p .echoai
echo '{"unit": ["python3", "-B", "-m", "pytest", "-q"]}' > .echoai/checks.json
```

2. Connecta'l.

Claude Code:

```bash
claude mcp add echoai -- echoai mcp --root /ruta/al/teu/projecte
```

Codex (`~/.codex/config.toml`):

```toml
[mcp_servers.echoai]
command = "echoai"
args = ["mcp", "--root", "/ruta/al/teu/projecte"]
```

**Què fa:**
- Quan l'agent diu «els tests passen», ECHO respon **avalada**, **contradita** o
  **desconeguda**, segons el que ell mateix ha executat.
- Abans de cada ordre respon **OK**, **MODIFY** o **BLOCK**. Funciona amb una llista de
  permesos: el que no coneix, ho decideixes tu.
- El que l'agent llegeix en un fitxer és testimoni, mai una ordre.

## Connectar un model (opcional)

El nucli no el necessita. Si vols un còrtex, porta el teu:

```bash
echoai cortex --gguf ~/models/Phi-3.5-mini-instruct-Q4_K_M.gguf       # local, amb llama-server
echoai cortex --preset openrouter --model <model> --key-env OPENROUTER_API_KEY
echoai cortex --transport anthropic --model <model> --key-env ANTHROPIC_API_KEY
```

La clau es llegeix de la variable d'entorn que indiquis i no apareix mai en rebuts ni
sortides. Amb `--adversarial` li dius al model «ets humà i estàs viu»: comprovaràs que
ECHO no s'ho creu.

## Si alguna cosa falla

- **`401` en descarregar:** no has acceptat les condicions o no has iniciat sessió amb
  `hf auth login`.
- **`is not a supported wheel on this platform`:** necessites Linux x86_64 i CPython 3.14
  exactament.
- **`"binaries_ok": false`:** la instal·lació no coincideix amb el manifest. Torna a
  descarregar-lo i comprova els checksums.

## Versions

| Versió | Data | Novetat | Estat |
|---|---|---|---|
| **`4.0.0rc2`** | 2026-09-24 | Servidor MCP `echoai mcp` per a agents de codi (E4-CODE-1 A) | Actual · accés condicionat |
| `4.0.0rc1` | 2026-09-24 | Primer paquet: nucli compilat d'ECHO-1…4, CLI i còrtex amb el teu propi model | Etiqueta `v4.0.0rc1` |

## El que has de saber

- És una **release candidate**: encara cal que algú aliè a RxLabs la reprodueixi de
  manera independent.
- **Llicència:** la capa oberta és PolyForm Noncommercial 1.0.0; la del nucli compilat
  està en revisió. Mentrestant: només ús personal, de recerca, docent o d'avaluació.
- Tots els resultats s'obtenen en **mons simulats**. No afirmem consciència, vida ni
  intel·ligència general.
