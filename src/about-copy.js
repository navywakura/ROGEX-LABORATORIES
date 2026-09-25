// Institutional statement shared by /about, the footer and site metadata.
export const LAB_COPY = {
  es: {
    mission: "Laboratorio de investigación de inteligencia artificial, neurotecnología y sistemas operativos para runtimes robóticos neuromórficos heap-0.",
    nonprofit: "Organización sin fines de lucro.",
    future: "En el futuro, RxLabs® se convertirá en una empresa real, una sociedad limitada (S.L.), para construir drones autónomos con echoAI y echOS.",
  },
  en: {
    mission: "A research laboratory for artificial intelligence, neurotechnology and operating systems for heap-0 neuromorphic robotic runtimes.",
    nonprofit: "Non-profit organisation.",
    future: "In the future, RxLabs® will become a real company, a Spanish limited company (S.L.), to build autonomous drones with echoAI and echOS.",
  },
  ca: {
    mission: "Laboratori de recerca en intel·ligència artificial, neurotecnologia i sistemes operatius per a runtimes robòtics neuromòrfics heap-0.",
    nonprofit: "Organització sense ànim de lucre.",
    future: "En el futur, RxLabs® es convertirà en una empresa real, una societat limitada (S.L.), per construir drons autònoms amb echoAI i echOS.",
  },
};

export const ABOUT_COPY = {
  es: {
    intro: LAB_COPY.es.mission,
    status: "RxLabs® es una organización sin fines de lucro. En el futuro se convertirá en una empresa real, una sociedad limitada (S.L.), para construir drones autónomos con echoAI y echOS.",
    lines: "Tres líneas de trabajo con código ejecutable y evidencia pública. El sitio muestra qué corre hoy y qué se está construyendo después.",
    echos: "unikernel 3.0 para robótica al edge. Arranca en x86_64 BIOS/UEFI y AArch64 UEFI. Runtime sensor→intención sin reservas dinámicas, safety gate y puente PX4. Sin Linux, chatbot, LLM o SLM.",
    prisma: "software de análisis de EEG para investigación. Motor de tiempo real en Rust. Capa de análisis sobre MNE-Python. No es un producto sanitario.",
    echoai: "agente situado de dos relojes. ECHO-1 y ECHO-2 están cerrados. El núcleo rápido ve, recuerda, predice, actúa y aprende; el lento sólo propone. ECHO-2 añade supervivencia, patrones, streaming, consolidación, herencia, energía y temperatura, con un monitor de 512 LIF + 128 Adaptive-LIF. ECHO-3 tiene 14/15 certificados software con simulación y PX4 SITL, y DRONE-3 ha cerrado la misión integrada en SITL con 12/12 en validación y 12/12 en confirmación. Faltan hardware-in-the-loop y jaula: no hay hardware robótico en el laboratorio. ECHO-4 (el yo, el otro y la historia compartida) tiene 13 de 14 hitos en verde y se descarga como release candidate 4.0.0rc2. En benchmarks oficiales, su cortafuegos reduce entre un 81 % y un 87 % las respuestas inventadas de cuatro modelos en SimpleQA; en ARC-AGI-2 sale en rojo y en ARC-AGI-3 completa 13 de 112 niveles frente a 2 del azar. ECHO-4.5, una semilla sin preentrenar que aprende conceptos verificados, está en desarrollo (S0–S3 en verde, S4 en curso), y RxLabs® compite en ARC Prize 2026.",
  },
  en: {
    intro: LAB_COPY.en.mission,
    status: "RxLabs® is a non-profit organisation. In the future it will become a real company, a Spanish limited company (S.L.), to build autonomous drones with echoAI and echOS.",
    lines: "Three lines of work with executable code and public evidence. The site shows what runs today and what is being built next.",
    echos: "3.0 robotic edge unikernel. Boots on x86_64 BIOS/UEFI and AArch64 UEFI. Allocation-free sensor-to-intent runtime, safety gate and PX4 bridge. No Linux, chatbot, LLM or SLM.",
    prisma: "EEG analysis software for research. Real-time engine in Rust. Analysis layer built on MNE-Python. Not a medical device.",
    echoai: "two-clock situated agent. ECHO-1 and ECHO-2 are closed. The fast core sees, remembers, predicts, acts and learns; the slow clock only proposes. ECHO-2 adds survival, patterns, streaming, consolidation, inheritance, energy and temperature, with a 512 LIF + 128 Adaptive-LIF monitor. ECHO-3 has 14/15 software certificates with simulation and PX4 SITL, and DRONE-3 has closed the integrated mission in SITL with 12/12 in validation and 12/12 in confirmation. Hardware-in-the-loop and cage remain: the laboratory has no robotics hardware. ECHO-4 (self, other and shared history) has 13 of 14 milestones green and can be downloaded as release candidate 4.0.0rc2. On official benchmarks its firewall cuts the made-up answers of four models on SimpleQA by 81 % to 87 %; ARC-AGI-2 comes out red and on ARC-AGI-3 it completes 13 of 112 levels against 2 for random play. ECHO-4.5, an untrained seed that learns verified concepts, is in development (S0–S3 green, S4 in progress), and RxLabs® is competing in ARC Prize 2026.",
  },
  ca: {
    intro: LAB_COPY.ca.mission,
    status: "RxLabs® és una organització sense ànim de lucre. En el futur es convertirà en una empresa real, una societat limitada (S.L.), per construir drons autònoms amb echoAI i echOS.",
    lines: "Tres línies de treball amb codi executable i evidència pública. El lloc mostra què s'executa avui i què es construeix després.",
    echos: "unikernel 3.0 per a robòtica a l'edge. Arrenca en x86_64 BIOS/UEFI i AArch64 UEFI. Runtime sensor→intenció sense reserves dinàmiques, safety gate i pont PX4. Sense Linux, chatbot, LLM o SLM.",
    prisma: "programari d'anàlisi d'EEG per a recerca. Motor de temps real en Rust. Capa d'anàlisi sobre MNE-Python. No és un producte sanitari.",
    echoai: "agent situat de dos rellotges. ECHO-1 i ECHO-2 estan tancats. El nucli ràpid veu, recorda, prediu, actua i aprèn; el lent només proposa. ECHO-2 afegeix supervivència, patrons, streaming, consolidació, herència, energia i temperatura, amb un monitor de 512 LIF + 128 Adaptive-LIF. ECHO-3 té 14/15 certificats de programari amb simulació i PX4 SITL, i DRONE-3 ha tancat la missió integrada en SITL amb 12/12 en validació i 12/12 en confirmació. Falten hardware-in-the-loop i gàbia: no hi ha maquinari robòtic al laboratori. ECHO-4 (el jo, l'altre i la història compartida) té 13 de 14 fites en verd i es descarrega com a release candidate 4.0.0rc2. En benchmarks oficials, el seu tallafoc redueix entre un 81 % i un 87 % les respostes inventades de quatre models a SimpleQA; a ARC-AGI-2 surt en vermell i a ARC-AGI-3 completa 13 de 112 nivells davant de 2 de l'atzar. ECHO-4.5, una llavor sense preentrenar que aprèn conceptes verificats, és en desenvolupament (S0–S3 en verd, S4 en curs), i RxLabs® competeix a ARC Prize 2026.",
  },
};
