# echoAI — límites

La política del laboratorio es separar resultados, planes e hipótesis.


## ECHO-3 · 20/09/2026

Verde significa que una versión cumple la pregunta de su banco, con controles y un auditor que puede rechazarla. Las versiones rojas anteriores se conservan. Los B/C de cada componente son sus propias particiones: no cierran el examen sellado de TRANSFER-3. Las pruebas funcionales, los replay y los vuelos SITL tienen denominadores distintos y se publican por separado.

**TRANSFER-3** cerró en verde con campaña sellada: lo aprendido en A mejora B y C frente al mismo agente sin esa experiencia. Es simulación estática de dos paredes; no acredita hardware ni vuelo real.

**DRONE-3** ha cerrado su tramo SITL: la misión completa en una sola sesión PX4/Gazebo, 12/12 en validación y 12/12 en confirmación. El hito exige además hardware-in-the-loop y jaula, y eso sigue pendiente: `drone3_green` es `false` y ECHO-3 queda en 14/15. La batería instrumentada, las latencias sobre hardware real y los fallos combinados en vuelo físico están sin medir.

El dominio certificado usa celdas de tres metros y salas de 21 × 15 m. Una jaula doméstica no admite esa escala: antes de volar en jaula hay que declarar una versión a escala y validarla en simulación.

[Hoja de ruta](/docs/echoai/ruta) · [DRONE-3](/docs/echoai/drone3) · [TRANSFER-3](/docs/echoai/transfer)


## Lo que ECHO-2 no demuestra

- No es inteligencia general ni una persona artificial.
- Reconoce familias simbólicas reservadas; no reconoce objetos en imágenes reales.
- No hace SLAM, control de vuelo ni navegación certificada.
- No opera todavía con ruido, viento, latencia física o sensores incompletos.
- La supervivencia demostrada ocurre en mundos discretos, no en un dron físico.
- No contiene un AKD1500 M.2 ni otro NPU físico.
- No convierte el rendimiento de un mundo sintético en una afirmación de
  seguridad robótica.

## Deuda visible

WALK-1 sin resto entero no propaga valor hasta el objetivo y permanece como
`expectedFailure`. La variante opt-in CREDIT-1 sí camina, pero no se cambió el
algoritmo por defecto.

El Qwen local acertó los ejemplos canónicos de SIGN-C y ganó al stub en
paráfrasis, pero eligió `approach` en dos amenazas no canónicas y recibió
`-16`. Eso demuestra por qué su salida es una propuesta y no una orden segura.

SLEEP-2 consolida 8.208 filas en 144 reglas sin reescribir CAM/T/Q, pero los
mundos siguen siendo pequeños. La GUI 3D representa Body3D; no simula todavía
aerodinámica, IMU, motores, viento ni PID.

## Condiciones para robótica

Antes de volar, ECHO-3 deberá demostrar:

- deadlines y latencia P99 bajo carga;
- sincronización y caducidad de sensores;
- watchdog, retorno y aterrizaje ante pérdida del companion computer;
- veto independiente ante observaciones contradictorias;
- límites de batería, masa, temperatura y vibración;
- registro reproducible de cada decisión;
- simulación, HIL y jaula antes de campo abierto;
- cumplimiento de la normativa aplicable y operación humana de emergencia.

Un modelo neuronal, un LLM o un NPU no será la única barrera contra una
colisión. El autopiloto y los mecanismos de seguridad permanecen separados.

## Akida

No hay AKD1500 M.2 en el laboratorio. **Está previsto para octubre de 2026**,
pero previsto no es presente. Las cifras de consumo o aprendizaje del fabricante
no son resultados de RxLabs. Cuando llegue la placa se publicarán compatibilidad,
modelo exacto, toolchain, potencia medida y comparación contra CPU/Jetson antes
de hablar de ventaja. El coprocesador nunca entrará en VERIFY, en el WSP ni en
la cadena de seguridad.

## Estado de las palabras

- **Hecho:** existe informe reproducible y puerta verde.
- **Rojo medido:** el experimento corre y no alcanza el KPI.
- **Plan:** orden propuesto; todavía no es una capacidad.
- **Ausente:** no existe en el laboratorio.

— R.N.
