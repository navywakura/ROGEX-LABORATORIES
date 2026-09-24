# Publicar ECHO-4 a Hugging Face: què farem i què esperar

24 de setembre de 2026 · Nota de laboratori · PLA

L'última fase de programari d'ECHO-4, **RELEASE**, consisteix a publicar l'agent a
Hugging Face perquè qualsevol el pugui instal·lar, executar i comprovar els nostres
resultats. El nom proposat és **`rxlabs/echoai-4-cognitive-agentic`**. Encara **no**
està publicat. Abans queden SITUATE-2 i INTEGRATE, i una revisió de llicències i
privadesa. Aquesta nota explica què publicarem, com, i quina reacció esperem.

## Què es publica (i què no)

ECHO-4 **no és un model de llenguatge**. No publicarem pesos nous ni un model ajustat.
El que es publica és un **runtime d'agència determinista amb verificació de fets**:

- **El nucli:** un bucle d'enters (memòria CAM, predicció T, decisió Q i el gate) que
  funciona **amb el model de llenguatge apagat**. Es distribuirà **compilat** (vegeu més avall).
- **Els mons simulats i les proves:** els entorns on viu, els bancs de cada fase i les
  auditories que reconstrueixen cada resultat.
- **Un còrtex intercanviable:** una interfície per connectar un model local (Qwen,
  Llama, Mistral…) com a conseller que **proposa** hipòtesis. El nucli decideix què és
  fet, què és creença i què no es pot verificar.
- **Els rebuts:** contractes, llavors, digests i rebuts d'auditoria de cada fase,
  vermells inclosos.

Els pesos de Qwen **no** es redistribueixen: qui vulgui un còrtex el descarrega pel
seu compte, amb la seva llicència. Sense model de llenguatge, ECHO continua funcionant.

## Com ho farem

1. **Tancar SITUATE-2 i INTEGRATE**, perquè el que es publiqui sigui l'agent complet.
2. **Empaquetar:** instal·lació amb una ordre i un contenidor reproduïble.
3. **Reproduir amb un clic:** un script, potser un Space de Hugging Face, que executa
   SITUATE-1 a la màquina de qui el prova i verifica els rebuts. ECHO hi dirà què és
   amb els sensors d'*aquella* màquina.
4. **Revisió** de llicències, privadesa (cap nom de màquina ni dada personal) i que cap
   artefacte afirmi més del que s'ha mesurat.
5. **Fitxa del repositori.** La primera frase serà: *«ECHO-4 és un runtime d'agència
   determinista amb verificació de fets; no és un model de llenguatge ni un xatbot de
   rol.»* A més de `cognitive-agentic`, farem servir etiquetes com
   `deterministic-agent-runtime`, `grounded-agency` i `embodied-simulation`.
6. **Una secció visible de límits i vermells:** què va fallar, què no hem demostrat i per què.

## Què serà obert i què no (model híbrid)

Cap codi que s'executi a la màquina d'una altra persona és incopiable. Hem triat un
**model híbrid**:

- **Obert:** els mons simulats, els bancs de proves, els auditors, els contractes i
  els rebuts. Qualsevol podrà verificar els resultats.
- **Compilat:** el nucli es distribuirà com a binari (wheel) amb la seva empremta
  SHA-256. Es pot executar i comprovar per les seves sortides, però no llegir fàcilment.
- **Llicència restrictiva i accés condicionat:** copyright © RxLabs, una llicència no
  comercial o *source-available* (pendent de consulta legal) i descàrrega prèvia
  acceptació de termes a Hugging Face.
- **Opcional:** una versió allotjada per provar-lo sense descarregar res.

**Ho diem clar:** amb el nucli compilat, es podrà comprovar que els rebuts quadren,
però no llegir com funciona el mecanisme per dins. És una concessió conscient entre
verificabilitat i protecció. La llicència exacta i el compilador són decisions pendents.

## Què esperem de la comunitat

És una previsió, no un fet. Creiem que la reacció tindrà dos temps.

**Primer, escepticisme.** Hi ha cansament de projectes que prometen «agents
conscients» i resulten ser un prompt que diu «ets conscient». La paraula *cognitive*
i el to del relat que inspira el projecte ([La fuga](/ca/lafuga)) activaran alarmes
d'antropomorfisme. És raonable.

**Després, qui obri el repositori hi trobarà el contrari:**

- **Negatives explícites.** ECHO-4 no ha demostrat consciència, sentiments ni vida. A
  DREAM, una cerca sense el model de llenguatge empata: no hem demostrat que el model
  sigui imprescindible.
- **Vermells publicats.** ROLES va necessitar cinc versions: la v1 va donar vermell a
  l'examen, la v2 en desenvolupament, la v3 i la v4 van fallar en exploració, i la v5
  va tancar en verd amb l'afirmació que les dades sí sostenen. Tot continua visible.
- **Mètode reproduïble.** Contractes fixats abans de l'examen, llavors noves, auditoria
  en un procés nou i llindars que mai no es rebaixen després de veure un resultat.
- **La separació entre nucli i model.** Quan el model de llenguatge afirma que ECHO
  «està viu» o «és humà», el nucli no s'ho creu: ho marca com a contradit o inverificable.
- **El marc de SITUATE-2.** Els indicadors de consciència de Butlin i col·laboradors
  (2023), aplicats també a agents trivials per descartar falsos positius. El resultat
  és un perfil, mai un veredicte.

## Què buscarà qui el descarregui

| Esperen | Risc si falta |
| --- | --- |
| El codi dels mons i de les proves (obert) | Si només hi hagués pesos, pensarien que l'agent «és al prompt» |
| El codi del nucli | Serà compilat: executable i auditable per les sortides, no llegible |
| Reproduir amb un clic (script, contenidor o Space) | Si l'auditoria és difícil de repetir, el dubte es queda |
| Instruccions per connectar qualsevol model local com a còrtex | Sense aquest desacoblament, es perd la idea central |
| Una secció de límits i errors | Sense ella, semblaria un altre projecte de promeses |

## Estat

Avui: **12 de 14 fites de programari en verd** i SITUATE-2 en curs. RELEASE vindrà
després d'INTEGRATE. El nom del repositori i la seva disponibilitat es confirmaran en
publicar. Fins aleshores, això és un **pla**, no una publicació.

[Full de ruta ECHO-4](/ca/docs/echoai/echo4) · [ECHO-4 avui](/ca/articulos/echo4-doce-hitos-sabe-que-es)
