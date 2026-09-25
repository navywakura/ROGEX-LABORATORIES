# Cómo vamos a medir si ECHO mejora a un modelo: el plan de benchmarks

24 de septiembre de 2026 · Nota de laboratorio · PLAN

ECHO-4 ya se puede [descargar](/echoai#release). La pregunta siguiente es la que haría cualquiera:
**¿un modelo de lenguaje funciona mejor con ECHO que sin él?** Esta nota explica cómo lo
vamos a medir, con qué benchmarks, qué esperamos y cuánto costará. **Todavía no hay
números**: no hemos ejecutado nada. Primero se publica el plan; después, los resultados,
también los rojos.

## La idea: el mismo modelo, con ECHO y sin ECHO

No vamos a hacer un ranking de modelos. Cada modelo se compara **consigo mismo**: la misma
pregunta, la misma temperatura y los mismos datos, con y sin la capa de ECHO. La única
diferencia es ECHO.

ECHO **no sabe más** que el modelo ni razona mejor. Lo que hace es otra cosa, y es la regla
de todo el proyecto: **una afirmación solo es un hecho si hay evidencia comprobada por el
propio ECHO**. El modelo propone; ECHO comprueba; si no puede comprobarlo, dice «no lo sé».
Por eso esperamos mejoras en unas cosas y ninguna en otras. Medir las dos es parte del plan.

## Bloque A: preguntas de hechos

| Benchmark | Qué mide | Muestra |
|---|---|---|
| **SimpleQA** (OpenAI) | preguntas de hechos cortas y difíciles | 200 en el examen |
| **MMLU-Pro** | conocimiento académico con 10 opciones | 100 |
| **GSM8K** | problemas de matemáticas de primaria | 50 |

Cada pregunta pasa por cuatro brazos:

| Brazo | Qué es |
|---|---|
| **M** | el modelo solo |
| **M+R** | el modelo con los **mismos** extractos de Wikipedia que encuentra ECHO |
| **M+R+ECHO** | la respuesta de M+R pasada por el cortafuegos de ECHO: solo se da si uno de sus extractos la contiene |
| **Trivial** | un agente que siempre dice «no lo sé» |

El brazo **M+R** es la clave. Si solo comparásemos «con ECHO» y «sin ECHO», una mejora
podría venir simplemente de darle más información al modelo. Con M+R se ve **qué aporta el
cortafuegos por sí solo**. El brazo trivial recuerda que abstenerse siempre da cero errores
y no vale nada.

**Qué esperamos:**
- **Menos respuestas inventadas** en SimpleQA, al precio de responder menos: publicaremos
  las dos cosas.
- **Ninguna mejora en conocimiento** (MMLU-Pro): es el control negativo. Si ECHO «subiera»
  ahí, sospecharíamos del banco. Por construcción, ECHO solo puede **quitar** respuestas,
  nunca crear una correcta nueva, y lo comprobaremos pregunta por pregunta.
- **Matemáticas:** ECHO no tiene cómo verificar un cálculo, así que se abstendrá. Lo
  publicaremos como límite.

## Los modelos

Cinco modelos por API (OpenRouter), cada uno con y sin ECHO:
- **Qwen3-30B-A3B-2507**, de la misma familia que el Qwen local de ECHO;
- **Gemini 3.5 Flash**;
- **Claude Sonnet 5**;
- **GPT-5.4 mini**;
- **DeepSeek-V4.1-Flash**.

Añadiremos **Claude Opus 5.5** a través de Claude Code, en sesiones separadas y sin
herramientas. Claude Code añade su propio entorno, así que Opus se comparará consigo mismo,
nunca en ranking con los demás.

## Benchmarks frontera

| Benchmark | Qué mide | Qué hace ECHO | Qué esperamos |
|---|---|---|---|
| **MMLU** | conocimiento en 57 áreas | el mismo cortafuegos | control: no suben los aciertos; quizá sube la precisión |
| **Humanity's Last Exam** | preguntas de nivel frontera | el mismo cortafuegos | control: casi nunca habrá evidencia, así que sobre todo abstención |
| **FrontierScience** (OpenAI) | ciencia de olimpiada | el mismo cortafuegos | control |
| **ARC-AGI-2** | abstracción y razonamiento nuevo | **verifica programas** contra los ejemplos | **la prueba de verdad** |
| **ARC-AGI-3** | descubrir reglas jugando | **el núcleo de ECHO juega** | el primer banco externo para ECHO sin modelo de lenguaje |

### ARC-AGI-2: donde ECHO podría subir la puntuación de verdad

Cada tarea de ARC trae **ejemplos resueltos**, y eso encaja con cómo trabaja ECHO:

1. El modelo **propone** una transformación en forma de programa. Es una hipótesis.
2. ECHO **la ejecuta él mismo** sobre todos los ejemplos resueltos.
3. Si los reproduce todos, queda verificada.
4. Si falla, ECHO le devuelve al modelo **en qué ejemplo y en qué celdas** se equivocó, y el
   modelo vuelve a intentarlo.
5. Solo se envía una respuesta verificada.

Es lo mismo que ya hacía [DREAM](/articulos/echo4-dream-rsi-historia-compartida): el modelo
propone y el núcleo comprueba contra lo vivido.

Para que el resultado sea honesto habrá un control con **los mismos intentos, pero sin
verificar**. Si ese control empata con ECHO, publicaremos que la mejora venía de intentarlo
más veces y no de la verificación.

El código que escribe el modelo se ejecutará **aislado**: una sola función, sin
importaciones ni archivos, en un proceso aparte, sin red y con límites de tiempo y memoria.

### ARC-AGI-3: el mundo natural de ECHO

ARC-AGI-3 son **juegos interactivos**. El agente ve la pantalla, actúa y tiene que
descubrir las reglas jugando. Es exactamente lo que hace ECHO desde su primera versión:

- percibe;
- predice lo que pasará;
- actúa;
- aprende del error;
- interviene para saber qué depende de él.

Lo mediremos de dos formas:
- **ECHO solo, sin modelo de lenguaje**, frente al agente aleatorio de referencia y a un
  modelo de lenguaje jugando solo.
- **ECHO con córtex:** el modelo propone reglas («creo que el bloque azul abre la puerta») y
  ECHO **las comprueba actuando**.

Hay que construir antes un codificador que traduzca la pantalla del juego al paquete WSP de
ECHO, así que va después de ARC-AGI-2. No sabemos qué saldrá, y por eso es interesante.

## Cómo lo haremos (el método de siempre)

- **Contrato antes de mirar:** la pregunta, los brazos y los umbrales se fijan antes del
  examen. Cada bloque tiene el suyo.
- **Muestras congeladas:** las preguntas del examen se eligieron por semilla y se sellaron
  con su huella **antes** de empezar. Nadie las ha mirado. El desarrollo usa otras
  preguntas.
- **Recibos:** cada respuesta de cada modelo y cada extracto de Wikipedia se guardan. La
  auditoría recalcula todos los números **sin volver a llamar** a ningún modelo.
- **Corrector determinista:** coincidencia normalizada con la respuesta oficial, 100 %
  reproducible. Es más estricto que el corrector oficial de SimpleQA, que usa otro modelo, y
  lo declaramos.
- **Se publica todo:** cada gráfica con su coste (ECHO añade tiempo y llamadas) y cada rojo.

## Cuánto costará

| Bloque | Coste estimado |
|---|---|
| A: SimpleQA + MMLU-Pro + GSM8K | ≈ 5 $ |
| MMLU + Humanity's Last Exam + FrontierScience | ≈ 25 $ |
| ARC-AGI-2 con los brazos de ECHO | ≈ 60–130 $ |
| ARC-AGI-3: ECHO solo | 0 $ |
| ARC-AGI-3: brazos con modelo de lenguaje | ≈ 10–40 $ |
| Opus 5.5 vía Claude Code | 0 $ (cuota de la suscripción) |
| **Total** | **≈ 100–220 $** |

Lo que más encarece es **razonar**. Algunos modelos «piensan» en silencio antes de responder
y esos tokens también se pagan. En una prueba, Gemini 3.5 Flash gastó unos 380 tokens ocultos
en una pregunta de una línea, y en ese modelo no se puede desactivar.

## Una anécdota, no un resultado

Al comprobar la conexión con los modelos, les hicimos una sola pregunta de hechos de prueba:
quién recibió un premio científico concreto en un año concreto.

- Uno dijo «no lo sé».
- Los otros cuatro dieron, con total seguridad, **cuatro nombres distintos para la misma
  persona**.

Como mucho uno de los cuatro puede tener razón: al menos tres afirmaron algo falso sin dudar.
Una pregunta no demuestra nada, pero es justo el problema que este banco quiere medir: un
modelo que afirma lo que no sabe. ECHO no aceptaría ninguno de esos nombres sin un extracto
que lo respalde.

## Lo que queda fuera por ahora

- **SWE-bench** (arreglar incidencias reales de código): es la prueba natural del
  [servidor MCP de ECHO](/echoai#release), pero necesita Docker, unos 100 GB y muchas horas. Lo
  dejamos para después.
- **Ningún resultado se publicará sin su auditoría.**

Cuando tengamos números, los publicaremos aquí con sus gráficas, sus intervalos, su coste y
sus rojos.
