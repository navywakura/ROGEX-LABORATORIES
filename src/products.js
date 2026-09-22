// Product pages: /echos, /prisma, /echoai (plus /en and /ca).
// media[0] is the first image rendered on the page and, by construction, its
// Open Graph image. Width, height and type must match the file on disk;
// scripts/postbuild.mjs fails the build if they drift.
export const PRODUCT_DATE = "2026-09-18";

export const PRODUCTS = [
  {
    slug: "echos",
    name: "echOS",
    section: "echOS",
    docs: [
      "echos/que-es",
      "echos/guia",
      "echos/arquitectura",
      "echos/evidencia",
      "echos/galeria",
      "echos/limites",
      "echos/superficie",
      "echos/comandos",
    ],
    articles: [],
    media: [
      {
        src: "/media/echos3/08-robot.png",
        width: 1280,
        height: 720,
        type: "image/png",
        log: "/media/echos3/08-robot.log",
        alt: {
          es: "Orden robot de echOS 3.0: pipeline sensor→intención, safety gate y contadores de colas",
          en: "echOS 3.0 robot command: sensor-to-intent pipeline, safety gate and queue counters",
          ca: "Ordre robot d'echOS 3.0: pipeline sensor→intenció, safety gate i comptadors de cues",
        },
        caption: {
          es: "Runtime robótico: registros, intenciones y veredictos del safety gate tras el escenario.",
          en: "Robotic runtime: records, intents and safety-gate verdicts after the scenario.",
          ca: "Runtime robòtic: registres, intencions i veredictes del safety gate després de l'escenari.",
        },
      },
      {
        src: "/media/echos3/04-mem.png",
        width: 1280,
        height: 720,
        type: "image/png",
        log: "/media/echos3/04-mem.log",
        alt: {
          es: "Orden mem de echOS 3.0 con heap 0 B / 512 KiB",
          en: "echOS 3.0 mem command showing heap 0 B / 512 KiB",
          ca: "Ordre mem d'echOS 3.0 amb heap 0 B / 512 KiB",
        },
        caption: {
          es: "Memoria: regiones Heap-0, arena kmalloc y asignador físico.",
          en: "Memory: Heap-0 regions, kmalloc arena and physical allocator.",
          ca: "Memòria: regions Heap-0, arena kmalloc i assignador físic.",
        },
      },
      {
        src: "/media/echos3/12-px4.png",
        width: 1280,
        height: 720,
        type: "image/png",
        log: "/media/echos3/12-px4.log",
        alt: {
          es: "Enlace MAVLink de echOS con PX4",
          en: "echOS MAVLink link with PX4",
          ca: "Enllaç MAVLink d'echOS amb PX4",
        },
        caption: {
          es: "PX4 SITL: telemetría de entrada, intenciones de salida y COMMAND_ACK.",
          en: "PX4 SITL: incoming telemetry, outgoing intents and COMMAND_ACK.",
          ca: "PX4 SITL: telemetria d'entrada, intencions de sortida i COMMAND_ACK.",
        },
      },
      {
        src: "/media/echos3/10-panes.png",
        width: 1280,
        height: 720,
        type: "image/png",
        log: "/media/echos3/10-panes.log",
        alt: {
          es: "Shell y monitor en dos paneles",
          en: "Shell and monitor in two panes",
          ca: "Shell i monitor en dos panells",
        },
        caption: {
          es: "Un shell y un monitor vivo compartiendo pantalla.",
          en: "A shell and a live monitor sharing the screen.",
          ca: "Un shell i un monitor en viu compartint pantalla.",
        },
      },
      {
        src: "/media/echos3/00-chooser.png",
        width: 1280,
        height: 720,
        type: "image/png",
        log: "/media/echos3/00-chooser.log",
        alt: {
          es: "Selector LIVE o instalación de echOS 3.0",
          en: "echOS 3.0 LIVE or install chooser",
          ca: "Selector LIVE o instal·lació d'echOS 3.0",
        },
        caption: {
          es: "Selector de arranque: la decisión se toma antes de arrancar.",
          en: "Boot chooser: the decision is made before booting.",
          ca: "Selector d'arrencada: la decisió es pren abans d'arrencar.",
        },
      },
    ],
    copy: {
      es: {
        title: "echOS — unikernel para robótica al edge · RxLabs®",
        description:
          "echOS 3.0: unikernel heap-0 para robótica al edge. Arranca en x86_64 BIOS/UEFI y AArch64 UEFI, sin Linux ni LLM, con safety gate y puente PX4. 541 comprobaciones, 0 fallos.",
        kicker: "Sistemas operativos · línea 01",
        lead:
          "Un unikernel para robótica al edge. Arranca directamente sobre la máquina —sin Linux, systemd ni una distribución escondida debajo— y convierte observaciones en intenciones acotadas que entrega a un controlador de vuelo.",
        status: "Versión 3.0 cerrada",
        facts: [
          ["541 / 0", "comprobaciones y fallos en los seis certificados de cierre"],
          ["0", "reservas dinámicas de memoria en el camino sensor → intención"],
          ["3", "plataformas de arranque: x86_64 BIOS, x86_64 UEFI y AArch64 UEFI"],
          ["72 B", "por intención, con origen causal, vencimiento y límites"],
        ],
        sections: [
          {
            title: "Heap-0 en el camino caliente",
            body: [
              "El camino sensor → intención → safety gate → autopiloto usa registros y colas de tamaño fijo. El propio kernel cuenta las llamadas a kmalloc y el escenario robótico no mueve esa cifra.",
              "Un runtime que no reserva memoria mientras decide es más fácil de medir, de acotar y de portar a hardware pequeño. Es la base de lo que en RxLabs® llamamos runtime robótico heap-0.",
            ],
          },
          {
            title: "Un contrato, no un chatbot",
            body: [
              "Los sensores entran como registros enteros de 64 bytes. Las decisiones salen como intenciones de 72 bytes que sólo pueden expresar órdenes de alto nivel: HOLD, APPROACH, AVOID, RETURN_HOME, LAND o ABORT.",
              "No existe un campo para PWM, servo o acelerador. PX4 conserva la autoridad sobre estabilización y actuadores; echOS entrega intención, no control de motores.",
            ],
          },
          {
            title: "Medido, no prometido",
            body: [
              "El cierre de 3.0 exige seis certificados verdes: BIOS y UEFI en x86_64, NVMe + GPT tras reinicio, PX4 en x86_64, AArch64 directo con PX4 y AArch64 UEFI. Suman 541 comprobaciones sin fallos.",
              "Dos builds desde árboles limpios produjeron rxos.elf, rxos.bin y la ISO idénticos byte a byte. Las capturas de esta página son volcados directos del framebuffer de QEMU y cada una conserva el registro serie de su arranque.",
            ],
          },
          {
            title: "Hacia dónde va",
            body: [
              "echOS es el cuerpo previsto para los drones autónomos de RxLabs®: un sistema pequeño y medible que recibe intenciones y deja el vuelo en manos de PX4. Hoy echoAI corre en el host y no está dentro de la ISO; el contrato de sensores e intenciones es la costura por la que se unirán.",
            ],
          },
        ],
        limits: [
          "Sin SMP: un núcleo por arquitectura.",
          "AArch64 sin framebuffer: consola serie PL011.",
          "Sin lector ACPI ni controladores de Wi-Fi, audio o GPU.",
          "PX4 SITL se ejecuta en el host y no está dentro de la ISO.",
          "No se ha certificado vuelo real, normativa aeronáutica ni seguridad funcional.",
          "El contrato heap-0 cubre el camino robótico; kmalloc sigue existiendo fuera de él.",
        ],
      },
      en: {
        title: "echOS — robotic edge unikernel · RxLabs®",
        description:
          "echOS 3.0: a heap-0 unikernel for edge robotics. Boots on x86_64 BIOS/UEFI and AArch64 UEFI with no Linux or LLM, with a safety gate and PX4 bridge. 541 checks, 0 failures.",
        kicker: "Operating systems · line 01",
        lead:
          "A unikernel for edge robotics. It boots straight on the machine — no Linux, systemd or hidden distribution underneath — and turns observations into bounded intents that it hands to a flight controller.",
        status: "Version 3.0 closed",
        facts: [
          ["541 / 0", "checks and failures across the six closing certificates"],
          ["0", "dynamic memory allocations on the sensor → intent path"],
          ["3", "boot platforms: x86_64 BIOS, x86_64 UEFI and AArch64 UEFI"],
          ["72 B", "per intent, with causal origin, expiry and limits"],
        ],
        sections: [
          {
            title: "Heap-0 on the hot path",
            body: [
              "The sensor → intent → safety gate → autopilot path uses fixed-size records and queues. The kernel counts its own kmalloc calls, and the robotic scenario does not move that number.",
              "A runtime that does not allocate memory while it decides is easier to measure, to bound and to port to small hardware. It is the basis of what RxLabs® calls a heap-0 robotic runtime.",
            ],
          },
          {
            title: "A contract, not a chatbot",
            body: [
              "Sensors come in as 64-byte integer records. Decisions leave as 72-byte intents that can only express high-level orders: HOLD, APPROACH, AVOID, RETURN_HOME, LAND or ABORT.",
              "There is no field for PWM, servo or throttle. PX4 keeps authority over stabilisation and actuators; echOS delivers intent, not motor control.",
            ],
          },
          {
            title: "Measured, not promised",
            body: [
              "Closing 3.0 requires six green certificates: BIOS and UEFI on x86_64, NVMe + GPT across a reboot, PX4 on x86_64, direct AArch64 with PX4 and AArch64 UEFI. Together they add up to 541 checks with no failures.",
              "Two builds from clean trees produced byte-identical rxos.elf, rxos.bin and ISO. The screenshots on this page are direct QEMU framebuffer dumps, each with the serial log of its own boot.",
            ],
          },
          {
            title: "Where it is heading",
            body: [
              "echOS is the intended body for the RxLabs® autonomous drones: a small, measurable system that receives intents and leaves flight to PX4. Today echoAI runs on the host and is not inside the ISO; the sensor and intent contract is the seam where they will meet.",
            ],
          },
        ],
        limits: [
          "No SMP: one core per architecture.",
          "AArch64 has no framebuffer: PL011 serial console.",
          "No ACPI reader and no Wi-Fi, audio or GPU drivers.",
          "PX4 SITL runs on the host, not inside the ISO.",
          "No real flight, aviation regulation or functional safety has been certified.",
          "The heap-0 contract covers the robotic path; kmalloc still exists outside it.",
        ],
      },
      ca: {
        title: "echOS — unikernel per a robòtica a l'edge · RxLabs®",
        description:
          "echOS 3.0: unikernel heap-0 per a robòtica a l'edge. Arrenca en x86_64 BIOS/UEFI i AArch64 UEFI, sense Linux ni LLM, amb safety gate i pont PX4. 541 comprovacions, 0 errors.",
        kicker: "Sistemes operatius · línia 01",
        lead:
          "Un unikernel per a robòtica a l'edge. Arrenca directament sobre la màquina —sense Linux, systemd ni cap distribució amagada a sota— i converteix observacions en intencions acotades que lliura a un controlador de vol.",
        status: "Versió 3.0 tancada",
        facts: [
          ["541 / 0", "comprovacions i errors als sis certificats de tancament"],
          ["0", "reserves dinàmiques de memòria al camí sensor → intenció"],
          ["3", "plataformes d'arrencada: x86_64 BIOS, x86_64 UEFI i AArch64 UEFI"],
          ["72 B", "per intenció, amb origen causal, venciment i límits"],
        ],
        sections: [
          {
            title: "Heap-0 al camí calent",
            body: [
              "El camí sensor → intenció → safety gate → pilot automàtic fa servir registres i cues de mida fixa. El mateix nucli compta les crides a kmalloc i l'escenari robòtic no mou aquesta xifra.",
              "Un runtime que no reserva memòria mentre decideix és més fàcil de mesurar, d'acotar i de portar a maquinari petit. És la base del que a RxLabs® anomenem runtime robòtic heap-0.",
            ],
          },
          {
            title: "Un contracte, no un chatbot",
            body: [
              "Els sensors entren com a registres enters de 64 bytes. Les decisions surten com a intencions de 72 bytes que només poden expressar ordres d'alt nivell: HOLD, APPROACH, AVOID, RETURN_HOME, LAND o ABORT.",
              "No existeix cap camp per a PWM, servo o accelerador. PX4 conserva l'autoritat sobre l'estabilització i els actuadors; echOS lliura intenció, no control de motors.",
            ],
          },
          {
            title: "Mesurat, no promès",
            body: [
              "El tancament de la 3.0 exigeix sis certificats verds: BIOS i UEFI en x86_64, NVMe + GPT després de reiniciar, PX4 en x86_64, AArch64 directe amb PX4 i AArch64 UEFI. Sumen 541 comprovacions sense errors.",
              "Dos builds des d'arbres nets van produir rxos.elf, rxos.bin i la ISO idèntics byte a byte. Les captures d'aquesta pàgina són bolcats directes del framebuffer de QEMU i cadascuna conserva el registre sèrie de la seva arrencada.",
            ],
          },
          {
            title: "Cap a on va",
            body: [
              "echOS és el cos previst per als drons autònoms de RxLabs®: un sistema petit i mesurable que rep intencions i deixa el vol en mans de PX4. Avui echoAI s'executa a l'host i no és dins la ISO; el contracte de sensors i intencions és la costura per on s'uniran.",
            ],
          },
        ],
        limits: [
          "Sense SMP: un nucli per arquitectura.",
          "AArch64 sense framebuffer: consola sèrie PL011.",
          "Sense lector ACPI ni controladors de Wi-Fi, àudio o GPU.",
          "PX4 SITL s'executa a l'host i no és dins la ISO.",
          "No s'ha certificat vol real, normativa aeronàutica ni seguretat funcional.",
          "El contracte heap-0 cobreix el camí robòtic; kmalloc continua existint fora d'aquest camí.",
        ],
      },
    },
  },
  {
    slug: "prisma",
    name: "PRISMA",
    section: "PRISMA",
    docs: ["prisma/resumen", "prisma/tecnico", "prisma/eeg-dron"],
    articles: [],
    media: [
      {
        src: "/media/prisma/01.png",
        width: 1193,
        height: 795,
        type: "image/png",
        alt: {
          es: "Panel Señal de PRISMA con 16 canales de EEG",
          en: "PRISMA Signal panel with 16 EEG channels",
          ca: "Panell Senyal de PRISMA amb 16 canals d'EEG",
        },
        caption: {
          es: "Panel Señal: 16 canales de EEG con desplazamiento, zoom y paginado sobre las trazas reales.",
          en: "Signal panel: 16 EEG channels with scrolling, zoom and paging over the real traces.",
          ca: "Panell Senyal: 16 canals d'EEG amb desplaçament, zoom i paginació sobre les traces reals.",
        },
      },
      {
        src: "/media/prisma/02.png",
        width: 1038,
        height: 814,
        type: "image/png",
        alt: {
          es: "Mapa de componentes ICA en PRISMA",
          en: "ICA component map in PRISMA",
          ca: "Mapa de components ICA a PRISMA",
        },
        caption: {
          es: "Componentes ICA con sus topografías, para separar parpadeos y músculo de la señal.",
          en: "ICA components with their topographies, used to separate blinks and muscle from the signal.",
          ca: "Components ICA amb les seves topografies, per separar parpelleigs i múscul del senyal.",
        },
      },
      {
        src: "/media/prisma/03.png",
        width: 1663,
        height: 984,
        type: "image/png",
        alt: {
          es: "Localización de fuentes sLORETA en 3D en PRISMA",
          en: "3D sLORETA source localisation in PRISMA",
          ca: "Localització de fonts sLORETA en 3D a PRISMA",
        },
        caption: {
          es: "Análisis de fuentes sLORETA con vista 3D sobre una cabeza plantilla.",
          en: "sLORETA source analysis with a 3D view on a template head.",
          ca: "Anàlisi de fonts sLORETA amb vista 3D sobre un cap plantilla.",
        },
      },
    ],
    copy: {
      es: {
        title: "PRISMA — análisis de EEG para investigación · RxLabs®",
        description:
          "PRISMA: neurotecnología para investigación. Análisis de EEG reproducible y motor Rust orientado a eventos con 1,81 µs de latencia media y cero reservas en el camino crítico. No es un producto sanitario.",
        kicker: "Neurotecnología · línea 02",
        lead:
          "Software de análisis de EEG para investigación. Abre una grabación, la limpia, la analiza y te dice si lo que encontraste aguanta un examen serio o no.",
        status: "Engine 0.1.0 medido · no es un producto sanitario",
        campaign: {
          kicker: "Campaña exploratoria · intención → dron",
          title: "¿Cómo convertir una intención en una propuesta de vuelo?",
          body: [
            "La campaña estudia señales EEG y compara rutas de control muscular y corporal. PRISMA propondría intenciones acotadas; echoAI y echOS aplicarían sus filtros antes del controlador de vuelo.",
            "Hay demostraciones publicadas de vuelo con imaginación motora, de control mediante el torso y de un dron virtual manejado con un implante. Son tareas y sistemas distintos. RxLabs todavía no tiene resultados propios de control neural de un dron físico: el primer paso son datos públicos y simulación, midiendo también el retraso de la respuesta que recibe la persona.",
          ],
          status: "Fase actual: EEG-0, contrato y controles. Ningún dato de la campaña analizado todavía.",
          link: "Leer la campaña completa",
          doc: "prisma/eeg-dron",
        },
        facts: [
          ["1,81 µs", "latencia media del motor en el camino caliente, 32 canales"],
          ["0", "reservas de memoria en el camino crítico, por construcción"],
          ["73 / 73", "sujetos del dataset público ds006018 procesados sin fallos"],
          ["30 / 32", "clústeres candidatos descartados correctamente"],
        ],
        sections: [
          {
            title: "Un motor orientado a eventos",
            body: [
              "PRISMA ENGINE está escrito en Rust. En vez de calcular FFT sobre ventanas fijas, codifica la señal en impulsos: modulación delta → neuronas LIF vectorizadas con AVX2 → plasticidad STDP → codificación predictiva.",
              "Un canal en silencio no produce eventos. El trabajo es proporcional a cuánto cambia la señal, no a la frecuencia de muestreo. Es un binario único de 9,0 MB, sin runtime que instalar.",
            ],
          },
          {
            title: "Te dice cuándo no tienes nada",
            body: [
              "Cualquier programa calcula un valor de p. PRISMA corrige las comparaciones como familia y marca por separado si un resultado depende de unos pocos puntos extremos, si desaparece al controlar un factor de confusión obvio o si la muestra nunca tuvo potencia para detectarlo.",
              "Termina con un veredicto: defendible sí o no. «defendible: no» es el resultado normal de una exploración honesta, no un error del programa.",
            ],
          },
          {
            title: "Probado con datos públicos",
            body: [
              "Sobre ds006018 —tarea Flanker, 73 sujetos— PRISMA recuperó dos efectos ya establecidos en la literatura: la respuesta ERP de conflicto y el theta mediofrontal. En conectividad dijo claramente que no había nada.",
              "La hipótesis original del proyecto, calibrar el umbral por sujeto, se probó contra dos datasets públicos independientes y no replicó. La disciplina que hizo falta para descubrirlo ahora forma parte del producto.",
            ],
          },
          {
            title: "Dos mitades",
            body: [
              "La aplicación de escritorio, sobre MNE-Python, tiene seis paneles: Sesión, Señal, Preproceso, Análisis, Grupo y Límites. Abre BrainVision, EDF/EDF+, BDF, GDF, Neuroscan CNT, EEGLAB y FIF.",
              "El motor y la capa de análisis se usan juntos o por separado. Los métodos numéricos son de MNE-Python, scipy y mne-connectivity: PRISMA no reimplementa nada numérico.",
            ],
          },
        ],
        limits: [
          "No es un producto sanitario: no diagnostica ni predice nada.",
          "La localización de fuentes usa una cabeza plantilla: cuenta con 1–2 cm de error.",
          "La conectividad entre electrodos está contaminada por conducción de volumen.",
          "El etiquetado automático de ICA es una sugerencia, no un veredicto.",
          "Todavía no se puede conectar un casco y verlo en vivo sin un script puente.",
          "Todavía no está a la venta.",
        ],
      },
      en: {
        title: "PRISMA — EEG analysis for research · RxLabs®",
        description:
          "PRISMA: neurotechnology for research. Reproducible EEG analysis and an event-driven Rust engine with 1.81 µs mean latency and no allocations on the critical path. Not a medical device.",
        kicker: "Neurotechnology · line 02",
        lead:
          "EEG analysis software for research. It opens a recording, cleans it, analyses it and tells you whether what you found would survive a serious review.",
        status: "Engine 0.1.0 measured · not a medical device",
        campaign: {
          kicker: "Exploratory campaign · intent → drone",
          title: "How do you turn an intention into a flight proposal?",
          body: [
            "The campaign studies EEG signals and compares muscle-based and body-based control routes. PRISMA would propose bounded intents; echoAI and echOS would apply their filters before the flight controller.",
            "There are published demonstrations of flight with motor imagery, of control through torso movement and of a virtual drone flown with an implant. They are different tasks and systems. RxLabs has no results of its own on neural control of a physical drone yet: the first step is public data and simulation, also measuring the delay of the response the person receives.",
          ],
          status: "Current phase: EEG-0, contract and controls. No campaign data analysed yet.",
          link: "Read the full campaign",
          doc: "prisma/eeg-dron",
        },
        facts: [
          ["1.81 µs", "mean engine latency on the hot path, 32 channels"],
          ["0", "memory allocations on the critical path, by construction"],
          ["73 / 73", "subjects of the public ds006018 dataset processed without failures"],
          ["30 / 32", "candidate clusters correctly discarded"],
        ],
        sections: [
          {
            title: "An event-driven engine",
            body: [
              "PRISMA ENGINE is written in Rust. Instead of running FFTs over fixed windows, it encodes the signal as spikes: delta modulation → AVX2-vectorised LIF neurons → STDP plasticity → predictive coding.",
              "A silent channel produces no events. Work is proportional to how much the signal changes, not to the sampling rate. It ships as a single 9.0 MB binary with no runtime to install.",
            ],
          },
          {
            title: "It tells you when you have nothing",
            body: [
              "Any program computes a p-value. PRISMA corrects comparisons as a family and flags separately whether a result depends on a few extreme points, disappears when an obvious confounder is controlled, or whether the sample never had the power to detect it.",
              "It ends with a verdict: defensible yes or no. “defensible: no” is the normal outcome of an honest exploration, not a bug.",
            ],
          },
          {
            title: "Tested on public data",
            body: [
              "On ds006018 — a Flanker task with 73 subjects — PRISMA recovered two effects already established in the literature: the conflict ERP response and midfrontal theta. For connectivity, it said clearly that there was nothing there.",
              "The project's original hypothesis, per-subject threshold calibration, was tested against two independent public datasets and did not replicate. The discipline needed to find that out is now part of the product.",
            ],
          },
          {
            title: "Two halves",
            body: [
              "The desktop application, built on MNE-Python, has six panels: Session, Signal, Preprocess, Analysis, Group and Limits. It opens BrainVision, EDF/EDF+, BDF, GDF, Neuroscan CNT, EEGLAB and FIF.",
              "The engine and the analysis layer work together or separately. Numerical methods come from MNE-Python, scipy and mne-connectivity: PRISMA reimplements nothing numerical.",
            ],
          },
        ],
        limits: [
          "Not a medical device: it does not diagnose or predict anything.",
          "Source localisation uses a template head: expect 1–2 cm of error.",
          "Electrode-level connectivity is contaminated by volume conduction.",
          "Automatic ICA labelling is a suggestion, not a verdict.",
          "You cannot yet plug in a headset and watch it live without a bridge script.",
          "Not yet for sale.",
        ],
      },
      ca: {
        title: "PRISMA — anàlisi d'EEG per a recerca · RxLabs®",
        description:
          "PRISMA: neurotecnologia per a recerca. Anàlisi d'EEG reproduïble i motor Rust orientat a esdeveniments amb 1,81 µs de latència mitjana i cap reserva al camí crític. No és un producte sanitari.",
        kicker: "Neurotecnologia · línia 02",
        lead:
          "Programari d'anàlisi d'EEG per a recerca. Obre un enregistrament, el neteja, l'analitza i et diu si el que has trobat aguanta un examen seriós o no.",
        status: "Engine 0.1.0 mesurat · no és un producte sanitari",
        campaign: {
          kicker: "Campanya exploratòria · intenció → dron",
          title: "Com es converteix una intenció en una proposta de vol?",
          body: [
            "La campanya estudia senyals EEG i compara rutes de control muscular i corporal. PRISMA proposaria intencions acotades; echoAI i echOS aplicarien els seus filtres abans del controlador de vol.",
            "Hi ha demostracions publicades de vol amb imatgeria motora, de control amb el tors i d'un dron virtual manejat amb un implant. Són tasques i sistemes diferents. RxLabs encara no té resultats propis de control neural d'un dron físic: el primer pas són dades públiques i simulació, mesurant també el retard de la resposta que rep la persona.",
          ],
          status: "Fase actual: EEG-0, contracte i controls. Encara cap dada de la campanya analitzada.",
          link: "Llegeix la campanya completa",
          doc: "prisma/eeg-dron",
        },
        facts: [
          ["1,81 µs", "latència mitjana del motor al camí calent, 32 canals"],
          ["0", "reserves de memòria al camí crític, per construcció"],
          ["73 / 73", "subjectes del conjunt públic ds006018 processats sense errors"],
          ["30 / 32", "clústers candidats descartats correctament"],
        ],
        sections: [
          {
            title: "Un motor orientat a esdeveniments",
            body: [
              "PRISMA ENGINE està escrit en Rust. En comptes de calcular FFT sobre finestres fixes, codifica el senyal en impulsos: modulació delta → neurones LIF vectoritzades amb AVX2 → plasticitat STDP → codificació predictiva.",
              "Un canal en silenci no produeix esdeveniments. La feina és proporcional a quant canvia el senyal, no a la freqüència de mostreig. És un binari únic de 9,0 MB, sense runtime per instal·lar.",
            ],
          },
          {
            title: "Et diu quan no tens res",
            body: [
              "Qualsevol programa calcula un valor de p. PRISMA corregeix les comparacions com a família i marca per separat si un resultat depèn d'uns pocs punts extrems, si desapareix en controlar un factor de confusió evident o si la mostra mai no va tenir potència per detectar-lo.",
              "Acaba amb un veredicte: defensable sí o no. «defensable: no» és el resultat normal d'una exploració honesta, no un error del programa.",
            ],
          },
          {
            title: "Provat amb dades públiques",
            body: [
              "Sobre ds006018 —tasca Flanker, 73 subjectes— PRISMA va recuperar dos efectes ja establerts a la literatura: la resposta ERP de conflicte i el theta mediofrontal. En connectivitat va dir clarament que no hi havia res.",
              "La hipòtesi original del projecte, calibrar el llindar per subjecte, es va provar contra dos conjunts de dades públics independents i no es va replicar. La disciplina que va caldre per descobrir-ho ara forma part del producte.",
            ],
          },
          {
            title: "Dues meitats",
            body: [
              "L'aplicació d'escriptori, sobre MNE-Python, té sis panells: Sessió, Senyal, Preprocés, Anàlisi, Grup i Límits. Obre BrainVision, EDF/EDF+, BDF, GDF, Neuroscan CNT, EEGLAB i FIF.",
              "El motor i la capa d'anàlisi es fan servir junts o per separat. Els mètodes numèrics són de MNE-Python, scipy i mne-connectivity: PRISMA no reimplementa res numèric.",
            ],
          },
        ],
        limits: [
          "No és un producte sanitari: no diagnostica ni prediu res.",
          "La localització de fonts fa servir un cap plantilla: compta amb 1–2 cm d'error.",
          "La connectivitat entre elèctrodes està contaminada per conducció de volum.",
          "L'etiquetatge automàtic d'ICA és un suggeriment, no un veredicte.",
          "Encara no es pot connectar un casc i veure'l en directe sense un script pont.",
          "Encara no està a la venda.",
        ],
      },
    },
  },
  {
    slug: "echoai",
    name: "echoAI",
    updated: "2026-09-22",
    section: "echoAI",
    docs: [
      "echoai/que-es",
      "echoai/piezas",
      "echoai/echo1",
      "echoai/echo2",
      "echoai/resultados",
      "echoai/proceso",
      "echoai/ruta",
      "echoai/echo4",
      "echoai/transfer",
      "echoai/drone3",
      "echoai/hardware",
      "echoai/limites",
    ],
    articles: ["echo4-continuidad-dream-a-identidad", "echo4-dream-rsi-historia-compartida", "echo4-inicio-roadmap-oficial", "echo4-ego-funcional", "drone3-mision-integrada-sitl", "transfer3-aprender-no-basta", "echo3-trece-fases-verdes", "echo3-a-mitad"],
    media: [
      {
        src: "/media/echoai/opengraph/echo2.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: {
          es: "GUI nativa de ECHO-2 con la red neuronal en vivo",
          en: "ECHO-2 native GUI with the live neural network",
          ca: "GUI nativa d'ECHO-2 amb la xarxa neuronal en directe",
        },
        caption: {
          es: "ECHO-2 en vivo: red neuronal, estado del agente y eventos reales en la GUI nativa.",
          en: "ECHO-2 live: neural network, agent state and real events in the native GUI.",
          ca: "ECHO-2 en directe: xarxa neuronal, estat de l'agent i esdeveniments reals a la GUI nativa.",
        },
      },
      {
        src: "/media/echoai/board.gif",
        width: 640,
        height: 360,
        type: "image/gif",
        alt: {
          es: "Tablero de echoAI reproduciendo el registro del agente",
          en: "echoAI board replaying the agent log",
          ca: "Tauler d'echoAI reproduint el registre de l'agent",
        },
        caption: {
          es: "Tablero de echoAI: reproducción de thought.jsonl turno a turno. Sin red ni modelo: es el registro.",
          en: "echoAI board: turn-by-turn replay of thought.jsonl. No network, no model: this is the log.",
          ca: "Tauler d'echoAI: reproducció de thought.jsonl torn a torn. Sense xarxa ni model: és el registre.",
        },
      },
      {
        src: "/media/echoai/opengraph/results-card.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: {
          es: "Resultados medidos de ECHO-1 a ECHO-2",
          en: "Measured results from ECHO-1 to ECHO-2",
          ca: "Resultats mesurats d'ECHO-1 a ECHO-2",
        },
        caption: {
          es: "Evolución medida de ECHO-1 a ECHO-2.",
          en: "Measured evolution from ECHO-1 to ECHO-2.",
          ca: "Evolució mesurada d'ECHO-1 a ECHO-2.",
        },
      },
    ],
    video: {
      src: "/media/echoai/echo2-neural-viz-demo.mp4",
      poster: "/media/echoai/opengraph/echo2-card.jpg",
      caption: {
        es: "Grabación directa de 2:03 realizada el 9 de septiembre de 2026: red neuronal, dron 3D, mapa WSP de 16 bytes y tutorial.",
        en: "Direct 2:03 recording made on 9 September 2026: neural network, 3D drone, 16-byte WSP map and tutorial.",
        ca: "Enregistrament directe de 2:03 fet el 9 de setembre de 2026: xarxa neuronal, dron 3D, mapa WSP de 16 bytes i tutorial.",
      },
    },
    copy: {
      es: {
        title: "echoAI — agente situado de dos relojes · RxLabs®",
        description:
          "echoAI: agente situado de dos relojes con un monitor de 512 LIF + 128 Adaptive-LIF. ECHO-1 y ECHO-2 cerrados; ECHO-3 tiene 14/15 certificados software y la misión integrada cerrada en SITL.",
        kicker: "Inteligencia artificial · línea 03",
        lead:
          "Un agente situado de dos relojes. El rápido representa, recuerda, anticipa, decide y aprende con estructuras discretas; el lento sólo puede proponer. No es un chatbot conectado a motores.",
        status: "ECHO-3 14/15 · ECHO-4: CONTINUITY cerrado; DREAM-A iniciado",
        facts: [
          ["14 / 15", "certificados software de ECHO-3 en bancos acotados"],
          ["512 + 128", "neuronas LIF y Adaptive-LIF en el monitor de ECHO-2"],
          ["16 B", "WSP: el único paquete que comparte todo el agente"],
          ["12 / 12", "vuelos correctos de DRONE-3 en validación y en confirmación"],
        ],
        flow: "percibir → WSP → CAM → T / Pattern / Q → gate → acción → consecuencia → aprendizaje",
        sections: [
          {
            title: "Cómo decide",
            body: [
              "WSP es el único paquete compartido. CAM registra episodios observados, T y PatternMemory respaldan predicciones, Q prioriza acciones y el gate acepta, modifica o bloquea. Una hipótesis no se convierte en hecho sin evidencia y el gate tiene la última palabra.",
              "Un LLM no escribe hechos ni ordena motores. Cuando el reloj lento interviene, su salida es una propuesta, no una orden.",
            ],
          },
          {
            title: "ECHO-1 y ECHO-2, cerrados",
            body: [
              "ECHO-1 cerró el ciclo base: memoria episódica, consecuencias, predicción, patrones, transferencia y narración póstuma, con 488 pruebas correctas.",
              "ECHO-2 añadió supervivencia entre vidas, patrones perceptivos, streaming, consolidación, herencia y regulación conjunta de energía y temperatura. En el mismo banco, las firmas perceptivas reservadas pasaron de 829/2.048 con 256 LIF a 2.048/2.048 con el monitor de 512 LIF.",
            ],
          },
          {
            title: "ECHO-3, hacia el edge robótico",
            body: [
              "ECHO-3 tiene 14 de 15 certificados verdes en simulación funcional, replay y vuelos PX4 SITL: evidencia, identidad, dinámica, fusión, composición, causa, enlace PX4, energía, contención, autoridad de fuentes y transferencia útil.",
              "DRONE-3 cerró la misión completa en SITL: 12/12 vuelos en validación y 12/12 en confirmación, cero colisiones y 228/228 sondas de rechazo bloqueadas. El hito exige además hardware-in-the-loop y jaula, y no hay hardware robótico en el laboratorio.",
            ],
          },
          {
            title: "Hacia dónde va",
            body: [
              "ECHO-4 desarrolla autorrepresentación e historia compartida: SELF y CONTINUITY tienen cierres acotados; DREAM-A registra y reproduce intentos, todavía sin Qwen ni automejora demostrada. MAINTAIN y las fases sociales siguen pendientes. RELEASE-1 prevé una distribución reproducible tras INTEGRATE; después vendrán hardware y, al final, METAVERSE-1. El agente no depende del proyecto legado echo-discord.",
            ],
          },
        ],
        limits: [
          "No es inteligencia general ni una persona artificial.",
          "Reconoce familias simbólicas reservadas; no reconoce objetos en imágenes reales.",
          "No hace SLAM, control de vuelo ni navegación certificada.",
          "Catorce certificados software y una misión integrada en simulación no equivalen a un robot físico volando.",
          "No hay hardware robótico ni NPU físico (Akida) en el laboratorio.",
        ],
      },
      en: {
        title: "echoAI — two-clock situated agent · RxLabs®",
        description:
          "echoAI: a two-clock situated agent with a 512 LIF + 128 Adaptive-LIF monitor. ECHO-1 and ECHO-2 are closed; ECHO-3 has 14/15 software certificates and the integrated mission closed in SITL.",
        kicker: "Artificial intelligence · line 03",
        lead:
          "A two-clock situated agent. The fast clock represents, remembers, anticipates, decides and learns with discrete structures; the slow one can only propose. It is not a chatbot wired to motors.",
        status: "ECHO-3 14/15 · ECHO-4: CONTINUITY closed; DREAM-A started",
        facts: [
          ["14 / 15", "ECHO-3 software certificates in bounded benches"],
          ["512 + 128", "LIF and Adaptive-LIF neurons in the ECHO-2 monitor"],
          ["16 B", "WSP: the only packet shared across the agent"],
          ["12 / 12", "correct DRONE-3 flights in validation and in confirmation"],
        ],
        flow: "perceive → WSP → CAM → T / Pattern / Q → gate → action → consequence → learning",
        sections: [
          {
            title: "How it decides",
            body: [
              "WSP is the only shared packet. CAM records observed episodes, T and PatternMemory back predictions, Q prioritises actions and the gate accepts, modifies or blocks. A hypothesis does not become a fact without evidence, and the gate has the last word.",
              "An LLM does not write facts or command motors. When the slow clock steps in, its output is a proposal, not an order.",
            ],
          },
          {
            title: "ECHO-1 and ECHO-2, closed",
            body: [
              "ECHO-1 closed the base loop: episodic memory, consequences, prediction, patterns, transfer and posthumous narration, with 488 passing tests.",
              "ECHO-2 added survival across lives, perceptual patterns, streaming, consolidation, inheritance and joint regulation of energy and temperature. In the same bench, held-out perceptual signatures went from 829/2,048 with 256 LIF to 2,048/2,048 with the 512 LIF monitor.",
            ],
          },
          {
            title: "ECHO-3, towards edge robotics",
            body: [
              "ECHO-3 has 14 of 15 green certificates across functional simulation, replay and PX4 SITL flights: evidence, identity, dynamics, fusion, composition, causality, PX4 link, energy, containment, source authority and useful transfer.",
              "DRONE-3 closed the complete mission in SITL: 12/12 flights in validation and 12/12 in confirmation, zero collisions and 228/228 refusal probes blocked. The milestone also demands hardware-in-the-loop and a cage, and the laboratory has no robotics hardware.",
            ],
          },
          {
            title: "Where it is heading",
            body: [
              "ECHO-4 develops self-representation and shared history: SELF and CONTINUITY have bounded closures; DREAM-A records and replays attempts, without Qwen or demonstrated self-improvement. MAINTAIN and social phases remain pending. RELEASE-1 plans a reproducible distribution after INTEGRATE; hardware follows, with METAVERSE-1 last. The agent does not depend on legacy echo-discord.",
            ],
          },
        ],
        limits: [
          "It is not general intelligence or an artificial person.",
          "It recognises held-out symbolic families; it does not recognise objects in real images.",
          "It does no SLAM, flight control or certified navigation.",
          "Fourteen software certificates and an integrated mission in simulation are not a physical robot flying.",
          "There is no robotics hardware or physical NPU (Akida) in the laboratory.",
        ],
      },
      ca: {
        title: "echoAI — agent situat de dos rellotges · RxLabs®",
        description:
          "echoAI: agent situat de dos rellotges amb un monitor de 512 LIF + 128 Adaptive-LIF. ECHO-1 i ECHO-2 tancats; ECHO-3 té 14/15 certificats de programari i la missió integrada tancada en SITL.",
        kicker: "Intel·ligència artificial · línia 03",
        lead:
          "Un agent situat de dos rellotges. El ràpid representa, recorda, anticipa, decideix i aprèn amb estructures discretes; el lent només pot proposar. No és un chatbot connectat a motors.",
        status: "ECHO-3 14/15 · ECHO-4: CONTINUITY tancat; DREAM-A iniciat",
        facts: [
          ["14 / 15", "certificats de programari d'ECHO-3 en bancs acotats"],
          ["512 + 128", "neurones LIF i Adaptive-LIF al monitor d'ECHO-2"],
          ["16 B", "WSP: l'únic paquet que comparteix tot l'agent"],
          ["12 / 12", "vols correctes de DRONE-3 en validació i en confirmació"],
        ],
        flow: "percebre → WSP → CAM → T / Pattern / Q → gate → acció → conseqüència → aprenentatge",
        sections: [
          {
            title: "Com decideix",
            body: [
              "WSP és l'únic paquet compartit. CAM registra episodis observats, T i PatternMemory donen suport a les prediccions, Q prioritza accions i el gate accepta, modifica o bloqueja. Una hipòtesi no es converteix en fet sense evidència i el gate té l'última paraula.",
              "Un LLM no escriu fets ni dona ordres als motors. Quan el rellotge lent intervé, la seva sortida és una proposta, no una ordre.",
            ],
          },
          {
            title: "ECHO-1 i ECHO-2, tancats",
            body: [
              "ECHO-1 va tancar el cicle base: memòria episòdica, conseqüències, predicció, patrons, transferència i narració pòstuma, amb 488 proves correctes.",
              "ECHO-2 va afegir supervivència entre vides, patrons perceptius, streaming, consolidació, herència i regulació conjunta d'energia i temperatura. Al mateix banc, les signatures perceptives reservades van passar de 829/2.048 amb 256 LIF a 2.048/2.048 amb el monitor de 512 LIF.",
            ],
          },
          {
            title: "ECHO-3, cap a la robòtica a l'edge",
            body: [
              "ECHO-3 té 14 de 15 certificats verds en simulació funcional, replay i vols PX4 SITL: evidència, identitat, dinàmica, fusió, composició, causa, enllaç PX4, energia, contenció, autoritat de fonts i transferència útil.",
              "DRONE-3 va tancar la missió completa en SITL: 12/12 vols en validació i 12/12 en confirmació, zero col·lisions i 228/228 sondes de rebuig bloquejades. La fita exigeix a més hardware-in-the-loop i gàbia, i no hi ha maquinari robòtic al laboratori.",
            ],
          },
          {
            title: "Cap a on va",
            body: [
              "ECHO-4 desenvolupa autorepresentació i història compartida: SELF i CONTINUITY tenen tancaments acotats; DREAM-A registra i reprodueix intents, sense Qwen ni automillora demostrada. MAINTAIN i les fases socials són pendents. RELEASE-1 preveu una distribució reproduïble després d'INTEGRATE; després, maquinari i METAVERSE-1 al final. L'agent no depèn del projecte llegat echo-discord.",
            ],
          },
        ],
        limits: [
          "No és intel·ligència general ni una persona artificial.",
          "Reconeix famílies simbòliques reservades; no reconeix objectes en imatges reals.",
          "No fa SLAM, control de vol ni navegació certificada.",
          "Catorze certificats de programari i una missió integrada en simulació no equivalen a un robot físic volant.",
          "No hi ha maquinari robòtic ni NPU físic (Akida) al laboratori.",
        ],
      },
    },
  },
];

export function productFor(slug) {
  return PRODUCTS.find((product) => product.slug === slug);
}

// The Open Graph card of a product page is the first image on that page.
export function productImage(product) {
  return product.media[0];
}
