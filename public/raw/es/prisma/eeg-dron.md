# Campaña abierta: ¿puede PRISMA guiar un dron con EEG?

**Estado: 18 de septiembre de 2026 · campaña abierta · todavía sin resultados propios.** No hay casco EEG ni dron físico en el laboratorio. Este documento fija la pregunta, lo que ya se sabe, lo que no y cómo lo vamos a medir.

> La idea de partida: medir EEG con PRISMA, traducirlo a un patrón que echoAI y echOS entiendan y que el dron actúe en consecuencia. Por ejemplo, pensar en subir y que el dron suba. O subir el brazo.

## Resumen honesto

- **Sí se ha movido un dron con EEG no invasivo.** Pero no leyendo el pensamiento «subir»: la persona aprende a modular sus ritmos sensoriomotores imaginando movimientos, y cada patrón se asigna a una orden. En el estudio de referencia, «subir» era imaginar las dos manos a la vez.
- **Es lento.** En ese estudio, el vuelo real transmitió 1,16 bits por minuto, algo más de una decisión sí/no perfecta por minuto. Los pilotos pasaron por 3,1 aros en cada prueba de cuatro minutos; con teclado, 12,0.
- **No funciona igual para todos.** Se estima que entre el 15 y el 30 % de los usuarios no consigue controlar este tipo de interfaz.
- **«Pensar en subir» no es decodificable hoy con fiabilidad.** En un conjunto abierto de cuatro palabras de habla interior (*arriba, abajo, izquierda, derecha*), un trabajo de 2025 llega al 46,6 % por sujeto, con un azar del 25 %.
- **La latencia de microsegundos de PRISMA no es la latencia de la interfaz.** Una decisión de imaginación motora necesita ventanas de EEG de uno o dos segundos. El tiempo lo marca la fisiología, no el motor.

Por eso la campaña no intenta pilotar un dron con la mente. Intenta algo más estrecho y comprobable: **que PRISMA proponga pocas intenciones discretas, lentas y fiables, y que un error del decodificador no pueda convertirse nunca en un error de vuelo.**

## Tres cosas distintas que se suelen mezclar

| Qué hace la persona | Qué mide el EEG | ¿Sirve para un dron? |
|---|---|---|
| **Piensa en «subir»** (contenido mental, habla interior) | Ningún patrón específico y estable en el cuero cabelludo | Hoy no. En *Thinking out loud* (10 participantes, 136 canales), un trabajo de 2025 obtiene 46,6 % por sujeto y 32 % entre sujetos con cuatro palabras; el azar es el 25 %. Las revisiones señalan que la mayoría de estudios son offline y síncronos. |
| **Imagina mover manos o pies** (imaginación motora) | Desincronización de los ritmos mu y beta (8–30 Hz) sobre la corteza sensoriomotora: C3, Cz, C4 | Sí, con entrenamiento y pocas clases. Es la vía demostrada. La asignación a órdenes es arbitraria: «ambas manos = subir». |
| **Sube el brazo de verdad** (movimiento real) | Potencial de preparación unos 500 ms antes del movimiento, desincronización más intensa y actividad muscular que contamina la señal | Técnicamente sí, pero si el brazo se mueve, un sensor inercial o un EMG lo miden antes, mejor y más barato. El EEG sólo tiene sentido si la persona no puede moverse, o como comparación. |

Hay una cuarta vía, los paradigmas evocados (SSVEP, P300): la persona mira estímulos que parpadean y el EEG detecta a cuál atiende. Consiguen precisiones altas —según la UTS, un sistema desarrollado con el ejército australiano controló un robot cuadrúpedo con hasta un 94 %—, pero dependen de mirar una pantalla o unas gafas de realidad aumentada. Es control por atención visual, no por pensamiento.

## Lo que ya se ha demostrado

