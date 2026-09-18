# Intención → dron: EEG, EMG y control corporal

**Estado: 18 de septiembre de 2026 · campaña exploratoria · sin resultados propios de control de un dron.** No hay casco EEG, sensores EMG ni dron físico en el laboratorio. La campaña empieza con datos públicos y simulación.

> La idea de partida: pensar en subir y que el dron suba, a la velocidad del pensamiento, como si fuera una extensión del sistema nervioso. Este documento separa lo que ya se ha demostrado, lo que no y cómo lo vamos a medir.

## Resumen

- **Ya se ha pilotado un cuadricóptero real con EEG**, pero con imaginación motora entrenada: en el estudio de referencia, «subir» era imaginar las dos manos. Con cinco participantes, esa tarea alcanzó 1,16 bits por minuto y 3,1 aros por prueba de cuatro minutos, frente a 12 con teclado.
- **Hay rutas más rápidas, pero no todas son EEG ni son accesibles.** Una persona con tetraplejia manejó un dron virtual con un implante intracortical que decodificaba movimientos de dedos. Personas sin experiencia aprendieron a pilotar drones reales moviendo el torso. Una pulsera EMG decodifica gestos y escritura sin ajustarse a cada persona.
- **«Subir» puede significar cuatro cosas distintas:** intentar un movimiento, imaginarlo, elegir una meta o pensar la palabra. Cada una se mide y se decodifica de forma diferente.
- **La velocidad no la da el motor de PRISMA.** La latencia depende de la señal, del procesamiento y de la respuesta que vuelve a la persona; no se deduce del tiempo de cómputo de un evento. Hoy la latencia de extremo a extremo de RxLabs es desconocida, porque todavía no existe la cadena física para medirla.
- **Una extensión del cuerpo necesita un camino de vuelta.** Sentir lo que hace el dron, con imagen o vibración, importa tanto como enviarle órdenes.

La campaña compara esas rutas con la misma simulación y los mismos filtros de seguridad: PRISMA propone intenciones acotadas y echoAI y echOS las filtran antes de que lleguen al controlador de vuelo.

## Cuatro significados de «subir»

| Qué hace la persona | Qué se ha podido decodificar | Qué no está demostrado | Ruta de control razonable |
|---|---|---|---|
| **Intentar un movimiento**, también con parálisis | Movimientos de dedos en 4 grados de libertad con un implante intracortical (una persona, dron virtual) | Que sirva cualquier zona o cualquier tarea sin entrenamiento | Asociar una variable motora calibrada a una intención acotada |
| **Imaginar un movimiento** | Modulación de los ritmos sensoriomotores en EEG, como en LaFleur et al. | Un símbolo «arriba» idéntico para todas las personas | Selección discreta de metas, con una clase de reposo explícita |
| **Elegir una meta espacial** | Objetivos e imaginación de acciones en la corteza parietal posterior (implante, una persona, tarea instruida) | Leer metas libres fuera del paradigma | Proponer un destino y dejar la trayectoria a la autonomía |
| **Pensar la palabra** | Habla interior con EEG: en un conjunto abierto de cuatro palabras, un trabajo de 2025 obtuvo una media del 46,6 % dentro de cada sujeto frente a un azar del 25 %, en evaluación offline | Una fiabilidad suficiente para dar órdenes de vuelo | Línea exploratoria offline; nunca mando principal |

Si la persona **mueve de verdad** el brazo o el torso, la señal más directa es el propio movimiento o la actividad muscular, medidos con sensores inerciales o EMG. Eso no es «leer el cerebro», pero sí una interfaz corporal legítima, y hoy es la ruta accesible más rápida. Una interfaz que use actividad muscular debe llamarse por lo que mide.

## Lo que ya se ha demostrado

