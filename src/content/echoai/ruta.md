# ECHO-3 — hoja de ruta

Estado: 18 de septiembre de 2026. **13/15 certificados software; TRANSFER-3 rojo; DRONE-3 pendiente.**

ECHO-3 tiene **13 de 15 hitos con certificado verde en su alcance software**. ECHO-1 y ECHO-2 están cerrados; el programa robótico continúa abierto. Se han probado piezas con controles y auditorías, pero la suma de certificados no equivale a una misión integrada en un robot físico.

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

Verde significa que una versión cumple la pregunta de su banco, con controles y un auditor que puede rechazarla. Las versiones rojas anteriores se conservan. Los B/C de cada componente son sus propias particiones: no cierran el examen sellado de TRANSFER-3. Las pruebas funcionales, los replay y los vuelos SITL tienen denominadores distintos y se publican por separado.

## Los dos hitos pendientes

**TRANSFER-3** debe demostrar una mejora útil de lo aprendido en A sobre entornos nuevos frente al mismo agente sin esa experiencia, sin mapa ni solución transportada. Sigue rojo y sin candidato. La escuela de ganancia aprende exactamente, pero el último piloto seguro B3 llega 51/72 frente a 52/72 nominal y cuesta más, escuela incluida. No pasó a confirmación prospectiva ni abrió B/C real.

**DRONE-3** debe integrar la misión completa con trazabilidad causal en SITL, HIL y jaula. Los certificados de enlace, energía o seguridad no reemplazan ese cierre conjunto. La batería instrumentada, las latencias bajo carga y los fallos combinados tendrán que comprobarse en la integración. No hay hardware robótico ni Akida en el laboratorio; HIL y jaula requieren esa plataforma.

## Qué estamos investigando

La rama de ganancia del Plan B se ha detenido tras el cribado rojo. Otras primitivas y retardos siguen sin evaluar; el Plan C de calibración perceptiva todavía no ha empezado. Cada nueva hipótesis necesita un mecanismo comprobable, controles con la misma información y una regla previa para detenerla. Tener trece verdes permite formular preguntas más precisas; las dos restantes siguen exigiendo sus propios datos.

La ampliación a mundos 3D más ricos y cualquier coprocesador neuromórfico son trabajo futuro. Primero debe cerrarse la transferencia útil y la integración del contrato actual. Hardware ausente se declara ausente.

[Investigación TRANSFER-3](/docs/echoai/transfer) · [ECHO-3: trece fases verdes y dos preguntas abiertas](/articulos/echo3-trece-fases-verdes) · [Datos e informes de origen](/data/echo3-status.json)
