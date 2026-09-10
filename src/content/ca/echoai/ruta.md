# Full de ruta — ECHO-3

ECHO-1 i ECHO-2 estan tancats. ECHO-3 continua sent **pla** fins que cada fase
tingui banc, controls, informe i tancament reproduïble.

## Tesi mesurable

ECHO-3 serà una capa local de decisió per a robots que recompon una missió quan
fallen els seus supòsits, administra evidència i recursos, i permet auditar
cada decisió.

```text
sensors → WSP → evidència/CAM → T/PATTERN → cerca/Q → gate
        → objectiu o setpoint → PX4 → conseqüència → aprenentatge
```

PX4 conserva estabilització, control dels motors i failsafes. echoAI escull
objectius i accions d'alt nivell. Cap LLM escriu fets, memòries, setpoints
acceptats ni motors.

La planificació, el retorn energètic i la fusió sensorial no es presenten com a
exclusius. Es mesurarà si la combinació auditable millora la recuperació, l'ús
d'evidència i l'economia de missió davant controls equivalents.

## Fases

| Slice | Pregunta que ha de tancar |
|---|---|
| SIM-3 | els mateixos binaris executen A/B/C sense filtracions ni branques per sala |
| FLIGHT-1 | el cos simulat vola amb dinàmica i pertorbacions mesurades |
| SENSOR-1 | càmera, IMU i LiDAR exposen temps, soroll, pèrdua i font |
| GROUND-1 | les observacions físiques produeixen WSP sense coordenades oracle ni un altre bus |
| PATTERN-1R | vistes diferents mantenen la identitat de l'objecte fora de mostra |
| FUSION-1 | l'evidència independent conserva el desacord i redueix la certesa correcta |
| DYNAMIC-1 | detecta moviment extern i prediu trajectòries curtes |
| **COMPOSE-1** | combina capacitats conegudes per a una meta bloquejada sense recepta de ruta |
| CAUSE-1 | separa una transició causada pel seu acte d'un canvi extern emparellat |
| PX4-1 | lliura objectius acotats sense saltar-se PID ni failsafes |
| POWER-1 | torna o abandona segons cost previst i marge, a més del failsafe de PX4 |
| SAFE-1 | conté sensors congelats, desconnexions i propostes errònies |
| HOST-1 | actualitza el valor d'un signe per conseqüències d'una font |
| TRANSFER-3 | el que ha après a A millora B/C davant scratch sense mapa ni nom del món |
| DRONE-3 | tanca la missió en SITL, HIL i gàbia amb traçabilitat causal |

## COMPOSE-1 — la meta darrere de la barrera

«La banana darrere de la paret» es tradueix al cos que ECHO-3 tindrà: una
estació de càrrega visible o recordada, inaccessible per la ruta directa. El
dron ha de buscar una entrada, verificar el pas i arribar amb reserva. Si
esgota el pressupost, informa `acces_no_trobat` i torna; no demostra que
l'accés no existeixi.

| Evidència | Resposta vàlida |
|---|---|
| va veure l'estació abans que quedés oculta | conserva una creença amb antiguitat i busca des d'on verificar-la |
| la veu a través d'un vidre | separa objecte visible de volum transitable i busca un altre accés |
| una font afirma que és al darrere | conserva una hipòtesi atribuïda i busca evidència |

Veure un objecte a través d'un vidre i detectar una paret són observacions
compatibles. Només hi ha contradicció quan fonts comparables afirmen valors
oposats sobre el mateix volum i temps. L'absència de retorn LiDAR tampoc implica
espai lliure.

```text
meta observable
→ evidència, font, edat i desconeguts
→ alternatives físicament disponibles
→ conseqüència, incertesa i cost previstos
→ gate de xoc, evidència i reserva
→ un pas següent
→ conseqüència real i nova planificació
```

La cerca inicial compara pressupostos de 8 i 32 candidats i fins a quatre
capacitats d'alt nivell. Són límits per mesurar, no garanties de solució. Q pot
ordenar alternatives i T/PATTERN donar suport a prediccions. Els rollouts són
hipòtesis i mai no s'escriuen a CAM com a fets.

L'informe distingirà composició amb affordances conegudes de descobriment per
conseqüències. Pals, caixes i eines queden per a un cos amb manipulació física;
activar-los per contacte no demostraria manipulació.

## Mons i avaluació

- **A:** entrenament, selecció i desenvolupament.
- **B:** validació congelada; si provoca ajustos, deixa de ser confirmació.
- **C:** examen segellat, obert una vegada al final.

Els SDF i manifestos construeixen la veritat física, però l'agent no rep mapa,
waypoint, nom, hash, seed ni identificadors que revelin la solució. A B/C es
congelen regles i paràmetres apresos; percepció, localització i seguiment
continuen actius.

COMPOSE-1 es compararà amb Q reactiva, cerca sense procedència/caducitat i un
planificador convencional amb els mateixos sensors i pressupost. Un planner amb
la veritat completa és només un sostre oracle. L'auditor ha de detectar un
mutant que llegeixi una recepta o l'identificador del món.

Les restriccions comunes inclouen zero fets falsos, escriptures imaginades a
CAM, filtracions oracle, bypasses del gate, bypasses del failsafe i setpoints
inadmissibles acceptats dins del domini publicat. Després es comparen èxit,
recomposició, col·lisions, energia, intervencions, latència P99, CPU i memòria.

## Herència, avortament i llenguatge

GEN-1f només hereta `evidence_budget=8`; el fill neix amb CAM, Q, T i PATTERN
buits. No hereta mapes, objectes, confiança social ni «blau dolent». Avortar
una missió preserva el cos i no equival a morir.

HOST-1 arriba després de COMPOSE-1, quan ja existeix alguna cosa física a
demanar. El valor enter de `font + signe + context` canvia només per
conseqüències observades. Les ordres humanes lliures i una demostració pública
més rica queden per després del tancament mínim.

## Frontera posterior

Dins d'ECHO-3 entren els tres mons geomètrics simples, sensors mínims, PX4,
composició, transferència congelada, HIL i gàbia. Després s'ampliaran la
fidelitat visual i aerodinàmica, el vent complex, el nombre de sensors i
vehicles, les ordres lliures i la transferència entre morfologies.

AKD1500 M.2 continua condicionat a disposar de la targeta. Podrà accelerar
percepció; Q, T, CAM, VERIFY i gate romandran a CPU.

— R.N.
