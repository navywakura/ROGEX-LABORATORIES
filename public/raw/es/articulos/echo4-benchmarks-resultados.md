# Primeros resultados: ECHO hace que los modelos inventen mucho menos

25 de septiembre de 2026 · Resultados auditados · SimpleQA, MMLU-Pro, GSM8K y ARC-AGI-3

Hace un día publicamos [el plan](/articulos/echo4-plan-benchmarks-con-y-sin-echo) para medir si
ECHO mejora a un modelo de lenguaje. Ya tenemos los primeros números, **con sus rojos**. Todas
las gráficas salen de los datos reales del examen, y el informe completo se reconstruye desde los
recibos **sin volver a llamar a ningún modelo**.

**Resumen en una frase:** en preguntas de hechos, ECHO reduce entre un 81 % y un 87 % las
respuestas inventadas de cuatro modelos distintos, a cambio de responder menos. No hace más
listo al modelo: hace que diga «no lo sé» cuando no tiene pruebas.

## Cómo se midió

Cada modelo se compara **consigo mismo**. Misma pregunta, misma temperatura (0) y mismos datos:

| Brazo | Qué es |
|---|---|
| **M** | el modelo solo, de memoria |
| **M+R** | el modelo con extractos de Wikipedia que busca ECHO |
| **M+R+ECHO** | la **misma** respuesta de M+R, pasada por el cortafuegos de ECHO: solo se da si un extracto la respalda; si no, «no lo sé» |

El brazo M+R es la clave. Separa lo que aporta tener más información de lo que aporta el
cortafuegos.

- **Examen:** 200 preguntas de SimpleQA, 100 de MMLU-Pro y 50 de GSM8K, elegidas por semilla y
  selladas con su huella **antes** de empezar. Nadie las miró antes del examen.
- **Umbrales:** fijados por escrito **antes** del examen.
- **Corrector:** determinista (coincidencia normalizada). Es más estricto que el corrector
  oficial de SimpleQA, que usa otro modelo.
- **Coste total del examen:** 1,55 $.

## SimpleQA: preguntas de hechos cortas y difíciles

<figure class="article-chart"><img src="/media/echoai/bench/simpleqa-incorrect-es.svg" alt="Barras de respuestas incorrectas en SimpleQA de 4 modelos: solo, con Wikipedia y con Wikipedia más ECHO" loading="lazy" /></figure>

| Modelo | Incorrectas: solo → con Wikipedia → **con ECHO** | Precisión con Wikipedia → con ECHO |
|---|---|---|
| Claude Sonnet 5 | 104 → 19 → **14** | 76 % → 80 % |
| DeepSeek V4.1 Flash | 101 → 66 → **14** | 58 % → 79 % |
| GPT-5.4 mini | 145 → 76 → **27** | 46 % → 67 % |
| Qwen3-30B | 129 → 34 → **17** | 64 % → 76 % |

**En qué mejora:**
- **Inventa mucho menos.** Frente al modelo solo, las respuestas incorrectas bajan entre un
  81 % y un 87 % en los cuatro modelos.
- **No es solo por tener Wikipedia.** Frente a darle los mismos extractos sin cortafuegos, ECHO
  quita errores en los cuatro. El caso más claro es DeepSeek: con Wikipedia sigue afirmando
  cosas que el texto no dice (66 incorrectas); con ECHO, 14.
- **Cuando responde, acierta más.** La precisión sube en los cuatro modelos.

<figure class="article-chart"><img src="/media/echoai/bench/simpleqa-precision-coverage-es.svg" alt="Precisión y cobertura en SimpleQA con Wikipedia y con Wikipedia más ECHO" loading="lazy" /></figure>

**Lo que cuesta:** ECHO también descarta respuestas **correctas**, porque exige que toda la
respuesta aparezca en un extracto. Responde a menos preguntas, y el F-score (la métrica oficial
que mezcla aciertos y cobertura) **baja** en tres de los cuatro modelos. Solo sube en GPT-5.4
mini.

<figure class="article-chart"><img src="/media/echoai/bench/simpleqa-stacked-es.svg" alt="Correctas, incorrectas y no intentadas en SimpleQA por modelo y brazo" loading="lazy" /></figure>

## MMLU-Pro: el control negativo

<figure class="article-chart"><img src="/media/echoai/bench/mmlupro-stacked-es.svg" alt="MMLU-Pro: con ECHO casi todas las preguntas quedan sin intentar" loading="lazy" /></figure>