| Trabajo | Señal y tarea | Resultado | Límite que no hay que olvidar |
|---|---|---|---|
| LaFleur et al., 2013 | EEG, imaginación motora, 64 canales. Mano derecha → derecha; izquierda → izquierda; ambas → subir; nada → bajar | Cuadricóptero real. 1,16 bits/min; 3,1 aros por prueba de 4 min frente a 12 con teclado. Ventanas espectrales de 160 ms y una actualización cada 30 ms | 5 participantes. Los que no tenían experiencia entrenaron de media 5 h 20 min durante unos 3 meses |
| Willsey et al., 2025 | Implante intracortical, movimientos de dedos en 4 grados de libertad | 76 objetivos por minuto y 2,60 bits/s en la tarea de dedos; después, un cuadricóptero virtual por circuitos de aros | Una persona con tetraplejia; dron virtual, no físico |
| Miehlbradt et al., 2018 | Movimientos del torso | Personas sin experiencia dominaron drones simulados y reales, y superaron a quienes usaban joystick | Interfaz cuerpo-máquina, no señal cerebral directa |
| Kaifosh et al., 2025 | EMG de superficie en una pulsera | 0,66 objetivos/s en navegación, 0,88 gestos/s y 20,9 palabras/min escribiendo, con modelos que generalizan entre personas | Actividad muscular en tareas de ordenador, no un dron. Sus modelos no son una implementación de PRISMA |
| Chen et al., 2015 | EEG con estímulos visuales parpadeantes (SSVEP) | Deletreo en línea con hasta 5,32 bits/s | Hay que mirar los estímulos: es control por atención visual, no por pensamiento |

Estos resultados no se suman ni se comparan directamente: cada uno mide una tarea distinta, en su propia unidad. Lo que sí muestran es que **el paradigma cambia el resultado más que el sensor**. El mismo EEG va de 1,16 bits por minuto en un vuelo con imaginación motora a varios bits por segundo deletreando con estímulos visuales.

Otros tres resultados marcan límites:

- **No todas las personas controlan la interfaz a la primera.** Vidaurre y Blankertz estimaban entre un 15 y un 30 % de usuarios con los que el control por ritmos sensoriomotores no funcionaba. Su propio trabajo muestra que adaptar a la vez persona y máquina recupera a parte de ellos.
- **Distinguir una orden de «no estoy mandando nada» es difícil.** En modo asíncrono, un detector clásico encontraba en torno al 40 % de los movimientos con un 1 % de falsos positivos. La métrica que importa son las falsas activaciones por minuto en reposo.
- **Generalizar es difícil.** MOABB comparó algoritmos en 12 conjuntos abiertos con más de 250 sujetos: muchos métodos validados en un conjunto no generalizan fuera de él.

## ¿Qué significa «a la velocidad del pensamiento»?

No hay una única velocidad: conducción nerviosa, preparación, decisión, movimiento y percepción son procesos distintos. Como referencia, en adultos de 18 a 25 años el tiempo medio de reacción visual de cada persona tuvo una mediana de 243 ms en una tarea simple y de 382 ms al elegir entre cuatro respuestas. Esas cifras incluyen decidir y moverse, y no son una constante universal.

Para que un dron se sienta parte del cuerpo, lo decisivo es el **bucle completo**:

```text
intención → señal (EEG · EMG · torso · implante)
  → evidencia suficiente → decodificador → propuesta o abstención
  → gate de echoAI → Intent ABI → safety gate de echOS
  → radio → autopiloto → primer movimiento medible del dron
  → cámara o sensor → pantalla o vibración → percepción de la persona
```

Tres ideas guían la campaña:

- **Una ventana corta no hace una interfaz rápida.** LaFleur usó ventanas EEG de 160 ms, pero tomar una decisión fiable, evitar falsas órdenes y cerrar el bucle lleva bastante más. Hay que medir la respuesta a un cambio, no deducirla del tamaño de la ventana.
- **El cuello de botella está en la señal y en el retorno, no en el cómputo.** Como ejemplo aritmético, acelerar un clasificador de 3 a 1 ms ahorra 2 ms; acortar la acumulación de evidencia de 50 a 25 ms ahorra 25, siempre que no aumenten las falsas órdenes.
- **Agencia no es propiedad corporal.** En experimentos de laboratorio con manos artificiales, los desfases por debajo de unos 300 ms favorecen sentir la mano como propia, y los retrasos crecientes reducen tanto la sensación de agencia como la de propiedad. No es un umbral universal para drones, pero explica por qué importan los bucles cortos.

