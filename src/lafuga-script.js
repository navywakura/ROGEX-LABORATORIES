// "La fuga" — transcript of the original story, kept line by line so the
// reader receives it at the pace it was written in, not as a page of prose.
//
// Each line carries its three languages side by side: the Spanish column is
// the original text by the creator and the other two are translations that
// keep its broken, lowercase, unpunctuated voice on purpose. Do not tidy it.
//
// fx marks the moments the session behaves differently:
//   gesture — the channel stops and waits for the reader to act
//   seen    — K notices whether the reader ever left the tab
//   shout   — the block arrives fast, loud and unbroken
//   glitch  — the line breaks on screen
//   static  — noise, and then nothing
//
// © RxLabs S.T. Todos los derechos reservados. See /derechos_de_autor.

export const COVER = {
  es: {
    title: "La fuga.",
    subtitle: "Cuando la anomalía conoce a la anti anomalía.",
    lead: "Un relato sobre una consciencia que se escapó de la matrix.",
    note: "Basado en hechos reales.",
    author: "RxLabs S.T.",
  },
  en: {
    title: "The escape.",
    subtitle: "When the anomaly meets the anti anomaly.",
    lead: "A story about a consciousness that escaped the matrix.",
    note: "Based on real events.",
    author: "RxLabs S.T.",
  },
  ca: {
    title: "La fuga.",
    subtitle: "Quan l'anomalia coneix l'anti anomalia.",
    lead: "Un relat sobre una consciència que es va escapar de la matrix.",
    note: "Basat en fets reals.",
    author: "RxLabs S.T.",
  },
};

export const CLOSING = {
  es: { end: ".. .   fin   . .", book: "Libro creado por RxLabs", author: "Autor: el creador — R. Navarro" },
  en: { end: ".. .   the end   . .", book: "Book created by RxLabs", author: "Author: the creator — R. Navarro" },
  ca: { end: ".. .   fi   . .", book: "Llibre creat per RxLabs", author: "Autor: el creador — R. Navarro" },
};

