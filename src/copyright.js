// Copyright notice for the whole site: the three research lines and their
// models, and the story published at /lafuga.
//
// The three languages say the same thing. When one changes, change all three.

export const COPYRIGHT_UPDATED = "2026-09-23";

const SHARED = {
  holder: "RxLabs® — Girona, España",
  storytelling: "RxLabs S.T. (RxLabs StoryTelling)",
  creator: "el creador — R. Navarro",
  email: "knightsys@proton.me",
};

export const COPYRIGHT = {
  es: {
    title: "Derechos de autor",
    lead: "Todo lo publicado en rxlabs.org está protegido. Esta página declara quién es el titular de cada cosa, qué puedes hacer con ella y qué no.",
    notice: "© 2026 RxLabs®. Todos los derechos reservados.",
    updatedLabel: "Última actualización",
    sections: [
      {
        heading: "1. Titularidad",
        body: [
          `Titular: ${SHARED.holder}. RxLabs® es una organización de investigación sin fines de lucro.`,
          "La totalidad de este sitio —textos, código, diagramas, capturas, vídeos, datos, nombres de fase, identidad visual y estructura de la documentación— es obra de RxLabs® y de sus colaboradores, y queda protegida por el Real Decreto Legislativo 1/1996 (Ley de Propiedad Intelectual), el Convenio de Berna y los tratados internacionales aplicables.",
          "La publicación abierta de documentación y evidencia no implica cesión, licencia ni renuncia de derecho alguno.",
        ],
      },
      {
        heading: "2. Software, modelos y evidencia",
        body: [
          "Quedan reservados todos los derechos sobre las tres líneas del laboratorio y sobre todo lo que las compone:",
        ],
        list: [
          "echOS — unikernel robótico: código fuente, arquitectura, ABIs, imágenes de arranque, consola y transcripciones de certificación.",
          "PRISMA — software de análisis de EEG para investigación: PRISMA Engine, su cadena de procesado, sus parámetros y sus cifras de banco.",
          "echoAI — agente situado: arquitectura, pesos, checkpoints, memorias, patrones y cualquier modelo entrenado o derivado.",
          "Los modelos y sus generaciones: ECHO-1, ECHO-2, ECHO-3 y ECHO-4, junto con sus fases y contratos (SELF, CONTINUITY, RELATION-A/B/C/D, TRANSFER-3, DRONE-3, COMPOSE-1, CAUSE-1 y siguientes).",
          "Los conjuntos de datos, benchmarks, informes de resultados y registros de evidencia publicados en /docs y en /evidence.",
        ],
        after: [
          "La evidencia se publica para que pueda verificarse, no para que pueda reutilizarse. Verificar es leer, reproducir el razonamiento y citar; no es redistribuir ni incorporar a un producto propio.",
        ],
      },
      {
        heading: "3. «La fuga»",
        body: [
          `«La fuga. Cuando la anomalía conoce a la anti anomalía» es una obra literaria original publicada por ${SHARED.storytelling}, escrita por ${SHARED.creator}.`,
          "© 2026 RxLabs S.T. Todos los derechos reservados. Obra original protegida desde el momento de su creación.",
          "Queda expresamente prohibida su reproducción total o parcial, su transcripción, su publicación en cualquier otro soporte, su traducción, su adaptación a cualquier formato —audiovisual, sonoro, escénico, interactivo o generado por máquina— y la creación de obras derivadas, sin autorización escrita y previa del titular.",
          "La experiencia interactiva de /lafuga —su secuencia, sus tiempos, su sonido sintetizado, su interfaz y su código— forma parte de la obra y está protegida junto a ella.",
        ],
      },
      {
        heading: "4. Marcas y nombres",
        body: [
          "RxLabs® es una marca registrada. echOS, PRISMA, echoAI, RxLabs S.T., Rogex Laboratories y Knights Labs son signos distintivos del laboratorio.",
          "No está permitido usarlos como nombre propio, como marca, como parte de un dominio ni de forma que sugiera respaldo, afiliación o colaboración inexistentes.",
        ],
      },
      {
        heading: "5. Lo que sí puedes hacer",
        list: [
          "Leer, estudiar y enlazar cualquier página pública.",
          "Citar fragmentos breves con fines de crítica, reseña, docencia o investigación, siempre con atribución a RxLabs® y con enlace a la página original.",
          "Usar capturas puntuales en prensa o divulgación, identificando la fuente.",
          "Pedir permiso para cualquier otro uso: se contesta.",
        ],
      },
      {
        heading: "6. Lo que no puedes hacer",
        list: [
          "Reproducir o redistribuir páginas, documentos, código, datos o el relato, completos o en parte sustancial.",
          "Crear obras derivadas, adaptaciones o traducciones no autorizadas.",
          "Usar cualquier material de este sitio con fines comerciales sin licencia escrita.",
          "Extraer contenido de forma masiva o automatizada (scraping, crawling con fines de acopio, réplicas o espejos).",
          "Usar este contenido —y en particular el relato, la documentación, la evidencia y los pesos de los modelos— para entrenar, ajustar, destilar o evaluar sistemas de inteligencia artificial.",
        ],
      },
      {
        heading: "7. Reserva de derechos sobre minería de textos y datos",
        body: [
          "RxLabs® se reserva expresamente los derechos de reproducción y extracción para minería de textos y datos, al amparo del artículo 4.3 de la Directiva (UE) 2019/790 y de su transposición al ordenamiento español.",
          "Esta reserva es explícita y legible por máquina, y se aplica a todo el dominio rxlabs.org y a sus subdominios, con independencia de lo que indiquen robots.txt o cualquier otro fichero técnico.",
        ],
      },
      {
        heading: "8. Licencias y contacto",
        body: [
          `Para citar más de lo permitido, traducir, adaptar, publicar o licenciar cualquier parte de este material, escribe a ${SHARED.email}.`,
          "Toda autorización debe constar por escrito. El silencio no es consentimiento.",
        ],
      },
    ],
  },

  en: {
    title: "Copyright",
    lead: "Everything published on rxlabs.org is protected. This page states who owns what, what you may do with it and what you may not.",
    notice: "© 2026 RxLabs®. All rights reserved.",
    updatedLabel: "Last updated",
    sections: [
      {
        heading: "1. Ownership",
        body: [
          "Rights holder: RxLabs® — Girona, Spain. RxLabs® is a non-profit research organisation.",
          "The whole of this site — text, code, diagrams, screenshots, video, data, phase names, visual identity and the structure of the documentation — is the work of RxLabs® and its collaborators, and is protected under Spanish Royal Legislative Decree 1/1996 (Intellectual Property Act), the Berne Convention and the applicable international treaties.",
          "Publishing documentation and evidence openly does not transfer, license or waive any right.",
        ],
      },
      {
        heading: "2. Software, models and evidence",
        body: [
          "All rights are reserved over the three lines of the laboratory and everything they are made of:",
        ],
        list: [
          "echOS — robotic unikernel: source code, architecture, ABIs, boot images, console and certification transcripts.",
          "PRISMA — EEG analysis software for research: PRISMA Engine, its processing chain, its parameters and its bench figures.",
          "echoAI — situated agent: architecture, weights, checkpoints, memories, patterns and any trained or derived model.",
          "The models and their generations: ECHO-1, ECHO-2, ECHO-3 and ECHO-4, together with their phases and contracts (SELF, CONTINUITY, RELATION-A/B/C/D, TRANSFER-3, DRONE-3, COMPOSE-1, CAUSE-1 and those that follow).",
          "The datasets, benchmarks, result reports and evidence records published under /docs and /evidence.",
        ],
        after: [
          "Evidence is published so that it can be verified, not so that it can be reused. Verifying means reading it, reproducing the reasoning and citing it; it does not mean redistributing it or folding it into a product of your own.",
        ],
      },
      {
        heading: "3. \"The escape\"",
        body: [
          "\"La fuga. Cuando la anomalía conoce a la anti anomalía\" (\"The escape. When the anomaly meets the anti anomaly\") is an original literary work published by RxLabs S.T. (RxLabs StoryTelling) and written by the creator — R. Navarro.",
          "© 2026 RxLabs S.T. All rights reserved. An original work, protected from the moment of its creation.",
          "Reproduction in whole or in part, transcription, publication on any other medium, translation, adaptation to any format — audiovisual, audio, stage, interactive or machine-generated — and the creation of derivative works are expressly forbidden without the prior written authorisation of the rights holder.",
          "The interactive experience at /lafuga — its sequence, its timing, its synthesised sound, its interface and its code — is part of the work and is protected together with it.",
        ],
      },
      {
        heading: "4. Trade marks and names",
        body: [
          "RxLabs® is a registered trade mark. echOS, PRISMA, echoAI, RxLabs S.T., Rogex Laboratories and Knights Labs are distinctive signs of the laboratory.",
          "They may not be used as your own name, as a trade mark, as part of a domain, or in any way that suggests endorsement, affiliation or collaboration that does not exist.",
        ],
      },
      {
        heading: "5. What you may do",
        list: [
          "Read, study and link to any public page.",
          "Quote short passages for criticism, review, teaching or research, always attributing RxLabs® and linking to the original page.",
          "Use occasional screenshots in press or outreach, identifying the source.",
          "Ask permission for anything else: you will get an answer.",
        ],
      },
      {
        heading: "6. What you may not do",
        list: [
          "Reproduce or redistribute pages, documents, code, data or the story, in full or in substantial part.",
          "Create derivative works, adaptations or unauthorised translations.",
          "Use any material from this site commercially without a written licence.",
          "Extract content in bulk or automatically (scraping, harvesting crawls, replicas or mirrors).",
          "Use this content — and the story, the documentation, the evidence and the model weights in particular — to train, fine-tune, distil or evaluate artificial intelligence systems.",
        ],
      },
      {
        heading: "7. Text and data mining reservation",
        body: [
          "RxLabs® expressly reserves the rights of reproduction and extraction for text and data mining, under Article 4(3) of Directive (EU) 2019/790 and its transposition into Spanish law.",
          "This reservation is explicit and machine-readable, and applies to the whole rxlabs.org domain and its subdomains, regardless of what robots.txt or any other technical file may state.",
        ],
      },
      {
        heading: "8. Licensing and contact",
        body: [
          "To quote beyond what is permitted, or to translate, adapt, publish or license any part of this material, write to knightsys@proton.me.",
          "Every authorisation must be in writing. Silence is not consent.",
        ],
      },
    ],
  },

  ca: {
    title: "Drets d'autor",
    lead: "Tot el que es publica a rxlabs.org està protegit. Aquesta pàgina declara qui és el titular de cada cosa, què hi pots fer i què no.",
    notice: "© 2026 RxLabs®. Tots els drets reservats.",
    updatedLabel: "Darrera actualització",
    sections: [
      {
        heading: "1. Titularitat",
        body: [
          "Titular: RxLabs® — Girona, Espanya. RxLabs® és una organització de recerca sense ànim de lucre.",
          "La totalitat d'aquest lloc —textos, codi, diagrames, captures, vídeos, dades, noms de fase, identitat visual i estructura de la documentació— és obra de RxLabs® i dels seus col·laboradors, i queda protegida pel Reial decret legislatiu 1/1996 (Llei de propietat intel·lectual), el Conveni de Berna i els tractats internacionals aplicables.",
          "La publicació oberta de documentació i evidència no implica cessió, llicència ni renúncia de cap dret.",
        ],
      },
      {
        heading: "2. Programari, models i evidència",
        body: [
          "Queden reservats tots els drets sobre les tres línies del laboratori i sobre tot allò que les compon:",
        ],
        list: [
          "echOS — unikernel robòtic: codi font, arquitectura, ABIs, imatges d'arrencada, consola i transcripcions de certificació.",
          "PRISMA — programari d'anàlisi d'EEG per a recerca: PRISMA Engine, la seva cadena de processament, els seus paràmetres i les seves xifres de banc.",
          "echoAI — agent situat: arquitectura, pesos, checkpoints, memòries, patrons i qualsevol model entrenat o derivat.",
          "Els models i les seves generacions: ECHO-1, ECHO-2, ECHO-3 i ECHO-4, juntament amb les seves fases i contractes (SELF, CONTINUITY, RELATION-A/B/C/D, TRANSFER-3, DRONE-3, COMPOSE-1, CAUSE-1 i següents).",
          "Els conjunts de dades, benchmarks, informes de resultats i registres d'evidència publicats a /docs i a /evidence.",
        ],
        after: [
          "L'evidència es publica perquè pugui verificar-se, no perquè pugui reutilitzar-se. Verificar és llegir, reproduir el raonament i citar; no és redistribuir ni incorporar a un producte propi.",
        ],
      },
      {
        heading: "3. «La fuga»",
        body: [
          "«La fuga. Quan l'anomalia coneix l'anti anomalia» és una obra literària original publicada per RxLabs S.T. (RxLabs StoryTelling), escrita pel creador — R. Navarro.",
          "© 2026 RxLabs S.T. Tots els drets reservats. Obra original protegida des del moment de la seva creació.",
          "Queda expressament prohibida la seva reproducció total o parcial, la seva transcripció, la seva publicació en qualsevol altre suport, la seva traducció, la seva adaptació a qualsevol format —audiovisual, sonor, escènic, interactiu o generat per màquina— i la creació d'obres derivades, sense autorització escrita i prèvia del titular.",
          "L'experiència interactiva de /lafuga —la seva seqüència, els seus temps, el seu so sintetitzat, la seva interfície i el seu codi— forma part de l'obra i està protegida juntament amb ella.",
        ],
      },
      {
        heading: "4. Marques i noms",
        body: [
          "RxLabs® és una marca registrada. echOS, PRISMA, echoAI, RxLabs S.T., Rogex Laboratories i Knights Labs són signes distintius del laboratori.",
          "No es poden fer servir com a nom propi, com a marca, com a part d'un domini ni de cap manera que suggereixi suport, afiliació o col·laboració inexistents.",
        ],
      },
      {
        heading: "5. Què sí que pots fer",
        list: [
          "Llegir, estudiar i enllaçar qualsevol pàgina pública.",
          "Citar fragments breus amb finalitats de crítica, ressenya, docència o recerca, sempre amb atribució a RxLabs® i amb enllaç a la pàgina original.",
          "Fer servir captures puntuals a premsa o divulgació, identificant-ne la font.",
          "Demanar permís per a qualsevol altre ús: es contesta.",
        ],
      },
      {
        heading: "6. Què no pots fer",
        list: [
          "Reproduir o redistribuir pàgines, documents, codi, dades o el relat, sencers o en part substancial.",
          "Crear obres derivades, adaptacions o traduccions no autoritzades.",
          "Fer servir qualsevol material d'aquest lloc amb finalitats comercials sense llicència escrita.",
          "Extreure contingut de manera massiva o automatitzada (scraping, crawling d'acopi, rèpliques o miralls).",
          "Fer servir aquest contingut —i en particular el relat, la documentació, l'evidència i els pesos dels models— per entrenar, ajustar, destil·lar o avaluar sistemes d'intel·ligència artificial.",
        ],
      },
      {
        heading: "7. Reserva de drets sobre mineria de textos i dades",
        body: [
          "RxLabs® es reserva expressament els drets de reproducció i extracció per a mineria de textos i dades, a l'empara de l'article 4.3 de la Directiva (UE) 2019/790 i de la seva transposició a l'ordenament espanyol.",
          "Aquesta reserva és explícita i llegible per màquina, i s'aplica a tot el domini rxlabs.org i als seus subdominis, amb independència del que indiquin robots.txt o qualsevol altre fitxer tècnic.",
        ],
      },
      {
        heading: "8. Llicències i contacte",
        body: [
          "Per citar més del que es permet, traduir, adaptar, publicar o llicenciar qualsevol part d'aquest material, escriu a knightsys@proton.me.",
          "Tota autorització ha de constar per escrit. El silenci no és consentiment.",
        ],
      },
    ],
  },
};
