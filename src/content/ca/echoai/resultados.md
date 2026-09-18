# ECHO-AI — resultats ECHO-1 davant d'ECHO-2

ECHO-1 i ECHO-2 estan tancats. Aquesta pàgina separa els seus resultats per
mostrar l'evolució sense barrejar bancs diferents en una puntuació
d'intel·ligència. Cada xifra conserva el control, denominador i informe d'origen.

## ECHO-3 · estat actual

ECHO-3 té **13 de 15 fites amb certificat verd dins del seu abast de programari**. ECHO-1 i ECHO-2 estan tancats; el programa robòtic continua obert. S'han provat components amb controls i auditories, però sumar certificats no demostra una missió integrada en un robot físic.

- **CAUSE-1** — B/C: 16/16 atribucions correctes davant 8/16 del control temporal per etapa. Paret plana, intencions experimentals i predicció nominal.
- **PX4-1** — B/C: 4/4 vols per etapa, 48/48 intents invàlids bloquejats i quatre aterratges de failsafe. Objectius nord/sud d'un metre, una transacció supervisada.
- **POWER-1** — Per etapa B/C, 128/128 metes factibles davant 64/128 del percentatge fix i 320/320 episodis amb reserva. Energia simulada; bateria instrumentada pendent.
- **SAFE-1 v2** — Per etapa B/C, 6/6 vols i 512/512 episodis funcionals. Deu aterratges natius PX4 davant fallades; veto màxim 288 ms. Contenció dins del banc, sense seguretat universal.
- **HOST-1** — Per etapa B/C, 1536/1536 eleccions útils davant 768/1536 del control. Autoritat actualitzada per conseqüències; calibració supervisada sobre cinta de màquina, sense confiança humana general.

**TRANSFER-3** ha de demostrar una millora útil de l'après a A en entorns nous davant del mateix agent sense aquella experiència, sense transportar mapa ni solució. Continua vermell i sense candidat. L'escola de guany aprèn exactament, però l'últim pilot segur B3 arriba 51/72 davant 52/72 nominal i costa més, escola inclosa. No va passar a confirmació prospectiva ni va obrir B/C real.

**DRONE-3** ha d'integrar la missió completa amb traçabilitat causal en SITL, HIL i gàbia. Els certificats d'enllaç, energia o seguretat no substitueixen aquest tancament conjunt. Bateria instrumentada, latència sota càrrega i fallades combinades s'hauran de comprovar en integrar-ho. No hi ha maquinari robòtic ni Akida al laboratori; HIL i gàbia necessiten aquella plataforma.

[Full de ruta](/ca/docs/echoai/ruta) · [Recerca TRANSFER-3](/ca/docs/echoai/transfer) · [Dades i informes d'origen](/data/echo3-status.json)

## ECHO-1 · memòria, acció i transferència

| Mesura | Resultat |
|---|---:|
| Proves d'acceptació | 488 |
| Traça canònica | 352 torns |
| Predicció T coneguda | 99,68 % sobre 312 torns |
| PatternMemory | 80/80 davant T a 40/80 |
| Transferència entre mons | +128 agregat davant scratch |
| Integritat | 0 fets falsos · 0 memòries destruïdes |

La política davant del perill passa de `[0,0,0]` a `[-12,+5,0]` per a
apropar-se, evitar i esperar. ECHO-1 també tanca objectes, obertura, lliurament,
conflicte cortical controlat i narració sense escriptures causals.

## ECHO-2 · supervivència, temps i herència

| Mesura | Resultat |
|---|---:|
| Informes de tancament verds | 8 |
| Monitor neuronal seleccionat | 512 LIF + 128 Adaptive-LIF |
| PATTERN-1 reservat | 32/32 davant exact-match 0/32 |
| STREAM-1 | 4.608 frames · 4.512/4.512 prediccions conegudes |
| SLEEP-2 | 8.208 files → 144 regles · 720/720 davant T a 0/720 |
| GEN-1f | 360 errors tardans davant 602 del naïf |
| HEAT-1b | 20.786 torns davant 7.221 sense temperatura |
| Integritat | WSP 16 B · 0 fets falsos · 0 memòries destruïdes |

ECHO-2 conserva ECHO-1 i afegeix mort i reaparició, aprenentatge d'aliment i
verí, supervivència conservant memòria, canvi de distribució, patrons sense ids
d'objecte o posició, flux, consolidació, herència d'una predisposició i
regulació conjunta d'energia i temperatura.

## Comparació causal de capacitat

| Examen | Referència ECHO-1 / control | ECHO-2 | Canvi |
|---|---:|---:|---:|
| Signatures perceptives reservades | 256 LIF: 829/2.048 | 512 LIF: 2.048/2.048 | +1.219 |
| Discriminació temporal, 640 neurones totals | 640 LIF: 0/256 | 512 LIF + 128 ALIF: 256/256 | +256 |
| Escala exercitada | nucli: 352 torns | STREAM-1: 4.608 frames | ×13,09 |

Les dues primeres files provenen de CAPACITY-1 i eliminen o barregen la causa
que es vol comprovar. La tercera usa càrregues diferents: mostra escala de
seqüència exercitada, no precisió comparable. L'arquitectura neuronal és un
monitor perceptiu; Q i el gate continuen prenent la decisió causal.

## Com llegir el resultat

ECHO-1 demostra el cicle base: representar, recordar, predir, decidir, actuar i
aprendre. ECHO-2 demostra que aquest cicle es pot mantenir a través de vides,
senyals interns i seqüències més llargues. Encara no demostra física de vol,
sensors reals, PX4, un dron físic ni AKD1500; aquests passos pertanyen a ECHO-3.

La versió interactiva d'aquesta ruta inclou les dues versions costat per costat,
gràfiques de comparació, les fases ECHO-2 i el reproductor real dels 352 torns
ECHO-1.

- [Descarrega dades ECHO-1](/data/echo1-benchmark.json)
- [Descarrega dades ECHO-2](/data/echo2-benchmark.json)
- [Mostra la demostració ECHO-2](/ca/docs/echoai/echo2)

— R.N.
