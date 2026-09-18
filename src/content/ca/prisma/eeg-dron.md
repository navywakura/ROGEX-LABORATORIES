# Intenció → dron: EEG, EMG i control corporal

**Estat: 18 de setembre de 2026 · campanya exploratòria · sense resultats propis de control d'un dron.** No hi ha cap casc EEG, sensors EMG ni dron físic al laboratori. La campanya comença amb dades públiques i simulació.

> La idea de partida: pensar a pujar i que el dron pugi, a la velocitat del pensament, com si fos una extensió del sistema nerviós. Aquest document separa el que ja s'ha demostrat, el que no i com ho mesurarem.

## Resum

- **Ja s'ha pilotat un quadricòpter real amb EEG**, però amb imatgeria motora entrenada: a l'estudi de referència, «pujar» era imaginar les dues mans. Amb cinc participants, aquella tasca va assolir 1,16 bits per minut i 3,1 anells per prova de quatre minuts, davant de 12 amb teclat.
- **Hi ha rutes més ràpides, però no totes són EEG ni són accessibles.** Una persona amb tetraplegia va manejar un dron virtual amb un implant intracortical que descodificava moviments de dits. Persones sense experiència van aprendre a pilotar drons reals movent el tors. Una polsera EMG descodifica gestos i escriptura sense ajustar-se a cada persona.
- **«Pujar» pot voler dir quatre coses diferents:** intentar un moviment, imaginar-lo, triar una meta o pensar la paraula. Cadascuna es mesura i es descodifica de manera diferent.
- **La velocitat no la dona el motor de PRISMA.** La latència depèn del senyal, del processament i de la resposta que torna a la persona; no es dedueix del temps de càlcul d'un esdeveniment. Avui la latència d'extrem a extrem de RxLabs és desconeguda, perquè encara no existeix la cadena física per mesurar-la.
- **Una extensió del cos necessita un camí de tornada.** Sentir el que fa el dron, amb imatge o vibració, importa tant com enviar-li ordres.

La campanya compara aquestes rutes amb la mateixa simulació i els mateixos filtres de seguretat: PRISMA proposa intencions acotades i echoAI i echOS les filtren abans que arribin al controlador de vol.

## Quatre significats de «pujar»

| Què fa la persona | Què s'ha pogut descodificar | Què no està demostrat | Ruta de control raonable |
|---|---|---|---|
| **Intentar un moviment**, també amb paràlisi | Moviments de dits en 4 graus de llibertat amb un implant intracortical (una persona, dron virtual) | Que serveixi qualsevol zona o qualsevol tasca sense entrenament | Associar una variable motora calibrada a una intenció acotada |
| **Imaginar un moviment** | Modulació dels ritmes sensorimotors en EEG, com a LaFleur et al. | Un símbol «amunt» idèntic per a totes les persones | Selecció discreta de metes, amb una classe de repòs explícita |
| **Triar un objectiu espacial** | Objectius i imatgeria d'accions a l'escorça parietal posterior (implant, una persona, tasca instruïda) | Llegir metes lliures fora del paradigma | Proposar una destinació i deixar la trajectòria a l'autonomia |
| **Pensar la paraula** | Parla interna amb EEG: en un conjunt obert de quatre paraules, un treball de 2025 va obtenir una mitjana del 46,6 % dins de cada subjecte davant d'un atzar del 25 %, en avaluació offline | Una fiabilitat suficient per donar ordres de vol | Línia exploratòria offline; mai comandament principal |

Si la persona **mou de debò** el braç o el tors, el senyal més directe és el mateix moviment o l'activitat muscular, mesurats amb sensors inercials o EMG. Això no és «llegir el cervell», però sí una interfície corporal legítima, i avui és la ruta accessible més ràpida. Una interfície que faci servir activitat muscular s'ha d'anomenar pel que mesura.

## El que ja s'ha demostrat

