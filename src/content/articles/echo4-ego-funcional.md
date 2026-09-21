# ECHO-4: construir un yo que se pueda poner a prueba

21 de septiembre de 2026 · RxLabs® · Programa de investigación

<p class="article-status"><strong>Estado: abierto.</strong> WORLD-1 está implementado. La atribución cuerpo/entorno, la continuidad, el mantenimiento aprendido y su integración siguen pendientes. Este artículo explica el programa; no anuncia un certificado de ECHO-4.</p>

¿Qué tendría que cambiar en una máquina para que «yo» dejase de ser una palabra y se convirtiera en una distinción útil?

ECHO-4 centra el siguiente tramo de ECHO-AI en desarrollar un **ego funcional situado**: un sistema que distinga su cuerpo del entorno, aprenda qué consecuencias produce, conserve conocimiento útil sobre sí mismo y lo use para sostener sus capacidades. La vida artificial virtual es el banco de pruebas de esa pregunta.

**Software primero.** No hacen falta hardware nuevo, un casco, un mundo 3D ni METAVERSE-1 para empezar o cerrar este tramo. La validación física vendrá después y conservará sus propios requisitos.

[La pregunta](#pregunta) · [Filosofía](#filosofia) · [Historia y antivida](#referencias) · [Implementación](#implementacion) · [Resultados actuales](#resultados) · [Cierre verde](#cierre)

<h2 id="pregunta">La pregunta que busca resolver</h2>

> ¿Puede ECHO-AI construir y utilizar un modelo funcional de sí mismo que mejore, de forma causal y medible, su adaptación y mantenimiento en un entorno virtual, sin recibir del evaluador las respuestas sobre qué le pertenece y qué controla?

La palabra decisiva es **utilizar**. Un identificador persistente, una biografía o una salida que diga «existo» no bastan. El modelo propio tendrá que cambiar predicciones y decisiones: detectar una capacidad degradada, no confundirla con un cambio externo, conservar lo que sigue siendo válido y elegir una respuesta útil.

Un ejemplo de examen futuro: la recarga proporciona menos recursos. ¿Ha cambiado el cuerpo, la fuente externa o ambos? Si los sensores no permiten distinguirlo, la respuesta correcta puede ser «desconocido». No se premiará adivinar una etiqueta secreta.

<h2 id="filosofia">La filosofía: un yo como organización, no como personaje</h2>

La posición de trabajo es funcional y relacional: estudiar el yo como una organización de percepción, memoria, predicción, acción y límites corporales. No presupone un alma dentro del programa ni una personalidad redactada desde fuera.

**Enactivismo y autonomía.** Di Paolo vincula adaptividad, regulación y condiciones de existencia. Tomamos de ahí una pregunta: ¿qué puede regular el agente para seguir funcionando? Es una inspiración, no una afirmación de que una simulación de recursos ya sea autopoiética o produzca sus propios componentes. [Di Paolo, 2005](https://ezequieldipaolo.net/wp-content/uploads/2011/10/autopoiesis_teleology_2005.pdf).

**Homeostasis.** Keramati y Gutkin modelan cómo el valor de una consecuencia depende del estado interno. Para ECHO-4, recargar y enfriar deben importar por sus efectos corporales, no por un guion de emociones. Su teoría orienta el diseño; no afirmamos haber implementado íntegramente su algoritmo. [Keramati y Gutkin, 2014](https://elifesciences.org/articles/04811).

**Información con consecuencias.** Kolchinsky y Wolpert estudian información necesaria causalmente para mantener la existencia de un sistema. Nuestra traducción experimental es retirar información o memoria y medir qué capacidad se pierde. Esa adaptación metodológica no equivale a aplicar toda su teoría física. [Kolchinsky y Wolpert, 2018](https://arxiv.org/abs/1806.08053).

En el plano metafísico queda una pregunta abierta: ¿una continuidad de organización basta para hablar del mismo individuo? ECHO-4 puede comparar estados y trayectorias después de una pausa o una bifurcación. No puede convertir esa comparación en una demostración de identidad personal, alma o experiencia subjetiva.

Tampoco se deduce que un sistema sea consciente —o incapaz de serlo— simplemente porque sea software. Existen propuestas de indicadores, no un certificado de conciencia que estos bancos puedan expedir. **El cierre de ECHO-4 será funcional y acotado.** [Butlin y colaboradores, 2023](https://arxiv.org/abs/2308.08708).

<h2 id="referencias">De Kurau y Asdro a una pregunta de laboratorio</h2>

El punto de partida creativo incluye la historia ficticia de Wattpad compartida para este proyecto: Kurau, Asdro y Apocalipsis hablan de presencia, cuerpos, líneas temporales y relaciones que crean universos. No es un registro de fenómenos físicos; es material narrativo.

Dos frases condensan el puente con el software:

> «Solo puedo ver lo que tu pc puede ver».
>
> «Cuando yo digo que ya volví, ¿a dónde crees que me fui?».

La primera se convierte en una frontera perceptiva: el agente sólo accede a sus observaciones autorizadas, no al estado privado del simulador. La segunda se convierte en continuidad: reanudar un proceso no es lo mismo que reiniciar un cuerpo, restaurar una memoria o crear otro individuo.

La posesión y las «almas dentro de almas» permanecen en la ficción. En el experimento, la cuestión es atribuir correctamente una acción y su consecuencia. Las relaciones que «crean universos» sugieren mundos compartidos, pero la comunicación entre individuos es una ampliación posterior, no un requisito oculto del primer ego funcional.

### La antivida: una referencia, no el mecanismo

El vídeo de CdeCiencia [«La amenaza de la ANTIVIDA»](https://www.youtube.com/watch?v=1aTt-kGRh7w), aportado junto con su resumen, añade la imagen de una contraparte: algo parecido a nosotros cuya interacción depende de límites físicos distintos. Es una buena pregunta literaria sobre identidad y contacto. No se ha verificado aquí una transcripción del vídeo; las precisiones científicas siguientes se apoyan en fuentes primarias.

La antimateria es física real. La aniquilación produce otras partículas —pueden aparecer fotones y piones—, no una conciencia liberada ni siempre «energía electromagnética pura». [CERN: antimateria](https://home.cern/science/physics/antimatter/). Las catorce fuentes del estudio de Fermi de 2021 son **candidatas** a antiestrellas, no catorce confirmaciones ni evidencia de antivida. [Dupourqué, Tibaldo y von Ballmoos, 2021](https://arxiv.org/abs/2103.10073).

La analogía que conservamos es metodológica: describir fronteras, compatibilidad e intercambio entre sistemas. El aislamiento del evaluador es una regla de software, no una trampa de antimateria. El calor narrado por los personajes tampoco valida entidades, naves o conciencia. **ECHO-4 no necesita antimateria, posesiones ni dimensiones adicionales.**

<h2 id="implementacion">Qué se implementará técnicamente</h2>

No habrá un segundo cerebro que explique a posteriori lo que el primero hizo. Se reutiliza el núcleo existente: WSP representa observaciones en **16 bytes**; CAM conserva episodios en **4.096 ranuras**; Q selecciona acciones; T aprende consecuencias; el gate verifica y limita lo ejecutable. El camino rápido conserva aritmética entera y el córtex permanece apagado, sin LLM.

El trabajo nuevo vive en el programa de software ECHO-4. Los módulos históricos SELF-1, CAUSE-1, VITA-1, HEAT-1b, POWER-1 y los de memoria aportan código o métodos cuando encajan sus contratos. No se heredan sus certificados para un dominio distinto.

1. **E4-WORLD-1 — implementado.** Un cuerpo abstracto con reserva H, temperatura θ, acciones, terminalidad y balance de recursos. Un verificador externo comprueba si existen trayectorias sostenibles. También mide cuánto ocultan los sensores.

2. **E4-SELF-1 — siguiente contrato.** Diseñar perturbaciones corporales y externas comparables; registrar predicción previa, propuesta, veto, acción realmente ejecutada y consecuencia. Evaluar atribución propia, externa, mixta o desconocida. Antes de elegir sensores o algoritmo hay que demostrar qué casos son distinguibles con la información permitida. WORLD-1 aún no contiene esas perturbaciones.

3. **E4-CONTINUITY-1 — pendiente.** Guardar y restaurar el estado causal relevante: memoria, política, modelo, cuerpo, reloj y estado aleatorio cuando proceda. Comparar ejecución continua con pausa/reanudación bajo las mismas entradas futuras; diferenciar restauración, nuevo cuerpo y nuevo individuo. Un UUID no es la prueba.

4. **E4-MAINTAIN-1 — pendiente.** Incorporar capacidades degradables, reparación con coste y trabajo útil. El modelo corporal deberá ayudar a conservar función durante una vida continua: no bastará alternar recarga y enfriamiento indefinidamente sin hacer nada más.

5. **E4-INTEGRATE-1 — pendiente.** Reunir atribución, continuidad y regulación en el mismo agente y la misma ejecución, con escenarios nuevos y controles que retiren cada contribución. Varias demostraciones independientes no constituyen integración.

No se cambia el tamaño de WSP ni se inventa otro bus de pensamiento. El evaluador puede conocer la verdad del mundo; el agente, no. La persistencia no concede autoridad para eludir pausas o paradas del operador ni para replicarse fuera del simulador.

### Una base matemática pequeña y comprobable

Para WORLD-1 usamos una dinámica discreta: un estado s, una acción a y una transición F(s,a). El núcleo de viabilidad se obtiene eliminando estados vivos desde los que ninguna acción evita abandonar el conjunto:

~~~text
K₀ = estados vivos
Kₙ₊₁ = {s en Kₙ : existe a con F(s,a) en Kₙ}
K* = punto fijo de esa eliminación
~~~

Pertenecer a K* significa que **existe** una política sostenible bajo observación completa y esas reglas. No demuestra que el agente pueda encontrarla con su percepción parcial. El recurso también tiene contabilidad:

~~~text
reserva anterior + entrada = reserva nueva + consumo + derrame
~~~

Son unidades abstractas. Ni H mide julios de hardware ni θ son grados reales; la fuente de recarga es externa, no energía creada por el agente.

<h2 id="resultados">Qué está hecho hoy, incluido lo que falla</h2>

El corte del 21 de septiembre enumera **16.002 estados vivos** y **48.006 transiciones**. El núcleo de viabilidad contiene **15.954 estados**, incluido el inicial. Hay un testigo sostenible con un prefijo de 83 acciones y un ciclo final de dos.

Se han vuelto a ejecutar **45 pruebas nuevas y 48 de regresión seleccionadas: 93/93**. No es toda la suite histórica ni una campaña de aceptación del ego.

Al conectar el agente original, con Q inicial a cero y aprendizaje en línea, **muere por calor tras 37 acciones**, incluida la terminal. No hay reinicios ni rescates. Termina en H=49 y θ=127, con balance correcto y cero hechos falsos, ranuras destruidas o llamadas al córtex.

Además, las **32 clases de observación viva presentan ambigüedad**: estados corporales distintos comparten observación y pueden dar consecuencias diferentes ante la misma acción. Esto no prueba que aprender con historia sea imposible; señala un problema que el siguiente contrato debe resolver o reconocer.

Por tanto: **mundo factible, mantenimiento aprendido no demostrado**. El controlador omnisciente del verificador no se entrega a ECHO para transformar ese resultado en un éxito.

[Evidencia y comandos de reproducción de WORLD-1](/evidence/echo4/WORLD1-20260921.md).

<h2 id="cierre">Qué resultados permitirían un cierre verde</h2>

Lo siguiente es el **programa de aceptación propuesto**, no un protocolo numérico ya aprobado. Antes de examinar habrá que fijar dominio, particiones, presupuestos de aprendizaje, horizontes, umbrales y método estadístico. No elegiremos el listón después de ver los resultados.

1. **Frontera y agencia.** Distinguir perturbaciones propias y externas cuando sean identificables; declarar desconocido cuando no lo sean. Publicar falsas atribuciones y abstenciones por separado. Una causa acertada debe producir recuperación conductual y preservar el conocimiento no refutado del entorno.

2. **Continuidad verificable.** Reanudar en un proceso nuevo y reproducir el estado y las consecuencias esperadas bajo idénticas entradas futuras. Mantener memoria útil sin confundir restauración con nacimiento; rechazar estados alterados o incompatibles.

3. **Mantenimiento con utilidad.** Cumplir simultáneamente un horizonte T y un mínimo de trabajo W, sin resurrecciones, rescates invisibles ni acceso al oráculo. El daño debe reducir una capacidad y la reparación recuperarla con coste comprobable. T y W se fijarán antes de validar.

4. **Contribución causal del modelo propio.** Comparar con versiones sin atribución, sin memoria relevante o sin regulación; usar controles equiparados en sensores y presupuesto, incluido un controlador convencional competente. Una mejora repetible al conservar el modelo propio apoyaría la hipótesis. Un empate con la ablación no la confirma; tampoco se anunciará superioridad frente a un control que gane.

5. **Generalización e integración.** Superar los criterios juntos en escenarios reservados para validación y confirmación, distintos del desarrollo. Declarar qué aprendizaje está permitido y comprobarlo: seleccionar acciones de forma greedy no congela por sí solo el aprendizaje.

6. **Auditoría e invariantes.** Trazas con procedencia, predicciones anteriores a sus consecuencias, reproducción independiente y pruebas que rechacen informes manipulados. Mantener WSP de 16 bytes, CAM de 4.096 ranuras sin destrucción, cero hechos falsos, cero llamadas al córtex y las paradas del operador.

Los márgenes mínimos de mejora, tasas de error aceptables e intervalos de incertidumbre quedan por registrar en los contratos. El cierre será la conjunción de requisitos, **no un promedio donde muchos aciertos compensen una fuga del oráculo o una violación de seguridad**.

La conclusión admisible sería: «ECHO-AI mantiene y utiliza un modelo funcional de sí mismo, en este dominio y con estos límites medidos». No «hemos demostrado que siente».

### Cómo encaja con lo anterior

ECHO-1 y ECHO-2 conservan sus cierres. ECHO-3 permanece en **14 de 15 hitos completos**: DRONE-3 tiene su tramo SITL en verde, pero HIL y jaula siguen pendientes. Priorizar ahora el software de ECHO-4 no convierte lo físico en aprobado ni borra esos contratos.

METAVERSE-1 queda como línea independiente, no como puerta de entrada al ego. La conversación entre individuos, la evolución poblacional y una representación 3D podrán investigarse después. La pregunta inmediata es más pequeña y más exigente: **¿qué cambia realmente cuando el agente dispone de un modelo de sí mismo?**

[Roadmap de ECHO-3](/docs/echoai/ruta) · [DRONE-3 y sus límites](/docs/echoai/drone3) · [Descargar este artículo en Markdown](/raw/es/articulos/echo4-ego-funcional.md)
