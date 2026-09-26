# ECHO-4.5 · documentació tècnica (en desenvolupament)

Actualitzat el 26 de setembre de 2026. ECHO-4.5 **encara no està publicat**: aquesta pàgina
documenta com es construeix i què s'ha mesurat fins avui. Cada fase té un contracte amb el seu
criteri de verd escrit **abans** de mesurar, i es publica també quan surt vermella.

## Què és

ECHO-4.5 parteix d'una **llavor d'ECHO sense preentrenar** que es clona en sandboxes i hi aprèn.
L'objectiu és que adquireixi **conceptes verificats** i els reutilitzi en problemes nous. Es mesura a
ARC-AGI-1, ARC-AGI-2 i ARC-AGI-3.

| Peça | Funció |
|---|---|
| **Llavor** | un vocabulari d'operacions petites sobre graelles: geometria, objectes, gravetat, meitats, seccions, colors. Avui en té 84 famílies |
| **Sandbox** | una còpia amb la seva biblioteca de conceptes, la seva corba d'aprenentatge i un **diari encadenat per hashos** (cada programa verificat i cada concepte nascut) |
| **Despert** | cerca de programes; només és un **fet** el que reprodueix tots els exemples resolts |
| **Son** | el que es repeteix en programes de tasques diferents es converteix en un **concepte** nou, també amb forats de color («recolorar X per Y») |
| **Intuïció** | costos enters que fan provar primer el que més ha funcionat; opcionalment, una xarxa entrenada en GPU amb tasques «somiades» |
| **Gimnàs** | 1009 tasques d'entrenament d'ARC-AGI-1 i ARC-AGI-2. En queden 201 **reservades** per mesurar la transferència. Les avaluacions estan **segellades pel codi** |
| **Agent de jocs** | el paquet `echo-arc` per a ARC-AGI-3: memòria verificada, BOUNDARY, rellotge del joc, clic dins de l'objecte i descobriment del propi cos |

## Fases i resultats

| Fase | Criteri de verd (fixat abans) | Resultat |
|---|---|---|
| S0 · llavor, sandboxes i gimnàs | que funcionin i s'auditin | ✅ |
| S1 · objectes en graelles | més tasques reservades que la llavor | ✅ 15 → **21** |
| S2 · aprendre millor | més de 21 amb cerca determinista | ✅ **24** |
| S3 · jocs com a objectes | més puntuació oficial que v2, els mateixos nivells o més, repetició exacta | ✅ 0,506 → **0,678** (7 nivells) |
| S4 · deduir la meta i planificar | més nivells i més puntuació que S3 | ✅ en desenvolupament (iteració 3, v5: 0,849 de mitjana en 3 llavors) |
| S5 · simulador de jocs (ARC3-GYM) | v5 supera v3 en jocs nous | 🔴 contracte original · ✅ examen S5-D: v5.2 1103 nivells davant de 940 |
| S6 · automillora: ECHO demana operacions a un model i les verifica | ≥ 27 reservades, i més que la petició fixa | ⏳ en marxa |

**Detalls que importen:**
- **Cerca determinista:** es va treure el límit de temps per tasca, perquè feia que el resultat
  depengués de la càrrega de la CPU. Ara dues mesures donen exactament el mateix conjunt de tasques.
- **El pressupost no era el sostre:** amb 1500 expansions es resolen les mateixes tasques que amb 400.
  El límit era el vocabulari.
- **Xarxa d'intuïció:** entrenada en una GPU T4 de Kaggle amb 150.000 tasques generades per ECHO a
  partir de graelles reals d'entrenament. Encerta el 79 % de les vegades entre els seus 5 primers
  suggeriments en tasques inventades, però a les reservades empata amb la intuïció per freqüències.
- **S4:** al joc g50t la meta exigeix una mecànica causal («una còpia sobre l'interruptor obre la
  comporta»). La tercera iteració afegeix detectar causes, comprovar-les actuant i planificar en dos
  passos. Des de la segona iteració es mesura amb **3 llavors per joc**, perquè amb una de sola la sort
  pesava més que la millora.

## EGO-MEMÒRIA-1 (en paral·lel)

Un poble simulat d'agents, alguns mentiders, on la memòria d'ECHO s'esborra entre episodis i
escriure al diari costa temps. Es mesura si l'hàbit de documentar **sorgeix per necessitat**, i si els
records, amb una valència entera (+ o −), **causen** la seva conducta. En desenvolupament, amb 8
llavors:
- el diari li fa guanyar temps en 8 de 8;
- esborrar la memòria formativa canvia a qui tria en 8 de 8, i esborrar-ne una a l'atzar no;
- dos clons idèntics acaben amb postures diferents en 8 de 8.

És un jo **funcional**; no demostra consciència.

## Examen final d'ECHO-4.5

| | Requisit |
|---|---|
| R1 · ARC-AGI-1 (400 tasques d'avaluació) | superar el 0 % i la llavor sense entrenar |
| R2 · ARC-AGI-2 (120 tasques d'avaluació) | superar el 0 % i la llavor |
| R3 · ARC-AGI-3 (16 jocs que no es fan servir per desenvolupar) | completar almenys el 20 % dels 112 nivells |
| R4 | auditoria completa: programes, conceptes i cadena del diari |

La puntuació oficial d'ARC-AGI-3 es publica sempre: cada nivell s'eleva al quadrat i els nivells es
ponderen pel seu número.

## ARC Prize 2026

Competim com a equip **RxLabs** amb el paquet `echo-arc`, autocontingut i sense el nucli d'ECHO-4. Si
guanya un premi, es publicarà en CC-BY 4.0, com exigeixen les regles. Terminis: enviament final el 2
de novembre; *paper track* el 9 de novembre.

Resultats d'ECHO-4: [benchmarks](/ca/articulos/echo4-benchmarks-resultados) · Nota d'avenç:
[ECHO-4.5 en desenvolupament](/ca/articulos/echo45-en-desarrollo).
