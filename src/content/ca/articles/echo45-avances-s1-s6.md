# ECHO-4.5 avança: un model del món, un simulador de jocs propi i ECHO demanant ajuda a un model de llenguatge

26 de setembre de 2026 · En desenvolupament · ECHO-4.5 · ARC-AGI-3 · ARC Prize 2026

Aquest matí explicàvem que [ECHO-4.5 era en desenvolupament](/ca/articulos/echo45-en-desarrollo),
amb S4 en vermell. Des d'aleshores:
- **S4 ha sortit en verd** als jocs de desenvolupament;
- hem construït **el nostre propi simulador de jocs (S5)**, que va trobar errors que els nostres
  jocs de prova amagaven, i l'hem passat per examen;
- ECHO ha après a **empènyer caixes i a entendre els jocs de clic**;
- ha començat **S6**, en què ECHO escriu les seves pròpies peticions a un model de llenguatge per
  millorar-se a si mateix.

**D'aquí a unes 12 hores publicarem els resultats de S6.**

<figure class="article-chart"><img src="/media/echoai/echo45/avances-ca.svg" alt="En 60 jocs nous del simulador ARC3-GYM: puntuació oficial mitjana v3 1,1, v5 1,3, v5.2 10,0 i v5.6 21,5; nivells completats de 900: 600, 490, 681 i 805" loading="lazy" /></figure>

## Les fases, en una taula

| Fase | Què fa | Resultat |
|---|---|---|
| **S0** | llavor sense preentrenar, sandboxes clonables i gimnàs de 1009 tasques | ✅ |
| **S1** | veure les graelles com a objectes | ✅ de 15 a 21 tasques reservades |
| **S2** | aprendre millor: intuïció i vocabulari ampliat | ✅ de 21 a 24 |
| **S3** | veure els jocs com a objectes | ✅ de 0,506 a 0,678 als jocs de desenvolupament |
| **S4** | un model del món verificat i planificar-hi | ✅ en desenvolupament: 0,849 de mitjana en 3 llavors |
| **S5** | un simulador de jocs propi | 🔴 contracte original · ✅ **examen S5-D** |
| **S6** | ECHO demana operacions noves a un model de llenguatge i les verifica | ⏳ en marxa |

Les «tasques reservades» són tasques que ECHO **no fa servir mai per aprendre**; mesuren si el que ha
après es transfereix. La puntuació dels jocs és la fórmula oficial d'ARC Prize.

## S4: el que fan els millors agents, sense model de llenguatge

Vam estudiar com obtenen tan bones notes a ARC-AGI-3 els millors sistemes. Gairebé tots segueixen el
mateix patró:
- un **model del món que es pot executar**;
- cada hipòtesi es **comprova repetint el que ja s'ha vist**;
- es prefereixen les **regles simples**;
- es **planifica dins del model** abans de gastar accions al joc.

ECHO ja era, sobretot, un verificador, així que ho vam adoptar sense model de llenguatge:
- abans de cada tecla **prediu** si es mourà, i ho comprova;
- aprèn els murs com a **colors**, una regla en lloc de mil casos;
- **explora dins del seu model** en lloc de xocar contra les parets.

Al joc g50t va passar de guanyar un nivell **per sort** (1 intent de 3 i més de 1800 accions) a
guanyar-lo amb **les 3 llavors**. En una ho va fer en **61 accions**, quan la referència humana és
78.

## S5: un simulador per no enganyar-nos

Només tenim 8 jocs de desenvolupament, i és molt fàcil ajustar-hi un agent sense adonar-se'n. Per
això vam construir **ARC3-GYM**:
- **jocs generats per codi**, amb la mateixa interfície que ARC-AGI-3;
- **set mecàniques**: laberint, interruptor, palanca, caixa, llums, fletxes i mixt;
- **colors a l'atzar**, perquè les regles s'hagin d'aprendre i no memoritzar;
- **un solucionador exacte** que garanteix que cada nivell té solució i dona el mínim d'accions.

Amb el contracte original, **S5 va sortir en vermell**, i també ho vam publicar:
- la primera versió era massa fàcil: l'atzar completava el 27 % dels nivells;
- l'agent de S4 **no generalitzava**: completava menys nivells que l'anterior.

El simulador va trobar dos errors que els nostres 8 jocs amagaven:
1. **ECHO prenia el terra pel seu cos.** Quan es mou, el forat que deixa desplaça el centre del
   terra. Ara «jo» s'ha de moure **rígid**.
2. **Llegia la meta del nivell equivocat** i acabava perseguint el terra.

