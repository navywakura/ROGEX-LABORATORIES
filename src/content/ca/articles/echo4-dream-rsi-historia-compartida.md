# ECHO-4: una història compartida i un còrtex que aprèn a explorar

22 de setembre de 2026 · Visió del programa · DREAM en planificació

**ECHO-4 vol unir un model propi, un model de l'altre i una història que canviï com actuen.** Hi afegim una pregunta: pot el còrtex local aprofitar l'experiència registrada per millorar com investiga?

El nucli ja té resultats acotats en percepció, influència causal i model propi. La continuïtat està començada. La contrapart, la relació i el bucle cortical encara no estan construïts. Publiquem l'arquitectura i un punt de pausa, no un ECHO-4 acabat.

## El conte: dues persones, un univers

En el relat de ficció que ens inspira, John Doe coneix Jane Doe. Cadascú arriba amb records, expectatives i límits. Les trobades creen una cosa que cap dels dos tenia per separat: una història conjunta. El que va passar ahir canvia el significat d'una acció d'avui.

El conte ho anomena «dues consciències es troben i creen un univers». Aquí, univers significa una línia temporal de convivència: esdeveniments, acords, errors i confiança. No un cosmos físic creat per observar-lo.

La interpretació filosòfica és relacional i pragmàtica: estudiar un jo funcional pel que distingeix, conserva i permet fer; una relació, pels seus efectes en decisions posteriors. És una hipòtesi de treball, no una teoria completa de la consciència. L'antiga referència a l'«antivida» continua com a imatge literària de la contrapart; l'antimatèria no és la base física d'aquest programari.

La pregunta comprovable és: **recordar una interacció real ajuda a representar-se, representar l'altre i decidir quan cooperar?**

## Dos ritmes d'aprenentatge

«Cervell reptilià» i «neocòrtex» són metàfores informals de còmput, no una divisió literal del cervell humà.

| Capa | Funció | Canvis permesos |
|---|---|---|
| Nucli ECHO, ràpid | Actua, registra experiència i actualitza models i política. | Memòria i estimacions sota contracte, no els invariants per decisió pròpia. |
| Còrtex local, lent | Proposarà i compararà estratègies de pressupost exploratori. | Un artefacte d'estratègia validat; inicialment, no els pesos de Qwen. |
| Avaluador i operador | Comproven resultats, límits, promoció i reversió. | Canvis explícits i versionats; el candidat no reescriu l'examen. |

El nucli conserva WSP de 16 bytes, CAM, Q, T i gate. No hi ha un segon bus cognitiu. Els bancs basals continuen sense LLM; l'experiment cortical declararà crides, tokens i latència. La millora de cada capa s'ha de mesurar.

## La inspiració de Dream-RSI

El preprint avalua polítiques d'exploració mitjançant replay d'arbres històrics, mantenint fixos els agents i l'avaluador. Només cobreix continuacions registrades. No valida el nostre Qwen ni ECHO-4. [Paper primari, secció 3](https://arxiv.org/html/2609.14858v1#S3).

El que segueix és la nostra proposta E4-DREAM-1, no una reproducció completa del framework.

## El bucle proposat

1. **Explorar amb pressupost.** Un controlador fix programa experiments autoritzats a WORLD-1, branques, lots i condicions d'aturada. Online significa executar l'entorn, encara que sigui local.
2. **Registrar intents.** Cada node conserva identificador, pare, observació pública, proposta, configuració, versió de l'avaluador, resultat, error i cost. Qwen no rep les causes privades del simulador.
3. **Revisar sense inventar.** El lector revela resultats quan l'estratègia selecciona les branques corresponents, sense filtrar puntuacions futures. Una continuació absent retorna desconegut. Un prompt nou no pot adoptar el resultat d'un altre i anomenar-lo exacte.
4. **Desenvolupar estratègies.** Qwen assumeix un rol separat de desenvolupament de política: prioritats, pressupostos i aturades en un format declaratiu limitat. Els executa un intèrpret fix, no Python arbitrari generat pel model.
5. **Seleccionar i provar de nou.** Els candidats competeixen amb l'estratègia vigent. El guanyador històric afronta proves noves i es pot rebutjar o revertir. Només els resultats executats amplien l'arxiu.

