# ECHO-3 — full de ruta

Estat: 20 de setembre de 2026. **14/15 certificats de programari; TRANSFER-3 verd; DRONE-3 amb el tram SITL tancat i HIL i gàbia pendents.**

ECHO-3 té **14 de 15 fites amb certificat verd dins del seu abast de programari**, i la quinzena, DRONE-3, només ha tancat el tram de simulació. ECHO-1 i ECHO-2 estan tancats; el programa robòtic continua obert. Sumar certificats no equival a una missió en un robot físic: no hi ha maquinari al laboratori.

```text
sensor → WSP → CAM/evidence → T/PATTERN → search/Q → gate → PX4 → consequence
```

WSP conserva 16 bytes i és l'únic bus cognitiu. CAM registra episodis observats; T/PATTERN sostenen prediccions; Q prioritza accions; el gate accepta, modifica o bloqueja. PX4 conserva estabilització i failsafes. El còrtex està apagat en aquests bancs; un LLM no escriu fets ni ordena motors.

## Què demostra cada verd

| Fase i versió | Resultat i límit |
|---|---|
| [SIM-3](/evidence/echo3/SIM3-RESULTS.md) | Tres mons declaratius i separació entre avaluador i agent. El consumidor no rep mapa, llavor ni solució. |
| [FLIGHT-1S v6](/evidence/echo3/FLIGHT1S-V6-RESULTS.md) | Vol de l'X500 en PX4 SITL amb pertorbacions mesurades. PX4 aporta estabilització; no demostra decisions de vol d'echoAI. |
| [SENSOR-1S v3](/evidence/echo3/SENSOR1S-V3-RESULTS.md) | Càmera, LiDAR i IMU simulats amb temps, procedència, soroll, latència i pèrdues. Algunes geometries LiDAR queden fora de l'avaluació de biaix. |
| [GROUND-1 v2](/evidence/echo3/GROUND1-V2-RESULTS.md) | Traducció d'observacions físiques simulades a WSP i memòria amb integritat temporal. Memòria estructural i límits declarats d'ambigüitat vertical. |
| [DYNAMIC-1 v2](/evidence/echo3/DYNAMIC1-V2-RESULTS.md) | 29 vols; seguiment de la normal d'una cara des de hover i predicció curta. Sense compensació general del moviment propi. |
| [PATTERN-1R v4](/evidence/echo3/PATTERN1R-V4-RESULTS.md) | 4591/4866 identitats correctes, 45 confusions i 230 desconeguts. Dues famílies LiDAR; aprenentatge i examen per replay. |
| [FUSION-1](/evidence/echo3/FUSION1-RESULTS.md) | 864 episodis funcionals i 240 finestres de replay reduït. Conserva procedència, caducitat i conflicte; no concedeix per si sola permís de vol. |
| [COMPOSE-1 v4](/evidence/echo3/COMPOSE1-V4-RESULTS.md) | 6144 missions funcionals i 32 vols nous SITL; complet 6/6 metes factibles, Q reactiva 0/6. Sales extrudides, altura fixa i energia abstracta; empata amb el convencional en moviments físics. |
| [CAUSE-1](/evidence/echo3/CAUSE1-RESULTS.md) | B/C: 16/16 atribucions correctes davant 8/16 del control temporal per etapa. Paret plana, intencions experimentals i predicció nominal. |
| [PX4-1](/evidence/echo3/PX41-RESULTS.md) | B/C: 4/4 vols per etapa, 48/48 intents invàlids bloquejats i quatre aterratges de failsafe. Objectius nord/sud d'un metre, una transacció supervisada. |
| [POWER-1](/evidence/echo3/POWER1-RESULTS.md) | Per etapa B/C, 128/128 metes factibles davant 64/128 del percentatge fix i 320/320 episodis amb reserva. Energia simulada; bateria instrumentada pendent. |
| [SAFE-1 v2](/evidence/echo3/SAFE1-V2-RESULTS.md) | Per etapa B/C, 6/6 vols i 512/512 episodis funcionals. Deu aterratges natius PX4 davant fallades; veto màxim 288 ms. Contenció dins del banc, sense seguretat universal. |
| [HOST-1](/evidence/echo3/HOST1-RESULTS.md) | Per etapa B/C, 1536/1536 eleccions útils davant 768/1536 del control. Autoritat actualitzada per conseqüències; calibració supervisada sobre cinta de màquina, sense confiança humana general. |
| [TRANSFER-3](/evidence/echo3/TRANSFER3-PLAN-C1-RESULTS.md) | Campanya segellada amb custòdia humana: B 38/0 blocs i C 48/1, zero pèrdues atribuïbles a la calibració. Sales estàtiques de dues parets; sense maquinari ni vol. |

Verd significa que una versió respon la pregunta del seu banc, amb controls i un auditor capaç de rebutjar-la. Les versions vermelles anteriors es conserven. Els B/C de cada component són particions pròpies: no tanquen l'examen segellat de TRANSFER-3. Proves funcionals, replay i vols SITL tenen denominadors diferents i es publiquen per separat.

## DRONE-3: SITL tancat, físic pendent

[DRONE-3](/ca/docs/echoai/drone3) integra la missió completa en una sola sessió PX4/Gazebo per vol: percepció, evidència amb la calibració transferida de TRANSFER-3, composició, gate epistèmic, gate energètic, supervisor SAFE, passarel·la d'objectius acotats i PX4 amb els seus failsafes. Validació i confirmació surten 12/12 en sales fresques, amb zero col·lisions i zero restriccions dures violades; onze mutants detectats i vuit manipulacions rebutjades.

Això tanca el tram SITL i **res més**. La fita 15 exigeix també hardware-in-the-loop i gàbia, i allà `drone3_green` continua a `false`. La bateria instrumentada, les latències sobre maquinari real i les fallades combinades en vol físic estan per mesurar.

## Què ve ara

La prioritat actual és el [desenvolupament de programari ECHO-4](/ca/docs/echoai/echo4), començant per E4-SENSATION-1. ECHO-3 conserva els contractes físics, que es reprendran després del programari. La compra, el muntatge i les demostracions continuen a [maquinari previst](/ca/docs/echoai/hardware): FLIGHT-1H, SENSOR-1H, PX4-1H, POWER-1H i després DRONE-3H. Les dates de compra queden subjectes a aquesta prioritat.

Un avís que ja està publicat: el domini certificat fa servir cel·les de tres metres i sales de 21 × 15 m, que no caben en una gàbia domèstica. La versió a escala s'haurà de validar abans en simulació.

[DRONE-3](/ca/docs/echoai/drone3) · [TRANSFER-3](/ca/docs/echoai/transfer) · [DRONE-3: la missió sencera, en simulació](/ca/articulos/drone3-mision-integrada-sitl) · [Dades i informes d'origen](/data/echo3-status.json)