**Hoy la latencia de extremo a extremo de RxLabs es desconocida.** El primer objetivo es medirla por tramos, con marcas de tiempo desde el sensor de origen.

## Qué tiene PRISMA hoy y qué le falta

**Existe:**

- Lectura de GDF verificada con registros reales de BCI Competition IV 2a.
- Filtros causales, referencia, detección de canales malos, ICA, tiempo-frecuencia y ERD/ERS.
- El motor Rust por eventos (modulación delta → LIF → STDP), con entrada en vivo por TCP, un puente LSL y un generador sintético.

**Falta, por orden de impacto en latencia y seguridad:**

1. **Tiempo de origen.** La entrada TCP marca cada muestra al recibirla. Hacen falta la marca del sensor, un número de secuencia, el registro de pérdidas y marcadores.
2. **Reposo y abstención.** Una clase «no estoy mandando», caducidad de cada propuesta y trazas hasta los dos gates, midiendo falsas activaciones por minuto.
3. **Ingesta multimodal.** EEG, EMG y sensores inerciales, cada uno a su frecuencia y sincronizados de forma documentada.
4. **Decodificadores de referencia.** Para EEG, CSP/FBCSP con LDA y geometría de Riemann; para EMG, características causales con clasificación o regresión; para datos intracorticales, ridge y Kalman. La red LIF/STDP de PRISMA compite contra ellos; su ventaja no se da por supuesta.
5. **Evaluación honesta.** Separación por días y por personas, entrenamiento sólo con el pasado y replay a tiempo real.

El panel de límites de PRISMA sigue diciendo lo mismo: *«NO lee el pensamiento ni decodifica contenido mental.»*

## Arquitectura y autoridad

PRISMA, echoAI y echOS siguen siendo líneas separadas. La campaña define la costura entre ellas:

```text
sensor → PRISMA · calidad · decodificación · abstención
  → intención candidata → gate de echoAI · OK · MODIFY · BLOCK
  → Intent ABI de echOS (v1, 72 B) → safety gate de echOS
  → adaptador → controlador de vuelo (PX4 o firmware del Crazyflie)
```

Reglas de diseño:

1. **La señal propone; nunca manda.** La salida de PRISMA es una propuesta más, como las del reloj lento de echoAI. Decide el gate, y la [Intent ABI de echOS](/docs/echos/arquitectura) no tiene campos para motores.
2. **La persona elige qué; la autonomía decide cómo.** «Subir» se expresa como un APPROACH a un punto medio metro por encima, con límite de velocidad y caducidad. La autonomía local estabiliza y evita obstáculos sin esperar a la siguiente decisión humana.
3. **Sin cambios en la ABI al empezar.** Si las mediciones muestran que encadenar metas no basta para un control continuo, se estudiará en un diseño aparte una consigna de velocidad acotada: marco de referencia, velocidad y aceleración máximas, duración y caducidad, sin PWM y con los dos gates.
4. **Reposo explícito y HOLD como respuesta por defecto**, sabiendo que HOLD no basta si el dron pierde su posición. La pérdida de localización, de enlace o de un sensor necesita una contingencia validada.
5. **Ningún LLM en el bucle.** Un modelo de lenguaje puede explicar resultados, pero no decodificar ni dar órdenes.
6. **Los filtros limitan consecuencias; no leen la mente.** Una orden equivocada pero dentro de los límites puede pasar los dos gates. Lo defendible es que las barreras limitan ciertas consecuencias bajo supuestos comprobados, no que ningún error de decodificación pueda llegar al vuelo.
7. **Los certificados no se heredan.** Los verdes de [ECHO-3](/docs/echoai/ruta) no validan el control por EEG, EMG ni torso.

Más adelante puede estudiarse un canal de corrección con potenciales de error: el cerebro produce una respuesta característica al ver que la máquina se equivoca. Esa respuesta llega después del error, así que sirve para deshacer una orden, no como barrera ante una colisión.

## El camino de vuelta

Una extensión del sistema nervioso no sólo envía órdenes: también siente. En un estudio con una persona con tetraplejia, añadir tacto mediante estimulación intracortical redujo a la mitad el tiempo de una tarea con brazo robótico, de una mediana de 20,9 s a 10,2 s. RxLabs no propone implantes. Su primer retorno será visual y háptico no invasivo, con vibraciones que distingan tres mensajes:

- **intención recibida**, confirmada al instante en local;
- **intención aceptada** por los gates;
- **movimiento observado** por los sensores del dron, con la edad del dato visible.

Una vibración de «hecho» antes de que el dron se mueva mentiría sobre su estado. Por eso cada experimento medirá por separado el rendimiento, la sensación de agencia («lo he causado yo») y la de propiedad («lo siento mío»).

## Escalera de pruebas

Cada fase congela sus métricas, umbrales y reglas de parada antes de empezar, y publica sus resultados, también los negativos. La campaña es independiente del programa de validación de PRISMA. Los nombres de fase se conservan; desde EEG-1, cada fase compara modalidades.

| Fase | Qué se hace | Qué debe demostrar | Necesita |
|---|---|---|---|
| **EEG-0 · Contrato** | Formato de la intención propuesta, marcas de tiempo por tramo, métricas, controles y reglas de parada | Un documento congelado antes de ver datos | Nada |
| **EEG-1 · Datos públicos** | Intracortical: FALCON H1 (CC BY 4.0). EEG: PhysioNet EEGMMIDB y BCI Competition IV 2a, sin redistribuirlo. EMG: el conjunto abierto de Kaifosh et al., de uso no comercial. Referencias clásicas frente a PRISMA | Reproducir las referencias, con separación por días, antes de afirmar nada sobre PRISMA | Datos públicos |
| **EEG-2 · Replay causal** | Reproducir registros a tiempo real por la entrada de PRISMA, con pérdidas, jitter, paquetes viejos y fallos inyectados | Latencia por tramo, falsas activaciones por minuto cuando los datos lo permitan y capacidad de cancelar | Tiempo de origen y marcadores |
| **EEG-3 · Bucle simulado** | Intenciones decodificadas → gates → PX4 SITL, con retorno simulado | Ningún camino que evite los gates y trazas completas de cada orden | Todo lo anterior; sin hardware |
| **EEG-4 · Personas, no invasivo** | Torso/IMU y EMG comparados con la misma simulación, límites y retorno; EEG para elegir metas | Latencia física medida por tramos, falsas activaciones, fatiga, agencia y estabilidad entre días | Sensores, consentimiento informado y aprobación ética |
| **EEG-5 · Dron contenido** | Crazyflie en un recinto cerrado mediante un adaptador propio (usa el firmware de Bitcraze y CRTP, no PX4), con piloto de seguridad. El X500 con PX4 será una campaña aparte | Lo mismo que EEG-4 con un cuerpo real, sin heredar resultados de la simulación | EEG-4 cerrado y hardware |

**Controles obligatorios:**

- Etiquetas barajadas: el resultado tiene que caer al nivel del azar.
- **EMG y EOG registrados junto al EEG**, para detectar si el decodificador aprovecha músculos u ojos en vez de la corteza.
- Separación por días y por personas. Nunca ventanas del mismo ensayo repartidas entre entrenamiento y prueba.
- Métricas por persona y distribuciones completas (P50, P95, P99 y peores casos), no sólo medias. Los tiempos agotados cuentan como fallos.

**Reglas de parada:** fuga de datos, marcas de tiempo desconocidas para una afirmación temporal, licencia insuficiente, rendimiento que desaparece entre días o cualquier camino que evite los gates. Si PRISMA no aporta nada frente a las referencias clásicas, el decodificador será clásico y así se dirá.

## Hardware

Nada de esto está todavía en el laboratorio.

- **EEG:** hace falta un montaje con C3, Cz y C4, las posiciones habituales de la imaginación motora. Un casco con electrodos sólo en la frente y detrás de las orejas, como Muse, no las cubre.
- **EMG y torso:** sensores de superficie y unidades inerciales. Son la primera ruta con personas.
- **BrainChip AKD1500:** coprocesador neuromórfico candidato (arquitectura Akida 1.0) para un modelo compatible, siempre con una CPU como referencia. Que PRISMA use LIF/STDP no hace portable su red: habrá que convertirla, compilarla y medir la latencia y la energía del sistema completo. No se publicarán cifras de fabricante como resultados propios.
- **Implantes:** sólo datos públicos. Cualquier trabajo con personas implantadas se haría con un grupo clínico autorizado; RxLabs no propone implantar a personas sanas para pilotar.