Després, treballant les causes (trepitjar un interruptor, fer servir una palanca), va aparèixer un
tercer error: quan un nivell es reiniciava, el salt del cos a l'inici li **ensenyava que els murs es
podien travessar**.

Tot es va corregir mirant **només** els jocs d'entrenament del simulador. Per saber si l'arranjament
era real, vam fer un **examen congelat (S5-D)**: 100 jocs nous, el codi segellat amb empremtes i una
sola mesura.

| En 100 jocs nous (S5-D) | Nivells (3 llavors) | Puntuació oficial |
|---|---|---|
| Atzar | 47 (3,1 %) | 0,002 |
| v3 | 940 | 0,66 |
| **v5.2** | **1103 (+17 %)** | **7,42** |

**S5 queda en verd per examen.**

## Caixes i jocs de clic

Després de l'examen vam afegir tres capacitats, desenvolupades només amb els jocs d'entrenament del
simulador:
- **Empènyer:** si un objecte es mou amb mi quan el trepitjo, és «empenyible», i ECHO planifica al
  seu model com portar-lo al seu lloc. A les caixes passa de 0,6 a **4,5 nivells de 5**.
- **Clics que són tecles:** si fer clic en una cosa quieta mou sempre una altra cosa de la mateixa
  manera, aquell clic és una tecla, i es fa servir tot el model del cos. A les fletxes arriba sovint
  **al mínim exacte d'accions**.
- **Un model del que canvia cada clic:** aprèn quines llums canvia cada clic, i després de guanyar un
  nivell planifica els següents.

L'agent resultant, **v5.6**, completa 805 nivells de 900 als jocs de test del simulador, davant de
681 de v5.2 i 600 de v3 (gràfica de dalt). Als jocs reals de desenvolupament, sense ajustar-hi res,
puja de 0,960 a **1,03**.
- **Vam descartar** una quarta idea: fer servir el model del cos també als jocs mixtos. Millorava el
  simulador, però **empitjorava dos jocs reals**.
- v5.6 encara no ha passat un examen congelat com S5-D.

## Kaggle: ARC Prize 2026

El paquet `echo-arc` amb v5.2 funciona sense errors a l'entorn de la competició. Als 25 jocs públics
treu una mitjana de **0,73 sobre 100**, davant de 0,21 de la primera versió enviada.
- Continua sent **molt poc** al costat dels millors sistemes.
- Aquests 25 jocs inclouen els 16 de l'examen final d'ECHO-4.5. **No hi vam ajustar res**, però ho
  declarem: hem vist aquest resultat global.

## S6: ECHO demana ajuda i decideix què accepta

Fins ara, el model de llenguatge resolia i ECHO vigilava. A S6 és al revés: **ECHO fa servir el model
com a eina per millorar-se**. A cada pas:
1. ECHO mira quines tasques falla i quines gairebé encerta.
2. **Escriu ell la petició**, amb quatre tipus possibles, i aprèn quins li funcionen.
3. El model proposa una **operació nova**.
4. ECHO l'accepta només si:
   - el seu codi és segur;
   - resol tasques que abans no resolia;
   - no n'empitjora d'altres.

El model **mai** pot tocar el verificador, les avaluacions segellades ni els criteris: un control
d'empremtes anul·la la campanya si alguna cosa canvia. Ho vam comprovar: una prova es va anul·lar
sola quan vam editar el contracte mentre corria.

El model és **Qwen2.5-Coder 7B**, a les GPU gratuïtes de Kaggle: cost 0 $. Compararem quatre braços:
- **la llavor** sola, que dona 24 tasques reservades;
- **una petició fixa**, sempre la mateixa (300 propostes);
- **les peticions d'ECHO** (300 propostes);
- **les mateixes propostes d'ECHO, sense verificar**.

Serà verd si:
- ECHO arriba a 27 tasques reservades o més;
- les seves peticions guanyen a la petició fixa;
- aprèn a preguntar millor amb el temps;
- verificar guanya a no verificar.

**D'aquí a unes 12 hores donarem els resultats**, en verd o en vermell.

## El que no afirmem

- Que ECHO «entengui» com una persona.
- Que guanyarà ARC Prize. Partim de molt avall.
- Que el simulador substitueixi els jocs oficials: l'hem dissenyat nosaltres. La prova de veritat és
  l'examen final d'ECHO-4.5, amb 16 jocs que no hem tocat.
- Que ECHO sigui conscient o una intel·ligència general. Tot això són capacitats concretes, mesurades
  des de fora.

La part tècnica és a la [documentació d'ECHO-4.5](/ca/docs/echoai/echo45).
