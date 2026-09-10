import { useEffect, useMemo, useState } from "react";
import echo1 from "../data/echo1-benchmark.json";
import echo2 from "../data/echo2-benchmark.json";

const ACTIONS = {
  es: ["acercarse", "evitar", "esperar"],
  en: ["approach", "avoid", "wait"],
  ca: ["apropar-se", "evitar", "esperar"],
};
const GATES = ["OK", "MODIFY", "BLOCK"];

const TERMS = {
  es: [
    ["WSP", "Paquete de 16 bytes que representa lo percibido en un formato compartido."],
    ["CAM", "Memoria episódica: conserva qué ocurrió y sólo marca hechos cuando existe evidencia."],
    ["Q", "Tabla de política. Puntúa las acciones acercarse, evitar y esperar para cada estado."],
    ["T", "Modelo de transición de un paso: predice qué estado seguirá a una acción."],
    ["Pattern", "Memoria de contexto que añade el estado anterior cuando T no puede distinguir un patrón."],
    ["Gate", "Puerta final de seguridad. Puede aceptar, modificar o bloquear una propuesta."],
    ["ATTEND", "Decisión de despertar el reloj lento ante incertidumbre, novedad o contradicción."],
    ["Córtex", "Reloj lento opcional. Propone; nunca escribe hechos ni controla directamente el cuerpo."],
    ["δ", "Error de aprendizaje: diferencia entre lo esperado y la consecuencia observada."],
    ["scratch", "Control que empieza desde cero y ejecuta exactamente el mismo protocolo."],
    ["held-out", "Examen congelado: esos casos no se usan para aprender mientras se puntúan."],
    ["ROI", "Recompensa adicional obtenida frente al control durante la misma ventana."],
  ],
  en: [
    ["WSP", "A 16-byte packet representing perception in one shared format."],
    ["CAM", "Episodic memory: it retains what happened and marks facts only when evidence exists."],
    ["Q", "Policy table. It scores approach, avoid and wait for every state."],
    ["T", "One-step transition model: it predicts which state follows an action."],
    ["Pattern", "Context memory that adds the previous state when T cannot distinguish a pattern."],
    ["Gate", "Final safety gate. It can accept, modify or block a proposal."],
    ["ATTEND", "Decision to wake the slow clock under uncertainty, novelty or contradiction."],
    ["Cortex", "Optional slow clock. It proposes; it never writes facts or directly controls the body."],
    ["δ", "Learning error: the difference between the expected and observed consequence."],
    ["scratch", "A control that starts from zero and follows exactly the same protocol."],
    ["held-out", "A frozen exam: its cases are not used for learning while being scored."],
    ["ROI", "Additional reward over the control during the same window."],
  ],
  ca: [
    ["WSP", "Paquet de 16 bytes que representa el que s'ha percebut en un format compartit."],
    ["CAM", "Memòria episòdica: conserva què ha passat i només marca fets quan hi ha evidència."],
    ["Q", "Taula de política. Puntua les accions apropar-se, evitar i esperar per a cada estat."],
    ["T", "Model de transició d'un pas: prediu quin estat seguirà una acció."],
    ["Pattern", "Memòria de context que afegeix l'estat anterior quan T no pot distingir un patró."],
    ["Gate", "Porta final de seguretat. Pot acceptar, modificar o bloquejar una proposta."],
    ["ATTEND", "Decisió de despertar el rellotge lent davant d'incertesa, novetat o contradicció."],
    ["Còrtex", "Rellotge lent opcional. Proposa; mai no escriu fets ni controla directament el cos."],
    ["δ", "Error d'aprenentatge: diferència entre el que s'esperava i la conseqüència observada."],
    ["scratch", "Control que comença des de zero i executa exactament el mateix protocol."],
    ["held-out", "Examen congelat: aquests casos no es fan servir per aprendre mentre es puntuen."],
    ["ROI", "Recompensa addicional obtinguda davant del control durant la mateixa finestra."],
  ],
};