Al principi Qwen modifica la programació d'experiments, no el nucli, el gate, les recompenses o el certificat SELF. Un rol de descobriment més ampli necessitaria un altre contracte.

La formulació de treball per a ECHO és:

```text
H = col·lecció versionada d'intents executats
R(H, branca) = resultat registrat, o DESCONEGUT
J(estratègia) = qualitat verificada − penalització pel cost
promoció = avantatge en proves noves I tots els invariants satisfets
```

Cal fixar pesos de cost, pressupostos i llindars abans de l'examen. Separarem cost de replay, generació de propostes i execucions evitades. Guanyar en l'historial pot ser sobreajustament: selecciona candidats, però no concedeix el verd.

## El Qwen local

El repositori ja té un adaptador llama.cpp mitjançant `llama-server` o `llama-cli`; un registre anterior identifica Qwen3-4B-Instruct-2507 quantitzat. Aquesta interfície de senyals restringides encara no és l'orquestrador DREAM. Abans de provar-lo identificarem fitxer, hash, quantització i paràmetres reals.

La fitxa oficial defineix Instruct-2507 com a variant no-thinking. Afegir etiquetes de pensament no el converteix en la variant Thinking. Demanarem propostes estructurades, justificacions breus i proves verificables. [Fitxa oficial de Qwen](https://huggingface.co/Qwen/Qwen3-4B-Instruct-2507).

L'arquitectura es pot experimentar en local; l'eficàcia del model de 4B encara no està mesurada. No pagar tokens externs no elimina el cost de GPU/CPU, energia i temps. Generar estratègies continua requerint inferència. No prometem deu mil estratègies en minuts, creixement infinit, autoreplicació ni millora dels pesos.

## Evidència actual

WORLD està implementat. SENSATION, BOUNDARY i SELF tenen tancaments acotats. La reutilització selectiva de SELF arriba a 189/240 i 193/240 objectius a B/C, davant de 152/240 i 143/240 sense protecció. Els casos mixtos continuen incomplets i la seguretat fora del prior no està resolta.

CONT-A reprèn l'agent nominal en un procés nou: 52/52 passos posteriors coincideixen en cinc escenaris, inclòs un terminal que no ressuscita. Falten recuperació activa, descendència/bifurcació i examen final de continuïtat. DREAM no està implementat. [Evidència i límits](/evidence/echo4/ECHO4-STATUS-20260922.md).

L'ordre és continuïtat → branca cortical DREAM → manteniment → altre → interacció → relació → rols → integració. DREAM no bloquejarà el nucli sense LLM; la integració compararà còrtex OFF/ON per separat. Maquinari després del programari. **METAVERSE-1 al final.** [Full de ruta complet](/ca/docs/echoai/echo4).

La contrapart d'OTHER serà una altra instància amb cos i memòria privats. No és la distinció entre nucli i còrtex; aquests noms no converteixen cap capa en una consciència.

## I si tot surt verd?

Podríem demostrar una cadena amb conseqüències mesurables: el model propi protegeix aprenentatge útil, la memòria canvia decisions, representar l'altre ajuda a coordinar-se i revisar experiència millora on gastar el següent pressupost.

Caldran proves noves, controls competents, costos complets i ablacions: retirar història, model propi, model aliè o propostes de Qwen i mesurar què es perd. També examinarem quan cooperar perjudica o és millor actuar per separat.

Aquesta és la possibilitat emocionant: **una història compartida que fa alguna cosa, no només que s'explica**. L'èxit funcional no demostraria experiència subjectiva, ànimes, consciència humana ni una teoria universal de la jerarquia social.

## Punt de pausa

Congelem aquest punt de treball per descansar, conservant evidències i fases pendents visibles. No és el verd global ni un contracte experimental congelat per a mòduls encara inexistents. Quan reprenguem, **CONT-B** serà la següent tasca de codi, abans d'implementar DREAM.

[Full de ruta oficial](/ca/docs/echoai/echo4) · [Anunci inicial, històric](/ca/articulos/echo4-inicio-roadmap-oficial) · [Markdown](/raw/ca/articulos/echo4-dream-rsi-historia-compartida.md)
