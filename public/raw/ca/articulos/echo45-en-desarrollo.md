# ECHO-4.5 és en desenvolupament: un ECHO sense entrenar que aprèn conceptes i juga a descobrir regles

26 de setembre de 2026 · En desenvolupament · ECHO-4.5 · ARC-AGI-1, 2 i 3

Després de publicar [els benchmarks d'ECHO-4](/ca/articulos/echo4-benchmarks-resultados) ens vam fer
una pregunta incòmoda: ECHO és molt bo dient «no ho sé», però **a ARC no sap gairebé res**. A
ARC-AGI-3 completa nivells explorant, amb centenars d'accions, i la seva puntuació oficial és de 0,07
sobre 100. A ARC-AGI-2, sense un model de llenguatge, en va resoldre 0 de 120.

Així va néixer **ECHO-4.5**: una **llavor d'ECHO sense preentrenar** que es clona en sandboxes i
**hi aprèn**. Aprèn conceptes a partir del que resol i els reutilitza en problemes que no ha vist mai.
Aquesta nota explica on som: quatre fases en verd, una en vermell i el que falta.

<figure class="article-chart"><img src="/media/echoai/echo45/g50t-portada.png" alt="Joc g50t d'ARC-AGI-3: el quadrat d'ECHO arriba al marc en U després d'obrir la comporta" loading="lazy" /></figure>

## La idea

- **Una llavor que sap molt poc:** unes quantes desenes d'operacions petites sobre graelles.
- **Sandboxes clonables:** cada còpia té la seva biblioteca de conceptes, la seva corba
  d'aprenentatge i un **diari encadenat per hashos** on queda cada fet i cada concepte nascut.
- **Aprèn en dues fases:**
  - **despert**, busca programes, i només guarda com a fet el que reprodueix **tots** els exemples;
  - **adormit**, converteix en concepte nou el que es repeteix en tasques diferents.
- **Les avaluacions oficials estan segellades pel codi** i no s'obren fins a l'examen final.

## On som

<figure class="article-chart"><img src="/media/echoai/echo45/progreso-ca.svg" alt="Progrés d'ECHO-4.5: tasques reservades de 15 a 24 i puntuació als jocs de desenvolupament de 0,506 a 0,678; S4 en vermell" loading="lazy" /></figure>

| Fase | Què fa | Resultat |
|---|---|---|
| **S0** | llavor, sandboxes i gimnàs de 1009 tasques | ✅ fet |
| **S1** | veure les graelles com a **objectes** | ✅ de 15 a **21** tasques reservades |
| **S2** | aprendre millor: intuïció, vocabulari ampliat i cerca determinista | ✅ de 21 a **24** |
| **S3** | veure els **jocs** com a objectes | ✅ puntuació als jocs de desenvolupament de 0,506 a **0,678** |
| **S4** | deduir la **meta** d'un joc i planificar | 🔴 **en curs**: dues iteracions en vermell |
| **S5** | simulador propi de jocs per entrenar | pendent |

Les «tasques reservades» són 201 tasques d'entrenament que ECHO **no fa servir mai per aprendre**.
Serveixen per mesurar si el que ha après **es transfereix** a problemes nous.

## El que hem après pel camí

- **Aprendre no serveix si no hi arribes.** Durant tres rondes d'entrenament l'aprenentatge no va
  pujar res, perquè el vocabulari no arribava a les solucions. Buscar quatre vegades més tampoc no
  va canviar res. El que va funcionar va ser **ampliar el vocabulari**: graelles dividides per línies,
  contorns, forats, comptar objectes.
- **Més vocabulari a cegues empitjora.** Afegir operacions sense més ho va **empitjorar**. Va caldre
  una **intuïció** que prova primer el que més ha funcionat. També vam entrenar una xarxa neuronal en
  una GPU amb 150.000 tasques «somiades» pel mateix ECHO: encerta el 79 % de les vegades en tasques
  inventades, però en les reals empata amb la intuïció simple.
- **ECHO descobreix qui és.** Als jocs amb tecles identifica sol quin objecte és el seu cos, perquè
  és el que es mou quan ell actua.
- **Saber qui ets no n'hi ha prou sense una meta.** Explorar sense saber on anar no suma nivells.

## El vermell més interessant: entendre una mecànica

<figure class="article-chart"><img src="/media/echoai/echo45/g50t-copia-interruptor.png" alt="Cinc fotogrames del joc g50t: una còpia vermella sobre l'interruptor obre la comporta i el quadrat arriba al marc en U" loading="lazy" /></figure>

Al joc **g50t** controles un quadrat granat en un laberint. La meta és un marc en forma de U del
mateix color. Una comporta talla el camí. La tecla **ACTION5** deixa una **còpia** teva i et torna
al principi. Si deixes la còpia **sobre l'interruptor** (l'extrem de la canonada blau cel), la
comporta s'obre i pots arribar a la meta.

ECHO ho va aconseguir **per casualitat**, després de 1800 accions. Una persona ho dedueix en unes
quantes desenes. En mesurar amb tres llavors per joc vam veure que aquella victòria va ser sort: la
va treure en 1 de 3. Per això S4 continua en vermell.

**El que falta ara és la causalitat.** ECHO ha d'adonar-se que «quan hi havia alguna cosa meva en
aquell punt, la comporta va canviar», comprovar-ho actuant i planificar en dos passos: primer la
causa, després la meta. És la tercera iteració de S4.

## Com ho mesurarem

**L'examen final d'ECHO-4.5** compararà l'ECHO entrenat amb la llavor sense entrenar:

| | Requisit |
|---|---|
| **ARC-AGI-1** | superar el 0 % i la llavor |
| **ARC-AGI-2** | superar el 0 % i la llavor |
| **ARC-AGI-3** | completar almenys el **20 % dels nivells** de 16 jocs que no ha tocat (avui, 11,6 %) |
| **Auditoria** | completa |

A més competim a **ARC Prize 2026** a Kaggle com a equip RxLabs. Partim de molt avall: avui el
primer d'ARC-AGI-3 té 19,45 punts i nosaltres, menys d'1. El que ens interessa és mesurar **quant
aporta ECHO** i explicar-ho al *paper track*.

## El que no afirmem

- Que ECHO «entengui» com una persona. Aquí «entendre» vol dir reutilitzar un concepte verificat en
  tasques noves.
- Que guanyarà ARC Prize.
- Que els resultats sobre el «jo» d'ECHO siguin consciència: són funcionals i es mesuren des de fora.

La part tècnica és a la [documentació d'ECHO-4.5](/ca/docs/echoai/echo45). Publicarem cada fase,
verda o vermella.
