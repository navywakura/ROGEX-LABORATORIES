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
    echoai: "agente situado de dos relojes. ECHO-1 y ECHO-2 están cerrados. El núcleo rápido ve, recuerda, predice, actúa y aprende; el lento sólo propone. ECHO-2 añade supervivencia, patrones, streaming, consolidación, herencia, energía y temperatura, con un monitor de 512 LIF + 128 Adaptive-LIF. ECHO-3 tiene 13/15 certificados software con simulación y PX4 SITL. TRANSFER-3 sigue rojo y la misión integrada está pendiente. No hay hardware robótico en el laboratorio.",
  },
  en: {
    intro: LAB_COPY.en.mission,
    status: "RxLabs® is a non-profit organisation. In the future it will become a real company, a Spanish limited company (S.L.), to build autonomous drones with echoAI and echOS.",
    lines: "Three lines of work with executable code and public evidence. The site shows what runs today and what is being built next.",
    echos: "3.0 robotic edge unikernel. Boots on x86_64 BIOS/UEFI and AArch64 UEFI. Allocation-free sensor-to-intent runtime, safety gate and PX4 bridge. No Linux, chatbot, LLM or SLM.",
    prisma: "EEG analysis software for research. Real-time engine in Rust. Analysis layer built on MNE-Python. Not a medical device.",
    echoai: "two-clock situated agent. ECHO-1 and ECHO-2 are closed. The fast core sees, remembers, predicts, acts and learns; the slow clock only proposes. ECHO-2 adds survival, patterns, streaming, consolidation, inheritance, energy and temperature, with a 512 LIF + 128 Adaptive-LIF monitor. ECHO-3 has 13/15 software certificates with simulation and PX4 SITL. TRANSFER-3 is red and integrated missions remain pending. The laboratory has no robotics hardware.",
  },
  ca: {
    intro: LAB_COPY.ca.mission,
    status: "RxLabs® és una organització sense ànim de lucre. En el futur es convertirà en una empresa real, una societat limitada (S.L.), per construir drons autònoms amb echoAI i echOS.",
    lines: "Tres línies de treball amb codi executable i evidència pública. El lloc mostra què s'executa avui i què es construeix després.",
    echos: "unikernel 3.0 per a robòtica a l'edge. Arrenca en x86_64 BIOS/UEFI i AArch64 UEFI. Runtime sensor→intenció sense reserves dinàmiques, safety gate i pont PX4. Sense Linux, chatbot, LLM o SLM.",
    prisma: "programari d'anàlisi d'EEG per a recerca. Motor de temps real en Rust. Capa d'anàlisi sobre MNE-Python. No és un producte sanitari.",
    echoai: "agent situat de dos rellotges. ECHO-1 i ECHO-2 estan tancats. El nucli ràpid veu, recorda, prediu, actua i aprèn; el lent només proposa. ECHO-2 afegeix supervivència, patrons, streaming, consolidació, herència, energia i temperatura, amb un monitor de 512 LIF + 128 Adaptive-LIF. ECHO-3 té 13/15 certificats de programari amb simulació i PX4 SITL. TRANSFER-3 és vermell i la missió integrada continua pendent. No hi ha maquinari robòtic al laboratori.",
  },
};
