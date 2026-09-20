# DRONE-3: la missió sencera, en simulació

20 de setembre de 2026 · RxLabs®

En dos dies han caigut les dues fites que quedaven obertes d'ECHO-3, i convé dir
exactament què significa cadascuna. **TRANSFER-3 va tancar en verd el 19 de
setembre**, amb campanya segellada i custòdia humana. **DRONE-3 va tancar el seu
tram SITL el dia 20.** ECHO-3 **no** està complet: la fita 15 exigeix simulació,
hardware-in-the-loop i gàbia, i al laboratori no hi ha ni controlador de vol ni
dron.

## Què s'ha mesurat

Un vol de DRONE-3 és una sessió única de PX4 v1.15.4 amb Gazebo. A dins l'agent
percep, recorda, decideix, demana un objectiu acotat, espera que PX4 el confirmi
físicament i torna a observar. No hi ha reinicis entre capacitats ni concatenació
de repeticions: la unitat experimental és la missió sencera.

Dotze vols de validació i dotze de confirmació, en sales noves amb geometries mai
volades:

- **12/12 i 12/12** vols correctes;
- 6/6 missions factibles assolides per etapa;
- 3/3 avortaments correctes quan la reserva no donava;
- 3/3 fallades contingudes, amb PX4 aterrant pel seu failsafe d'enllaç;
- zero col·lisions, marge mínim 1.247 mm;
- zero violacions de les restriccions dures: fets falsos, escriptures
  imaginades, fuites de l'oracle, salts de gate, salts de failsafe i setpoints
  insegurs acceptats.

Certificat `c44402df…`, amb `drone3_sitl_green=true` i una segona auditoria en un
procés nou que el reprodueix.

## Per què els controls importen més que el resultat

Un sistema que es declara correcte a si mateix no demostra res. Aquests són els
contrastos, calculats sobre les mateixes observacions enregistrades:

Un enllaç que confongués l'ACK de MAVLink amb l'arribada hauria cantat arribada
en **147 de 147** transaccions mentre el cos era encara a uns tres metres de
l'objectiu. Un planificador que ignorés l'evidència hauria enviat **51 ordres**
cap a cel·les realment ocupades; el gate epistèmic les bloqueja totes. El clàssic
«torna quan la bateria baixi del 20 %» discrepa del cost previst en 13 decisions.
I el supervisor sense comprovació de vida de l'agent senzillament no vetaria un
agent penjat.

A més, onze mutants de codi i vuit manipulacions de traça: tots detectats, totes
rebutjades per l'auditoria.

## Què va sortir malament pel camí

Un revisor independent, en només lectura i abans de congelar, va trobar set
defectes de rigor. El més greu: la partició de validació incloïa una geometria ja
feta servir als pilots, és a dir, **B no era del tot cega**. També que la
contradicció del món es disparava per rellotge sense comprovar que l'agent hagués
vist l'obertura oberta, que la prova de manipulacions no podia fallar per
construcció i que l'auditoria no lligava cada proposta enviada a la intenció de
l'agent.

Tot això es va corregir abans de volar B. Ho expliquem perquè una revisió que no
troba res normalment no ha mirat.

També hi va haver correccions nascudes del mateix simulador: el batec de PX4
s'havia de mesurar en temps simulat —la simulació corre a 0,48–0,89 de temps
real i la regla heretada rebutjava batecs vius— i la reserva en tocar terra és el
mínim de la finestra d'aterratge, perquè PX4 reomple la bateria simulada en
desarmar.

## Què no diu aquest certificat

No diu res sobre vol real. L'energia és càrrega simulada que baixa amb el temps
armat, no joules mesurats: el PX4 fixat publica −1 A. El món és estàtic tret de
la intervenció declarada, les cel·les fan 3 m i l'altura és fixa. La coordenada
de l'estació s'entrega com a hipòtesi exacta.

`drone3_hil_green`, `drone3_cage_green` i `drone3_green` continuen a `false`.

## El que ve ara és físic

La llista de compra, el muntatge, la llista prèvia de seguretat i el procediment
d'examen estan publicats. L'ordre és FLIGHT-1H, SENSOR-1H, PX4-1H, POWER-1H i
després DRONE-3H. L'**AKD1500 M.2 de BrainChip està previst per a l'octubre**, i
la seva primera prova serà un cap perceptiu petit comparat amb CPU i Jetson sobre
el mateix conjunt de dades: exactitud, latència P99, potència mesurada i què
passa en desconnectar-lo. Res de TOPS de fullet.

Hi ha un detall incòmode que també està publicat: el domini certificat fa servir
cel·les de 3 m i sales de 21 × 15 m, i això no cap en una gàbia domèstica. Abans
de volar en gàbia caldrà declarar una versió a escala i validar-la primer en
simulació.

[DRONE-3 en detall](/ca/docs/echoai/drone3) · [Maquinari previst i costos](/ca/docs/echoai/hardware) · [TRANSFER-3](/ca/docs/echoai/transfer) · [Informe](/evidence/echo3/DRONE3-RESULTS.md)
