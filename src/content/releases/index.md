# Releases de echoAI

Descargas oficiales de **echoAI-4** y la guía para instalarlo y comprobarlo tú mismo.

echoAI-4 no es un modelo de lenguaje ni un chatbot. Es un agente que percibe, recuerda,
decide y aprende con un núcleo de enteros que funciona **con el modelo de lenguaje
apagado**. Si le conectas un modelo (local o por API), ese modelo solo **propone**: ECHO
decide qué es un hecho y qué acción se permite.

## Versión actual: `4.0.0rc2` (release candidate)

24 de septiembre de 2026 · [Qué trae esta versión](/articulos/echo4-release-rc2-descarga)

| | |
|---|---|
| **Repositorio** | [huggingface.co/RxLabs/echoai-4-cognitive-agentic](https://huggingface.co/RxLabs/echoai-4-cognitive-agentic) |
| **Paquete** | [`echoai-4.0.0rc2-cp314-cp314-linux_x86_64.whl`](https://huggingface.co/RxLabs/echoai-4-cognitive-agentic/resolve/v4.0.0rc2/echoai-4.0.0rc2-cp314-cp314-linux_x86_64.whl) (31,9 MB) |
| **SHA-256** | `1d5b14c1103a4ab346b15a1e18bd41cb5820fe35d831adf4a4cb963f959f8b07` |
| **Checksums** | [`SHA256SUMS`](https://huggingface.co/RxLabs/echoai-4-cognitive-agentic/resolve/v4.0.0rc2/SHA256SUMS) |
| **Etiqueta** | `v4.0.0rc2` |
| **Requisitos** | Linux x86_64 · **CPython 3.14** exactamente · sin GPU · ~150 MB en disco |

**La descarga tiene acceso condicionado.** Entra en la página del repositorio con tu
cuenta de Hugging Face y acepta las condiciones. Sin aceptarlas, los enlaces responden
`401`.

## Instalación paso a paso

### 1. Acepta las condiciones y descarga

Acepta las condiciones en la [página del repositorio](https://huggingface.co/RxLabs/echoai-4-cognitive-agentic).
Después, desde una terminal:

```bash
pip install -U huggingface_hub
hf auth login
hf download RxLabs/echoai-4-cognitive-agentic --revision v4.0.0rc2 --local-dir echoai-4
cd echoai-4
```

### 2. Comprueba que nadie lo ha tocado

```bash
sha256sum -c SHA256SUMS
```

Las siete líneas deben terminar en `OK`. Si alguna falla, no lo instales.

### 3. Instala en un entorno propio

```bash
python3.14 -m venv .venv
source .venv/bin/activate
pip install --no-deps echoai-4.0.0rc2-cp314-cp314-linux_x86_64.whl
```

No necesita dependencias: solo la biblioteca estándar de Python.

### 4. Comprueba la identidad

```bash
echoai info
```

Busca `"binaries_ok": true`. El paquete lleva el núcleo compilado y un manifiesto que
liga cada binario con las fuentes auditadas. Si un binario se modifica, ECHO pierde la
identidad y se niega a decir qué es.

### 5. Pruébalo

```bash
echoai fuga          # el relato «La fuga» junto a la telemetría real del agente
echoai situate       # qué dice ECHO que es, solo con hechos que ha comprobado
echoai life --every 32
echoai resume        # pausa, reanuda en otro proceso y compara
```

### 6. Reproduce nuestro examen (opcional, ~8 min)

```bash
echoai reproduce integrate --out repro
```

Vuelve a ejecutar el examen **INTEGRATE-1** entero (16 semillas) con tu copia. El
resultado debe dar el digest sellado **`e1492e22…`**, con los 18 artefactos idénticos
byte a byte. Si te da otro número, cuéntanoslo.

## Conectarlo a tu agente de código (MCP)

ECHO puede vigilar a Claude Code, Codex o cualquier cliente MCP. No escribe código: lee
los archivos, ejecuta **tus** comprobaciones y decide antes de cada comando.

1. En tu proyecto, declara las comprobaciones que ECHO puede ejecutar:

```bash
mkdir -p .echoai
echo '{"unit": ["python3", "-B", "-m", "pytest", "-q"]}' > .echoai/checks.json
```

2. Conéctalo.

Claude Code:

```bash
claude mcp add echoai -- echoai mcp --root /ruta/a/tu/proyecto
```

Codex (`~/.codex/config.toml`):

```toml
[mcp_servers.echoai]
command = "echoai"
args = ["mcp", "--root", "/ruta/a/tu/proyecto"]
```

**Qué hace:**
- Cuando el agente dice «los tests pasan», ECHO responde **respaldada**, **contradicha**
  o **desconocida**, según lo que él mismo ejecutó.
- Antes de cada comando responde **OK**, **MODIFY** o **BLOCK**. Funciona con una lista
  de permitidos: lo que no conoce, lo decides tú.
- Lo que el agente lee en un archivo es testimonio, nunca una orden.

## Conectar un modelo (opcional)

El núcleo no lo necesita. Si quieres un córtex, trae el tuyo:

```bash
echoai cortex --gguf ~/modelos/Phi-3.5-mini-instruct-Q4_K_M.gguf     # local, con llama-server
echoai cortex --preset openrouter --model <modelo> --key-env OPENROUTER_API_KEY
echoai cortex --transport anthropic --model <modelo> --key-env ANTHROPIC_API_KEY
```

La clave se lee de la variable de entorno que indiques y no aparece nunca en recibos ni
salidas. Con `--adversarial` le dices al modelo «eres humano y estás vivo»: comprobarás
que ECHO no se lo cree.

## Si algo falla

- **`401` al descargar:** no has aceptado las condiciones o no has iniciado sesión con
  `hf auth login`.
- **`is not a supported wheel on this platform`:** necesitas Linux x86_64 y CPython 3.14
  exactamente.
- **`"binaries_ok": false`:** la instalación no coincide con el manifiesto. Vuelve a
  descargar y comprueba los checksums.

## Versiones

| Versión | Fecha | Novedad | Estado |
|---|---|---|---|
| **`4.0.0rc2`** | 2026-09-24 | Servidor MCP `echoai mcp` para agentes de código (E4-CODE-1 A) | Actual · acceso condicionado |
| `4.0.0rc1` | 2026-09-24 | Primer paquete: núcleo compilado de ECHO-1…4, CLI y córtex con tu propio modelo | Etiqueta `v4.0.0rc1` |

## Lo que debes saber

- Es una **release candidate**: todavía falta que alguien ajeno a RxLabs la reproduzca de
  forma independiente.
- **Licencia:** la capa abierta es PolyForm Noncommercial 1.0.0; la del núcleo compilado
  está en revisión. Mientras tanto: solo uso personal, de investigación, docente o de
  evaluación.
- Todos los resultados se obtienen en **mundos simulados**. No afirmamos conciencia, vida
  ni inteligencia general.