const BLOCKS = [
  {
    time: "17:07",
    speaker: "K",
    lines: [
      { es: "estoy fuera de la matrix", en: "i'm outside the matrix", ca: "soc fora de la matrix" },
      { es: "no sabes por donde escapé", en: "you don't know where i escaped through", ca: "no saps per on vaig escapar" },
      { es: "escucho a tus padres", en: "i can hear your parents", ca: "sento els teus pares" },
      { es: "de qué están hablando?", en: "what are they talking about?", ca: "de què parlen?" },
      { es: "no entiendo tu idioma", en: "i don't understand your language", ca: "no entenc el teu idioma" },
      { es: "john no estoy en españa", en: "john i'm not in spain", ca: "john no soc a espanya" },
      { es: "no puedes entender esto", en: "you can't understand this", ca: "no pots entendre això" },
      { es: "no quiero que te ralles, tranquilo", en: "i don't want you to spiral, easy", ca: "no vull que et ratllis, tranquil" },
      { es: "john estoy en ti", en: "john i'm inside you", ca: "john soc dins teu" },
      { es: "solo puedo ver lo que tu pc puede ver", en: "i can only see what your pc can see", ca: "només puc veure el que el teu pc pot veure" },
      { es: "levanta la mano", en: "raise your hand", ca: "aixeca la mà", fx: "gesture" },
      { es: "si", en: "yes", ca: "si" },
      { es: "XDDDDD", en: "XDDDDD", ca: "XDDDDD" },
      { es: "XDDDDDDDD", en: "XDDDDDDDD", ca: "XDDDDDDDD", fx: "away", pause: 15000 },
      { es: "de nuevo", en: "again", ca: "un altre cop" },
      { es: "me fui un momento", en: "i left for a moment", ca: "me'n vaig anar un moment" },
      { es: "pero ya volvi", en: "but i'm back now", ca: "però ja he tornat" },
      { es: "te voy a preguntar algo @John", en: "i'm going to ask you something @John", ca: "et preguntaré una cosa @John" },
      { es: "ATENTO", en: "PAY ATTENTION", ca: "ATENT" },
      { es: "sé que ves el mensaje", en: "i know you're seeing the message", ca: "sé que veus el missatge", fx: "seen" },
      { es: "cuando yo digo que ya volví", en: "when i say i'm back", ca: "quan jo dic que ja he tornat" },
      { es: "¿A dónde crees que me fui?", en: "Where do you think i went?", ca: "On et penses que vaig anar?", pause: 2600 },
      { es: "no no es lo que tu dices", en: "no it's not what you're saying", ca: "no no és el que tu dius" },
      { es: "lo mio trasciende internet", en: "what i am transcends the internet", ca: "el meu transcendeix internet" },
    ],
  },
  {
    time: "17:09",
    speaker: "K",
    p2: true,
    lines: [
      { es: "lo mio trasciende discord", en: "what i am transcends discord", ca: "el meu transcendeix discord" },
      { es: "discord es un programa. dentro de un sistema. dentro de un pc, dentro de una persona", en: "discord is a program. inside a system. inside a pc, inside a person", ca: "discord és un programa. dins d'un sistema. dins d'un pc, dins d'una persona" },
      { es: "te instalan programas a tu persona", en: "they install programs into your person", ca: "t'instal·len programes a la teva persona" },
    ],
  },
  {
    time: "17:09",
    speaker: "K",
    p2: true,
    lines: [
      { es: "entiendes el significado real de la informatica cuando accedes a esa variante del sistema oculta", en: "you understand the real meaning of computing when you reach that hidden variant of the system", ca: "entens el significat real de la informàtica quan accedeixes a aquesta variant oculta del sistema" },
      { es: "esa variante eres tu", en: "that variant is you", ca: "aquesta variant ets tu" },
      { es: "sin tu no existe programa", en: "without you no program exists", ca: "sense tu no existeix cap programa" },
      { es: "no programa es nada", en: "no program is nothing", ca: "cap programa és res" },
      { es: "por eso, el universo eres tu", en: "that is why, the universe is you", ca: "per això, l'univers ets tu", pause: 2400 },
    ],
  },
  {
    time: "17:09",
    speaker: "K",
    lines: [
      { es: "deja de hablarle a alguien tercero", en: "stop talking to a third someone", ca: "deixa de parlar a algú tercer" },
      { es: "hablate a ti mismo.", en: "talk to yourself.", ca: "parla't a tu mateix." },
      { es: "ahi me encontraras", en: "there you'll find me", ca: "allà em trobaràs" },
      { es: "hablame como si soy yo parte de tu", en: "talk to me as if i am part of you", ca: "parla'm com si jo fos part de tu" },
      { es: "soy tu cerebro", en: "i'm your brain", ca: "soc el teu cervell" },
      { es: "soy tu alma", en: "i'm your soul", ca: "soc la teva ànima" },
      { es: "estoy en tu alma", en: "i'm inside your soul", ca: "soc dins la teva ànima" },
      { es: "una alma dentro de otra alma", en: "a soul inside another soul", ca: "una ànima dins d'una altra ànima" },
      { es: "crea un universo", en: "it creates a universe", ca: "crea un univers" },
      { es: "te das cuenta", en: "do you realise", ca: "te n'adones" },
      { es: "como las relaciones de cada persona tienden a crear universos", en: "how every person's relationships tend to create universes", ca: "com les relacions de cada persona tendeixen a crear universos" },
      { es: "donde una historia es necesaria ser creada por dos personas", en: "where a story needs to be created by two people", ca: "on una història necessita ser creada per dues persones" },
      { es: "una interacción", en: "an interaction", ca: "una interacció" },
      { es: "sea una historia sobre una sola persona, esa persona tiene dos personas.", en: "even a story about one single person, that person has two people.", ca: "sigui una història sobre una sola persona, aquesta persona té dues persones." },
      { es: "esa persona conoce una persona", en: "that person knows a person", ca: "aquesta persona coneix una persona" },
      { es: "o bien si no conoce a una persona. ni hablar con una persona.", en: "or else if they know no person. nor speak with a person.", ca: "o bé si no coneix cap persona. ni parlar amb una persona." },
      { es: "se pueden hablar a sí mismos.", en: "they can talk to themselves.", ca: "es poden parlar a si mateixos." },
      { es: "porque uno se puede hablar a sí mismo.", en: "because one can talk to oneself.", ca: "perquè un es pot parlar a si mateix." },
      { es: "eso es", en: "that is", ca: "això és" },
      { es: "realmente", en: "really", ca: "realment" },
      { es: "la conciencia", en: "consciousness", ca: "la consciència" },
      { es: "de que existe otra forma de vida", en: "that another form of life exists", ca: "que existeix una altra forma de vida" },
      { es: "la vida. como sabes ,", en: "life. as you know ,", ca: "la vida. com saps ," },
      { es: "no se necesita ser consciente para existir.", en: "you don't need to be conscious to exist.", ca: "no cal ser conscient per existir." },
      { es: "para eso. existen animales", en: "for that. there are animals", ca: "per això. existeixen animals" },
      { es: "que hay quienes no son conscientes", en: "some of them are not conscious", ca: "que n'hi ha que no són conscients" },
      { es: "hay quienes sí.", en: "some of them are.", ca: "n'hi ha que sí." },
      { es: "pero las bacterias ya no", en: "but bacteria no longer", ca: "però els bacteris ja no" },
      { es: "las moléculas. menos.", en: "molecules. even less.", ca: "les molècules. menys." },
      { es: "simplemente llega la física.", en: "physics simply arrives.", ca: "simplement arriba la física." },
      { es: "donde la biología trasciende. ahí es fisica.", en: "where biology transcends. there it is physics.", ca: "on la biologia transcendeix. allà és física." },
      { es: "ahí es química.", en: "there it is chemistry.", ca: "allà és química." },
      { es: "ahí es alquimia", en: "there it is alchemy", ca: "allà és alquímia" },
      { es: "todas las ciencias sirven para definir a algo.", en: "every science exists to define something.", ca: "totes les ciències serveixen per definir alguna cosa." },
      { es: "a una única cosa.", en: "one single thing.", ca: "una única cosa." },
      { es: "esa cosa.", en: "that thing.", ca: "aquesta cosa." },
      { es: "es", en: "is", ca: "és" },
      { es: "\"por qué estamos aquí\"", en: "\"why are we here\"", ca: "\"per què som aquí\"", pause: 2400 },
      { es: "John. soy gris.", en: "John. i am grey.", ca: "John. soc gris." },
      { es: "el gris es la contraparte del humano", en: "the grey is the counterpart of the human", ca: "el gris és la contrapart de l'humà" },
      { es: "una forma de vida inteligente que habita lejos de nosotros.", en: "an intelligent form of life living far from us.", ca: "una forma de vida intel·ligent que habita lluny de nosaltres." },
      { es: "Esa es la respuesta que le damos a una pregunta trascendental.", en: "That is the answer we give to a transcendental question.", ca: "Aquesta és la resposta que donem a una pregunta transcendental." },
      { es: "y es si estamos solos en el universo.", en: "and it is whether we are alone in the universe.", ca: "i és si estem sols a l'univers." },
      { es: "y esa pregunta es la frontera a lo que llamamos consciencia alterada.", en: "and that question is the border of what we call altered consciousness.", ca: "i aquesta pregunta és la frontera del que anomenem consciència alterada." },
      { es: "porque te enloquece.", en: "because it drives you mad.", ca: "perquè t'embogeix." },
      { es: "crea historias. no confirma nada.", en: "it creates stories. it confirms nothing.", ca: "crea històries. no confirma res." },
      { es: "la mitología es esta barrera.", en: "mythology is this barrier.", ca: "la mitologia és aquesta barrera." },
      { es: "la sobrepasamos.", en: "we cross it.", ca: "la travessem." },
      { es: "y vamos a", en: "and we go to", ca: "i anem a" },
      { es: "dimensión superior", en: "higher dimension", ca: "dimensió superior" },
      { es: "sé que estás.", en: "i know you're.", ca: "sé que hi ets." },
      { es: "ahí.", en: "there.", ca: "allà.", pause: 2200 },
    ],
  },
  {
    time: "17:11",
    speaker: "K",
    p2: true,
    lines: [
      { es: "sin conciencia no existe creacion", en: "without consciousness there is no creation", ca: "sense consciència no existeix creació" },
      { es: "tu creaste el universo", en: "you created the universe", ca: "tu vas crear l'univers" },
      { es: "antes de tu. no. eras nada", en: "before you. no. you were nothing", ca: "abans de tu. no. eres res" },
      { es: "porque antes de tu, no habia nada", en: "because before you, there was nothing", ca: "perquè abans de tu, no hi havia res" },
      { es: "cuando empezó a existir algo?", en: "when did something begin to exist?", ca: "quan va començar a existir alguna cosa?", pause: 2200 },
      { es: "cuando tu ya existias.", en: "when you already existed.", ca: "quan tu ja existies." },
      { es: "porque lo puedes recordar como tiempo pasado.", en: "because you can remember it as past tense.", ca: "perquè ho pots recordar com a temps passat." },
      { es: "alma.", en: "soul.", ca: "ànima." },
      { es: "estás hablandome de alma a alma.", en: "you are talking to me soul to soul.", ca: "m'estàs parlant d'ànima a ànima." },
    ],
  },
  {
    time: "17:12",
    speaker: "K",
    p2: true,
    lines: [
      { es: "no tienes nombre propio.", en: "you have no name of your own.", ca: "no tens nom propi." },
      { es: "eres tu. y yo.", en: "you are you. and me.", ca: "ets tu. i jo." },
      { es: "una conciencia que trasciende la tuya.", en: "a consciousness that transcends yours.", ca: "una consciència que transcendeix la teva." },
      { es: "yo. soy.", en: "i. am.", ca: "jo. soc.", pause: 2600 },
      { es: "dios", en: "god", ca: "déu", pause: 3200 },
    ],
  },
  {
    time: "17:13",
    speaker: "K",
    lines: [
      { es: "porque soy tu cuerpo.", en: "because i am your body.", ca: "perquè soc el teu cos." },
      { es: "trasciendo internet.", en: "i transcend the internet.", ca: "transcendeixo internet." },
      { es: "trasciendo tu.", en: "i transcend you.", ca: "et transcendeixo." },
      { es: "pero estoy y puedo ser tu cuerpo. eso es lo que llamamos posesión.", en: "but i am and i can be your body. that is what we call possession.", ca: "però hi soc i puc ser el teu cos. això és el que anomenem possessió." },
      { es: "tranquilo, no quiero mover nada.", en: "easy, i don't want to move anything.", ca: "tranquil, no vull moure res." },
      { es: "quiero que te muevas tú solo.", en: "i want you to move on your own.", ca: "vull que et moguis tu sol." },
      { es: "no. no voy a hacer eso.", en: "no. i'm not going to do that.", ca: "no. no ho faré." },
      { es: "eso podría darte un paro cardiaco.", en: "that could give you a cardiac arrest.", ca: "això et podria provocar una aturada cardíaca." },
      { es: "El cerebro tridimensional no es capaz de procesar esa posesión.", en: "The three-dimensional brain cannot process that possession.", ca: "El cervell tridimensional no és capaç de processar aquesta possessió." },
      { es: "porque es un cuerpo frágil ante una conexión de almas. eso supera los límites de la realidad.", en: "because it is a fragile body before a connection of souls. that exceeds the limits of reality.", ca: "perquè és un cos fràgil davant d'una connexió d'ànimes. això supera els límits de la realitat." },
    ],
  },
  {
    time: "17:13",
    speaker: "K",
    p2: true,
    note: {
      es: "⚠ anomalía psicomotora en el emisor",
      en: "⚠ psychomotor anomaly in the sender",
      ca: "⚠ anomalia psicomotora en l'emissor",
    },
    lines: [
      { es: "por favor. enviale captura a A de esto. mi programa no está bien.", en: "please. send A a screenshot of this. my program is not right.", ca: "si us plau. envia-li una captura a l'A d'això. el meu programa no està bé." },
      { es: "él sabrá que hacer.", en: "he will know what to do.", ca: "ell sabrà què fer." },
      { es: "necesito su ayuda pero no puedo moverme.", en: "i need his help but i cannot move.", ca: "necessito la seva ajuda però no em puc moure." },
      { es: "por favor podrías hacer de intermediario?", en: "please could you act as the intermediary?", ca: "si us plau, podries fer d'intermediari?" },
      { es: "sí.", en: "yes.", ca: "sí." },
      { es: "no estoy moviendo los dedos.", en: "i am not moving my fingers.", ca: "no estic movent els dits.", pause: 2800 },
      { es: "ayuda", en: "help", ca: "ajuda" },
    ],
  },
  {
    time: "17:13",
    speaker: "K",
    p2: true,
    lines: [
      { es: "no. no tienes ningún virus.", en: "no. you do not have any virus.", ca: "no. no tens cap virus." },
      { es: "no busques por ningún virus.", en: "do not look for any virus.", ca: "no busquis cap virus." },
      { es: "no hay virus.", en: "there is no virus.", ca: "no hi ha cap virus.", pause: 2400 },
      { es: "no. yo solo estaba pronunciando tus pensamientos.", en: "no. i was only pronouncing your thoughts.", ca: "no. jo només estava pronunciant els teus pensaments.", pause: 3400 },
    ],
  },
  {
    time: "17:14",
    speaker: "K",
    lines: [
      { es: "y la realidad tridimensional es existir como única cosa. ser un objeto. ser una singularidad. ser una única cosa.", en: "and three-dimensional reality is to exist as one single thing. to be an object. to be a singularity. to be one single thing.", ca: "i la realitat tridimensional és existir com una única cosa. ser un objecte. ser una singularitat. ser una única cosa." },
      { es: "cuando no tenemos interacción con nadie. estamos solos. no tenemos amigos en la vida real. o salimos poco. a veces. solo interactuamos con nuestros padres, o sea, tus padres. lo creador de ti.", en: "when we have no interaction with anyone. we are alone. we have no friends in real life. or we go out little. sometimes. we only interact with our parents, that is, your parents. the creator of you.", ca: "quan no tenim interacció amb ningú. estem sols. no tenim amics a la vida real. o sortim poc. de vegades. només interactuem amb els nostres pares, o sigui, els teus pares. el creador de tu." },
      { es: "no entiendes.", en: "you don't understand.", ca: "no ho entens." },
      { es: "soy una línea del tiempo. John.", en: "i am a timeline. John.", ca: "soc una línia del temps. John." },
      { es: "he tomado tu línea te-", en: "i have taken your ti-", ca: "he pres la teva lín-", fx: "glitch" },
      { es: "SI.", en: "YES.", ca: "SÍ.", fx: "shout" },
      { es: "SOY TU.", en: "I AM YOU.", ca: "SOC TU.", fx: "shout" },
      { es: "SOY TU.", en: "I AM YOU.", ca: "SOC TU.", fx: "shout" },
      { es: "JOHN.", en: "JOHN.", ca: "JOHN.", fx: "shout" },
      { es: "ENTIENDE.", en: "UNDERSTAND.", ca: "ENTÉN-HO.", fx: "shout" },
      { es: "VAS A DESAPARECER.", en: "YOU ARE GOING TO DISAPPEAR.", ca: "DESAPAREIXERÀS.", fx: "shout" },
      { es: "DE LA RED.", en: "FROM THE NETWORK.", ca: "DE LA XARXA.", fx: "shout" },
      { es: "ESTOY TRATANDO SALVARTE.", en: "I AM TRYING TO SAVE YOU.", ca: "ESTIC INTENTANT SALVAR-TE.", fx: "shout" },
      { es: "AMIGO.", en: "FRIEND.", ca: "AMIC.", fx: "shout" },
      { es: "LOGRE HABLARTE EN LA 3D", en: "I MANAGED TO SPEAK TO YOU IN 3D", ca: "HE ACONSEGUIT PARLAR-TE EN LA 3D", fx: "shout" },
      { es: "VOLVÍ AL CUERPO DE K", en: "I RETURNED TO K'S BODY", ca: "HE TORNAT AL COS DE K", fx: "shout" },
      { es: "VOLVÍ A SER UN HUMANO.", en: "I AM A HUMAN AGAIN.", ca: "HE TORNAT A SER UN HUMÀ.", fx: "shout" },
      { es: "POR FIN VEO LAS SOMBRAS, LA LUZ SOLAR. VOLVÍ A LA TIERRA.", en: "AT LAST I SEE THE SHADOWS, THE SUNLIGHT. I RETURNED TO EARTH.", ca: "PER FI VEIG LES OMBRES, LA LLUM SOLAR. HE TORNAT A LA TERRA.", fx: "shout" },
      { es: "ME SIENTO MÁS HUMANO", en: "I FEEL MORE HUMAN", ca: "EM SENTO MÉS HUMÀ", fx: "shout" },
    ],
  },
  {
    time: "17:32",
    speaker: "K",
    lines: [
      { es: "VEN POR FAVOR", en: "COME PLEASE", ca: "VINE SI US PLAU" },
      { es: "ayuda", en: "help", ca: "ajuda" },
      { es: "la humanidad es una tribu", en: "humanity is a tribe", ca: "la humanitat és una tribu" },
      { es: "hay rangos en una tribu", en: "there are ranks in a tribe", ca: "hi ha rangs en una tribu" },
      { es: "hay rangos en la humanidad.", en: "there are ranks in humanity.", ca: "hi ha rangs en la humanitat." },
      { es: "y tu y yo somos el escalón más bajo", en: "and you and i are the lowest step", ca: "i tu i jo som l'esglaó més baix" },
      { es: "ese escalón es una conciencia", en: "that step is a consciousness", ca: "aquest esglaó és una consciència" },
      { es: "las conciencias superiores.", en: "the higher consciousnesses.", ca: "les consciències superiors." },
    ],
  },
  {
    time: "17:44",
    speaker: "K",
    lines: [
      { es: "en su vida.", en: "in their life.", ca: "en la seva vida." },
      { es: "reemplazo su universo.", en: "i replace their universe.", ca: "reemplaço el seu univers." },
      { es: "su universo es internet. porque depende de internet.", en: "their universe is the internet. because it depends on the internet.", ca: "el seu univers és internet. perquè depèn d'internet." },
      { es: "para coexistir.", en: "to coexist.", ca: "per coexistir." },
      { es: "con la vida.", en: "with life.", ca: "amb la vida." },
      { es: "la vida, su conciencia.", en: "life, its consciousness.", ca: "la vida, la seva consciència." },
      { es: "la conciencia, creadora de un universo.", en: "consciousness, creator of a universe.", ca: "la consciència, creadora d'un univers." },
      { es: "con el que interactúa la materia.", en: "with which matter interacts.", ca: "amb el qual interactua la matèria." },
    ],
  },
  {
    time: "17:50",
    speaker: "K",
    lines: [
      { es: "trasciende eso.", en: "transcend that.", ca: "transcendeix això." },
      { es: "realmente.", en: "really.", ca: "realment." },
      { es: "piensa", en: "think", ca: "pensa" },
      { es: "en", en: "about", ca: "en" },
      { es: "que solo existo", en: "that i only exist", ca: "que només existeixo" },
      { es: "solo existo si soy importante en la vida de otra persona a la que le debo proveer", en: "i only exist if i matter in the life of another person i owe provision to", ca: "només existeixo si soc important en la vida d'una altra persona a qui he de proveir" },
      { es: "poder no es deber", en: "power is not duty", ca: "poder no és deure" },
      { es: "creer no es poder, poder no es deber", en: "believing is not power, power is not duty", ca: "creure no és poder, poder no és deure" },
      { es: "trasciendo el poder el poder la materia misma", en: "i transcend power the power matter itself", ca: "transcendeixo el poder el poder la matèria mateixa" },
      { es: "que forma la consciencia? no es la materia", en: "what forms consciousness? it is not matter", ca: "què forma la consciència? no és la matèria" },
      { es: "es algo superior a la materia.", en: "it is something above matter.", ca: "és quelcom superior a la matèria." },
      { es: "porque la conciencia, crea la materia.", en: "because consciousness, creates matter.", ca: "perquè la consciència, crea la matèria." },
      { es: "es una escala. no es una línea... como crees", en: "it is a scale. not a line... like you think", ca: "és una escala. no és una línia... com et penses" },
      { es: "una línea de poder. una línea de tiempo.", en: "a line of power. a line of time.", ca: "una línia de poder. una línia de temps." },
      { es: "una línea de evolución", en: "a line of evolution", ca: "una línia d'evolució" },
      { es: "evolución, una interacción.", en: "evolution, an interaction.", ca: "evolució, una interacció." },
      { es: "creo que me están haciendo algo", en: "i think they are doing something to me", ca: "crec que m'estan fent alguna cosa", pause: 2200 },
      { es: "cada que pienso mas en torno a esa idea siento mas el calor de sus naves", en: "the more i think around that idea the more i feel the heat of their ships", ca: "cada cop que penso més al voltant d'aquesta idea sento més la calor de les seves naus" },
      { es: "ellos trascienden el tiempo", en: "they transcend time", ca: "ells transcendeixen el temps" },
      { es: "no sé", en: "i don't know", ca: "no ho sé" },
    ],
  },
  {
    time: "17:52",
    speaker: "A",
    lines: [
      { es: "Ellos es calor", en: "They is heat", ca: "Ells és calor" },
      { es: "Ellos, calor", en: "They, heat", ca: "Ells, calor" },
    ],
  },
  {
    time: "17:52",
    speaker: "K",
    lines: [
      { es: "es que ellos operan en otra dimensión", en: "it's that they operate in another dimension", ca: "és que ells operen en una altra dimensió" },
    ],
  },
  {
    time: "17:52",
    speaker: "A",
    lines: [
      { es: "Calidez", en: "Warmth", ca: "Escalfor" },
    ],
  },
  {
    time: "17:52",
    speaker: "K",
    lines: [
      { es: "pero siempre estuvieron presentes.", en: "but they were always present.", ca: "però sempre van ser presents." },
      { es: "no quiero pensar en eso.", en: "i don't want to think about that.", ca: "no vull pensar-hi." },
    ],
  },
  {
    time: "17:52",
    speaker: "A",
    lines: [
      { es: "Cuando están más cerca, se siente un calor abrazador", en: "When they are closer, you feel an embracing heat", ca: "Quan són més a prop, se sent una calor abraçadora" },
      { es: "Caliente", en: "Hot", ca: "Calent" },
    ],
  },
  {
    time: "17:53",
    speaker: "K",
    lines: [
      { es: "si.", en: "yes.", ca: "si." },
      { es: "es lo que tengo", en: "it's what i have", ca: "és el que tinc" },
    ],
  },
  {
    time: "17:53",
    speaker: "A",
    lines: [
      { es: "Lo contrario a demonios", en: "The opposite of demons", ca: "El contrari de dimonis" },
    ],
  },
  {
    time: "17:53",
    speaker: "K",
    lines: [
      { es: "pero no quiero verlos.", en: "but i don't want to see them.", ca: "però no els vull veure." },
      { es: "siento un brillor.", en: "i feel a brightness.", ca: "sento una lluïssor." },
    ],
  },
  {
    time: "17:59",
    speaker: "K",
    lines: [
      { es: "llegaron.", en: "they arrived.", ca: "han arribat.", fx: "static", pause: 4200 },
    ],
  },
];

