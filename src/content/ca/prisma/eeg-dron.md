# Campanya oberta: pot PRISMA guiar un dron amb EEG?

**Estat: 18 de setembre de 2026 · campanya oberta · encara sense resultats propis.** No hi ha cap casc EEG ni cap dron físic al laboratori. Aquest document fixa la pregunta, el que ja se sap, el que no i com ho mesurarem.

> La idea de partida: mesurar EEG amb PRISMA, traduir-lo a un patró que echoAI i echOS entenguin i que el dron actuï en conseqüència. Per exemple, pensar a pujar i que el dron pugi. O aixecar el braç.

## Resum honest

- **Sí que s'ha mogut un dron amb EEG no invasiu.** Però no llegint el pensament «pujar»: la persona aprèn a modular els seus ritmes sensorimotors imaginant moviments, i cada patró s'assigna a una ordre. A l'estudi de referència, «pujar» era imaginar les dues mans alhora.
- **És lent.** En aquest estudi, el vol real va transmetre 1,16 bits per minut, una mica més d'una decisió sí/no perfecta per minut. Els pilots van passar per 3,1 anells a cada prova de quatre minuts; amb teclat, 12,0.
- **No funciona igual per a tothom.** S'estima que entre el 15 i el 30 % dels usuaris no aconsegueix controlar aquest tipus d'interfície.
- **«Pensar a pujar» no es pot descodificar avui amb fiabilitat.** En un conjunt obert de quatre paraules de parla interior (*amunt, avall, esquerra, dreta*), un treball de 2025 arriba al 46,6 % per subjecte, amb un atzar del 25 %.
- **La latència de microsegons de PRISMA no és la latència de la interfície.** Una decisió d'imaginació motora necessita finestres d'EEG d'un o dos segons. El temps el marca la fisiologia, no el motor.

Per això la campanya no intenta pilotar un dron amb la ment. Intenta una cosa més estreta i comprovable: **que PRISMA proposi poques intencions discretes, lentes i fiables, i que un error del descodificador no es pugui convertir mai en un error de vol.**

## Tres coses diferents que sovint es barregen

| Què fa la persona | Què mesura l'EEG | Serveix per a un dron? |
|---|---|---|
| **Pensa «pujar»** (contingut mental, parla interior) | Cap patró específic i estable al cuir cabellut | Avui no. A *Thinking out loud* (10 participants, 136 canals), un treball de 2025 obté un 46,6 % per subjecte i un 32 % entre subjectes amb quatre paraules; l'atzar és el 25 %. Les revisions assenyalen que la majoria d'estudis són offline i síncrons. |
| **Imagina moure mans o peus** (imaginació motora) | Desincronització dels ritmes mu i beta (8–30 Hz) sobre l'escorça sensorimotora: C3, Cz, C4 | Sí, amb entrenament i poques classes. És la via demostrada. L'assignació a ordres és arbitrària: «les dues mans = pujar». |
| **Aixeca el braç de debò** (moviment real) | Potencial de preparació uns 500 ms abans del moviment, desincronització més intensa i activitat muscular que contamina el senyal | Tècnicament sí, però si el braç es mou, un sensor inercial o un EMG el mesuren abans, millor i més barat. L'EEG només té sentit si la persona no es pot moure, o com a comparació. |

Hi ha una quarta via, els paradigmes evocats (SSVEP, P300): la persona mira estímuls que parpellegen i l'EEG detecta a quin para atenció. Assoleixen precisions altes —segons la UTS, un sistema desenvolupat amb l'exèrcit australià va controlar un robot quadrúpede amb fins a un 94 %—, però depenen de mirar una pantalla o unes ulleres de realitat augmentada. És control per atenció visual, no pel pensament.

## El que ja s'ha demostrat

| Treball | Paradigma | Resultat | Cost o límit |
|---|---|---|---|
| LaFleur et al., 2013 | Imaginació motora, 64 canals. Mà dreta → dreta; esquerra → esquerra; totes dues → pujar; no imaginar res → baixar. Avanç automàtic a 0,69 m/s | 5 subjectes; 79,2 % dels objectius vàlids en grup, fins a un 90,5 % individual | 1,16 bits/min; 3,1 anells per prova de 4 min davant de 12,0 amb teclat. Els subjectes sense experiència van entrenar de mitjana 5 h 20 min en entorns virtuals durant uns 3 mesos abans de volar |
| Duan et al., 2019 | Híbrid: imaginació motora per girar, SSVEP amb LED per pujar i baixar, parpelleig per canviar de mode | Calibratge: SSVEP 83,44 %, imaginació motora 80,45 %, parpelleig 99,07 %. Tasca de vol complexa: 86,5 % | 1,69 bits/min davant de 3,90 amb comandament. Finestres d'1,5 s i una ordre per segon; fatiga mental |
| BCI Competition IV, conjunt 2a | 4 classes d'imaginació motora, 9 subjectes, 22 canals, 250 Hz | Guanyador (FBCSP): kappa 0,57, on l'atzar és 0 | Referència offline, sense vol |
| Faisal et al., 2023 (UTS) | SSVEP amb elèctrodes secs de grafè i ulleres de realitat augmentada | Fins a un 94 % controlant un robot quadrúpede, segons la UTS | Cal mirar estímuls que parpellegen |