| Trabajo | Paradigma | Resultado | Coste o límite |
|---|---|---|---|
| LaFleur et al., 2013 | Imaginación motora, 64 canales. Mano derecha → derecha; izquierda → izquierda; ambas → subir; no imaginar nada → bajar. Avance automático a 0,69 m/s | 5 sujetos; 79,2 % de los objetivos válidos en grupo, hasta 90,5 % individual | 1,16 bits/min; 3,1 aros por prueba de 4 min frente a 12,0 con teclado. Los sujetos sin experiencia entrenaron de media 5 h 20 min en entornos virtuales durante unos 3 meses antes de volar |
| Duan et al., 2019 | Híbrido: imaginación motora para girar, SSVEP con LED para subir y bajar, parpadeo para cambiar de modo | Calibración: SSVEP 83,44 %, imaginación motora 80,45 %, parpadeo 99,07 %. Tarea de vuelo compleja: 86,5 % | 1,69 bits/min frente a 3,90 con mando. Ventanas de 1,5 s y una orden por segundo; fatiga mental |
| BCI Competition IV, conjunto 2a | 4 clases de imaginación motora, 9 sujetos, 22 canales, 250 Hz | Ganador (FBCSP): kappa 0,57, donde el azar es 0 | Referencia offline, no vuelo |
| Faisal et al., 2023 (UTS) | SSVEP con electrodos secos de grafeno y gafas de realidad aumentada | Hasta 94 % controlando un robot cuadrúpedo, según la UTS | Requiere mirar estímulos que parpadean |

Otros tres resultados fijan los límites:

- **Usuarios que no logran controlarla.** Vidaurre y Blankertz estiman que el control no funciona para entre un 15 y un 30 % de los usuarios. Su propio trabajo muestra que adaptar a la vez usuario y máquina puede recuperar a algunos.
- **Saber cuándo la persona quiere mandar.** En modo asíncrono el sistema debe distinguir una orden de «no estoy mandando nada». Un detector clásico de este tipo encontraba en torno al 40 % de los movimientos con un 1 % de falsos positivos. Si ese 1 % se mide por decisión y el sistema decide varias veces por segundo, se traduce en varias falsas alarmas por minuto.
- **Generalización.** MOABB comparó algoritmos en 12 conjuntos abiertos con más de 250 sujetos: muchos métodos validados en un conjunto no generalizan fuera de él.

## Qué tiene PRISMA hoy para esto

**Existe:**

- Lectura de GDF verificada con registros reales de BCI Competition IV 2a: 288 épocas por sesión, 72 por clase.
- Filtros causales, referencia, detección de canales malos, ICA, tiempo-frecuencia y ERD/ERS, que es la medida base de la imaginación motora.
- El motor Rust por eventos (modulación delta → LIF → STDP), con entrada en vivo por TCP, un puente para LSL y un generador sintético.

**No existe:**

- **Ningún decodificador BCI.** Ni CSP/FBCSP, ni geometría de Riemann, ni LDA, ni una evaluación al estilo MOABB.
- **Reloj de origen en vivo.** El protocolo TCP actual pone la marca de tiempo al recibir cada muestra: no distingue retraso, pérdida o silencio, y no transporta marcadores.
- **Hardware.** No hay casco EEG ni dron físico en el laboratorio.

El propio motor mantiene una línea en su panel de límites que esta campaña no cambia: *«NO lee el pensamiento ni decodifica contenido mental.»*

## Arquitectura propuesta: un contrato, no una fusión

PRISMA, echoAI y echOS siguen siendo líneas separadas. La campaña define la costura entre ellas:

```text
EEG (conjunto público reproducido como si fuera en vivo)
  → PRISMA · QC · filtro causal · decodificador · probabilidad por clase
  → evidencia acumulada · umbral · tiempo de permanencia · clase «reposo»
  → propuesta de intención: clase, confianza, ventana causal, caducidad
  → gate de echoAI · OK · MODIFY · BLOCK
  → Intent ABI de echOS · HOLD · APPROACH · AVOID · RETURN_HOME · LAND · ABORT
  → safety gate de echOS → PX4 (estabilización y failsafes)
```

Reglas de diseño:

1. **El EEG propone; nunca manda.** La salida de PRISMA es una propuesta más, como las del reloj lento de echoAI. El gate decide, y la [Intent ABI de echOS](/docs/echos/arquitectura) no tiene campos para motores.
2. **Por defecto, HOLD.** Sin evidencia suficiente, el dron se mantiene. La clase «reposo» es obligatoria.
3. **Pocas órdenes y de alto nivel.** «Subir» se expresa como un APPROACH a un punto medio metro por encima, con límite de velocidad y caducidad. La persona elige *qué* hacer; la autonomía decide *cómo* volar.
4. **Autonomía compartida.** Mientras llega una decisión, el dron sigue recorriendo distancia: con los 0,69 m/s de LaFleur y una ventana de 1,5 s como la de Duan, algo más de un metro. Evitar obstáculos y respetar la geovalla corresponde a echoAI, echOS y PX4, no al EEG.
5. **Ningún LLM en el bucle.** Igual que en echoAI y en PRISMA, un modelo de lenguaje puede explicar resultados, pero no decodificar ni dar órdenes.
6. **Los certificados no se heredan.** Los verdes de [ECHO-3](/docs/echoai/ruta) no validan el control por EEG, y la latencia de microsegundos de PRISMA no es la latencia de la interfaz.

