# DRONE-3 — la misión completa, en SITL

Estado: 20 de septiembre de 2026. **Tramo SITL verde. HIL y jaula pendientes de
hardware, así que el hito sigue abierto.**

DRONE-3 es la pregunta final de ECHO-3: ¿puede el sistema integrado ejecutar de
principio a fin una misión de estación de carga bloqueada, con sensores
públicos, y dejar una cadena causal reconstruible, sin mapas ocultos y sin
saltarse los failsafes del autopiloto?

La respuesta medida es **sí en simulación**, con el detalle y los límites de
abajo. No es sí en un dron real: en el laboratorio no hay controlador de vuelo,
dron, sensores ni jaula.

## Qué ocurre en un vuelo

Una sola sesión de PX4 v1.15.4 y Gazebo por vuelo. Nada se reinicia entre
capacidades: despegue, percepción, decisión, desvío, llegada o aborto, retorno,
aterrizaje y desarme ocurren seguidos.

```text
observación asentada (LiDAR, 4 profundidades, RGB, estimador PX4, batería)
  → percepción → evidencia FUSION con la calibración C1 transferida
  → POWER decide continuar, volver o aterrizar → COMPOSE compone la ruta
  → WSP de 16 bytes + predicción publicada antes de actuar
  → gate epistémico → gate energético → supervisor SAFE → pasarela PX4
  → ACK ≠ llegada: tres muestras asentadas
  → observación siguiente → atribución → replanificación
```

El agente corre enjaulado, sin red, sin repositorio y sin mundo. Recibe
observaciones públicas y devuelve un WSP; nada más cruza a ejecución. PX4
conserva PID, estimador, modos y failsafes.

## Resultado

Doce vuelos en validación y doce en confirmación, en salas y semillas frescas,
sin ninguna geometría usada antes en el banco.

| Medida | Validación | Confirmación |
|---|---|---|
| Vuelos correctos | 12/12 | 12/12 |
| Misiones factibles alcanzadas | 6/6 | 6/6 |
| Abortos correctos por reserva | 3/3 | 3/3 |
| Fallos contenidos | 3/3 | 3/3 |
| Colisiones | 0 | 0 |
| Holgura mínima al obstáculo | 1.247 mm | 1.259 mm |
| Llegada real p50/p99 | 200 / 357 mm | 186 / 360 mm |
| Veto tras el fallo | 207–1.009 ms | 167–1.017 ms |
| Desarme tras el veto | 21,1–23,1 s | 19,9–30,7 s |
| Sondas de rechazo bloqueadas | 228/228 | 228/228 |
| Restricciones duras | todas 0 | todas 0 |

Cuatro condiciones por sala: misión accesible, reserva insuficiente,
contradicción de transitabilidad y fallo integrado. La contradicción se dispara
por evidencia, no por reloj: la abertura se cierra en la primera observación en
que el agente la ha visto abierta desde el lado de casa, y la decisión tomada
sobre ese mundo se descarta sin ejecutarse.

## Controles

Ningún control se vuela. Todos se calculan sobre las observaciones, la batería
y la salud ya grabadas:

- un enlace que tomara el ACK por llegada habría declarado llegada en 147 de
  147 transacciones de validación con el cuerpo a unos 3 m del objetivo;
- un planificador sin evidencia habría enviado 51 órdenes hacia celdas
  realmente ocupadas; el gate epistémico bloquea todas;
- el porcentaje fijo de batería difiere del coste previsto en 13 decisiones;
- SAFE sin vida del agente no vetaría el cuelgue, y sin enclavamiento admitiría
  las dos sondas de recuperación posteriores al veto;
- en el gemelo funcional de las mismas salas, la Q reactiva no alcanza ninguna
  meta.

Once mutantes de código detectados y ocho manipulaciones de traza rechazadas
por la propia auditoría, incluida una propuesta sustituida con objetivo y
predicción coherentes.

## Cómo se comprueba

- Contrato escrito antes de abrir validación, con criterios, semillas y
  mutantes fijados.
- Lock por hash del código, la tabla de energía, el modelo de COMPOSE y la
  procedencia de la calibración C1.
- Auditoría que reconstruye el agente, el supervisor, las puertas, la pasarela,
  la lease y las sondas desde las trazas, y las contrasta con el ULog de PX4 y
  con la pose privada del simulador.
- Segunda auditoría en proceso nuevo: reproduce el mismo certificado.

Certificado `c44402df…`, lock `094bc35f…`.

## Lo que no demuestra

- No hay hardware: `drone3_hil_green`, `drone3_cage_green` y `drone3_green`
  son `false`. ECHO-3 sigue en 14/15.
- La energía es carga simulada que baja con el tiempo armado: el PX4 fijado no
  publica corriente. No son julios medidos.
- Mundo estático salvo la intervención declarada, sensores sin ruido real,
  celdas de 3 m y altura fija.
- La coordenada de la estación se entrega como hipótesis exacta; no se prueba
  buscarla con una hipótesis equivocada.
- HOST-1 no participa; DYNAMIC-1 y PATTERN-1R no se declaran integrados.
- Tres vuelos por condición y etapa: los intervalos describen este banco, no
  fiabilidad de producción.

[Informe completo](/evidence/echo3/DRONE3-RESULTS.md) ·
[Contrato prospectivo](/evidence/echo3/DRONE3-DESIGN.md) ·
[Traspaso a hardware](/evidence/echo3/DRONE3-HARDWARE-HANDOFF.md) ·
[Hoja de ruta](/docs/echoai/ruta) · [Hardware previsto](/docs/echoai/hardware)