| Treball | Senyal i tasca | Resultat | Límit que no s'ha d'oblidar |
|---|---|---|---|
| LaFleur et al., 2013 | EEG, imatgeria motora, 64 canals. Mà dreta → dreta; esquerra → esquerra; totes dues → pujar; res → baixar | Quadricòpter real. 1,16 bits/min; 3,1 anells per prova de 4 min davant de 12 amb teclat. Finestres espectrals de 160 ms i una actualització cada 30 ms | 5 participants. Els que no tenien experiència van entrenar de mitjana 5 h 20 min durant uns 3 mesos |
| Willsey et al., 2025 | Implant intracortical, moviments de dits en 4 graus de llibertat | 76 objectius per minut i 2,60 bits/s a la tasca de dits; després, un quadricòpter virtual per circuits d'anells | Una persona amb tetraplegia; dron virtual, no físic |
| Miehlbradt et al., 2018 | Moviments del tors | Persones sense experiència van dominar drons simulats i reals, i van superar els qui feien servir joystick | Interfície cos–màquina, no senyal cerebral directe |
| Kaifosh et al., 2025 | EMG de superfície en una polsera | 0,66 objectius/s en navegació, 0,88 gestos/s i 20,9 paraules/min escrivint, amb models que generalitzen entre persones | Activitat muscular en tasques d'ordinador, no un dron. Els seus models no són una implementació de PRISMA |
| Chen et al., 2015 | EEG amb estímuls visuals que parpellegen (SSVEP) | Lletreig en línia amb fins a 5,32 bits/s | Cal mirar els estímuls: és control per atenció visual, no pel pensament |

Aquests resultats no se sumen ni es comparen directament: cadascun mesura una tasca diferent, en la seva pròpia unitat. El que sí que mostren és que **el paradigma canvia el resultat més que el sensor**. El mateix EEG passa d'1,16 bits per minut en un vol amb imatgeria motora a diversos bits per segon lletrejant amb estímuls visuals.

Tres resultats més marquen límits:

- **No totes les persones controlen la interfície a la primera.** Vidaurre i Blankertz estimaven entre un 15 i un 30 % d'usuaris amb qui el control per ritmes sensorimotors no funcionava. El seu propi treball mostra que adaptar alhora persona i màquina en recupera una part.
- **Distingir una ordre de «no estic ordenant res» és difícil.** En mode asíncron, un detector clàssic trobava al voltant del 40 % dels moviments amb un 1 % de falsos positius. La mètrica que importa són les activacions falses per minut en repòs.
- **Generalitzar és difícil.** MOABB va comparar algorismes en 12 conjunts oberts amb més de 250 subjectes: molts mètodes validats en un conjunt no generalitzen fora d'aquest.

## Què vol dir «a la velocitat del pensament»?

No hi ha una única velocitat: conducció nerviosa, preparació, decisió, moviment i percepció són processos diferents. Com a referència, en adults de 18 a 25 anys el temps mitjà de reacció visual de cada persona va tenir una mediana de 243 ms en una tasca simple i de 382 ms en triar entre quatre respostes. Aquestes xifres inclouen decidir i moure's, i no són una constant universal.

Perquè un dron se senti part del cos, el decisiu és el **bucle complet**:

```text
intenció → senyal (EEG · EMG · tors · implant)
  → evidència suficient → descodificador → proposta o abstenció
  → gate d'echoAI → Intent ABI → safety gate d'echOS
  → ràdio → pilot automàtic → primer moviment mesurable del dron
  → càmera o sensor → pantalla o vibració → percepció de la persona
```

Tres idees guien la campanya:

- **Una finestra curta no fa una interfície ràpida.** LaFleur va fer servir finestres EEG de 160 ms, però prendre una decisió fiable, evitar ordres falses i tancar el bucle requereix força més temps. Cal mesurar la resposta a un canvi, no deduir-la de la mida de la finestra.
- **El coll d'ampolla és al senyal i al retorn, no al càlcul.** Com a exemple aritmètic, accelerar un classificador de 3 a 1 ms estalvia 2 ms; escurçar l'acumulació d'evidència de 50 a 25 ms n'estalvia 25, sempre que no augmentin les ordres falses.
- **Agència no és pertinença corporal.** En experiments de laboratori amb mans artificials, els desfasaments per sota d'uns 300 ms afavoreixen sentir la mà com a pròpia, i els retards creixents redueixen tant la sensació d'agència com la de pertinença. No és un llindar universal per a drons, però explica per què importen els bucles curts.

**Avui la latència d'extrem a extrem de RxLabs és desconeguda.** El primer objectiu és mesurar-la per trams, amb marques de temps des del sensor d'origen.

## Què té avui PRISMA i què li falta

**Existeix:**

- Lectura de GDF verificada amb registres reals de BCI Competition IV 2a.
- Filtres causals, referència, detecció de canals dolents, ICA, temps-freqüència i ERD/ERS.
- El motor Rust per esdeveniments (modulació delta → LIF → STDP), amb entrada en directe per TCP, un pont LSL i un generador sintètic.