Más adelante se puede estudiar un veto basado en potenciales de error: el cerebro produce una respuesta característica al ver que la máquina se equivoca, y más de una década de trabajos muestra que puede detectarse en un solo ensayo. Serviría para deshacer una orden mal decodificada, no para darlas.

## Plan por fases

Cada fase congela sus métricas, umbrales y reglas de parada antes de empezar, y publica sus resultados, también los negativos.

| Fase | Qué se hace | Qué debe demostrar | Necesita |
|---|---|---|---|
| **EEG-0 · Contrato** | Formato de la propuesta de intención, métricas, controles y reglas de parada | Un documento congelado antes de ver ningún dato | Nada |
| **EEG-1 · Offline** | Decodificación sobre BCI IV 2a (4 clases, 9 sujetos) y PhysioNet EEGMMIDB (109 sujetos, movimiento real e imaginado; objetivos arriba y abajo con ambos puños o ambos pies). Referencias: CSP+LDA, FBCSP y Riemann; PRISMA como brazo experimental | Reproducir las referencias publicadas antes de afirmar nada sobre PRISMA, y medir si las características por eventos aportan algo | Datos públicos |
| **EEG-2 · Pseudo-online** | Reproducir registros continuos por la entrada en vivo de PRISMA, de forma causal | Latencia de decisión, falsas activaciones por minuto en reposo y tiempo hasta la orden correcta | Reloj de origen y marcadores en el protocolo |
| **EEG-3 · Bucle simulado** | Las intenciones decodificadas del replay entran en el gate de echoAI, en echOS y en PX4 SITL | Tareas completadas frente a teclado, órdenes bloqueadas o corregidas por el gate y **cero órdenes inseguras en PX4** | Lo anterior; sin hardware |
| **EEG-4 · Persona real** | Calibración y control en línea, todavía en simulación | Rendimiento por persona, incluidas quienes no logren controlarla | Casco con cobertura sensoriomotora, consentimiento informado y aprobación ética |
| **EEG-5 · Dron en jaula** | Vuelo físico con piloto de seguridad e interruptor de corte | Lo mismo que EEG-3, con un cuerpo real | DRONE-3 cerrado y hardware; sin fecha |

**Controles obligatorios desde EEG-1:**

- Etiquetas barajadas: el resultado tiene que caer al nivel del azar.
- **Control de artefactos:** un clasificador que sólo vea canales frontales y temporales, donde dominan ojos y músculos. Si rinde casi igual que el que usa C3, Cz y C4, el decodificador está leyendo artefactos y no la corteza motora.
- Validación entre sesiones y entre sujetos. Nunca ventanas del mismo ensayo repartidas entre entrenamiento y prueba.
- Métricas por persona, no sólo medias: kappa, exactitud, ITR de Wolpaw y cuántos sujetos superan el umbral de azar significativo.

**Reglas de parada:**

- Si no se reproducen las referencias publicadas, se detiene la campaña y se corrige el pipeline.
- Si las características de PRISMA no aportan frente a CSP o Riemann con la misma información, el decodificador será clásico y así se dirá. El valor de PRISMA quedaría en la infraestructura: control de calidad, tiempo real y trazabilidad.
- Si las falsas activaciones en reposo no bajan del umbral congelado, no hay bucle cerrado.

## Hardware para las fases con personas

Un casco de consumo con cuatro electrodos en la frente y detrás de las orejas (como Muse: TP9, AF7, AF8 y TP10) no cubre la corteza sensoriomotora y no sirve para imaginación motora. Hace falta un montaje con C3, Cz, C4 y sus vecinos. Las placas abiertas de 8 a 16 canales basadas en el ADS1299, como OpenBCI Cyton con Daisy, son un punto de partida razonable, preferiblemente con electrodos de gel. La elección se hará en EEG-4, no antes.

## Ética y datos

El EEG son datos sobre procesos cerebrales. La Carta de Derechos Digitales de España (2021, artículo XXVI) pide garantizar su confidencialidad y seguridad, el control de cada persona sobre su identidad y su autodeterminación. En esta campaña:

