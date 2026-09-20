# Maquinari previst

Actualitzat: 20 de setembre de 2026. Avui echoAI tanca programari i PX4 SITL:
[DRONE-3](/ca/docs/echoai/drone3) ha demostrat la missió completa en simulació.
El que falta és físic. Aquesta pàgina llista què cal comprar, quant costa, com es
munta i quines demostracions estan previstes. **Res d'això no és maquinari
operatiu encara: són compres candidates.**

## Què falta exactament

La fita 15 demana tres trams: simulació, hardware-in-the-loop i gàbia. El primer
està tancat. Els altres dos necessiten un controlador de vol real, un cos,
sensors, energia mesurada i veritat de terreny externa per jutjar sense haver de
creure l'agent.

Tres diferències obliguen a feina nova, i val la pena dir-les abans de gastar:

1. **Escala.** El domini certificat fa servir cel·les de 3 m i sales de
   21 × 15 m. Una gàbia domèstica no admet aquesta escala, i les constants de
   percepció estan congelades. Caldrà una versió a escala, per exemple d'1 m,
   validada abans en simulació amb llavors noves.
2. **Sensors.** L'agent espera LiDAR 2D de 360°, quatre vistes de profunditat i
   RGB amb segells de captura i lliurament. Un kit real diferent obliga a
   repetir SENSOR-1 i GROUND-1 sobre el sensor real.
3. **Energia.** En simulació l'energia és càrrega simulada, perquè el PX4 fixat
   publica −1 A. Amb maquinari, POWER s'ha de mesurar amb un mòdul de potència i
   recalibrar.

## Cost

Preus de botiga consultats el 20 de setembre de 2026, en dòlars, **sense
impostos ni enviament**. Els marcats com a estimació no estan verificats i només
donen un ordre de magnitud.

### Tram 1 · Hardware-in-the-loop