**Falta, per ordre d'impacte en latència i seguretat:**

1. **Marca de temps d'origen.** L'entrada TCP marca cada mostra en rebre-la. Calen la marca del sensor, un número de seqüència, el registre de pèrdues i marcadors.
2. **Repòs i abstenció.** Una classe «no estic ordenant», caducitat de cada proposta i traces fins als dos gates, mesurant activacions falses per minut.
3. **Ingesta multimodal.** EEG, EMG i sensors inercials, cadascun a la seva freqüència i sincronitzats de manera documentada.
4. **Descodificadors de referència.** Per a EEG, CSP/FBCSP amb LDA i geometria de Riemann; per a EMG, característiques causals amb classificació o regressió; per a dades intracorticals, ridge i Kalman. La xarxa LIF/STDP de PRISMA competeix amb ells; el seu avantatge no es dona per descomptat.
5. **Avaluació honesta.** Separació per dies i per persones, entrenament només amb el passat i replay a temps real.

El panell de límits de PRISMA continua dient el mateix: *«NO llegeix el pensament ni descodifica contingut mental.»*

## Arquitectura i autoritat

PRISMA, echoAI i echOS continuen sent línies separades. La campanya defineix la costura entre elles:

```text
sensor → PRISMA · qualitat · descodificació · abstenció
  → intenció candidata → gate d'echoAI · OK · MODIFY · BLOCK
  → Intent ABI d'echOS (v1, 72 B) → safety gate d'echOS
  → adaptador → controlador de vol (PX4 o el firmware del Crazyflie)
```

Regles de disseny:

1. **El senyal proposa; mai no ordena.** La sortida de PRISMA és una proposta més, com les del rellotge lent d'echoAI. Decideix el gate, i la [Intent ABI d'echOS](/ca/docs/echos/arquitectura) no té camps per a motors.
2. **La persona tria què; l'autonomia decideix com.** «Pujar» s'expressa com un APPROACH a un punt mig metre per sobre, amb límit de velocitat i caducitat. L'autonomia local estabilitza i evita obstacles sense esperar la següent decisió humana.
3. **Cap canvi a l'ABI per començar.** Si les mesures mostren que encadenar metes no n'hi ha prou per a un control continu, s'estudiarà en un disseny a part una consigna de velocitat acotada: marc de referència, velocitat i acceleració màximes, durada i caducitat, sense PWM i amb els dos gates.
4. **Repòs explícit i HOLD com a resposta per defecte**, sabent que HOLD no n'hi ha prou si el dron perd la seva posició. La pèrdua de localització, d'enllaç o d'un sensor necessita una contingència validada.
5. **Cap LLM al bucle.** Un model de llenguatge pot explicar resultats, però no descodificar ni donar ordres.
6. **Els filtres limiten conseqüències; no llegeixen la ment.** Una ordre equivocada però dins dels límits pot passar els dos gates. El que és defensable és que les barreres limiten certes conseqüències sota supòsits comprovats, no que cap error de descodificació pugui arribar al vol.
7. **Els certificats no s'hereten.** Els verds d'[ECHO-3](/ca/docs/echoai/ruta) no validen el control per EEG, EMG ni tors.

Més endavant es pot estudiar un canal de correcció amb potencials d'error: el cervell produeix una resposta característica quan veu que la màquina s'equivoca. Aquesta resposta arriba després de l'error, així que serveix per desfer una ordre, no com a barrera davant d'una col·lisió.

## El camí de tornada

Una extensió del sistema nerviós no només envia ordres: també sent. En un estudi amb una persona amb tetraplegia, afegir tacte mitjançant estimulació intracortical va reduir a la meitat el temps d'una tasca amb braç robòtic, d'una mediana de 20,9 s a 10,2 s. RxLabs no proposa implants. El seu primer retorn serà visual i hàptic no invasiu, amb vibracions que distingeixin tres missatges:

- **intenció rebuda**, confirmada a l'instant en local;
- **intenció acceptada** pels gates;
- **moviment observat** pels sensors del dron, amb l'edat de la dada visible.

Una vibració de «fet» abans que el dron es mogui mentiria sobre el seu estat. Per això cada experiment mesurarà per separat el rendiment, la sensació d'agència («ho he causat jo») i la de pertinença («el sento meu»).

## Escala de proves

Cada fase congela les seves mètriques, llindars i regles d'aturada abans de començar, i publica els seus resultats, també els negatius. La campanya és independent del programa de validació de PRISMA. Els noms de fase es mantenen; des d'EEG-1, cada fase compara modalitats.

