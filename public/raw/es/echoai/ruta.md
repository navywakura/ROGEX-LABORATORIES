# ECHO-3 — hoja de ruta

Estado: 20 de septiembre de 2026. **14/15 certificados software; TRANSFER-3 verde; DRONE-3 con su tramo SITL cerrado y HIL y jaula pendientes.**

ECHO-3 tiene **14 de 15 hitos con certificado verde en su alcance software**, y el decimoquinto, DRONE-3, ha cerrado sólo su tramo de simulación. ECHO-1 y ECHO-2 están cerrados; el programa robótico continúa abierto. La suma de certificados no equivale a una misión en un robot físico: no hay hardware en el laboratorio.

```text
sensor → WSP → CAM/evidence → T/PATTERN → search/Q → gate → PX4 → consequence
```

WSP conserva 16 bytes y es el único bus cognitivo. CAM registra episodios observados; T/PATTERN respaldan predicciones; Q prioriza acciones; el gate acepta, modifica o bloquea. PX4 conserva estabilización y failsafes. El córtex está apagado en estos bancos; un LLM no escribe hechos ni ordena motores.

## Qué demuestra cada verde

| Fase y versión | Resultado y límite |
|---|---|
| [SIM-3](/evidence/echo3/SIM3-RESULTS.md) | Tres mundos declarativos y separación entre evaluador y agente. No entrega mapa, semilla ni solución al consumidor. |
| [FLIGHT-1S v6](/evidence/echo3/FLIGHT1S-V6-RESULTS.md) | Vuelo del X500 en PX4 SITL ante perturbaciones medidas. La estabilización corresponde a PX4; no demuestra decisiones de vuelo de echoAI. |
| [SENSOR-1S v3](/evidence/echo3/SENSOR1S-V3-RESULTS.md) | Cámara, LiDAR e IMU simulados con tiempo, procedencia, ruido, latencia y pérdidas. Algunas geometrías LiDAR quedan fuera de la evaluación de sesgo. |
| [GROUND-1 v2](/evidence/echo3/GROUND1-V2-RESULTS.md) | Traducción de observaciones físicas simuladas a WSP y memoria, con integridad temporal. La memoria es estructural y la ambigüedad vertical tiene límites declarados. |
| [DYNAMIC-1 v2](/evidence/echo3/DYNAMIC1-V2-RESULTS.md) | 29 vuelos; seguimiento de la normal de una cara desde hover y predicción corta. No compensación general del movimiento propio. |
| [PATTERN-1R v4](/evidence/echo3/PATTERN1R-V4-RESULTS.md) | 4591/4866 identidades correctas en banco, 45 confusiones y 230 desconocidos. Dos familias LiDAR; aprendizaje y examen por replay. |
| [FUSION-1](/evidence/echo3/FUSION1-RESULTS.md) | 864 episodios funcionales y 240 ventanas de replay reducido. Conserva procedencia, caducidad y conflicto; no concede permiso de vuelo por sí sola. |
| [COMPOSE-1 v4](/evidence/echo3/COMPOSE1-V4-RESULTS.md) | 6144 misiones funcionales y 32 vuelos nuevos SITL; completo 6/6 metas accesibles, Q reactiva 0/6. Salas extruidas, altura fija y energía abstracta; empata con el convencional en movimientos físicos. |
| [CAUSE-1](/evidence/echo3/CAUSE1-RESULTS.md) | B/C: 16/16 atribuciones correctas frente a 8/16 del control temporal por etapa. Pared plana, intenciones experimentales y predicción nominal. |
| [PX4-1](/evidence/echo3/PX41-RESULTS.md) | B/C: 4/4 vuelos por etapa, 48/48 intentos inválidos bloqueados y cuatro aterrizajes de failsafe. Objetivos norte/sur de un metro, una transacción supervisada. |
| [POWER-1](/evidence/echo3/POWER1-RESULTS.md) | Por etapa B/C, 128/128 metas factibles frente a 64/128 del porcentaje fijo, y 320/320 episodios con reserva. Energía simulada; batería instrumentada pendiente. |
| [SAFE-1 v2](/evidence/echo3/SAFE1-V2-RESULTS.md) | Por etapa B/C, 6/6 vuelos y 512/512 episodios funcionales. Diez aterrizajes nativos PX4 ante fallos; veto máximo 288 ms. Contención dentro del banco, sin seguridad universal. |
| [HOST-1](/evidence/echo3/HOST1-RESULTS.md) | Por etapa B/C, 1536/1536 elecciones útiles frente a 768/1536 del control. Autoridad actualizada por consecuencias; calibración supervisada sobre cinta de máquina, sin confianza humana general. |
| [TRANSFER-3](/evidence/echo3/TRANSFER3-PLAN-C1-RESULTS.md) | Campaña sellada con custodia humana: B 38/0 bloques y C 48/1, cero pérdidas atribuibles a la calibración. Salas estáticas de dos paredes; sin hardware ni vuelo. |

Verde significa que una versión cumple la pregunta de su banco, con controles y un auditor que puede rechazarla. Las versiones rojas anteriores se conservan. Los B/C de cada componente son sus propias particiones: no cierran el examen sellado de TRANSFER-3. Las pruebas funcionales, los replay y los vuelos SITL tienen denominadores distintos y se publican por separado.

## DRONE-3: SITL cerrado, físico pendiente

[DRONE-3](/docs/echoai/drone3) integra la misión completa en una sola sesión PX4/Gazebo por vuelo: percepción, evidencia con la calibración transferida de TRANSFER-3, composición, gate epistémico, gate energético, supervisor SAFE, pasarela de objetivos acotados y PX4 con sus failsafes. Validación y confirmación salen 12/12 en salas frescas, con cero colisiones y cero restricciones duras violadas; once mutantes detectados y ocho manipulaciones rechazadas.

Eso cierra el tramo SITL y **nada más**. El hito 15 exige también hardware-in-the-loop y jaula, y ahí `drone3_green` sigue en `false`. La batería instrumentada, las latencias sobre hardware real y los fallos combinados en vuelo físico están por medir.

## Qué viene ahora

El trabajo deja de ser software. La lista de compra con precios, el montaje, la lista previa de seguridad y las demostraciones previstas están en [hardware previsto](/docs/echoai/hardware): FLIGHT-1H, SENSOR-1H, PX4-1H, POWER-1H y después DRONE-3H, cada uno con su contrato. El AKD1500 M.2 está previsto para octubre y su primer banco será una comparación medida contra CPU y Jetson.

Un aviso que ya está publicado: el dominio certificado usa celdas de tres metros y salas de 21 × 15 m, que no caben en una jaula doméstica. La versión a escala deberá validarse antes en simulación.

[DRONE-3](/docs/echoai/drone3) · [TRANSFER-3](/docs/echoai/transfer) · [DRONE-3: la misión entera, en simulación](/articulos/drone3-mision-integrada-sitl) · [Datos e informes de origen](/data/echo3-status.json)