- Las fases 0 a 3 usan sólo conjuntos públicos, bajo sus licencias.
- Cualquier registro propio exigirá consentimiento informado, aprobación de un comité de ética y minimización de datos.
- PRISMA no es un producto sanitario y esta campaña no tiene fines clínicos.
- Cualquier vuelo físico será en jaula, con piloto de seguridad y conforme a la normativa.

## Qué contaría como éxito

No «controlar un dron con la mente». Éxito sería publicar, con datos y controles:

- qué fracción de personas consigue dar dos o tres órdenes fiables;
- cuánto tardan y con cuántas falsas activaciones por minuto;
- si la representación por eventos de PRISMA aporta algo o no;
- y que, en simulación, ninguna orden mal decodificada llega a PX4 sin pasar por el gate.

Un resultado negativo bien medido también responde a la pregunta.

## Fuentes

- LaFleur K. et al. (2013). *Quadcopter control in three-dimensional space using a noninvasive motor imagery-based brain–computer interface.* J. Neural Eng. 10(4):046003. [doi:10.1088/1741-2560/10/4/046003](https://doi.org/10.1088/1741-2560/10/4/046003) · [texto completo](https://pmc.ncbi.nlm.nih.gov/articles/PMC3839680/)
- Duan X. et al. (2019). *Quadcopter flight control using a non-invasive multi-modal brain computer interface.* Front. Neurorobot. 13:23. [doi:10.3389/fnbot.2019.00023](https://doi.org/10.3389/fnbot.2019.00023)
- BCI Competition IV, resultados del conjunto 2a. [bbci.de](https://www.bbci.de/competition/iv/results/)
- Faisal S. N. et al. (2023). *Noninvasive sensors for brain–machine interfaces based on micropatterned epitaxial graphene.* ACS Appl. Nano Mater. 6(7):5440–5447. [doi:10.1021/acsanm.2c05546](https://doi.org/10.1021/acsanm.2c05546) · [nota de la UTS](https://www.uts.edu.au/news/2023/08/advancing-biosensor-tech-and-brain-computer-interfaces)
- Vidaurre C., Blankertz B. (2010). *Towards a cure for BCI illiteracy.* Brain Topogr. 23(2):194–198. [doi:10.1007/s10548-009-0121-6](https://doi.org/10.1007/s10548-009-0121-6)
- Bashashati A., Ward R. K., Birch G. E. (2007). *Towards development of a 3-state self-paced brain-computer interface.* Comput. Intell. Neurosci. [doi:10.1155/2007/84386](https://doi.org/10.1155/2007/84386)
- Jayaram V., Barachant A. (2018). *MOABB: trustworthy algorithm benchmarking for BCIs.* J. Neural Eng. 15(6):066011. [doi:10.1088/1741-2552/aadea0](https://doi.org/10.1088/1741-2552/aadea0)
- Lew E. et al. (2012). *Detection of self-paced reaching movement intention from EEG signals.* Front. Neuroeng. 5:13. [doi:10.3389/fneng.2012.00013](https://doi.org/10.3389/fneng.2012.00013)
- Nieto N. et al. (2022). *Thinking out loud, an open-access EEG-based BCI dataset for inner speech recognition.* Sci. Data 9:52. [doi:10.1038/s41597-022-01147-2](https://doi.org/10.1038/s41597-022-01147-2)
- Radwan Y. A. et al. (2025). *Stochasticity as a solution for overfitting — a new model and comparative study on non-invasive EEG prospects.* Front. Hum. Neurosci. 19:1484470. [doi:10.3389/fnhum.2025.1484470](https://doi.org/10.3389/fnhum.2025.1484470)
- Lopez-Bernal D. et al. (2022). *A state-of-the-art review of EEG-based imagined speech decoding.* Front. Hum. Neurosci. 16:867281. [doi:10.3389/fnhum.2022.867281](https://doi.org/10.3389/fnhum.2022.867281)
- Chavarriaga R., Sobolewski A., Millán J. d. R. (2014). *Errare machinale est: the use of error-related potentials in brain-machine interfaces.* Front. Neurosci. 8:208. [doi:10.3389/fnins.2014.00208](https://doi.org/10.3389/fnins.2014.00208)
- *EEG Motor Movement/Imagery Dataset* (Schalk et al., BCI2000), PhysioNet. [physionet.org](https://physionet.org/content/eegmmidb/1.0.0/)
- Carta de Derechos Digitales, Gobierno de España (2021). [espanadigital.gob.es](https://espanadigital.gob.es/lineas-de-actuacion/carta-de-derechos-digitales)

— R.N.