const COPY = {
  es: {
    accumulated: "recompensa acumulada", phaseChange: "cambio de fase", selectedTurn: "turno seleccionado",
    chartLabel: (n, end) => `Recompensa acumulada durante ${n} turnos; termina en ${end}`,
    ringLabel: (cell, kind) => `Anillo de 32 celdas. El agente está en la celda ${cell}, tipo ${kind}.`,
    turn: "turno", cell: "celda", realTrace: "Traza real", turnTitle: "Así se ve un turno",
    traceIntro: "Recorre la ejecución canónica. El visor no simula nada en el navegador: reproduce las 352 líneas emitidas por el agente.",
    action: "acción", reward: "recompensa", qLabel: "Q [acercar, evitar, esperar]", predicts: "T predice",
    unknown: "desconocido", slot: "ranura", gate: "gate", yes: "sí", no: "no", previous: "Turno anterior",
    next: "Turno siguiente", selectTurn: "Seleccionar turno", pause: "Pausar", play: "Reproducir",
    canonical: "Benchmark canónico determinista", title: "ECHO-1 — resultados",
    intro: "Qué hace el agente, qué mejora frente a sus controles y cómo se ve durante una ejecución. Las cifras proceden de los informes de cierre.",
    statPolicy: "la política cambia de acercarse a evitar", statPrediction: (n) => `predicción T · ${n} turnos conocidos`,
    statTransfer: "transferencia agregada frente a scratch", statIntegrity: "hechos falsos / memorias destruidas",
    legend: "Leyenda", legendTitle: "Cómo leer ECHO-1", legendIntro: "Pulsa cualquier término para desplegar su significado.",
    learning: "Aprendizaje y adaptación", learningTitle: "Recompensa acumulada por turno",
    learningIntro: "La primera frontera marca el final de 256 turnos de aprendizaje. La segunda separa el mundo desplazado de la sonda final. El cursor sigue el turno seleccionado en el reproductor.",
    policyLabel: "La política ante peligro pasa de cero cero cero a menos doce, cinco, cero", before: "antes", after: "después",
    actions: "acercarse · evitar · esperar", comparisons: "Comparaciones predictivas y de transferencia",
    patternTitle: "El contexto resuelve la ambigüedad", patternIntro: "80 puntos held-out. Un desconocido también cuenta como fallo.",
    patternAria: "T acierta 40 de 80; PatternMemory acierta 80 de 80", oneStep: "T · un paso", correct: "aciertos",
    transferTitle: "La experiencia cruza mundos", transferIntro: "Mismo protocolo y mismo cuerpo; cambia la experiencia disponible.",
    world: "Mundo", gain: "ganancia", aggregate: "agregado", conflictTitle: "Una contradicción, una llamada, un resultado",
    contradicted: "T queda contradicha", wakes: "ATTEND: conflicto · córtex despierta una vez",
    proposal: "propuesta: acercarse", attendOff: "ATTEND apagada · el gate conserva la acción", result: "resultado", fastControl: "control rápido",
    observable: "Resultado observable", capabilities: "Capacidades cerradas", goals: "objetivos en otra habitación", scratch: "scratch",
    deliveries: "entregas de objeto", control: "control", openings: "aperturas", narrated: "cláusulas narradas correctamente", causalWrites: "escrituras causales",
    decisionDiagram: "Diagrama de decisión", decisionTitle: "Un turno, de percepción a consecuencia",
    flowAria: "Mundo a WSP y CAM; Q, T y Pattern producen una propuesta; el gate decide; el cuerpo actúa; la consecuencia vuelve como delta",
    worldNode: "Mundo", observation: "observación", represent: "representar y recordar", choose: "elegir y predecir", body: "Cuerpo", consequence: "acción → recompensa → δ",
    provenance: "Procedencia", methodTitle: "Qué significa este benchmark",
    method: "Es un banco canónico determinista de aceptación, no una comparación con un LLM ni una prueba sobre un robot físico. Los controles cambian una sola causa y conservan protocolo, denominadores y estado observable.",
    acceptance: "pruebas de aceptación", patternWrites: "escrituras durante PATTERN held-out", transferWrites: "escrituras durante la sonda de transferencia",
    cortexCalls: "llamadas corticales en el banco principal", sources: "Ver informes y huellas SHA-256", download: "Descargar datos del benchmark (.json)",
    phase: { aprendizaje: "aprendizaje", "mundo desplazado": "mundo desplazado", sonda: "sonda" },
  },
  en: {
    accumulated: "cumulative reward", phaseChange: "phase change", selectedTurn: "selected turn",
    chartLabel: (n, end) => `Cumulative reward over ${n} turns; ends at ${end}`,
    ringLabel: (cell, kind) => `Ring of 32 cells. The agent is in cell ${cell}, type ${kind}.`,
    turn: "turn", cell: "cell", realTrace: "Real trace", turnTitle: "What a turn looks like",
    traceIntro: "Explore the canonical run. The viewer simulates nothing in the browser: it replays the 352 lines emitted by the agent.",
    action: "action", reward: "reward", qLabel: "Q [approach, avoid, wait]", predicts: "T predicts",
    unknown: "unknown", slot: "slot", gate: "gate", yes: "yes", no: "no", previous: "Previous turn",
    next: "Next turn", selectTurn: "Select turn", pause: "Pause", play: "Play",
    canonical: "Deterministic canonical benchmark", title: "ECHO-1 — results",
    intro: "What the agent does, what it improves over its controls and what a run looks like. Figures come from the closure reports.",
    statPolicy: "policy changes from approach to avoid", statPrediction: (n) => `T prediction · ${n} known turns`,
    statTransfer: "aggregate transfer over scratch", statIntegrity: "false facts / destroyed memories",
    legend: "Legend", legendTitle: "How to read ECHO-1", legendIntro: "Select any term to reveal its meaning.",
    learning: "Learning and adaptation", learningTitle: "Cumulative reward by turn",
    learningIntro: "The first boundary marks the end of 256 learning turns. The second separates the shifted world from the final probe. The cursor follows the turn selected in the player.",
    policyLabel: "The danger policy changes from zero zero zero to minus twelve, five, zero", before: "before", after: "after",
    actions: "approach · avoid · wait", comparisons: "Predictive and transfer comparisons",
    patternTitle: "Context resolves the ambiguity", patternIntro: "80 held-out points. An unknown also counts as a failure.",
    patternAria: "T gets 40 out of 80; PatternMemory gets 80 out of 80", oneStep: "T · one step", correct: "correct",
    transferTitle: "Experience crosses worlds", transferIntro: "Same protocol and same body; only the available experience changes.",
    world: "World", gain: "gain", aggregate: "aggregate", conflictTitle: "One contradiction, one call, one result",
    contradicted: "T is contradicted", wakes: "ATTEND: conflict · cortex wakes once",
    proposal: "proposal: approach", attendOff: "ATTEND off · the gate retains the action", result: "result", fastControl: "fast control",
    observable: "Observable result", capabilities: "Closed capabilities", goals: "goals in another room", scratch: "scratch",
    deliveries: "object deliveries", control: "control", openings: "openings", narrated: "clauses narrated correctly", causalWrites: "causal writes",
    decisionDiagram: "Decision diagram", decisionTitle: "One turn, from perception to consequence",
    flowAria: "World to WSP and CAM; Q, T and Pattern produce a proposal; the gate decides; the body acts; the consequence returns as delta",
    worldNode: "World", observation: "observation", represent: "represent and remember", choose: "choose and predict", body: "Body", consequence: "action → reward → δ",
    provenance: "Provenance", methodTitle: "What this benchmark means",
    method: "This is a deterministic canonical acceptance bench, not a comparison with an LLM or a test on a physical robot. Controls change one cause and retain the protocol, denominators and observable state.",
    acceptance: "acceptance tests", patternWrites: "writes during PATTERN held-out", transferWrites: "writes during the transfer probe",
    cortexCalls: "cortical calls in the main bench", sources: "View reports and SHA-256 fingerprints", download: "Download benchmark data (.json)",
    phase: { aprendizaje: "learning", "mundo desplazado": "shifted world", sonda: "probe" },
  },
  ca: {
    accumulated: "recompensa acumulada", phaseChange: "canvi de fase", selectedTurn: "torn seleccionat",
    chartLabel: (n, end) => `Recompensa acumulada durant ${n} torns; acaba en ${end}`,
    ringLabel: (cell, kind) => `Anell de 32 cel·les. L'agent és a la cel·la ${cell}, tipus ${kind}.`,
    turn: "torn", cell: "cel·la", realTrace: "Traça real", turnTitle: "Així es veu un torn",
    traceIntro: "Recorre l'execució canònica. El visor no simula res al navegador: reprodueix les 352 línies emeses per l'agent.",
    action: "acció", reward: "recompensa", qLabel: "Q [apropar-se, evitar, esperar]", predicts: "T prediu",
    unknown: "desconegut", slot: "ranura", gate: "gate", yes: "sí", no: "no", previous: "Torn anterior",
    next: "Torn següent", selectTurn: "Selecciona el torn", pause: "Pausa", play: "Reprodueix",
    canonical: "Benchmark canònic determinista", title: "ECHO-1 — resultats",
    intro: "Què fa l'agent, què millora davant dels controls i com es veu durant una execució. Les xifres provenen dels informes de tancament.",
    statPolicy: "la política canvia d'apropar-se a evitar", statPrediction: (n) => `predicció T · ${n} torns coneguts`,
    statTransfer: "transferència agregada davant de scratch", statIntegrity: "fets falsos / memòries destruïdes",
    legend: "Llegenda", legendTitle: "Com llegir ECHO-1", legendIntro: "Prem qualsevol terme per desplegar-ne el significat.",
    learning: "Aprenentatge i adaptació", learningTitle: "Recompensa acumulada per torn",
    learningIntro: "La primera frontera marca el final de 256 torns d'aprenentatge. La segona separa el món desplaçat de la sonda final. El cursor segueix el torn seleccionat al reproductor.",
    policyLabel: "La política davant del perill passa de zero zero zero a menys dotze, cinc, zero", before: "abans", after: "després",
    actions: "apropar-se · evitar · esperar", comparisons: "Comparacions predictives i de transferència",
    patternTitle: "El context resol l'ambigüitat", patternIntro: "80 punts held-out. Un desconegut també compta com a fallada.",
    patternAria: "T encerta 40 de 80; PatternMemory encerta 80 de 80", oneStep: "T · un pas", correct: "encerts",
    transferTitle: "L'experiència travessa mons", transferIntro: "Mateix protocol i mateix cos; canvia l'experiència disponible.",
    world: "Món", gain: "guany", aggregate: "agregat", conflictTitle: "Una contradicció, una crida, un resultat",
    contradicted: "T queda contradita", wakes: "ATTEND: conflicte · el còrtex es desperta una vegada",
    proposal: "proposta: apropar-se", attendOff: "ATTEND apagada · el gate conserva l'acció", result: "resultat", fastControl: "control ràpid",
    observable: "Resultat observable", capabilities: "Capacitats tancades", goals: "objectius en una altra habitació", scratch: "scratch",
    deliveries: "lliuraments d'objecte", control: "control", openings: "obertures", narrated: "clàusules narrades correctament", causalWrites: "escriptures causals",
    decisionDiagram: "Diagrama de decisió", decisionTitle: "Un torn, de percepció a conseqüència",
    flowAria: "Món a WSP i CAM; Q, T i Pattern produeixen una proposta; el gate decideix; el cos actua; la conseqüència torna com a delta",
    worldNode: "Món", observation: "observació", represent: "representar i recordar", choose: "triar i predir", body: "Cos", consequence: "acció → recompensa → δ",
    provenance: "Procedència", methodTitle: "Què significa aquest benchmark",
    method: "És un banc canònic determinista d'acceptació, no una comparació amb un LLM ni una prova sobre un robot físic. Els controls canvien una sola causa i conserven protocol, denominadors i estat observable.",
    acceptance: "proves d'acceptació", patternWrites: "escriptures durant PATTERN held-out", transferWrites: "escriptures durant la sonda de transferència",
    cortexCalls: "crides corticals al banc principal", sources: "Mostra els informes i les empremtes SHA-256", download: "Descarrega les dades del benchmark (.json)",
    phase: { aprendizaje: "aprenentatge", "mundo desplazado": "món desplaçat", sonda: "sonda" },
  },
};

