# ECHO-3 ha pasado la mitad

> Archivo del 14/09/2026. El estado actual es 14/15 certificados software, TRANSFER-3 verde y DRONE-3 cerrado en SITL. [Actualización del 20/09](/articulos/drone3-mision-integrada-sitl).

> 8 de 15 fases de software cerradas · 14 de septiembre de 2026

ECHO-3 ya no es una lista de piezas imaginadas. Es un banco de decisión para un cuerpo simulado: percibe señales con fuente y tiempo, conserva lo observado, prueba un siguiente paso, comprueba qué ocurrió y deja una traza que se puede recalcular.

La idea cabe en una línea:

```text
sensor → WSP → memoria/evidencia → predicción y búsqueda → gate → PX4 → consecuencia
```

No hay un modelo de lenguaje dirigiendo motores. El paquete WSP de 16 bytes transporta el hecho operativo; CAM conserva episodios; T anticipa; Q ordena alternativas; y el gate decide si el siguiente paso puede salir. PX4 sigue siendo quien estabiliza el vehículo y aplica sus protecciones.

## Qué corre ya

Las ocho fases cerradas cubren el suelo sobre el que se construye una misión:

| Fase | Qué ya demuestra el banco |
|---|---|
| SIM-3 | Tres salas A/B/C se ejecutan desde manifiestos declarativos sin enseñar al agente el mapa, la semilla ni la respuesta. |
| FLIGHT-1S | El X500 simulado despega, mantiene posición y recupera estabilidad ante perturbaciones medidas. |
| SENSOR-1S | Cámara, LiDAR e IMU entregan observaciones con tiempo, ruido, latencia, pérdida y procedencia. |
| GROUND-1 | Esas observaciones entran en el único WSP y en la memoria del agente, sin una coordenada oracle escondida. |
| DYNAMIC-1 | El agente separa un objeto que cambia de una escena quieta y mantiene una predicción corta. |
| PATTERN-1R | La identidad no depende de una vista exacta: la misma pieza puede reaparecer desde otra posición. |
| FUSION-1 | Dos sensores que discrepan siguen siendo dos evidencias. El agente baja su certeza y no inventa el hueco. |
| COMPOSE-1 | Ante una meta bloqueada, compone alternativas conocidas, verifica cada paso y vuelve a planificar. |

La última prueba es la más fácil de entender. Hay una estación visible pero la ruta directa está cerrada. El agente no recibe la instrucción «gira a la izquierda». Recupera dónde la vio, compara los accesos disponibles, estima el coste del siguiente movimiento y sólo ejecuta el que pasa el gate. Si el acceso no aparece dentro del presupuesto, termina con `acceso_no_encontrado` y vuelve.

El cierre de COMPOSE-1 dejó 6.144 misiones funcionales en B/C. En la parte física simulada, seis metas alcanzables se cerraron 6/6 con composición y 0/6 sin horizonte; también hay 32 vuelos nuevos de PX4 SITL. El planificador convencional igualó la distancia física en ese escenario. Se publica así porque el objetivo no es declarar una victoria por etiqueta: es saber exactamente qué parte del contrato aporta cada resultado.

## Cómo se programa y se comprueba

Cada fase empieza con una pregunta pequeña, una métrica y un control. La sala A sirve para construir. B valida parámetros congelados. C queda sellada hasta el examen. El manifiesto crea paredes, sensores y condiciones del mundo; ese mismo manifiesto nunca se entrega como memoria al agente.

Después se lanzan controles que quitan una causa cada vez: una política reactiva, un horizonte de una acción, un planificador convencional y mutantes que intentan filtrar el mapa o saltarse la verificación. El informe conserva las semillas, los hashes, las trazas y el resultado rojo cuando aparece. Un verde no se obtiene moviendo la portería después de mirar la corrida.

## La segunda mitad

CAUSE-1 es el siguiente paso: emparejar dos escenas para que el agente pueda distinguir «esto cambió porque yo actué» de «esto cambió fuera de mí». Después llegan la entrega de objetivos acotados a PX4, la energía prevista, los fallos de sensores, los signos con un operador, la transferencia A→B/C y el cierre del cuerpo de dron en SITL, HIL y jaula.

Cuando esa cadena esté completa, el siguiente salto será un mundo 3D más rico: geometría hecha en Blender, rutas nuevas, objetos móviles, IMU, motores, PID, aerodinámica y viento. El trabajo actual no se sustituye; es el contrato que hará posible comprobar ese mundo sin convertir una escena bonita en una afirmación vacía.
