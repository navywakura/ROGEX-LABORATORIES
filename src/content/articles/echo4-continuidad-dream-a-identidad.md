# ECHO-4: continuidad verificada, primeros árboles de DREAM y una identidad propia

22 de septiembre de 2026 · Actualización de laboratorio

<img class="echoai-article-mark" src="/media/echoai/brand/echoai-256.png" width="128" height="128" alt="Logo oficial del agente echoAI" />

**ECHO-4 ya puede conservar y reconstruir su estado bajo el contrato de continuidad probado. También ha empezado a registrar árboles de intentos para investigar mejores maneras de explorar.** Son dos avances diferentes: el primero tiene cierre acotado; el segundo es infraestructura experimental, no una demostración de automejora.

Y desde hoy, el símbolo blanco sobre negro que encabeza este artículo es el **logo oficial del agente echoAI**. Aparece en su página, documentación y los favicons de los artículos. RxLabs conserva su R en las demás secciones. [Descargar logo de 1024 px](/media/echoai/brand/echoai-1024.png) · [Original de 2000 px](/media/echoai/brand/echoai-original.png).

## Una historia que no se pierde al cerrar el proceso

En el relato que inspira el programa, dos personajes anónimos se encuentran y construyen una historia compartida. Su «universo» es esa convivencia: lo vivido cambia lo que cada uno espera del otro. Es una metáfora de investigación, no una ley física ni evidencia de almas.

Antes de investigar ese encuentro necesitamos algo menos vistoso y esencial: que el agente no pierda su historia al reiniciarse. CONT-A preservó el estado nominal; CONT-B incorporó diagnóstico y recuperación activa; CONT-C distinguió reanudación, cuerpo nuevo, descendencia y bifurcación. CONT-D los examinó juntos.

El examen reunió **69/69 checkpoints exactos, 300/300 eventos posteriores idénticos, 186/186 turnos nativos coincidentes y 30/30 alteraciones rechazadas**. La auditoría reconstruyó la evidencia en procesos nuevos y concedió `continuity1_green=true`.

El alcance importa: operaciones síncronas terminadas en WORLD-1, custodio confiable y estado autorizado. No certifica tolerancia a cualquier corte eléctrico, exclusividad entre máquinas o identidad subjetiva. Los terminales no resucitan. Un cuerpo restaurado por el ejecutor tampoco cuenta como autorreparación.

## DREAM-A: recordar intentos antes de aprender a explorarlos

La inspiración arquitectónica es [Dream-RSI](https://dream-rsi.com): aprovechar experiencia registrada para estudiar decisiones de exploración. Nuestra primera implementación todavía no llama a Qwen ni cambia pesos. Reutiliza el agente y sus modos originales normal/greedy, registra procedencia y costes, y ofrece un replay de lo realmente ejecutado.

El banco de desarrollo contiene **3 árboles, 31 nodos y 28 intentos nativos nuevos**. Sus 62 consultas de replay devuelven 28 resultados observados, 32 desconocidos y dos respuestas de terminalidad. «Desconocido» es la respuesta correcta cuando esa continuación nunca fue registrada; no se inventa un futuro para rellenar el árbol.

La reconstrucción coincide con los registros originales. El replay no vuelve a ejecutar el entorno ni llama al LLM, aunque leer y calcular sí consume recursos. Las pruebas comprueban límites de presupuesto, rechazo de archivos alterados y que los futuros no revelados no cambien la vista actual.

La batería de esta entrega acumuló **748 pruebas distintas: 747 aprobadas y un fallo esperado histórico**, tras repetir con permiso las pruebas GUI bloqueadas inicialmente por el sandbox. No equivale a 748 experimentos científicos ni a un certificado global de ECHO-4.

## Lo interesante todavía está por demostrar

La pregunta es concreta: **¿puede el mismo modelo, con los mismos pesos, lograr mejores resultados porque aprende a gastar mejor su presupuesto de exploración?** Si una estrategia elegida con el historial supera controles equiparados en tareas nuevas, habremos demostrado una mejora del sistema de búsqueda, no necesariamente del modelo neuronal.

Falta fijar una tarea y un evaluador discriminantes. Después, DREAM-B investigará propuestas declarativas acotadas de Qwen; DREAM-C, su selección offline; DREAM-D, pruebas nuevas, controles, varios ciclos y reversión. Ninguna estrategia podrá modificar el examinador, el gate o el núcleo para aprobarse sola. **`dream1_green=false`; Qwen sigue apagado en este banco.**

Y hay una segunda pregunta igual de atractiva: ¿cuánto aportará la historia de otro agente a decisiones futuras? OTHER, INTERACTION, RELATION y ROLES siguen pendientes. El cuento da una dirección; serán los controles los que permitan distinguir una relación útil de una etiqueta decorativa.

## Un agente publicable, no un bot de Discord

ECHO-4 no depende del proyecto legado `echo-discord`. Ese proyecto queda fuera del desarrollo activo y sus herramientas, entornos y modelos no se reutilizan como dependencias del agente. La comunidad de RxLabs puede seguir usando Discord; eso no convierte al agente en un bot.

La futura fase **E4-RELEASE-1** irá después de INTEGRATE y antes del hardware: empaquetado, instalación reproducible, pruebas, revisión de licencias y privacidad, y publicación autorizada en Hugging Face. La distribución coordinará núcleo rápido y córtex lento en el runtime; no los fusionará mágicamente dentro de los pesos del LLM. Habrá una versión software publicada y una línea posterior de investigación del laboratorio. METAVERSE-1 permanece al final.

MAINTAIN investigará reparación con costes y trabajo útil; todavía está pendiente. Ninguna fase actual acredita conciencia subjetiva. El motivo para continuar no es anunciarla: es poder medir qué cambia cuando un agente conserva un pasado, distingue lo propio y aprende cuándo interactuar ayuda.

[Roadmap actualizado](/docs/echoai/echo4) · [Resultados, procedencia y límites](/evidence/echo4/ECHO4-STATUS-20260922-v3.md) · [Arquitectura y motivación anteriores](/articulos/echo4-dream-rsi-historia-compartida)