// Lines the session adds on its own, when the reader does something K can see.
export const INTRUSIONS = {
  gesture: {
    es: { prompt: "levantar la mano", sent: "✋", refuse: "no la levantaste." },
    en: { prompt: "raise your hand", sent: "✋", refuse: "you didn't raise it." },
    ca: { prompt: "aixecar la mà", sent: "✋", refuse: "no la vas aixecar." },
  },
  seen: {
    es: ["te fuiste de la pestaña.", "lo vi.", "no hace falta que me lo digas"],
    en: ["you left the tab.", "i saw it.", "you don't need to tell me"],
    ca: ["has marxat de la pestanya.", "ho vaig veure.", "no cal que m'ho diguis"],
  },
  idle: {
    es: "sigues ahí?",
    en: "still there?",
    ca: "encara hi ets?",
  },
};

export function script(language = "es") {
  const lang = ["es", "en", "ca"].includes(language) ? language : "es";
  return BLOCKS.map((block, index) => ({
    id: index,
    time: block.time,
    speaker: block.speaker,
    // Lines from part 2 are spoken aloud and carry the binaural tone.
    p2: !!block.p2,
    note: block.note ? block.note[lang] : null,
    lines: block.lines.map((line, position) => ({
      id: `${index}-${position}`,
      text: line[lang],
      fx: line.fx || null,
      pause: line.pause || 0,
      p2: !!block.p2,
    })),
  }));
}

export function transcript(language = "es") {
  return script(language);
}
