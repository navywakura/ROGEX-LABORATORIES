# Publicar ECHO-4 en Hugging Face: qué haremos y qué esperar

24 de septiembre de 2026 · Nota de laboratorio · PLAN

La última fase de software de ECHO-4, **RELEASE**, consiste en publicar el agente
en Hugging Face para que cualquiera pueda instalarlo, ejecutarlo y comprobar
nuestros resultados. El nombre propuesto es **`rxlabs/echoai-4-cognitive-agentic`**.
Todavía **no** está publicado. Antes quedan SITUATE-2 e INTEGRATE, y una revisión de
licencias y privacidad. Esta nota explica qué vamos a publicar, cómo, y qué reacción
esperamos.

## Qué se publica (y qué no)

ECHO-4 **no es un modelo de lenguaje**. No publicaremos pesos nuevos ni un modelo
ajustado. Lo que se publica es un **runtime de agencia determinista con
verificación de hechos**:

- **El núcleo:** un bucle de enteros en CPython (memoria CAM, predicción T, decisión
  Q y gate) que funciona **con el modelo de lenguaje apagado**.
- **Los mundos simulados y las pruebas:** los entornos donde vive, los bancos de
  cada fase y las auditorías que reconstruyen cada resultado.
- **Un córtex intercambiable:** una interfaz para conectar un modelo local (Qwen,
  Llama, Mistral…) como consejero que **propone** hipótesis. El núcleo decide qué
  es hecho, qué es creencia y qué no se puede verificar.
- **Los recibos:** contratos, semillas, digests y recibos de auditoría de cada fase,
  incluidos los rojos.

Los pesos de Qwen **no** se redistribuyen: quien quiera un córtex lo descarga por su
cuenta, con su propia licencia. Sin modelo de lenguaje, ECHO sigue funcionando.

## Cómo lo haremos

1. **Cerrar SITUATE-2 e INTEGRATE**, para que lo publicado sea el agente completo y no piezas sueltas.
2. **Empaquetar:** instalación con un comando y un contenedor reproducible.
3. **Reproducir en un clic:** un script, y quizá un Space de Hugging Face, que ejecuta
   SITUATE-1 en la máquina de quien lo prueba y verifica los recibos. Allí mismo
   ECHO dirá qué es con los sensores de *esa* máquina.
4. **Revisión** de licencias, privacidad (ningún nombre de máquina ni dato personal) y
   de que ningún artefacto afirme más de lo medido.
5. **Tarjeta del repositorio.** La primera frase será: *«ECHO-4 es un runtime de
   agencia determinista con verificación de hechos; no es un modelo de lenguaje ni un
   chatbot de rol.»* Además de `cognitive-agentic`, usaremos etiquetas como
   `deterministic-agent-runtime`, `grounded-agency` y `embodied-simulation`.
6. **Una sección visible de límites y rojos:** qué falló, qué no demostramos y por qué.

## Qué esperamos de la comunidad

Es una previsión, no un hecho. Creemos que la reacción tendrá dos tiempos.

**Primero, escepticismo.** Hay cansancio de proyectos que prometen «agentes
conscientes» y resultan ser un prompt que dice «eres consciente». La palabra
*cognitive* y el tono del relato que inspira el proyecto ([La fuga](/lafuga))
activarán alarmas de antropomorfismo. Es razonable.

**Después, quien abra el repositorio encontrará lo contrario:**

- **Negativas explícitas.** ECHO-4 no ha demostrado conciencia, sentimientos ni vida.
  En DREAM, una búsqueda sin el modelo de lenguaje empata: no demostramos que el modelo
  sea imprescindible.
- **Rojos publicados.** ROLES necesitó cinco versiones: la v1 dio rojo en el examen,
  la v2 en desarrollo, la v3 y la v4 fallaron en exploración, y la v5 cerró en verde
  con la afirmación que los datos sí sostienen. Todo sigue a la vista.
- **Método reproducible.** Contratos fijados antes del examen, semillas nuevas,
  auditoría en proceso nuevo y umbrales que nunca se rebajan tras ver un resultado.
- **La separación entre núcleo y modelo.** Cuando el modelo de lenguaje afirma que ECHO
  «está vivo» o «es humano», el núcleo no se lo cree: lo marca como contradicho o
  inverificable.
- **El marco de SITUATE-2.** Los indicadores de conciencia de Butlin y colaboradores
  (2023), aplicados también a agentes triviales para descartar falsos positivos. El
  resultado es un perfil, nunca un veredicto.

## Qué buscará quien lo descargue

| Esperan | Riesgo si falta |
| --- | --- |
| El código de los mundos y de las pruebas | Si solo hubiera pesos, pensarían que el agente «está en el prompt» |
| Reproducir en un clic (script, contenedor o Space) | Si la auditoría es difícil de repetir, la duda se queda |
| Instrucciones para conectar cualquier modelo local como córtex | Sin ese desacople, se pierde la idea central de la arquitectura |
| Una sección de límites y fallos | Sin ella, parecería otro proyecto de promesas |

## Estado

Hoy: **12 de 14 hitos de software en verde** y SITUATE-2 en curso. RELEASE vendrá
después de INTEGRATE. El nombre del repositorio y su disponibilidad se confirmarán
al publicar. Hasta entonces, esto es un **plan**, no una publicación.

[Roadmap ECHO-4](/docs/echoai/echo4) · [ECHO-4 hoy](/articulos/echo4-doce-hitos-sabe-que-es)