Tres resultats més fixen els límits:

- **Usuaris que no aconsegueixen controlar-la.** Vidaurre i Blankertz estimen que el control no funciona per a entre un 15 i un 30 % dels usuaris. El seu propi treball mostra que adaptar alhora usuari i màquina pot recuperar-ne alguns.
- **Saber quan la persona vol donar una ordre.** En mode asíncron el sistema ha de distingir una ordre de «no estic ordenant res». Un detector clàssic d'aquest tipus trobava al voltant del 40 % dels moviments amb un 1 % de falsos positius. Si aquest 1 % es mesura per decisió i el sistema decideix diverses vegades per segon, es tradueix en diverses falses alarmes per minut.
- **Generalització.** MOABB va comparar algorismes en 12 conjunts oberts amb més de 250 subjectes: molts mètodes validats en un conjunt no generalitzen fora d'aquest.

## Què té avui PRISMA per a això

**Existeix:**

- Lectura de GDF verificada amb registres reals de BCI Competition IV 2a: 288 èpoques per sessió, 72 per classe.
- Filtres causals, referència, detecció de canals dolents, ICA, temps-freqüència i ERD/ERS, que és la mesura base de la imaginació motora.
- El motor Rust per esdeveniments (modulació delta → LIF → STDP), amb entrada en directe per TCP, un pont per a LSL i un generador sintètic.

**No existeix:**

- **Cap descodificador BCI.** Ni CSP/FBCSP, ni geometria de Riemann, ni LDA, ni una avaluació a l'estil MOABB.
- **Rellotge d'origen en directe.** El protocol TCP actual posa la marca de temps en rebre cada mostra: no distingeix retard, pèrdua o silenci, i no transporta marcadors.
- **Maquinari.** No hi ha cap casc EEG ni cap dron físic al laboratori.

El mateix motor manté una línia al seu panell de límits que aquesta campanya no canvia: *«NO llegeix el pensament ni descodifica contingut mental.»*

## Arquitectura proposada: un contracte, no una fusió

PRISMA, echoAI i echOS continuen sent línies separades. La campanya defineix la costura entre elles:

```text
EEG (conjunt públic reproduït com si fos en directe)
  → PRISMA · QC · filtre causal · descodificador · probabilitat per classe
  → evidència acumulada · llindar · temps de permanència · classe «repòs»
  → proposta d'intenció: classe, confiança, finestra causal, caducitat
  → gate d'echoAI · OK · MODIFY · BLOCK
  → Intent ABI d'echOS · HOLD · APPROACH · AVOID · RETURN_HOME · LAND · ABORT
  → safety gate d'echOS → PX4 (estabilització i failsafes)
```

Regles de disseny:

1. **L'EEG proposa; mai no ordena.** La sortida de PRISMA és una proposta més, com les del rellotge lent d'echoAI. El gate decideix, i la [Intent ABI d'echOS](/ca/docs/echos/arquitectura) no té camps per a motors.
2. **Per defecte, HOLD.** Sense prou evidència, el dron es manté. La classe «repòs» és obligatòria.
3. **Poques ordres i d'alt nivell.** «Pujar» s'expressa com un APPROACH a un punt mig metre per sobre, amb límit de velocitat i caducitat. La persona tria *què* fer; l'autonomia decideix *com* volar.
4. **Autonomia compartida.** Mentre arriba una decisió, el dron continua recorrent distància: amb els 0,69 m/s de LaFleur i una finestra d'1,5 s com la de Duan, una mica més d'un metre. Evitar obstacles i respectar la geotanca correspon a echoAI, echOS i PX4, no a l'EEG.
5. **Cap LLM al bucle.** Igual que a echoAI i a PRISMA, un model de llenguatge pot explicar resultats, però no descodificar ni donar ordres.
6. **Els certificats no s'hereten.** Els verds d'[ECHO-3](/ca/docs/echoai/ruta) no validen el control per EEG, i la latència de microsegons de PRISMA no és la latència de la interfície.

Més endavant es pot estudiar un veto basat en potencials d'error: el cervell produeix una resposta característica quan veu que la màquina s'equivoca, i més d'una dècada de treballs mostra que es pot detectar en un sol assaig. Serviria per desfer una ordre mal descodificada, no per donar-ne.

## Pla per fases

Cada fase congela les seves mètriques, llindars i regles d'aturada abans de començar, i publica els seus resultats, també els negatius.

| Fase | Què es fa | Què ha de demostrar | Necessita |
|---|---|---|---|
| **EEG-0 · Contracte** | Format de la proposta d'intenció, mètriques, controls i regles d'aturada | Un document congelat abans de veure cap dada | Res |
| **EEG-1 · Offline** | Descodificació sobre BCI IV 2a (4 classes, 9 subjectes) i PhysioNet EEGMMIDB (109 subjectes, moviment real i imaginat; objectius amunt i avall amb tots dos punys o tots dos peus). Referències: CSP+LDA, FBCSP i Riemann; PRISMA com a braç experimental | Reproduir les referències publicades abans d'afirmar res sobre PRISMA, i mesurar si les característiques per esdeveniments aporten alguna cosa | Dades públiques |
| **EEG-2 · Pseudo-online** | Reproduir registres continus per l'entrada en directe de PRISMA, de manera causal | Latència de decisió, falses activacions per minut en repòs i temps fins a l'ordre correcta | Rellotge d'origen i marcadors al protocol |
| **EEG-3 · Bucle simulat** | Les intencions descodificades del replay entren al gate d'echoAI, a echOS i a PX4 SITL | Tasques completades davant del teclat, ordres bloquejades o corregides pel gate i **zero ordres insegures a PX4** | L'anterior; sense maquinari |
| **EEG-4 · Persona real** | Calibratge i control en línia, encara en simulació | Rendiment per persona, incloses les que no aconsegueixin controlar-la | Casc amb cobertura sensorimotora, consentiment informat i aprovació ètica |
| **EEG-5 · Dron en gàbia** | Vol físic amb pilot de seguretat i interruptor de tall | El mateix que EEG-3, amb un cos real | DRONE-3 tancat i maquinari; sense data |

**Controls obligatoris des d'EEG-1:**

- Etiquetes barrejades: el resultat ha de caure al nivell de l'atzar.
- **Control d'artefactes:** un classificador que només vegi canals frontals i temporals, on dominen ulls i músculs. Si rendeix gairebé igual que el que fa servir C3, Cz i C4, el descodificador està llegint artefactes i no l'escorça motora.
- Validació entre sessions i entre subjectes. Mai finestres del mateix assaig repartides entre entrenament i prova.
- Mètriques per persona, no només mitjanes: kappa, exactitud, ITR de Wolpaw i quants subjectes superen el llindar d'atzar significatiu.

**Regles d'aturada:**

- Si no es reprodueixen les referències publicades, s'atura la campanya i es corregeix el pipeline.
- Si les característiques de PRISMA no aporten res davant de CSP o Riemann amb la mateixa informació, el descodificador serà clàssic i així es dirà. El valor de PRISMA quedaria en la infraestructura: control de qualitat, temps real i traçabilitat.
- Si les falses activacions en repòs no baixen del llindar congelat, no hi ha bucle tancat.

## Maquinari per a les fases amb persones

Un casc de consum amb quatre elèctrodes al front i darrere les orelles (com Muse: TP9, AF7, AF8 i TP10) no cobreix l'escorça sensorimotora i no serveix per a imaginació motora. Cal un muntatge amb C3, Cz, C4 i els seus veïns. Les plaques obertes de 8 a 16 canals basades en l'ADS1299, com OpenBCI Cyton amb Daisy, són un punt de partida raonable, preferiblement amb elèctrodes de gel. L'elecció es farà a EEG-4, no abans.

## Ètica i dades

L'EEG són dades sobre processos cerebrals. La Carta de Drets Digitals d'Espanya (2021, article XXVI) demana garantir-ne la confidencialitat i la seguretat, el control de cada persona sobre la seva identitat i la seva autodeterminació. En aquesta campanya:

- Les fases 0 a 3 fan servir només conjunts públics, sota les seves llicències.
- Qualsevol registre propi exigirà consentiment informat, aprovació d'un comitè d'ètica i minimització de dades.
- PRISMA no és un producte sanitari i aquesta campanya no té finalitats clíniques.
- Qualsevol vol físic es farà en gàbia, amb pilot de seguretat i d'acord amb la normativa.

## Què comptaria com a èxit

No «controlar un dron amb la ment». L'èxit seria publicar, amb dades i controls:

- quina fracció de persones aconsegueix donar dues o tres ordres fiables;
- quant de temps triguen i amb quantes falses activacions per minut;
- si la representació per esdeveniments de PRISMA aporta alguna cosa o no;
- i que, en simulació, cap ordre mal descodificada arriba a PX4 sense passar pel gate.

Un resultat negatiu ben mesurat també respon la pregunta.

## Fonts

- LaFleur K. et al. (2013). *Quadcopter control in three-dimensional space using a noninvasive motor imagery-based brain–computer interface.* J. Neural Eng. 10(4):046003. [doi:10.1088/1741-2560/10/4/046003](https://doi.org/10.1088/1741-2560/10/4/046003) · [text complet](https://pmc.ncbi.nlm.nih.gov/articles/PMC3839680/)
- Duan X. et al. (2019). *Quadcopter flight control using a non-invasive multi-modal brain computer interface.* Front. Neurorobot. 13:23. [doi:10.3389/fnbot.2019.00023](https://doi.org/10.3389/fnbot.2019.00023)
- BCI Competition IV, resultats del conjunt 2a. [bbci.de](https://www.bbci.de/competition/iv/results/)
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
- Carta de Drets Digitals, Govern d'Espanya (2021). [espanadigital.gob.es](https://espanadigital.gob.es/lineas-de-actuacion/carta-de-derechos-digitales)

— R.N.