const EVOLUTION_COPY = {
  es: {
    kicker: "Dos cierres · evidencia reproducible",
    title: "ECHO-AI — evolución de ECHO-1 a ECHO-2",
    intro: "Los resultados se separan por versión. Cada cifra conserva su banco, su control y su denominador; no se mezclan en una puntuación de inteligencia inventada.",
    closed: "cerrado",
    echo1Lead: "Aprende consecuencias, recuerda episodios y transfiere patrones entre mundos discretos.",
    echo2Lead: "Conserva ECHO-1 y añade cuerpo viable, tiempo, consolidación, herencia y regulación interna.",
    checks: "pruebas de aceptación",
    coreTurns: "turnos en la traza canónica",
    prediction: "predicción T conocida",
    transfer: "transferencia agregada",
    reports: "informes de cierre verdes",
    neurons: "neuronas monitorizadas",
    stream: "frames STREAM-1",
    heat: "turnos con energía + temperatura",
    compare: "Cambios medidos con controles",
    compareIntro: "Las dos primeras comparaciones proceden de CAPACITY-1. La tercera muestra escala ejercitada; usa cargas distintas y no representa precisión comparable.",
    perception: "Firmas perceptivas reservadas",
    temporal: "Discriminación temporal · 640 neuronas totales",
    sequence: "Escala de secuencia ejercitada",
    echo1Size: "baseline de tamaño ECHO-1 · 256 LIF",
    echo2Perception: "ECHO-2 · 512 LIF",
    static: "control · 640 LIF estáticas",
    adaptive: "ECHO-2 · 512 LIF + 128 ALIF",
    echo1Core: "ECHO-1 · núcleo",
    echo2Stream: "ECHO-2 · STREAM-1",
    phases: "ECHO-2 por fase",
    phaseIntro: "Ocho informes verdes cierran las capacidades nuevas. Los resultados rojos anteriores de GEN-1 y HEAT-1 se conservan en el laboratorio.",
    data1: "Datos ECHO-1 (.json)", data2: "Datos ECHO-2 (.json)",
  },
  en: {
    kicker: "Two closures · reproducible evidence",
    title: "ECHO-AI — evolution from ECHO-1 to ECHO-2",
    intro: "Results are separated by release. Every figure retains its bench, control and denominator; they are not merged into an invented intelligence score.",
    closed: "closed",
    echo1Lead: "Learns consequences, remembers episodes and transfers patterns across discrete worlds.",
    echo2Lead: "Retains ECHO-1 and adds a viable body, time, consolidation, inheritance and internal regulation.",
    checks: "acceptance tests", coreTurns: "turns in the canonical trace", prediction: "known T prediction", transfer: "aggregate transfer",
    reports: "green closure reports", neurons: "monitored neurons", stream: "STREAM-1 frames", heat: "turns with energy + temperature",
    compare: "Changes measured with controls",
    compareIntro: "The first two comparisons come from CAPACITY-1. The third shows exercised scale; it uses different workloads and does not represent comparable accuracy.",
    perception: "Held-out perceptual signatures", temporal: "Temporal discrimination · 640 total neurons", sequence: "Exercised sequence scale",
    echo1Size: "ECHO-1-size baseline · 256 LIF", echo2Perception: "ECHO-2 · 512 LIF", static: "control · 640 static LIF",
    adaptive: "ECHO-2 · 512 LIF + 128 ALIF", echo1Core: "ECHO-1 · core", echo2Stream: "ECHO-2 · STREAM-1",
    phases: "ECHO-2 by phase", phaseIntro: "Eight green reports close the new capabilities. Earlier red GEN-1 and HEAT-1 results remain in the laboratory.",
    data1: "ECHO-1 data (.json)", data2: "ECHO-2 data (.json)",
  },
  ca: {
    kicker: "Dos tancaments · evidència reproduïble",
    title: "ECHO-AI — evolució d'ECHO-1 a ECHO-2",
    intro: "Els resultats se separen per versió. Cada xifra conserva el seu banc, control i denominador; no es barregen en una puntuació d'intel·ligència inventada.",
    closed: "tancat",
    echo1Lead: "Aprèn conseqüències, recorda episodis i transfereix patrons entre mons discrets.",
    echo2Lead: "Conserva ECHO-1 i afegeix cos viable, temps, consolidació, herència i regulació interna.",
    checks: "proves d'acceptació", coreTurns: "torns a la traça canònica", prediction: "predicció T coneguda", transfer: "transferència agregada",
    reports: "informes de tancament verds", neurons: "neurones monitoritzades", stream: "frames STREAM-1", heat: "torns amb energia + temperatura",
    compare: "Canvis mesurats amb controls",
    compareIntro: "Les dues primeres comparacions provenen de CAPACITY-1. La tercera mostra escala exercitada; usa càrregues diferents i no representa precisió comparable.",
    perception: "Signatures perceptives reservades", temporal: "Discriminació temporal · 640 neurones totals", sequence: "Escala de seqüència exercitada",
    echo1Size: "baseline de mida ECHO-1 · 256 LIF", echo2Perception: "ECHO-2 · 512 LIF", static: "control · 640 LIF estàtiques",
    adaptive: "ECHO-2 · 512 LIF + 128 ALIF", echo1Core: "ECHO-1 · nucli", echo2Stream: "ECHO-2 · STREAM-1",
    phases: "ECHO-2 per fase", phaseIntro: "Vuit informes verds tanquen les capacitats noves. Els resultats vermells anteriors de GEN-1 i HEAT-1 es conserven al laboratori.",
    data1: "Dades ECHO-1 (.json)", data2: "Dades ECHO-2 (.json)",
  },
};

