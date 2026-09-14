# ECHO-3 ha passat la meitat

> 8 de 15 fases de programari tancades · 14 de setembre de 2026

ECHO-3 ja no és una llista de peces imaginades. És un banc de decisió per a un cos simulat: rep senyals amb font i temps, conserva allò observat, prova un pas següent, comprova què ha passat i deixa una traça que es pot recalcular.

```text
sensor → WSP → memòria/evidència → predicció i cerca → gate → PX4 → conseqüència
```

Cap model de llenguatge condueix motors. El paquet WSP de 16 bytes porta el fet operatiu; CAM conserva episodis; T prediu; Q ordena alternatives; i el gate decideix si el pas següent pot sortir. PX4 continua estabilitzant el vehicle i aplica les seves proteccions.

## Què s'executa ara

| Fase | Què demostra el seu banc |
|---|---|
| SIM-3 | Tres sales A/B/C s'executen des de manifests declaratius sense donar a l'agent el mapa, la llavor ni la resposta. |
| FLIGHT-1S | L'X500 simulat s'enlaira, manté posició i recupera estabilitat després de pertorbacions mesurades. |
| SENSOR-1S | Càmera, LiDAR i IMU lliuren observacions amb temps, soroll, latència, pèrdua i procedència. |
| GROUND-1 | Aquestes observacions entren en l'únic WSP i en la memòria de l'agent, sense una coordenada oracle amagada. |
| DYNAMIC-1 | L'agent separa un objecte que canvia d'una escena quieta i manté una predicció curta. |
| PATTERN-1R | La identitat no depèn d'una vista exacta: la mateixa peça pot reaparèixer des d'una altra posició. |
| FUSION-1 | Dos sensors que discrepen continuen sent dues evidències. L'agent baixa la certesa i no inventa un pas. |
| COMPOSE-1 | Davant una meta bloquejada, compon alternatives conegudes, verifica cada pas i torna a planificar. |

L'última prova és fàcil d'imaginar. Una estació de càrrega és visible però la ruta directa està tancada. L'agent no rep la instrucció «gira a l'esquerra». Recupera on la va veure, compara accessos disponibles, estima el cost del moviment següent i només n'executa un que passa el gate. Si no apareix cap accés dins del pressupost, acaba amb `acces_no_trobat` i torna.

COMPOSE-1 es va tancar amb 6.144 missions funcionals B/C. A la seva part física simulada, sis metes assolibles es van tancar 6/6 amb composició i 0/6 sense horitzó; també inclou 32 vols nous de PX4 SITL. Un planificador convencional va empatar la distància física en aquell escenari. Es publica així perquè l'objectiu és saber què aporta cada part del contracte.

## Com es programa i es comprova

Cada fase comença amb una pregunta petita, una mètrica i un control. La sala A serveix per construir. B valida paràmetres congelats. C queda segellada fins a l'examen. El manifest crea parets, sensors i condicions; aquest mateix manifest no s'entrega mai a l'agent com a memòria.

Els controls treuen una causa cada vegada: una política reactiva, un horitzó d'una acció, un planificador convencional i mutants que intenten filtrar el mapa o saltar-se la verificació. L'informe conserva llavors, hashes, traces i un resultat vermell quan apareix. Un verd no surt de moure la porteria després de mirar una corrida.

## La segona meitat

CAUSE-1 és el pas següent: escenes aparellades perquè l'agent separi «això ha canviat perquè jo he actuat» d'«això ha canviat fora de mi». Després arriben metes PX4 acotades, energia prevista, fallades de sensor, signes amb un operador, transferència A→B/C i el tancament del cos de dron en SITL, HIL i gàbia.

Quan es tanqui aquesta cadena, el següent salt serà un món 3D més ric: geometria de Blender, rutes noves, objectes mòbils, IMU, motors, PID, aerodinàmica i vent. El treball actual n'és el contracte: la manera de comprovar que una escena bonica diu alguna cosa real.