| Fase | Què es fa | Què ha de demostrar | Necessita |
|---|---|---|---|
| **EEG-0 · Contracte** | Format de la intenció proposada, marques de temps per tram, mètriques, controls i regles d'aturada | Un document congelat abans de veure dades | Res |
| **EEG-1 · Dades públiques** | Intracortical: FALCON H1 (CC BY 4.0). EEG: PhysioNet EEGMMIDB i BCI Competition IV 2a, sense redistribuir-lo. EMG: el conjunt obert de Kaifosh et al., d'ús no comercial. Referències clàssiques davant de PRISMA | Reproduir les referències, amb separació per dies, abans d'afirmar res sobre PRISMA | Dades públiques |
| **EEG-2 · Replay causal** | Reproduir registres a temps real per l'entrada de PRISMA, amb pèrdues, jitter, paquets vells i errors injectats | Latència per tram, activacions falses per minut quan les dades ho permetin i capacitat de cancel·lar | Marca de temps d'origen i marcadors |
| **EEG-3 · Bucle simulat** | Intencions descodificades → gates → PX4 SITL, amb retorn simulat | Cap camí que eviti els gates i traces completes de cada ordre | Tot l'anterior; sense maquinari |
| **EEG-4 · Persones, no invasiu** | Tors/IMU i EMG comparats amb la mateixa simulació, límits i retorn; EEG per triar metes | Latència física mesurada per trams, activacions falses, fatiga, agència i estabilitat entre dies | Sensors, consentiment informat i aprovació ètica |
| **EEG-5 · Dron contingut** | Crazyflie en un recinte tancat mitjançant un adaptador propi (fa servir el firmware de Bitcraze i CRTP, no PX4), amb pilot de seguretat. L'X500 amb PX4 serà una campanya a part | El mateix que EEG-4 amb un cos real, sense heretar resultats de la simulació | EEG-4 tancat i maquinari |

**Controls obligatoris:**

- Etiquetes barrejades: el resultat ha de caure al nivell de l'atzar.
- **EMG i EOG registrats al costat de l'EEG**, per detectar si el descodificador aprofita músculs o ulls en lloc de l'escorça.
- Separació per dies i per persones. Mai finestres del mateix assaig repartides entre entrenament i prova.
- Mètriques per persona i distribucions completes (P50, P95, P99 i pitjors casos), no només mitjanes. Els temps esgotats compten com a errors.

**Regles d'aturada:** fuita de dades, marques de temps desconegudes darrere d'una afirmació temporal, llicència insuficient, rendiment que desapareix entre dies o qualsevol camí que eviti els gates. Si PRISMA no aporta res davant de les referències clàssiques, el descodificador serà clàssic i així es dirà.

## Maquinari

Res d'això no és encara al laboratori.

- **EEG:** cal un muntatge amb C3, Cz i C4, les posicions habituals de la imatgeria motora. Un casc amb elèctrodes només al front i darrere les orelles, com Muse, no les cobreix.
- **EMG i tors:** sensors de superfície i unitats inercials. Són la primera ruta amb persones.
- **BrainChip AKD1500:** coprocessador neuromòrfic candidat (arquitectura Akida 1.0) per a un model compatible, sempre amb una CPU com a referència. Que PRISMA faci servir LIF/STDP no fa portable la seva xarxa: caldrà convertir-la, compilar-la i mesurar la latència i l'energia del sistema complet. No es publicaran xifres de fabricant com a resultats propis.
- **Implants:** només dades públiques. Qualsevol treball amb persones implantades es faria amb un grup clínic autoritzat; RxLabs no proposa implantar persones sanes per pilotar.

## Ètica, dades i llei

- **Dades cerebrals i musculars:** RGPD i Carta de Drets Digitals d'Espanya (article XXVI). Minimització, pseudonimització i cap reutilització per inferir salut o identitat.
- **Productes sanitaris:** qualsevol via invasiva o d'estimulació entra en el Reglament (UE) 2017/745 i requereix un soci clínic i un comitè d'ètica.
- **Intel·ligència artificial:** el Reglament (UE) 2024/1689 s'aplica segons la finalitat; fer recerca no n'eximeix de tot.
- **Vol:** Reglament (UE) 2019/947 i Reial decret 517/2024. En la categoria oberta, volar amb ulleres FPV exigeix un observador visual.
- **Doble ús:** el control neural de drons interessa al sector militar. RxLabs és civil: no accepta encàrrecs d'armament ni de selecció d'objectius, i revisa qualsevol exportació segons el Reglament (UE) 2021/821.

