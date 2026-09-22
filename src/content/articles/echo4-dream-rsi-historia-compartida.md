# ECHO-4: una historia compartida y un córtex que aprende a explorar

22 de septiembre de 2026 · Visión del programa · DREAM en planificación

**La idea final de ECHO-4 es unir un modelo de sí mismo, un modelo del otro y una historia que cambie cómo actúan.** Añadimos una pregunta: ¿puede el córtex local utilizar la experiencia registrada para mejorar su manera de investigar?

El núcleo ya tiene resultados acotados en percepción, influencia causal y modelo propio. La continuidad está empezada. La contraparte, la relación y el bucle cortical todavía no están construidos. Hoy publicamos la arquitectura y el punto de pausa; no anunciamos un ECHO-4 terminado.

## El cuento: dos personas, un universo

En el relato que inspira esta investigación, John Doe y Jane Doe se conocen. Al principio cada uno posee sus recuerdos, expectativas y límites. Después del primer encuentro aparece algo que ninguno tenía por separado: una historia de ambos. Lo que uno hace modifica lo que el otro espera; lo sucedido ayer cambia el significado de una acción de hoy.

El cuento lo expresa como «dos consciencias se encuentran y crean un universo». Aquí, universo significa una línea temporal de convivencia: acontecimientos, acuerdos, errores, confianza y posibilidades compartidas. No un cosmos físico creado por observarlo.

Nuestra interpretación filosófica es relacional y pragmática: un yo funcional se estudia por lo que distingue, conserva y permite hacer; una relación, por cómo su historia influye en decisiones posteriores. Es una hipótesis de trabajo, no una explicación completa de la conciencia. La antigua referencia a la «antivida» permanece como imagen literaria de la contraparte; la antimateria no explica este software ni demuestra almas o transferencia de identidad.

Queremos traducir la intuición a una prueba: **¿recordar una interacción real ayuda a representar mejor al otro, a uno mismo y a decidir cuándo cooperar?** La respuesta podría ser sí, no o «solo bajo estas condiciones».

## Dos ritmos de aprendizaje, no dos cerebros biológicos

Usamos «reptiliano» y «neocórtex» como nombres informales de dos ritmos de cómputo. No adoptamos una división literal del cerebro humano.

| Capa | Qué hace o hará | Qué puede cambiar |
|---|---|---|
| Núcleo ECHO, rápido | Actúa, registra experiencia y actualiza modelos y política bajo sus contratos. | Memoria y estimaciones aprendidas; no sus invariantes por decisión propia. |
| Córtex local, lento | Propondrá maneras de repartir el presupuesto de exploración y contrastarlas. | Un artefacto de estrategia validado; inicialmente, no los pesos de Qwen. |
| Evaluador y operador | Comprueban resultados, límites, promoción y reversión. | Cambios explícitos y versionados; el candidato no redefine su examen. |

El núcleo mantiene WSP de 16 bytes, CAM, Q, T y gate, sin un segundo bus cognitivo. Sus bancos siguen sin LLM. El ensayo cortical será opt-in y declarará cada llamada, token y latencia. «Ambos mejoran» será una conclusión experimental si sus medidas lo respaldan; no basta con que el modelo lo escriba.

## Qué tomamos de Dream-RSI

