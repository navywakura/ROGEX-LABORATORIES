# Hardware previsto

Actualizado: 20 de septiembre de 2026. Hoy echoAI cierra software y PX4 SITL:
[DRONE-3](./drone3) ha demostrado la misión completa en simulación. Lo que falta
es físico. Esta página lista lo que hay que comprar, cuánto cuesta, cómo se monta
y qué demostraciones están previstas. **Nada de esto es hardware operativo
todavía: son compras candidatas.**

## Qué falta exactamente

El hito 15 exige tres tramos: simulación, hardware-in-the-loop y jaula. El
primero está cerrado. Los otros dos necesitan un controlador de vuelo real, un
cuerpo, sensores, energía medida y verdad de terreno externa para juzgar sin
creerle al propio agente.

Tres diferencias obligan a trabajo nuevo, y conviene decirlas antes de gastar:

1. **Escala.** El dominio certificado usa celdas de 3 m y salas de 21 × 15 m.
   Una jaula doméstica no admite esa escala, y las constantes de percepción están
   congeladas. Hará falta una versión a escala, por ejemplo de 1 m, validada
   primero en simulación con semillas nuevas.
2. **Sensores.** El agente espera LiDAR 2D de 360°, cuatro vistas de profundidad
   y RGB con sellos de captura y entrega. Un kit real distinto exige repetir
   SENSOR-1 y GROUND-1 sobre el sensor real.
3. **Energía.** En simulación la energía es carga simulada, porque el PX4 fijado
   publica corriente −1 A. Con hardware, POWER debe medirse en carga real con un
   módulo de potencia, y recalibrarse.

## Coste

Precios de tienda consultados el 20 de septiembre de 2026, en dólares, **sin
impuestos ni envío**. Los marcados como estimación no están verificados y sirven
sólo de orden de magnitud.

### Tramo 1 · Hardware-in-the-loop