## Què comptaria com a èxit

No «controlar un dron amb la ment». L'èxit seria publicar, amb dades i controls:

- quina ruta (tors, EMG, EEG o una combinació) permet donar ordres fiables, i a quina fracció de persones;
- la latència mesurada de cada tram, des del sensor fins al que percep la persona;
- quantes activacions falses per minut produeix cada ruta en repòs;
- si la representació per esdeveniments de PRISMA aporta alguna cosa davant de les referències clàssiques;
- i que cap ordre arriba al controlador de vol sense passar pels dos gates.

Un resultat negatiu ben mesurat també respon la pregunta.

## Fonts

**Control de drons i descodificació**

- LaFleur K. et al. (2013). *Quadcopter control in three-dimensional space using a noninvasive motor imagery-based brain–computer interface.* J. Neural Eng. 10(4):046003. [doi:10.1088/1741-2560/10/4/046003](https://doi.org/10.1088/1741-2560/10/4/046003) · [text complet](https://pmc.ncbi.nlm.nih.gov/articles/PMC3839680/)
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

**Temps, cos i retorn**

- Deary I. J., Liewald D., Nissan J. (2011). *A free, easy-to-use, computer-based simple and four-choice reaction time programme: the Deary-Liewald reaction time task.* Behav. Res. Methods 43:258–268. [doi:10.3758/s13428-010-0024-1](https://doi.org/10.3758/s13428-010-0024-1)
- Shimada S., Fukuda K., Hiraki K. (2009). *Rubber hand illusion under delayed visual feedback.* PLoS ONE 4:e6185. [doi:10.1371/journal.pone.0006185](https://doi.org/10.1371/journal.pone.0006185)
- Kalckert A., Ehrsson H. H. (2012). *Moving a rubber hand that feels like your own: a dissociation of ownership and agency.* Front. Hum. Neurosci. 6:40. [doi:10.3389/fnhum.2012.00040](https://doi.org/10.3389/fnhum.2012.00040)
- Shibuya S., Unenaka S., Ohki Y. (2018). *The relationship between the virtual hand illusion and motor performance.* Front. Psychol. 9:2242. [doi:10.3389/fpsyg.2018.02242](https://doi.org/10.3389/fpsyg.2018.02242)
- Flesher S. N. et al. (2021). *A brain-computer interface that evokes tactile sensations improves robotic arm control.* Science. [doi:10.1126/science.abd0380](https://doi.org/10.1126/science.abd0380)

**Dades, maquinari i normes**

- FALCON H1, DANDI 000954, CC BY 4.0. [dandiarchive.org](https://dandiarchive.org/dandiset/000954) · [benchmark FALCON](https://snel-repo.github.io/falcon/datasets.html)
- *EEG Motor Movement/Imagery Dataset* (Schalk et al., BCI2000), PhysioNet. [physionet.org](https://physionet.org/content/eegmmidb/1.0.0/)
- BCI Competition IV. [bbci.de](https://www.bbci.de/competition/iv/)
- *Generic neuromotor interface*, dades i codi de Kaifosh et al. [github.com/facebookresearch](https://github.com/facebookresearch/generic-neuromotor-interface)
- Akida 1.0, documentació de BrainChip. [doc.brainchipinc.com](https://doc.brainchipinc.com/user_guide/hardware/1.0.html)
- Firmware del Crazyflie i CRTP, Bitcraze. [bitcraze.io](https://www.bitcraze.io/documentation/repository/crazyflie-firmware/master/functional-areas/crtp/crtp_platform/)
- Reglaments (UE) [2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj), [2017/745](https://eur-lex.europa.eu/eli/reg/2017/745/oj), [2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), [2019/947](https://eur-lex.europa.eu/eli/reg_impl/2019/947/oj) i [2021/821](https://eur-lex.europa.eu/eli/reg/2021/821/oj); [Reial decret 517/2024](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2024-11377); [EASA, vol FPV](https://www.easa.europa.eu/en/light/topics/drone-racing-and-flying-drone-goggles-first-person-view-fpv)
- Carta de Drets Digitals, Govern d'Espanya (2021). [espanadigital.gob.es](https://espanadigital.gob.es/lineas-de-actuacion/carta-de-derechos-digitales)

— R.N.
