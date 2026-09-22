// Shared by routing, article cards, metadata and Markdown export.
export const ARTICLES = [
  {
    slug: "echo4-dream-rsi-historia-compartida", date: "2026-09-22", featured: true,
    title: { es: "ECHO-4: una historia compartida y un córtex que aprende a explorar", en: "ECHO-4: a shared history and a cortex that learns to explore", ca: "ECHO-4: una història compartida i un còrtex que aprèn a explorar" },
    summary: {
      es: "Del cuento a las pruebas: núcleo adaptativo, Qwen local e inspiración Dream-RSI. Lo construido, el bucle de exploración propuesto y qué demostraría un verde.",
      en: "From story to tests: an adaptive core, local Qwen and Dream-RSI inspiration. What is built, the proposed exploration loop and what green would establish.",
      ca: "Del conte a les proves: nucli adaptatiu, Qwen local i inspiració Dream-RSI. Què està construït, el bucle proposat i què demostraria un verd.",
    },
    status: { es: "Visión y roadmap v2 · DREAM en plan", en: "Vision and roadmap v2 · DREAM planned", ca: "Visió i full de ruta v2 · DREAM en pla" },
  },
  {
    slug: "echo4-inicio-roadmap-oficial", date: "2026-09-21",
    title: { es: "Empieza ECHO-4: un yo, un otro y una historia compartida", en: "ECHO-4 begins: a self, another and a shared history", ca: "Comença ECHO-4: un jo, un altre i una història compartida" },
    summary: {
      es: "Abrimos oficialmente el desarrollo: de la percepción del cuerpo a la cooperación aprendida. El roadmap, el primer experimento y lo que podríamos demostrar si funciona.",
      en: "Development officially begins: from bodily perception to learned cooperation. The roadmap, the first experiment and what success could demonstrate.",
      ca: "Obrim oficialment el desenvolupament: de la percepció del cos a la cooperació apresa. El full de ruta, el primer experiment i què podríem demostrar si funciona.",
    },
    status: { es: "Desarrollo iniciado · ECHO-4", en: "Development started · ECHO-4", ca: "Desenvolupament iniciat · ECHO-4" },
  },
  {
    slug: "echo4-ego-funcional", date: "2026-09-21",
    title: { es: "ECHO-4: construir un yo que se pueda poner a prueba", en: "ECHO-4: building a self we can put to the test", ca: "ECHO-4: construir un jo que es pugui posar a prova" },
    summary: {
      es: "Del relato de John Doe a un ego funcional: filosofía, software y las pruebas necesarias para un cierre verde. WORLD-1 ya corre; ECHO-4 sigue abierto.",
      en: "From John Doe's story to a functional self: philosophy, software and the evidence needed for a green closure. WORLD-1 runs; ECHO-4 remains open.",
      ca: "Del relat de John Doe a un jo funcional: filosofia, programari i les proves necessàries per a un tancament verd. WORLD-1 ja funciona; ECHO-4 continua obert.",
    },
    status: { es: "Investigación abierta", en: "Research in progress", ca: "Recerca oberta" },
  },
  {
    slug: "metaverse1-como-lo-haremos", date: "2026-09-21",
    title: { es: "METAVERSE-1: cómo lo haremos", en: "METAVERSE-1: how we will do it", ca: "METAVERSE-1: com ho farem" },
    summary: {
      es: "El plan entero para dar vida a ECHO-3 dentro de un mapa 3D: las ocho sub-fases, las siete etapas de trabajo, qué está hecho, qué falta y qué seguirá sin demostrar.",
      en: "The whole plan for bringing ECHO-3 to life inside a 3D map: the eight sub-phases, the seven working stages, what is done, what is missing and what it will still not demonstrate.",
      ca: "El pla sencer per donar vida a ECHO-3 dins d'un mapa 3D: les vuit subfases, les set etapes de treball, què està fet, què falta i què continuarà sense demostrar.",
    },
  },
  {
    slug: "gui4-como-visualizar-las-grabaciones", date: "2026-09-20",
    title: { es: "GUI-4: cómo visualizar las grabaciones", en: "GUI-4: how to read the recordings", ca: "GUI-4: com llegir els enregistraments" },
    summary: {
      es: "Tres grabaciones de la aplicación real, pestaña por pestaña: el raster de spikes, el catálogo de casos, los bancos en vivo y el grafo orbitable. Y qué no hay que deducir de ellas.",
      en: "Three recordings of the real application, tab by tab: the spike raster, the case catalogue, the live benches and the orbitable graph. And what not to conclude from them.",
      ca: "Tres enregistraments de l'aplicació real, pestanya per pestanya: el raster de spikes, el catàleg de casos, els bancs en directe i el graf orbitable. I què no se'n pot deduir.",
    },
    image: {
      src: "/media/gui4/opengraph/gui4-card.jpg",
      width: 1200, height: 630, type: "image/jpeg",
      alt: {
        es: "GUI-4 · grafo orbitable de la red neuronal con actividad en vivo",
        en: "GUI-4 · orbitable neural network graph with live activity",
        ca: "GUI-4 · graf orbitable de la xarxa neuronal amb activitat en directe",
      },
    },
  },
  {
    slug: "drone3-mision-integrada-sitl", date: "2026-09-20",
    title: { es: "DRONE-3: la misión entera, en simulación", en: "DRONE-3: the whole mission, in simulation", ca: "DRONE-3: la missió sencera, en simulació" },
    summary: {
      es: "TRANSFER-3 en verde y DRONE-3 cerrando su tramo SITL: 12/12 y 12/12, controles, lo que falló por el camino y por qué el hito sigue abierto.",
      en: "TRANSFER-3 green and DRONE-3 closing its SITL leg: 12/12 and 12/12, controls, what went wrong along the way and why the milestone stays open.",
      ca: "TRANSFER-3 en verd i DRONE-3 tancant el tram SITL: 12/12 i 12/12, controls, què va fallar pel camí i per què la fita continua oberta.",
    },
  },
  {
    slug: "transfer3-aprender-no-basta", date: "2026-09-18",
    title: { es: "TRANSFER-3: aprender no basta", en: "TRANSFER-3: learning is not enough", ca: "TRANSFER-3: aprendre no és suficient" },
    summary: {
      es: "La ganancia se aprende en ocho movimientos, pero el examen seguro queda en 51/72 frente a 52/72. Estado, controles y siguiente pregunta.",
      en: "Gain is learned in eight moves, but the safe exam scores 51/72 against 52/72. Current state, controls and the next question.",
      ca: "El guany s'aprèn en vuit moviments, però l'examen segur queda en 51/72 davant 52/72. Estat, controls i la pregunta següent.",
    },
  },
  {
    slug: "echo3-trece-fases-verdes", date: "2026-09-18",
    title: { es: "ECHO-3: trece fases verdes y dos preguntas abiertas", en: "ECHO-3: thirteen green phases and two open questions", ca: "ECHO-3: tretze fases verdes i dues preguntes obertes" },
    summary: {
      es: "Qué demuestra cada uno de los trece certificados software, qué falta para integrar la misión y qué investigamos ahora.",
      en: "What each of the thirteen software certificates demonstrates, what mission integration still needs and what we are researching.",
      ca: "Què demostra cadascun dels tretze certificats de programari, què falta per integrar la missió i què investiguem ara.",
    },
  },
  {
    slug: "echo3-a-mitad", date: "2026-09-14",
    title: { es: "ECHO-3 ha pasado la mitad · archivo", en: "ECHO-3 has passed halfway · archive", ca: "ECHO-3 ha passat la meitat · arxiu" },
    summary: {
      es: "Instantánea histórica del 14 de septiembre: ocho fases cerradas. El estado actual está en los artículos del 18.",
      en: "Historical snapshot from 14 September: eight phases closed. See the 18 September articles for the current state.",
      ca: "Instantània històrica del 14 de setembre: vuit fases tancades. L'estat actual és als articles del dia 18.",
    },
  },
];

export const ARTICLE_LABELS = {
  es: { featured: "Destacado", read: "Leer artículo" },
  en: { featured: "Featured", read: "Read article" },
  ca: { featured: "Destacat", read: "Llegir article" },
};
