# ECHO-3 — full de ruta

Estat: 18 de setembre de 2026. **13/15 certificats de programari; TRANSFER-3 vermell; DRONE-3 pendent.**

ECHO-3 té **13 de 15 fites amb certificat verd dins del seu abast de programari**. ECHO-1 i ECHO-2 estan tancats; el programa robòtic continua obert. S'han provat components amb controls i auditories, però sumar certificats no demostra una missió integrada en un robot físic.

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

Verd significa que una versió respon la pregunta del seu banc, amb controls i un auditor capaç de rebutjar-la. Les versions vermelles anteriors es conserven. Els B/C de cada component són particions pròpies: no tanquen l'examen segellat de TRANSFER-3. Proves funcionals, replay i vols SITL tenen denominadors diferents i es publiquen per separat.

## Les dues fites pendents

**TRANSFER-3** ha de demostrar una millora útil de l'après a A en entorns nous davant del mateix agent sense aquella experiència, sense transportar mapa ni solució. Continua vermell i sense candidat. L'escola de guany aprèn exactament, però l'últim pilot segur B3 arriba 51/72 davant 52/72 nominal i costa més, escola inclosa. No va passar a confirmació prospectiva ni va obrir B/C real.

**DRONE-3** ha d'integrar la missió completa amb traçabilitat causal en SITL, HIL i gàbia. Els certificats d'enllaç, energia o seguretat no substitueixen aquest tancament conjunt. Bateria instrumentada, latència sota càrrega i fallades combinades s'hauran de comprovar en integrar-ho. No hi ha maquinari robòtic ni Akida al laboratori; HIL i gàbia necessiten aquella plataforma.

## Què investiguem

La branca de guany del Pla B s'ha aturat després del cribratge vermell. Altres primitives i retards continuen sense provar; el Pla C de calibració perceptiva no ha començat. Cada hipòtesi nova necessita un mecanisme comprovable, controls amb la mateixa informació i una regla prèvia d'aturada. Tretze verds permeten preguntes més precises; els altres dos encara necessiten dades pròpies.

Mons 3D més rics i qualsevol coprocesador neuromòrfic són feina futura. Primer cal tancar la transferència útil i integrar el contracte actual. El maquinari absent es declara absent.

[Recerca TRANSFER-3](/ca/docs/echoai/transfer) · [ECHO-3: tretze fases verdes i dues preguntes obertes](/ca/articulos/echo3-trece-fases-verdes) · [Dades i informes d'origen](/data/echo3-status.json)