MMLU-Pro es conocimiento académico con diez opciones, y las opciones casi nunca aparecen
literalmente en Wikipedia. Como esperábamos, **ECHO se abstiene en unas 93 de cada 100**. No sube
ningún acierto: por construcción, ECHO solo puede **quitar** respuestas, nunca crear una
correcta. Lo comprobamos pregunta a pregunta: 0 casos en los cuatro modelos.

**Un fallo que declaramos:** en GPT-5.4 mini y Qwen, entre las pocas respuestas que ECHO deja
pasar hay más incorrectas que correctas. Si el texto de una opción equivocada aparece en un
extracto, la verificación lo acepta. **Para opción múltiple, este ECHO no sirve.**

## GSM8K: el límite

Los cuatro modelos aciertan entre 47 y 49 de 50 problemas de matemáticas. ECHO **se abstiene en
los 50**, porque no tiene forma de comprobar un cálculo. Es el límite que anunciamos en el plan.

## ARC-AGI-3: juegos que hay que descubrir jugando

ARC-AGI-3 son juegos interactivos: nadie te dice las reglas. Lo probamos en los 16 juegos
públicos de nuestro examen, con 2000 acciones por juego.

<figure class="article-chart"><img src="/media/echoai/bench/arc3-levels-es.svg" alt="Niveles completados en ARC-AGI-3 por el azar, ECHO solo y Qwen3-30B con y sin ECHO" loading="lazy" /></figure>

- **ECHO solo, sin modelo de lenguaje: 13 niveles, frente a 2 del azar.** Recuerda lo que ha
  vivido, distingue lo que depende de él de lo que se mueve solo y deja de repetir lo que no
  sirve. Sin esa distinción (el brazo «sin BOUNDARY») cae al nivel del azar.
- **La puntuación oficial sigue siendo muy baja: 1 sobre 100.** ARC premia resolver con tan
  pocas acciones como un humano. ECHO no entiende el objetivo: lo encuentra explorando, con
  cientos de acciones por nivel.
- **Qwen3-30B jugando: 0 niveles solo y 4 con ECHO.** Pero los cuatro los completó la
  exploración de ECHO, no una jugada del modelo. Este modelo no deduce las reglas: aprende a
  delegar.
- **Una pista, no un resultado:** en una prueba de desarrollo, **Claude Opus 5.5 con ECHO**
  completó dos niveles con **sus propias jugadas**, en solo 23 y 40 acciones. Las partidas se
  cortaron por el límite de uso, así que no cuentan. Es lo siguiente que queremos medir bien.

## Lo que demuestra y lo que no

- **Demuestra**, en un banco oficial y con cuatro modelos de cuatro empresas distintas, que un
  cortafuegos que exige pruebas **reduce mucho las respuestas inventadas**.
- **No demuestra** que ECHO haga más inteligente a un modelo.
- **No sirve** para opción múltiple ni para matemáticas.
- **Nuestros números no se comparan uno a uno con las tablas oficiales**, porque el corrector es
  más estricto.
- **Gemini 3.5 Flash** quedó fuera del examen por presupuesto: razona siempre y costaba más del
  doble que los otros cuatro juntos.

## Las pruebas que faltan: hazlas tú

**ECHO-4 lo mantiene la comunidad.** Estas son las pruebas que no hemos podido hacer todavía,
casi todas por presupuesto:

| Prueba | Qué mediría | Qué hace falta |
|---|---|---|
| **Humanity's Last Exam** | si ECHO evita respuestas inventadas en preguntas de nivel experto | API de modelos (~10 $) |
| **MMLU** y **FrontierScience** | el mismo cortafuegos en conocimiento general y ciencia de olimpiada | API de modelos (~15 $) |
| **ARC-AGI-2** | el modelo propone un programa y ECHO lo verifica contra los ejemplos | API de modelos (60–130 $) |
| **ARC-AGI-3 con modelos fuertes** | si un modelo que sí deduce reglas mejora con ECHO (la pista de Opus) | modelos frontera |
| **SimpleQA con Gemini** y más modelos | ampliar la comparación | API de modelos |
| **SWE-bench** | ECHO como verificador de agentes de código | Docker y unos 100 GB |

**Cómo participar:**
1. Descarga ECHO-4 desde la página de [releases](/releases).
2. Ejecuta la prueba con **nuestro método**:
   - contrato con umbrales **antes** del examen;
   - muestras fijadas por semilla;
   - recibos de cada llamada;
   - auditoría que reconstruye los números sin volver a llamar al modelo.
3. **Escríbenos en [rxlabs.org/contact](https://www.rxlabs.org/contact)** para pedir más
   información, los datos exactos de este examen o publicar aquí tu benchmark, **también si sale
   en rojo**.