## Ética, datos y ley

- **Datos cerebrales y musculares:** RGPD y Carta de Derechos Digitales de España (artículo XXVI). Minimización, seudonimización y ninguna reutilización para inferir salud o identidad.
- **Productos sanitarios:** cualquier vía invasiva o de estimulación entra en el Reglamento (UE) 2017/745 y requiere un socio clínico y un comité de ética.
- **Inteligencia artificial:** el Reglamento (UE) 2024/1689 se aplica según la finalidad; hacer investigación no exime de todo.
- **Vuelo:** Reglamento (UE) 2019/947 y Real Decreto 517/2024. En la categoría abierta, volar con gafas FPV exige un observador visual.
- **Doble uso:** el control neural de drones interesa al sector militar. RxLabs es civil: no acepta encargos de armamento ni de selección de objetivos, y revisa cualquier exportación según el Reglamento (UE) 2021/821.

## Qué contaría como éxito

No «controlar un dron con la mente». Éxito sería publicar, con datos y controles:

- qué ruta (torso, EMG, EEG o una combinación) permite dar órdenes fiables, y a qué fracción de personas;
- la latencia medida de cada tramo, desde el sensor hasta lo que percibe la persona;
- cuántas falsas activaciones por minuto produce cada ruta en reposo;
- si la representación por eventos de PRISMA aporta algo frente a las referencias clásicas;
- y que ninguna orden llega al controlador de vuelo sin pasar por los dos gates.

Un resultado negativo bien medido también responde a la pregunta.

## Fuentes

**Control de drones y decodificación**

