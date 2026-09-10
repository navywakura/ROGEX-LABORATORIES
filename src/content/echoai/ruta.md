# Hoja de ruta — ECHO-3

ECHO-1 y ECHO-2 están cerrados. ECHO-3 es **plan** hasta que cada fase tenga
banco, controles, informe y cierre reproducible.

## Tesis medible

ECHO-3 será una capa local de decisión para robots que recompone una misión
cuando fallan sus supuestos, administra evidencia y recursos, y permite
auditar cada decisión.

```text
sensores → WSP → evidencia/CAM → T/PATTERN → búsqueda/Q → gate
         → objetivo o setpoint → PX4 → consecuencia → aprendizaje
```

PX4 conserva estabilización, control de motores y failsafes. echoAI escoge
objetivos y acciones de alto nivel. Ningún LLM escribe hechos, memorias,
setpoints aceptados ni motores.

La planificación, el retorno energético y la fusión sensorial no se presentan
como exclusivos. Se medirá si su combinación auditable mejora recuperación,
uso de evidencia y economía de misión frente a controles equivalentes.

## Fases

| Slice | Pregunta que debe cerrar |
|---|---|
| SIM-3 | los mismos binarios ejecutan A/B/C sin filtraciones ni ramas por sala |
| FLIGHT-1 | el cuerpo simulado vuela con dinámica y perturbaciones medidas |
| SENSOR-1 | cámara, IMU y LiDAR entregan tiempo, ruido, pérdida y fuente explícitos |
| GROUND-1 | las observaciones físicas producen WSP sin coordenadas oracle ni segundo bus |
| PATTERN-1R | vistas distintas mantienen identidad de objeto fuera de muestra |
| FUSION-1 | la evidencia independiente conserva desacuerdo y reduce la certeza correcta |
| DYNAMIC-1 | detecta movimiento externo y predice trayectorias cortas |
| **COMPOSE-1** | combina capacidades conocidas para una meta bloqueada sin receta de ruta |
| CAUSE-1 | separa una transición causada por su acto de un cambio externo emparejado |
| PX4-1 | entrega objetivos acotados sin saltarse PID ni failsafes |
| POWER-1 | vuelve o abandona usando coste previsto y margen, además del failsafe de PX4 |
| SAFE-1 | contiene sensores congelados, desconexiones y propuestas erróneas |
| HOST-1 | actualiza el valor de un signo por consecuencias de una fuente |
| TRANSFER-3 | lo aprendido en A mejora B/C frente a scratch sin mapa ni nombre del mundo |
| DRONE-3 | cierra la misión en SITL, HIL y jaula con trazabilidad causal |

## COMPOSE-1 — la meta detrás de la barrera

«La banana detrás de la pared» se traduce a un cuerpo que ECHO-3 realmente
tendrá: una estación de carga visible o recordada, inaccesible por la ruta
directa. El dron debe buscar una entrada, verificar el paso y llegar con
reserva. Si agota el presupuesto, informa `acceso_no_encontrado` y vuelve; no
demuestra que el acceso no exista.

| Evidencia | Respuesta válida |
|---|---|
| vio la estación antes de quedar oculta | conserva su ubicación como creencia con antigüedad y busca cómo verificarla |
| la ve a través de cristal | separa objeto visible de volumen transitable y busca otro acceso |
| una fuente afirma que está detrás | conserva una hipótesis atribuida y busca evidencia |

Ver un objeto por cristal y detectar una pared son observaciones compatibles.
Existe contradicción sólo cuando fuentes comparables afirman valores opuestos
sobre el mismo volumen y tiempo. La ausencia de retorno LiDAR tampoco implica
espacio libre.

```text
meta observable
→ evidencia, fuente, edad y desconocidos
→ alternativas físicamente disponibles
→ consecuencia, incertidumbre y coste previstos
→ gate de choque, evidencia y reserva
→ un siguiente paso
→ consecuencia real y nueva planificación
```

La búsqueda inicial comparará presupuestos de 8 y 32 candidatos y hasta cuatro
capacidades de alto nivel. Son límites para medir, no garantías de solución. Q
puede ordenar alternativas y T/PATTERN respaldar predicciones. Los rollouts son
hipótesis: nunca se escriben en CAM como hechos.

El informe distinguirá composición con affordances conocidas de descubrimiento
por consecuencias. Palo, caja o herramientas quedan para un cuerpo con
manipulación física; activarlos por contacto no demostraría manipulación.

## Mundos y evaluación

- **A:** entrenamiento, selección y depuración.
- **B:** validación congelada; si provoca ajustes, deja de ser confirmación.
- **C:** examen sellado, abierto una vez al final.

Los SDF y manifiestos construyen la verdad física, pero el agente no recibe
mapa, waypoint, nombre, hash, seed ni identificadores que revelen la solución.
En B/C se congelan reglas y parámetros aprendidos; percepción, localización y
seguimiento siguen activos.

COMPOSE-1 se comparará con Q reactiva, búsqueda sin procedencia/caducidad y un
planificador convencional con los mismos sensores y presupuesto. Un planner
con verdad completa se publica sólo como techo oracle. El auditor debe detectar
un mutante que use una receta o el identificador del mundo.

Las restricciones comunes incluyen cero hechos falsos, escrituras imaginadas
en CAM, fugas oracle, bypasses del gate, bypasses del failsafe y setpoints
inadmisibles aceptados dentro del dominio publicado. Después se comparan éxito,
recomposición, colisiones, energía, intervenciones, latencia P99, CPU y memoria.

## Herencia, aborto y lenguaje

GEN-1f sólo hereda `evidence_budget=8`; el hijo nace con CAM, Q, T y PATTERN
vacíos. No hereda mapas, objetos, confianza social ni «azul malo». Abortar una
misión preserva el cuerpo y no equivale a morir.

HOST-1 llega después de COMPOSE-1, cuando ya existe algo físico que pedir. El
valor entero de `fuente + signo + contexto` cambia sólo por consecuencias
observadas. Las órdenes humanas libres y una demo pública más rica quedan para
después del cierre mínimo.

## Frontera posterior

Dentro de ECHO-3 entran los tres mundos geométricos simples, sensores mínimos,
PX4, composición, transferencia congelada, HIL y jaula. Después se ampliarán
la fidelidad visual y aerodinámica, el viento complejo, el número de sensores y
vehículos, las órdenes libres y la transferencia entre morfologías.

AKD1500 M.2 sigue condicionado a disponer de la tarjeta. Podrá acelerar
percepción; Q, T, CAM, VERIFY y gate permanecerán en CPU.

— R.N.
