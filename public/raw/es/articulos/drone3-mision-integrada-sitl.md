# DRONE-3: la misión entera, en simulación

20 de septiembre de 2026 · RxLabs®

En dos días han caído los dos hitos que quedaban abiertos de ECHO-3, y conviene
decir exactamente qué significa cada uno. **TRANSFER-3 cerró en verde el 19 de
septiembre**, con campaña sellada y custodia humana. **DRONE-3 cerró su tramo
SITL el 20**. ECHO-3 **no** está completo: el hito 15 exige simulación,
hardware-in-the-loop y jaula, y en el laboratorio no hay ni controlador de vuelo
ni dron.

## Qué se ha medido

Un vuelo de DRONE-3 es una sesión única de PX4 v1.15.4 con Gazebo. Dentro de
ella el agente percibe, recuerda, decide, pide un objetivo acotado, espera a que
PX4 lo confirme físicamente y vuelve a observar. No hay reinicios entre
capacidades ni concatenación de repeticiones: la unidad experimental es la
misión entera.

Doce vuelos en validación y doce en confirmación, en salas nuevas cuya geometría
nunca se había volado:

- **12/12 y 12/12** vuelos correctos;
- 6/6 misiones factibles alcanzadas por etapa;
- 3/3 abortos correctos cuando la reserva no daba;
- 3/3 fallos contenidos, con PX4 aterrizando por su propio failsafe de enlace;
- cero colisiones, holgura mínima 1.247 mm;
- cero violaciones de las restricciones duras: hechos falsos, escrituras
  imaginadas, fugas del oráculo, saltos de gate, saltos de failsafe y setpoints
  inseguros aceptados.

Certificado `c44402df…`, con `drone3_sitl_green=true` y una segunda auditoría en
proceso nuevo que lo reproduce.

## Por qué los controles importan más que el resultado

Un sistema que se declara a sí mismo correcto no demuestra nada. Estos son los
contrastes, calculados sobre las mismas observaciones grabadas:

Un enlace que confundiera el ACK de MAVLink con la llegada habría cantado
llegada en **147 de 147** transacciones mientras el cuerpo seguía a unos tres
metros del objetivo. Un planificador que ignorara la evidencia habría enviado
**51 órdenes** hacia celdas realmente ocupadas; el gate epistémico las bloquea
todas. El clásico «vuelve cuando la batería baje del 20 %» discrepa del coste
previsto en 13 decisiones. Y el supervisor sin comprobación de vida del agente
sencillamente no vetaría un agente colgado.

Además, once mutantes de código y ocho manipulaciones de traza: todos
detectados, todas rechazadas por la auditoría.

## Lo que salió mal por el camino

Un revisor independiente, en sólo lectura y antes de congelar, encontró siete
fallos de rigor. El más grave: la partición de validación incluía una geometría
ya usada en los pilotos, es decir, **B no era del todo ciega**. También que la
contradicción del mundo se disparaba por reloj sin comprobar que el agente
hubiera visto la abertura abierta, que la prueba de manipulaciones no podía
fallar por construcción y que la auditoría no ataba cada propuesta enviada a la
intención del agente.

Todo eso se corrigió antes de volar B. Lo contamos porque una revisión que no
encuentra nada normalmente no ha mirado.

También hubo correcciones nacidas del propio simulador: el latido de PX4 debía
medirse en tiempo simulado —la simulación corre a 0,48–0,89 de tiempo real y la
regla heredada rechazaba latidos vivos—, y la reserva al tocar suelo es el
mínimo de la ventana de aterrizaje, porque PX4 rellena su batería simulada al
desarmar.

## Qué no dice este certificado

No dice nada sobre vuelo real. La energía es carga simulada que baja con el
tiempo armado, no julios medidos: el PX4 fijado publica corriente −1 A. El mundo
es estático salvo la intervención declarada, las celdas miden 3 m y la altura es
fija. La coordenada de la estación se entrega como hipótesis exacta.

`drone3_hil_green`, `drone3_cage_green` y `drone3_green` siguen en `false`.

## Lo siguiente es físico

La lista de compra, el montaje, la lista previa de seguridad y el procedimiento
de examen están publicados. El orden es FLIGHT-1H, SENSOR-1H, PX4-1H, POWER-1H y
después DRONE-3H. El **AKD1500 M.2 de BrainChip está previsto para octubre**, y
su primera prueba será una cabeza perceptiva pequeña comparada contra CPU y
Jetson sobre el mismo dataset: exactitud, latencia P99, potencia medida y qué
pasa al desconectarlo. Nada de TOPS de folleto.

Hay un detalle incómodo que también está publicado: el dominio certificado usa
celdas de 3 m y salas de 21 × 15 m, y eso no cabe en una jaula doméstica. Antes
de volar en jaula habrá que declarar una versión a escala y validarla primero en
simulación.

[DRONE-3 en detalle](/docs/echoai/drone3) · [Hardware previsto y costes](/docs/echoai/hardware) · [TRANSFER-3](/docs/echoai/transfer) · [Informe](/evidence/echo3/DRONE3-RESULTS.md)