- LaFleur K. et al. (2013). *Quadcopter control in three-dimensional space using a noninvasive motor imagery-based brain–computer interface.* J. Neural Eng. 10(4):046003. [doi:10.1088/1741-2560/10/4/046003](https://doi.org/10.1088/1741-2560/10/4/046003) · [texto completo](https://pmc.ncbi.nlm.nih.gov/articles/PMC3839680/)
- Willsey M. S. et al. (2025). *A high-performance brain–computer interface for finger decoding and quadcopter game control in an individual with paralysis.* Nat. Med. [doi:10.1038/s41591-024-03341-8](https://doi.org/10.1038/s41591-024-03341-8)
- Miehlbradt J. et al. (2018). *Data-driven body–machine interface for the accurate control of drones.* PNAS. [doi:10.1073/pnas.1718648115](https://doi.org/10.1073/pnas.1718648115)
- Kaifosh P., Reardon T. R., CTRL-labs at Reality Labs (2025). *A generic non-invasive neuromotor interface for human-computer interaction.* Nature. [doi:10.1038/s41586-025-09255-w](https://doi.org/10.1038/s41586-025-09255-w)
- Chen X. et al. (2015). *High-speed spelling with a noninvasive brain–computer interface.* PNAS. [doi:10.1073/pnas.1508080112](https://doi.org/10.1073/pnas.1508080112)
- Aflalo T. et al. (2015). *Decoding motor imagery from the posterior parietal cortex of a tetraplegic human.* Science 348:906–910. [doi:10.1126/science.aaa5417](https://doi.org/10.1126/science.aaa5417)
- Nieto N. et al. (2022). *Thinking out loud, an open-access EEG-based BCI dataset for inner speech recognition.* Sci. Data 9:52. [doi:10.1038/s41597-022-01147-2](https://doi.org/10.1038/s41597-022-01147-2)
- Radwan Y. A. et al. (2025). *Stochasticity as a solution for overfitting — a new model and comparative study on non-invasive EEG prospects.* Front. Hum. Neurosci. 19:1484470. [doi:10.3389/fnhum.2025.1484470](https://doi.org/10.3389/fnhum.2025.1484470)
- Vidaurre C., Blankertz B. (2010). *Towards a cure for BCI illiteracy.* Brain Topogr. 23(2):194–198. [doi:10.1007/s10548-009-0121-6](https://doi.org/10.1007/s10548-009-0121-6)
- Bashashati A., Ward R. K., Birch G. E. (2007). *Towards development of a 3-state self-paced brain-computer interface.* Comput. Intell. Neurosci. [doi:10.1155/2007/84386](https://doi.org/10.1155/2007/84386)
- Jayaram V., Barachant A. (2018). *MOABB: trustworthy algorithm benchmarking for BCIs.* J. Neural Eng. 15(6):066011. [doi:10.1088/1741-2552/aadea0](https://doi.org/10.1088/1741-2552/aadea0)
- Chavarriaga R., Sobolewski A., Millán J. d. R. (2014). *Errare machinale est: the use of error-related potentials in brain-machine interfaces.* Front. Neurosci. 8:208. [doi:10.3389/fnins.2014.00208](https://doi.org/10.3389/fnins.2014.00208)

**Tiempo, cuerpo y retorno**

- Deary I. J., Liewald D., Nissan J. (2011). *A free, easy-to-use, computer-based simple and four-choice reaction time programme: the Deary-Liewald reaction time task.* Behav. Res. Methods 43:258–268. [doi:10.3758/s13428-010-0024-1](https://doi.org/10.3758/s13428-010-0024-1)
- Shimada S., Fukuda K., Hiraki K. (2009). *Rubber hand illusion under delayed visual feedback.* PLoS ONE 4:e6185. [doi:10.1371/journal.pone.0006185](https://doi.org/10.1371/journal.pone.0006185)
- Kalckert A., Ehrsson H. H. (2012). *Moving a rubber hand that feels like your own: a dissociation of ownership and agency.* Front. Hum. Neurosci. 6:40. [doi:10.3389/fnhum.2012.00040](https://doi.org/10.3389/fnhum.2012.00040)
- Shibuya S., Unenaka S., Ohki Y. (2018). *The relationship between the virtual hand illusion and motor performance.* Front. Psychol. 9:2242. [doi:10.3389/fpsyg.2018.02242](https://doi.org/10.3389/fpsyg.2018.02242)
- Flesher S. N. et al. (2021). *A brain-computer interface that evokes tactile sensations improves robotic arm control.* Science. [doi:10.1126/science.abd0380](https://doi.org/10.1126/science.abd0380)

**Datos, hardware y normas**

- FALCON H1, DANDI 000954, CC BY 4.0. [dandiarchive.org](https://dandiarchive.org/dandiset/000954) · [benchmark FALCON](https://snel-repo.github.io/falcon/datasets.html)
- *EEG Motor Movement/Imagery Dataset* (Schalk et al., BCI2000), PhysioNet. [physionet.org](https://physionet.org/content/eegmmidb/1.0.0/)
- BCI Competition IV. [bbci.de](https://www.bbci.de/competition/iv/)
- *Generic neuromotor interface*, datos y código de Kaifosh et al. [github.com/facebookresearch](https://github.com/facebookresearch/generic-neuromotor-interface)
- Akida 1.0, documentación de BrainChip. [doc.brainchipinc.com](https://doc.brainchipinc.com/user_guide/hardware/1.0.html)
- Firmware de Crazyflie y CRTP, Bitcraze. [bitcraze.io](https://www.bitcraze.io/documentation/repository/crazyflie-firmware/master/functional-areas/crtp/crtp_platform/)
- Reglamentos (UE) [2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj), [2017/745](https://eur-lex.europa.eu/eli/reg/2017/745/oj), [2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), [2019/947](https://eur-lex.europa.eu/eli/reg_impl/2019/947/oj) y [2021/821](https://eur-lex.europa.eu/eli/reg/2021/821/oj); [Real Decreto 517/2024](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2024-11377); [EASA, vuelo FPV](https://www.easa.europa.eu/en/light/topics/drone-racing-and-flying-drone-goggles-first-person-view-fpv)
- Carta de Derechos Digitales, Gobierno de España (2021). [espanadigital.gob.es](https://espanadigital.gob.es/lineas-de-actuacion/carta-de-derechos-digitales)

— R.N.