El preprint propone mejorar políticas de exploración usando árboles históricos como replay, manteniendo fijos los agentes y el evaluador. Solo se recorren continuaciones registradas. Su método y sus experimentos no certifican nuestro Qwen ni ECHO-4. [Paper primario, sección 3](https://arxiv.org/html/2609.14858v1#S3).

Lo siguiente es **nuestro diseño propuesto E4-DREAM-1**, inspirado en esa separación entre ejecutar y revisar. No presentamos una reproducción completa del framework.

## El bucle que queremos construir

1. **Explorar con presupuesto.** Un controlador fijo organiza pruebas autorizadas en WORLD-1: qué experimento intentar, qué rama continuar, cuántos intentos agrupar y cuándo parar. «Online» significa ejecutar el entorno, aunque toda la prueba sea local.
2. **Guardar el árbol.** Cada intento conserva identificador, padre, observación pública, propuesta, configuración, versión del evaluador, resultado, error y coste. Las causas privadas del simulador no se entregan a Qwen.
3. **Revisar sin inventar.** Un lector revela resultados históricos cuando la estrategia selecciona sus ramas. No permite consultar puntuaciones futuras. Si falta una continuación, devuelve desconocido: cambiar un prompt nunca autoriza reutilizar como si fuera exacta la respuesta de otro.
4. **Proponer estrategias.** Qwen trabajará en un rol separado de desarrollo de política. Emitirá prioridades, presupuestos y condiciones de parada en un formato declarativo limitado. Un intérprete fijo las ejecutará; no lanzaremos Python arbitrario generado por el LLM.
5. **Seleccionar y volver al entorno.** Comparamos candidatos con la estrategia vigente. El ganador histórico pasa a pruebas nuevas, con controles y posibilidad de rechazo o reversión. Solo los resultados efectivamente obtenidos amplían el archivo.

La primera versión no necesita convertir Qwen en un programador autónomo. Su superficie editable será el plan de experimentos, no el código del núcleo, el gate, la recompensa ni las condiciones del certificado SELF. Un futuro rol de descubrimiento más amplio necesitaría su propio contrato.

Una formulación de trabajo para ECHO es:

```text
H = colección versionada de intentos realmente ejecutados
R(H, rama) = resultado registrado, o DESCONOCIDO
J(estrategia) = calidad verificada − penalización por coste
promoción = ventaja en pruebas nuevas Y todos los invariantes satisfechos
```

Los pesos de coste, presupuestos y umbrales deberán fijarse antes del examen. Se medirán por separado ejecuciones evitadas, coste de replay y coste de generar estrategias. Ganar en H puede ser sobreajuste: por eso el replay selecciona candidatos, pero no concede el verde.

## Qué permite nuestro Qwen local

El repositorio ya dispone de un adaptador para llama.cpp mediante `llama-server` o `llama-cli`; un registro previo documenta Qwen3-4B-Instruct-2507 cuantizado. Ese adaptador interpreta señales restringidas: no es todavía el orquestador de DREAM. Antes de medir fijaremos archivo, hash, cuantización y parámetros del modelo realmente utilizado.

La ficha oficial define Instruct-2507 como variante no-thinking. Escribir etiquetas de pensamiento no lo convierte en la variante Thinking. Pediremos propuestas estructuradas, una justificación breve y pruebas verificables. [Ficha de Qwen](https://huggingface.co/Qwen/Qwen3-4B-Instruct-2507).

Es viable ensayar esta arquitectura con el modelo local; su competencia para mejorar estrategias está por medir. Sin facturación externa por token sigue habiendo consumo de GPU/CPU, energía y tiempo. Leer el historial puede evitar inferencias de descubrimiento, pero generar nuevas políticas sí cuesta cómputo. No prometemos diez mil estrategias en minutos, crecimiento infinito, autorreplicación ni mejora de pesos.

## Lo construido y lo que falta

**WORLD está implementado; SENSATION, BOUNDARY y SELF tienen cierres limitados a sus contratos.** En SELF, la reutilización selectiva logra 189/240 y 193/240 objetivos en B/C, frente a 152/240 y 143/240 sin protección. Eso no resuelve todos los casos mixtos ni garantiza seguridad fuera del prior.

CONT-A conserva y restaura el agente nominal en otro proceso: 52/52 pasos posteriores coinciden en cinco escenarios, incluido un terminal que no resucita. Falta conservar recuperación activa, distinguir reanudación de descendencia y completar el examen de continuidad. DREAM aún no está implementado. [Resumen de evidencia y límites](/evidence/echo4/ECHO4-STATUS-20260922.md).

La secuencia sigue siendo: continuidad → rama cortical DREAM → mantenimiento → otro → interacción → relación → roles → integración. DREAM no bloqueará el núcleo sin LLM; la integración deberá evaluar su aportación con córtex OFF/ON separados. Hardware después del software y **METAVERSE-1 al final**. [Roadmap completo y estados](/docs/echoai/echo4).

La contraparte de OTHER será otra instancia con cuerpo y memoria privados. No confundimos esa pareja con las dos capas internas de ECHO: ni Qwen ni el núcleo se declaran consciencias por llevar esos nombres.

## ¿Y si sale todo verde?

Lo interesante sería demostrar una cadena de dependencias: que reconocer cambios propios protege aprendizaje útil; que conservar el pasado afecta decisiones; que distinguir al otro ayuda a coordinarse; y que revisar experiencia mejora dónde gastar el siguiente presupuesto de investigación.

Para sostenerlo harán falta pruebas nuevas, controles fuertes, costes completos y ablaciones: quitar historia, modelo propio, modelo del otro o propuestas de Qwen y comprobar qué se pierde. También mediremos situaciones donde cooperar perjudica o actuar por separado es mejor. Una buena relación no se define por cooperar siempre.

Ese sería el resultado emocionante: **una historia compartida con consecuencias medibles, no solo narradas**, y un sistema que aprovecha experiencia para explorar mejor sin cambiar su examinador. Un verde funcional no demostraría experiencia subjetiva, alma, conciencia humana ni una teoría universal de la jerarquía social.

## Punto de pausa

Congelamos este punto de trabajo para descansar: resultados existentes conservados, arquitectura publicada y fases pendientes visibles. No es el cierre verde global ni la congelación de un contrato experimental todavía incompleto. Al reanudar, el siguiente trabajo de código será **CONT-B**, antes de implementar DREAM.

[Roadmap oficial](/docs/echoai/echo4) · [Anuncio inicial, histórico](/articulos/echo4-inicio-roadmap-oficial) · [Descargar Markdown](/raw/es/articulos/echo4-dream-rsi-historia-compartida.md)