| Elemento | Para qué | Precio |
|---|---|---|
| [Holybro PX4 Development Kit X500 v2](https://holybro.com/products/px4-development-kit-x500-v2) con Pixhawk 6C, GPS M10 y telemetría | cuerpo y controlador de vuelo, el mismo airframe del simulador | desde 533 $ |
| [RadioMaster TX16S](https://radiomasterrc.com/collections/tx16s) con receptor ELRS | control manual y **parada de emergencia humana** | ~250 $ |
| Baterías 4S/6S ×3, cargador balanceador y bolsas ignífugas | vuelos repetibles y márgenes comparables | 200–300 $ (estimación) |
| Módulo de potencia con medida de corriente (PM02D o equivalente) | POWER en carga real, no simulada | 50–70 $ (estimación) |
| [Jetson Orin Nano Super Developer Kit](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/nano-super-developer-kit/) | ordenador de a bordo: agente enjaulado, supervisor y puertas | 399 $ |
| Cableado, convertidores DC, NVMe y repuestos | montaje y registro | ~200 $ (estimación) |
| **Subtotal** | | **≈ 1.630–1.750 $** |

El Jetson salió a 249 $ en diciembre de 2024; NVIDIA subió los precios de la
gama en julio de 2026 y hoy figura a 399 $.

### Tramo 2 · Jaula

| Elemento | Para qué | Precio |
|---|---|---|
| [Luxonis OAK-D Pro](https://shop.luxonis.com/products/oak-d-pro) | RGB, estéreo, profundidad e IMU con obturador global | 399 $ |
| LiDAR 2D de 360° (clase LD19 o RPLIDAR) | geometría, familia independiente de la cámara | 100–350 $ (estimación) |
| Red o jaula cerrada y anclajes | recinto físico, además de la geocerca de PX4 | 300–600 $ (estimación) |
| Verdad de terreno: cámara cenital con marcadores o captura de movimiento | el juez privado necesita pose real; el agente nunca la ve | 150–300 $ con marcadores; miles con mocap |
| **Subtotal** | | **≈ 950–1.650 $** |

### Opcionales y futuros

| Elemento | Para qué | Precio |
|---|---|---|
| [BrainChip AKD1500 M.2 B+M Key](https://shop.brainchipinc.com/collections/all) | coprocesador neuromórfico para una cabeza perceptiva pequeña | **129 $**, en stock; **previsto para octubre de 2026** |
| [Livox Mid-360](https://www.livoxtech.com/mid-360) | nube 3D de 360° para mundos más ricos | ~734 $ en distribuidor; Livox anuncia el Mid-360S como sustituto |
| [Crazyflie 2.1 Brushless](https://store.bitcraze.io/products/crazyflie-2-1-brushless) con Flow Deck | banco interior de bajo riesgo para enlace y watchdog | ~400 $ (estimación) |

**Total para llegar a la jaula: del orden de 2.600 a 3.400 $**, sin impuestos ni
envío, más el AKD1500 si se compra en octubre.

## Cómo se monta

```text
[sensores] ──USB/UART──> [ordenador de a bordo]
                           ├─ jaula bwrap: agente (WSP + predicción)
                           ├─ supervisor SAFE + gates epistémico y energético
                           └─ pasarela de celdas ──MAVLink serie──> [Pixhawk PX4 v1.15.4]
                                                                     └─ ESC y motores (sólo PX4)
[emisora con kill] ──────────────────────────────────────────────────> [Pixhawk]
[telemetría del operador] <── sólo lectura ── [Pixhawk]
[verdad de terreno] ──> juez privado, fuera del ordenador de a bordo
```

Reglas de montaje que no se negocian:

- El firmware debe ser **PX4 v1.15.4**, la misma versión del simulador. Otra
  versión obliga a repetir PX4-1.
- El agente nunca corre en el controlador de vuelo, y nunca toca motores,
  modos, parámetros ni armado.
- Geocerca de PX4 estrictamente dentro de la jaula, y con margen al techo.
- Orden de autoridad: **humano con kill > PX4 y sus failsafes > supervisor SAFE
  > agente**. El kill no depende de ningún software de echoAI.
- Tras un veto del supervisor, el operador no envía órdenes de rescate: si lo
  hace, el vuelo se registra como intervención humana y no cuenta como
  contención nativa.

El kit X500 se monta en torno a media hora y sin soldar. El trabajo real está en
el cableado del ordenador de a bordo, la calibración de sensores y la
sincronización de relojes con la verdad de terreno.

## Demostraciones previstas

Son planes, no resultados. Cada una tendrá contrato previo, controles, auditoría
y límites publicados, igual que las anteriores.

1. **HIL-1 · la misma misión con el controlador real en el bucle.** Sensores
   simulados, Pixhawk físico. Mismos criterios que el tramo SITL y denominador
   propio. Sirve para separar «el código funciona» de «el enlace y los tiempos
   funcionan sobre hardware».
2. **POWER-1H · energía medida.** Con el módulo de potencia, recalibrar los
   costes por paso, retorno y aterrizaje en carga real y repetir el banco de
   reserva. Aquí es donde la energía deja de ser simulada.
3. **JAULA-1 · la misión a escala, volando de verdad.** Dominio a escala
   validado antes en simulación, verdad de terreno externa y las cuatro
   condiciones: misión accesible, reserva insuficiente, contradicción del mundo
   y fallo integrado. Cero contactos con la red es criterio; cualquier kill
   humano hace el vuelo rojo con su causa registrada.
4. **AKIDA-1 · el coprocesador, medido.** Con el AKD1500 M.2 previsto para
   octubre: una cabeza perceptiva pequeña comparada contra CPU y Jetson sobre el
   mismo conjunto de datos, publicando exactitud, latencia P99, potencia medida
   y degradación al desconectarlo. No entrará en VERIFY, ni en el WSP, ni en la
   cadena de seguridad. Las cifras del fabricante no son resultados nuestros.
5. **Vídeo y registros públicos de cada una**, con los mismos hashes y ficheros
   crudos que ya se publican del simulador. El vídeo ilustra; el JSON, el ULog y
   los hashes son la evidencia.

## Orden de compra recomendado

1. Seguridad primero: emisora con kill, baterías, cargador y bolsas.
2. X500 con Pixhawk 6C y el módulo de potencia, para HIL-1 y POWER-1H.
3. Ordenador de a bordo y cámara, para montar el pipeline en mesa.
4. Jaula, red y verdad de terreno, antes del primer vuelo autónomo.
5. AKD1500 M.2 cuando exista la tarea perceptiva pequeña que comparar. 129 $ no
   justifican adelantar el orden si no hay banco.
6. LiDAR 3D sólo cuando el dominio a escala esté cerrado.

## Condición de uso

Ningún componente nuevo entra directamente en motores. La ruta es siempre:

```text
sensor → adaptador → estado WSP → memoria/predicción → gate
       → orden de alto nivel → autopiloto → actuadores
```

Primero simulación, después hardware-in-the-loop, luego jaula y sólo finalmente
un entorno exterior autorizado, con la normativa aplicable cumplida y operación
humana de emergencia.

[DRONE-3](./drone3) · [Traspaso completo a hardware](/evidence/echo3/DRONE3-HARDWARE-HANDOFF.md) · [Límites](./limites)

— R.N.