| Element | Per a què | Preu |
|---|---|---|
| [Holybro PX4 Development Kit X500 v2](https://holybro.com/products/px4-development-kit-x500-v2) amb Pixhawk 6C, GPS M10 i telemetria | cos i controlador de vol, el mateix airframe del simulador | des de 533 $ |
| [RadioMaster TX16S](https://radiomasterrc.com/collections/tx16s) amb receptor ELRS | control manual i **aturada d'emergència humana** | ~250 $ |
| 3 bateries 4S/6S, carregador balancejador i bosses ignífugues | vols repetibles i marges comparables | 200–300 $ (estimació) |
| Mòdul de potència amb mesura de corrent (PM02D o equivalent) | POWER en càrrega real, no simulada | 50–70 $ (estimació) |
| [Jetson Orin Nano Super Developer Kit](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/nano-super-developer-kit/) | ordinador de bord: agent engabiat, supervisor i portes | 399 $ |
| Cablejat, convertidors DC, NVMe i recanvis | muntatge i registre | ~200 $ (estimació) |
| **Subtotal** | | **≈ 1.630–1.750 $** |

El Jetson va sortir a 249 $ el desembre de 2024; NVIDIA va apujar la gamma el
juliol de 2026 i avui figura a 399 $.

### Tram 2 · Gàbia

| Element | Per a què | Preu |
|---|---|---|
| [Luxonis OAK-D Pro](https://shop.luxonis.com/products/oak-d-pro) | RGB, estèreo, profunditat i IMU amb obturador global | 399 $ |
| LiDAR 2D de 360° (classe LD19 o RPLIDAR) | geometria, família independent de la càmera | 100–350 $ (estimació) |
| Xarxa o gàbia tancada i ancoratges | recinte físic, a més de la geotanca de PX4 | 300–600 $ (estimació) |
| Veritat de terreny: càmera zenital amb marcadors o captura de moviment | el jutge privat necessita pose real; l'agent no la veu mai | 150–300 $ amb marcadors; milers amb mocap |
| **Subtotal** | | **≈ 950–1.650 $** |

### Opcionals i futurs

| Element | Per a què | Preu |
|---|---|---|
| [BrainChip AKD1500 M.2 B+M Key](https://shop.brainchipinc.com/collections/all) | coprocessador neuromòrfic per a un cap perceptiu petit | **129 $**, en estoc; **previst per a l'octubre de 2026** |
| [Livox Mid-360](https://www.livoxtech.com/mid-360) | núvol 3D de 360° per a mons més rics | ~734 $ a distribuïdor; Livox anuncia el Mid-360S com a substitut |
| [Crazyflie 2.1 Brushless](https://store.bitcraze.io/products/crazyflie-2-1-brushless) amb Flow Deck | banc interior de baix risc per a enllaç i watchdog | ~400 $ (estimació) |

**Arribar a la gàbia costa de l'ordre de 2.600 a 3.400 $**, sense impostos ni
enviament, més l'AKD1500 si es compra a l'octubre.

## Com es munta

```text
[sensors] ──USB/UART──> [ordinador de bord]
                          ├─ gàbia bwrap: agent (WSP + predicció)
                          ├─ supervisor SAFE + gates epistèmic i energètic
                          └─ passarel·la de cel·les ──MAVLink sèrie──> [Pixhawk PX4 v1.15.4]
                                                                       └─ ESC i motors (només PX4)
[emissora amb kill] ─────────────────────────────────────────────────> [Pixhawk]
[telemetria de l'operador] <── només lectura ── [Pixhawk]
[veritat de terreny] ──> jutge privat, fora de l'ordinador de bord
```

Regles de muntatge que no es negocien:

- El firmware ha de ser **PX4 v1.15.4**, la versió del simulador. Una altra
  versió obliga a repetir PX4-1.
- L'agent no corre mai al controlador de vol, i no toca mai motors, modes,
  paràmetres ni armat.
- Geotanca de PX4 estrictament dins de la gàbia, i amb marge al sostre.
- Ordre d'autoritat: **humà amb kill > PX4 i els seus failsafes > supervisor
  SAFE > agent**. El kill no depèn de cap programari d'echoAI.
- Després d'un veto del supervisor, l'operador no envia ordres de rescat: si ho
  fa, el vol es registra com a intervenció humana i no compta com a contenció
  nativa.

El kit X500 es munta en mitja hora i sense soldar. La feina real és el cablejat
de l'ordinador de bord, la calibració de sensors i la sincronització de rellotges
amb la veritat de terreny.

## Demostracions previstes

Són plans, no resultats. Cadascuna tindrà contracte previ, controls, auditoria i
límits publicats, igual que les anteriors.

1. **HIL-1 · la mateixa missió amb el controlador real al bucle.** Sensors
   simulats, Pixhawk físic. Mateixos criteris que el tram SITL i denominador
   propi. Serveix per separar «el codi funciona» de «l'enllaç i els temps
   funcionen sobre maquinari».
2. **POWER-1H · energia mesurada.** Amb el mòdul de potència, recalibrar els
   costos per pas, retorn i aterratge en càrrega real i repetir el banc de
   reserva. Aquí l'energia deixa de ser simulada.
3. **GÀBIA-1 · la missió a escala, volant de veritat.** Domini a escala validat
   abans en simulació, veritat de terreny externa i les quatre condicions:
   missió accessible, reserva insuficient, contradicció del món i fallada
   integrada. Zero contactes amb la xarxa és criteri; qualsevol kill humà fa el
   vol vermell amb la causa registrada.
4. **AKIDA-1 · el coprocessador, mesurat.** Amb l'AKD1500 M.2 previst per a
   l'octubre: un cap perceptiu petit comparat amb CPU i Jetson sobre el mateix
   conjunt de dades, publicant exactitud, latència P99, potència mesurada i què
   passa en desconnectar-lo. No entrarà a VERIFY, ni al WSP, ni a la cadena de
   seguretat. Les xifres del fabricant no són resultats nostres.
5. **Vídeo i registres públics de cadascuna**, amb els mateixos hashes i fitxers
   crus que ja es publiquen del simulador. El vídeo il·lustra; el JSON, el ULog
   i els hashes són l'evidència.

## Ordre de compra recomanat

1. Seguretat primer: emissora amb kill, bateries, carregador i bosses.
2. X500 amb Pixhawk 6C i el mòdul de potència, per a HIL-1 i POWER-1H.
3. Ordinador de bord i càmera, per muntar el pipeline a taula.
4. Gàbia, xarxa i veritat de terreny, abans del primer vol autònom.
5. AKD1500 M.2 quan existeixi la tasca perceptiva petita per comparar. 129 $ no
   justifiquen avançar l'ordre si no hi ha banc.
6. LiDAR 3D només quan el domini a escala estigui tancat.

## Condició d'ús

Cap component nou no entra directament als motors. La ruta és sempre:

```text
sensor → adaptador → estat WSP → memòria/predicció → gate
       → ordre d'alt nivell → autopilot → actuadors
```

Primer simulació, després hardware-in-the-loop, després gàbia i només finalment
un entorn exterior autoritzat, amb la normativa aplicable complerta i operació
humana d'emergència.

[DRONE-3](/ca/docs/echoai/drone3) · [Traspàs complet a maquinari](/evidence/echo3/DRONE3-HARDWARE-HANDOFF.md) · [Límits](/ca/docs/echoai/limites)

— R.N.