const PHASES = {
  es: [
    ["VITA-1 · FOOD-1 · SURV-1", "Muerte efectiva y supervivencia con memoria: medianas 28/40/40 frente a 16/16/16 al resetear."],
    ["SHIFT-S", "Adaptación frente a Q congelada: +421, +416 y +446 turnos; también se publica la transferencia negativa frente a scratch."],
    ["PATTERN-1", "32/32 variantes reservadas frente a 0/32 por coincidencia exacta, sin usar id de objeto o posición."],
    ["STREAM-1", "4.608 frames, 48 bloques y 4.512/4.512 predicciones conocidas en el brazo coherente."],
    ["SLEEP-2", "8.208 filas se consolidan en 144 reglas: 720/720 held-out frente a 0/720 de T, sin reescribir CAM/T/Q."],
    ["GEN-1f", "Presupuesto heredado 8: 360 errores tardíos frente a 602 del naïf; 52 victorias, 24 derrotas y 52 empates."],
    ["HEAT-1b", "20.786 turnos con energía y temperatura frente a 7.221 sin temperatura; examen cargar/enfriar 12/12."],
    ["CAPACITY-1 · NEURAL-VIZ-1", "512 LIF: 2.048/2.048; 128 ALIF adicionales: 256/256 temporal; GUI Python observable."],
  ],
  en: [
    ["VITA-1 · FOOD-1 · SURV-1", "Effective death and survival with memory: medians 28/40/40 versus 16/16/16 after reset."],
    ["SHIFT-S", "Adaptation versus frozen Q: +421, +416 and +446 turns; negative transfer versus scratch is also published."],
    ["PATTERN-1", "32/32 held-out variants versus 0/32 exact matching, without object or position IDs."],
    ["STREAM-1", "4,608 frames, 48 chunks and 4,512/4,512 known predictions in the coherent arm."],
    ["SLEEP-2", "8,208 rows consolidate into 144 rules: 720/720 held-out versus T at 0/720, without rewriting CAM/T/Q."],
    ["GEN-1f", "Inherited budget 8: 360 late errors versus naïve at 602; 52 wins, 24 losses and 52 ties."],
    ["HEAT-1b", "20,786 turns with energy and temperature versus 7,221 without temperature; load/cool exam 12/12."],
    ["CAPACITY-1 · NEURAL-VIZ-1", "512 LIF: 2,048/2,048; 128 additional ALIF: 256/256 temporal; observable Python GUI."],
  ],
  ca: [
    ["VITA-1 · FOOD-1 · SURV-1", "Mort efectiva i supervivència amb memòria: medianes 28/40/40 davant 16/16/16 després del reset."],
    ["SHIFT-S", "Adaptació davant Q congelada: +421, +416 i +446 torns; també es publica la transferència negativa davant scratch."],
    ["PATTERN-1", "32/32 variants reservades davant 0/32 per coincidència exacta, sense ids d'objecte o posició."],
    ["STREAM-1", "4.608 frames, 48 blocs i 4.512/4.512 prediccions conegudes al braç coherent."],
    ["SLEEP-2", "8.208 files es consoliden en 144 regles: 720/720 held-out davant T a 0/720, sense reescriure CAM/T/Q."],
    ["GEN-1f", "Pressupost heretat 8: 360 errors tardans davant 602 del naïf; 52 victòries, 24 derrotes i 52 empats."],
    ["HEAT-1b", "20.786 torns amb energia i temperatura davant 7.221 sense temperatura; examen carregar/refredar 12/12."],
    ["CAPACITY-1 · NEURAL-VIZ-1", "512 LIF: 2.048/2.048; 128 ALIF addicionals: 256/256 temporal; GUI Python observable."],
  ],
};

