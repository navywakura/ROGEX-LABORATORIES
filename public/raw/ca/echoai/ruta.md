# ECHO-3 — full de ruta

ECHO-1 i ECHO-2 estan tancats. ECHO-3 ja ha passat la meitat: **8 de 15 fases de programari** tenen banc, controls, informe i certificat reproduïble.

La tesi és concreta: una capa local de decisió per a un robot que conserva evidència amb font i antiguitat, recompon un pas següent quan falla un supòsit i deixa una traça auditable.

```text
sensor → WSP → CAM/evidència → T/PATTERN → cerca/Q → gate → PX4 → conseqüència
```

WSP continua sent l'únic bus. CAM registra fets; T i Pattern anticipen; Q ordena alternatives; el gate accepta, modifica o bloqueja. PX4 estabilitza, executa el setpoint i manté els failsafes. Cap LLM escriu fets, memòries, setpoints acceptats ni motors.

## Tancat

- [x] **SIM-3** — A, B i C neixen de manifests declaratius; l'agent no rep mapa, llavor, id de sala ni solució.
- [x] **FLIGHT-1S v6** — l'X500 en SITL s'enlaira, manté i recupera estabilitat després d'una pertorbació mesurada.
- [x] **SENSOR-1S v3** — càmera, LiDAR i IMU publiquen temps, soroll, latència, pèrdua i procedència.
- [x] **GROUND-1 v2** — un adaptador porta aquestes observacions a WSP i memòria sense coordenades oracle ni segon bus.
- [x] **DYNAMIC-1 v2** — separa canvi extern d'escena estable i manté prediccions curtes.
- [x] **PATTERN-1R v4** — conserva identitat d'objecte entre vistes reservades.
- [x] **FUSION-1** — manté evidències independents quan discrepen, baixa la certesa i no completa el fet.
- [x] **COMPOSE-1 v4** — compon accessos coneguts per a una meta bloquejada i verifica cada pas abans de continuar.

COMPOSE-1 va tancar 6.144 missions funcionals B/C. A la branca física hi ha sis metes assolibles: la composició les va tancar 6/6 i el control d'una acció 0/6; el banc també inclou 32 vols PX4 SITL. Un planificador convencional va empatar la distància física en aquell escenari, per això es conserva com a control.

## Bloc següent

- [ ] **CAUSE-1** — aparellar escenes per separar «ha canviat perquè he actuat» de «ha canviat fora de mi».
- [ ] **PX4-1** — lliurar metes acotades a PX4 sense tocar PID, control d'actitud ni failsafes.
- [ ] **POWER-1** — triar retorn o abortament per cost previst, reserva i incertesa.
- [ ] **SAFE-1** — sostenir sensors congelats, desconnexió i propostes errònies sense acceptar un pas inadmissible.
- [ ] **HOST-1** — aprendre el valor d'un signe per conseqüències observades de font, context i senyal.
- [ ] **TRANSFER-3** — congelar l'après a A i mesurar la millora a B/C davant scratch, sense mapa ni nom de sala.
- [ ] **DRONE-3** — tancar la mateixa missió amb SITL, HIL i gàbia, amb traçabilitat causal.

## Després del tancament

ECHO-3 prepararà **METAVERSE-1**: tres mapes 3D més rics, geometria de Blender, rutes noves, obstacles fixos i mòbils, més voxels i rumbs, IMU, motors, PID/PX4, aerodinàmica, vent i ordres com aterrar o anar a una coordenada. El mateix contracte distingirà una demo visual d'una conducta que ha passat un banc.

AKD1500 M.2 entrarà quan la targeta existeixi al laboratori. Serà un coprocesador de percepció comparat amb CPU sobre la mateixa tasca. WSP, CAM, VERIFY, T, Q i gate es mantenen a CPU.