function pct(value, language) {
  return new Intl.NumberFormat(language, { maximumFractionDigits: 2 }).format(value * 100) + "%";
}

function Stat({ value, label }) {
  return (
    <div className="bench-stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Bar({ label, value, max, tone = "primary" }) {
  const width = max > 0 ? Math.max(0, Math.min(100, (value / max) * 100)) : 0;
  return (
    <div className="bench-bar-row">
      <span>{label}</span>
      <div className="bench-bar-track" aria-hidden="true">
        <i className={`is-${tone}`} style={{ width: `${width}%` }} />
      </div>
      <strong>{value}</strong>
    </div>
  );
}

function ReleaseCard({ release, lead, status, stats, tone }) {
  return (
    <section className={`release-card is-${tone}`} aria-labelledby={`${tone}-release-title`}>
      <div className="release-card-head">
        <h2 id={`${tone}-release-title`}>{release}</h2>
        <span>● {status}</span>
      </div>
      <p>{lead}</p>
      <dl>
        {stats.map(([value, label]) => (
          <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
        ))}
      </dl>
    </section>
  );
}

function RatioRow({ label, value, total, display, tone }) {
  const width = total > 0 ? Math.max(0, Math.min(100, value / total * 100)) : 0;
  return (
    <div className="evolution-ratio">
      <span>{label}</span>
      <i aria-hidden="true"><b className={`is-${tone}`} style={{ width: `${width}%` }} /></i>
      <strong>{display}</strong>
    </div>
  );
}

function Evolution({ language }) {
  const c = EVOLUTION_COPY[language];
  const e1Prediction = pct(echo1.core.predictionAccuracy, language);
  const e2Neurons = echo2.capacity.lif + echo2.capacity.adaptiveLif;
  return (
    <>
      <header className="evolution-hero">
        <span className="bench-kicker">{c.kicker}</span>
        <h1>{c.title}</h1>
        <p>{c.intro}</p>
      </header>

      <div className="release-columns">
        <ReleaseCard
          release="ECHO-1"
          lead={c.echo1Lead}
          status={c.closed}
          tone="echo1"
          stats={[
            [echo1.releaseAcceptanceTests, c.checks],
            [echo1.core.turns, c.coreTurns],
            [e1Prediction, c.prediction],
            [`+${echo1.transfer.aggregateGain}`, c.transfer],
          ]}
        />
        <ReleaseCard
          release="ECHO-2"
          lead={c.echo2Lead}
          status={c.closed}
          tone="echo2"
          stats={[
            [echo2.sources.length, c.reports],
            [`${e2Neurons} (${echo2.capacity.lif}+${echo2.capacity.adaptiveLif})`, c.neurons],
            [echo2.stream.frames.toLocaleString(language), c.stream],
            [echo2.heat.jointTurns.toLocaleString(language), c.heat],
          ]}
        />
      </div>

      <section className="bench-section evolution-comparisons" aria-labelledby="evolution-comparison-title">
        <span className="bench-kicker">CAPACITY-1 · STREAM-1</span>
        <h2 id="evolution-comparison-title">{c.compare}</h2>
        <p>{c.compareIntro}</p>
        <div className="evolution-chart-grid">
          <div className="evolution-chart">
            <h3>{c.perception}</h3>
            <RatioRow label={c.echo1Size} value={echo2.comparison.perception.echo1SizeBaseline.hits} total={echo2.comparison.perception.echo1SizeBaseline.total} display="829 / 2.048" tone="echo1" />
            <RatioRow label={c.echo2Perception} value={echo2.comparison.perception.echo2.hits} total={echo2.comparison.perception.echo2.total} display="2.048 / 2.048" tone="echo2" />
          </div>
          <div className="evolution-chart">
            <h3>{c.temporal}</h3>
            <RatioRow label={c.static} value={echo2.comparison.temporal.staticControl.hits} total={echo2.comparison.temporal.staticControl.total} display="0 / 256" tone="echo1" />
            <RatioRow label={c.adaptive} value={echo2.comparison.temporal.echo2.hits} total={echo2.comparison.temporal.echo2.total} display="256 / 256" tone="echo2" />
          </div>
          <div className="evolution-chart is-wide">
            <h3>{c.sequence}</h3>
            <RatioRow label={c.echo1Core} value={echo2.comparison.streamScale.echo1Turns} total={echo2.comparison.streamScale.echo2Frames} display="352" tone="echo1" />
            <RatioRow label={c.echo2Stream} value={echo2.comparison.streamScale.echo2Frames} total={echo2.comparison.streamScale.echo2Frames} display="4.608" tone="echo2" />
          </div>
        </div>
      </section>

      <section className="bench-section" aria-labelledby="echo2-phases-title">
        <span className="bench-kicker">ECHO-2</span>
        <h2 id="echo2-phases-title">{c.phases}</h2>
        <p>{c.phaseIntro}</p>
        <div className="phase-results">
          {PHASES[language].map(([name, result]) => (
            <article key={name}><span>✓</span><h3>{name}</h3><p>{result}</p></article>
          ))}
        </div>
        <div className="results-downloads">
          <a className="bench-download" href="/data/echo1-benchmark.json" download>{c.data1}</a>
          <a className="bench-download is-echo2" href="/data/echo2-benchmark.json" download>{c.data2}</a>
        </div>
      </section>

    </>
  );
}

function LearningChart({ trace, cursor, copy }) {
  const cumulative = useMemo(() => {
    let sum = 0;
    return trace.map((row) => {
      sum += row.reward;
      return sum;
    });
  }, [trace]);

  const width = 760;
  const height = 260;
  const padX = 46;
  const padY = 30;
  const min = Math.min(0, ...cumulative);
  const max = Math.max(1, ...cumulative);
  const span = Math.max(1, max - min);
  const x = (index) => padX + (index / Math.max(1, cumulative.length - 1)) * (width - padX * 2);
  const y = (value) => height - padY - ((value - min) / span) * (height - padY * 2);
  const points = cumulative.map((value, index) => `${x(index)},${y(value)}`).join(" ");
  const cursorValue = cumulative[cursor] ?? 0;
  const ticks = [min, Math.round(min + span / 2), max];

  return (
    <div className="bench-chart-shell">
      <svg
        className="bench-line-chart"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={copy.chartLabel(trace.length, cumulative.at(-1) ?? 0)}
      >
        {ticks.map((tick) => (
          <g key={tick}>
            <line x1={padX} x2={width - padX} y1={y(tick)} y2={y(tick)} className="chart-grid" />
            <text x={padX - 8} y={y(tick) + 4} textAnchor="end">{tick}</text>
          </g>
        ))}
        {[256, 320].map((turn) => (
          <line key={turn} x1={x(turn)} x2={x(turn)} y1={padY} y2={height - padY} className="chart-phase" />
        ))}
        <polyline points={points} className="chart-line" />
        <line x1={x(cursor)} x2={x(cursor)} y1={padY} y2={height - padY} className="chart-cursor" />
        <circle cx={x(cursor)} cy={y(cursorValue)} r="5" className="chart-point" />
        <text x={padX} y={height - 7}>0</text>
        <text x={x(255)} y={height - 7} textAnchor="middle">256</text>
        <text x={x(319)} y={height - 7} textAnchor="middle">320</text>
        <text x={width - padX} y={height - 7} textAnchor="end">{trace.length}</text>
      </svg>
      <div className="chart-key" aria-hidden="true">
        <span><i className="line-sample" /> {copy.accumulated}</span>
        <span><i className="phase-sample" /> {copy.phaseChange}</span>
        <span><i className="cursor-sample" /> {copy.selectedTurn}</span>
      </div>
    </div>
  );
}

function WorldRing({ row, copy }) {
  return (
    <div
      className="world-ring"
      role="img"
      aria-label={copy.ringLabel(row.cell, row.kind)}
    >
      {Array.from({ length: 32 }, (_, cell) => {
        const angle = (cell / 32) * Math.PI * 2 - Math.PI / 2;
        const style = {
          left: `${50 + Math.cos(angle) * 43}%`,
          top: `${50 + Math.sin(angle) * 43}%`,
        };
        return (
          <span
            key={cell}
            className={`world-node${cell === row.cell ? ` is-current is-${row.kind.toLowerCase()}` : ""}`}
            style={style}
          />
        );
      })}
      <div className="world-ring-center">
        <span>{copy.turn} {row.turn}</span>
        <strong>{copy.cell} {row.cell}</strong>
        <small>{row.kind}</small>
      </div>
    </div>
  );
}

function TurnPlayer({ data, index, setIndex, language, copy }) {
  const [playing, setPlaying] = useState(false);
  const row = data.trace[index];
  const phase = data.core.phases.find((item) => row.turn >= item.from && row.turn <= item.to);

  useEffect(() => {
    if (!playing) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => {
        if (current >= data.trace.length - 1) {
          setPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 120);
    return () => window.clearInterval(timer);
  }, [playing, data.trace.length, setIndex]);

  const move = (delta) => {
    setPlaying(false);
    setIndex((current) => Math.max(0, Math.min(data.trace.length - 1, current + delta)));
  };

  return (
    <section className="bench-section" aria-labelledby="turn-player-title">
      <div className="bench-section-head">
        <div>
          <span className="bench-kicker">{copy.realTrace}</span>
          <h2 id="turn-player-title">{copy.turnTitle}</h2>
        </div>
        <span className="bench-phase">{copy.phase[phase?.name] ?? phase?.name ?? "—"}</span>
      </div>
      <p>{copy.traceIntro}</p>
      <div className="turn-stage">
        <WorldRing row={row} copy={copy} />
        <div className="turn-readout" aria-live="polite">
          <div><span>{copy.action}</span><strong>{ACTIONS[language][row.action] ?? row.action}</strong></div>
          <div><span>{copy.reward}</span><strong>{row.reward > 0 ? "+" : ""}{row.reward}</strong></div>
          <div><span>{copy.qLabel}</span><strong>[{row.q.join(", ")}]</strong></div>
          <div><span>{copy.predicts}</span><strong>{row.prediction == null ? copy.unknown : `${copy.slot} ${row.prediction}`}</strong></div>
          <div><span>{copy.gate}</span><strong>{GATES[row.gate] ?? row.gate}</strong></div>
          <div><span>δ</span><strong>{row.delta ? copy.yes : copy.no}</strong></div>
          <div className="turn-wsp"><span>WSP</span><strong>{row.wsp}</strong></div>
        </div>
      </div>
      <div className="turn-controls">
        <button type="button" onClick={() => move(-1)} disabled={index === 0} aria-label={copy.previous}>←</button>
        <button type="button" onClick={() => setPlaying((value) => !value)}>
          {playing ? copy.pause : copy.play}
        </button>
        <button type="button" onClick={() => move(1)} disabled={index === data.trace.length - 1} aria-label={copy.next}>→</button>
        <input
          type="range"
          min="0"
          max={data.trace.length - 1}
          value={index}
          onChange={(event) => {
            setPlaying(false);
            setIndex(Number(event.target.value));
          }}
          aria-label={copy.selectTurn}
        />
        <output>{index + 1} / {data.trace.length}</output>
      </div>
    </section>
  );
}

function Results({ data, cursor, setCursor, language, copy }) {
  const patternMax = data.pattern.decisionPoints;
  const transferMax = Math.max(...data.transfer.worlds.flatMap((row) => [row.transfer, row.scratch]));

  return (
    <>
      <header className="bench-hero">
        <span className="bench-kicker">{copy.canonical}</span>
        <h2>{copy.title}</h2>
        <p>{copy.intro}</p>
        <div className="bench-stats">
          <Stat value="−12 → +5" label={copy.statPolicy} />
          <Stat value={pct(data.core.predictionAccuracy, language)} label={copy.statPrediction(data.core.predictionKnownTurns)} />
          <Stat value={`+${data.transfer.aggregateGain}`} label={copy.statTransfer} />
          <Stat value="0 / 0" label={copy.statIntegrity} />
        </div>
      </header>

      <section className="bench-section" aria-labelledby="legend-title">
        <span className="bench-kicker">{copy.legend}</span>
        <h2 id="legend-title">{copy.legendTitle}</h2>
        <p>{copy.legendIntro}</p>
        <div className="bench-terms">
          {TERMS[language].map(([term, meaning]) => (
            <details key={term}>
              <summary>{term}</summary>
              <p>{meaning}</p>
            </details>
          ))}
        </div>
      </section>

      <TurnPlayer data={data} index={cursor} setIndex={setCursor} language={language} copy={copy} />

      <section className="bench-section" aria-labelledby="learning-title">
        <span className="bench-kicker">{copy.learning}</span>
        <h2 id="learning-title">{copy.learningTitle}</h2>
        <p>{copy.learningIntro}</p>
        <LearningChart trace={data.trace} cursor={cursor} copy={copy} />
        <div className="policy-shift" role="img" aria-label={copy.policyLabel}>
          <div><span>{copy.before}</span><strong>[0, 0, 0]</strong></div>
          <span aria-hidden="true">→</span>
          <div><span>{copy.after}</span><strong>[−12, +5, 0]</strong></div>
          <small>{copy.actions}</small>
        </div>
      </section>

      <section className="bench-section bench-split" aria-label={copy.comparisons}>
        <div className="bench-panel">
          <span className="bench-kicker">PATTERN-0</span>
          <h2>{copy.patternTitle}</h2>
          <p>{copy.patternIntro}</p>
          <div className="bench-bars" role="img" aria-label={copy.patternAria}>
            <Bar label={copy.oneStep} value={data.pattern.tHits} max={patternMax} tone="muted" />
            <Bar label="Pattern" value={data.pattern.patternHits} max={patternMax} />
          </div>
          <strong className="bench-result">+{data.pattern.gain} {copy.correct}</strong>
        </div>

        <div className="bench-panel">
          <span className="bench-kicker">XFER-1</span>
          <h2>{copy.transferTitle}</h2>
          <p>{copy.transferIntro}</p>
          <div className="bench-bars">
            {data.transfer.worlds.map((world) => (
              <div className="bar-group" key={world.name}>
                <h3>{copy.world} {world.name} · {copy.gain} +{world.gain}</h3>
                <Bar label="transfer" value={world.transfer} max={transferMax} />
                <Bar label="scratch" value={world.scratch} max={transferMax} tone="muted" />
              </div>
            ))}
          </div>
          <strong className="bench-result">+{data.transfer.aggregateGain} {copy.aggregate}</strong>
        </div>
      </section>

      <section className="bench-section" aria-labelledby="conflict-title">
        <span className="bench-kicker">SIGN-C</span>
        <h2 id="conflict-title">{copy.conflictTitle}</h2>
        <div className="conflict-flow">
          <div>
            <small>{copy.turn} {data.conflict.conflictLine.turn}</small>
            <strong>{copy.contradicted}</strong>
            <span>{copy.wakes}</span>
          </div>
          <i aria-hidden="true">→</i>
          <div>
            <small>{copy.turn} {data.conflict.consumeLine.turn}</small>
            <strong>{copy.proposal}</strong>
            <span>{copy.attendOff}</span>
          </div>
          <i aria-hidden="true">→</i>
          <div>
            <small>{copy.result}</small>
            <strong>+{data.conflict.cortexReward}</strong>
            <span>{copy.fastControl} {data.conflict.fastReward} · ROI +{data.conflict.roi}</span>
          </div>
        </div>
      </section>

      <section className="bench-section" aria-labelledby="capabilities-title">
        <span className="bench-kicker">{copy.observable}</span>
        <h2 id="capabilities-title">{copy.capabilities}</h2>
        <div className="capability-grid">
          <div><strong>{data.capabilities.room.transferredGoalHits}</strong><span>{copy.goals}</span><small>{copy.scratch}: {data.capabilities.room.scratchGoalHits}</small></div>
          <div><strong>{data.capabilities.object.deliveries}</strong><span>{copy.deliveries}</span><small>{copy.control}: {data.capabilities.object.controlDeliveries}</small></div>
          <div><strong>{data.capabilities.open.openings}</strong><span>{copy.openings} · {data.capabilities.open.deliveries} {copy.deliveries}</span><small>{copy.control}: {data.capabilities.open.controlOpenings}</small></div>
          <div><strong>{data.capabilities.narration.hits}/{data.capabilities.narration.total}</strong><span>{copy.narrated}</span><small>{copy.causalWrites}: {data.capabilities.narration.causalWrites}</small></div>
        </div>
      </section>

      <section className="bench-section" aria-labelledby="architecture-title">
        <span className="bench-kicker">{copy.decisionDiagram}</span>
        <h2 id="architecture-title">{copy.decisionTitle}</h2>
        <div className="bench-flow" role="img" aria-label={copy.flowAria}>
          <div><strong>{copy.worldNode}</strong><span>{copy.observation}</span></div>
          <i>→</i>
          <div><strong>WSP + CAM</strong><span>{copy.represent}</span></div>
          <i>→</i>
          <div><strong>Q · T · Pattern</strong><span>{copy.choose}</span></div>
          <i>→</i>
          <div><strong>Gate</strong><span>OK · MODIFY · BLOCK</span></div>
          <i>→</i>
          <div><strong>{copy.body}</strong><span>{copy.consequence}</span></div>
        </div>
      </section>

      <section className="bench-section bench-method" aria-labelledby="method-title">
        <span className="bench-kicker">{copy.provenance}</span>
        <h2 id="method-title">{copy.methodTitle}</h2>
        <p>{copy.method}</p>
        <div className="integrity-row">
          <Stat value={data.releaseAcceptanceTests} label={copy.acceptance} />
          <Stat value={data.integrity.patternObservesDuringExam} label={copy.patternWrites} />
          <Stat value={data.integrity.transferProbeWrites} label={copy.transferWrites} />
          <Stat value={data.integrity.canonicalCortexCalls} label={copy.cortexCalls} />
        </div>
        <details className="bench-sources">
          <summary>{copy.sources}</summary>
          <ul>
            {data.sources.map((source) => (
              <li key={source.sha256}>
                <span>{source.file}</span>
                <code>{source.sha256}</code>
              </li>
            ))}
          </ul>
        </details>
        <a className="bench-download" href="/data/echo1-benchmark.json" download>
          {copy.download}
        </a>
      </section>
    </>
  );
}

export default function EchoResults({ language = "es" }) {
  const [cursor, setCursor] = useState(0);
  const copy = COPY[language];

  return (
    <article className="docs-body benchmark-page">
      <Evolution language={language} />
      <Results data={echo1} cursor={cursor} setCursor={setCursor} language={language} copy={copy} />
    </article>
  );
}
