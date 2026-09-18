# ECHO-AI — resultados ECHO-1 frente a ECHO-2

ECHO-1 y ECHO-2 están cerrados. Esta página separa sus resultados para mostrar
la evolución sin mezclar bancos distintos en una puntuación de inteligencia.
Cada cifra conserva su control, denominador e informe de origen.

## ECHO-3 · estado actual

ECHO-3 tiene **13 de 15 hitos con certificado verde en su alcance software**. ECHO-1 y ECHO-2 están cerrados; el programa robótico continúa abierto. Se han probado piezas con controles y auditorías, pero la suma de certificados no equivale a una misión integrada en un robot físico.

- **CAUSE-1** — B/C: 16/16 atribuciones correctas frente a 8/16 del control temporal por etapa. Pared plana, intenciones experimentales y predicción nominal.
- **PX4-1** — B/C: 4/4 vuelos por etapa, 48/48 intentos inválidos bloqueados y cuatro aterrizajes de failsafe. Objetivos norte/sur de un metro, una transacción supervisada.
- **POWER-1** — Por etapa B/C, 128/128 metas factibles frente a 64/128 del porcentaje fijo, y 320/320 episodios con reserva. Energía simulada; batería instrumentada pendiente.
- **SAFE-1 v2** — Por etapa B/C, 6/6 vuelos y 512/512 episodios funcionales. Diez aterrizajes nativos PX4 ante fallos; veto máximo 288 ms. Contención dentro del banco, sin seguridad universal.
- **HOST-1** — Por etapa B/C, 1536/1536 elecciones útiles frente a 768/1536 del control. Autoridad actualizada por consecuencias; calibración supervisada sobre cinta de máquina, sin confianza humana general.

**TRANSFER-3** debe demostrar una mejora útil de lo aprendido en A sobre entornos nuevos frente al mismo agente sin esa experiencia, sin mapa ni solución transportada. Sigue rojo y sin candidato. La escuela de ganancia aprende exactamente, pero el último piloto seguro B3 llega 51/72 frente a 52/72 nominal y cuesta más, escuela incluida. No pasó a confirmación prospectiva ni abrió B/C real.

**DRONE-3** debe integrar la misión completa con trazabilidad causal en SITL, HIL y jaula. Los certificados de enlace, energía o seguridad no reemplazan ese cierre conjunto. La batería instrumentada, las latencias bajo carga y los fallos combinados tendrán que comprobarse en la integración. No hay hardware robótico ni Akida en el laboratorio; HIL y jaula requieren esa plataforma.

[Hoja de ruta](/docs/echoai/ruta) · [Investigación TRANSFER-3](/docs/echoai/transfer) · [Datos e informes de origen](/data/echo3-status.json)

## ECHO-1 · memoria, acción y transferencia

| Medida | Resultado |
|---|---:|
| Pruebas de aceptación | 488 |
| Traza canónica | 352 turnos |
| Predicción T conocida | 99,68 % sobre 312 turnos |
| PatternMemory | 80/80 frente a T 40/80 |
| Transferencia entre mundos | +128 agregado frente a scratch |
| Integridad | 0 hechos falsos · 0 memorias destruidas |

La política ante peligro pasa de `[0,0,0]` a `[-12,+5,0]` para acercarse,
evitar y esperar. ECHO-1 también cierra objetos, apertura, entrega, conflicto
cortical controlado y narración sin escrituras causales.

## ECHO-2 · supervivencia, tiempo y herencia

| Medida | Resultado |
|---|---:|
| Informes de cierre verdes | 8 |
| Monitor neuronal seleccionado | 512 LIF + 128 Adaptive-LIF |
| PATTERN-1 reservado | 32/32 frente a exact-match 0/32 |
| STREAM-1 | 4.608 frames · 4.512/4.512 predicciones conocidas |
| SLEEP-2 | 8.208 filas → 144 reglas · 720/720 frente a T 0/720 |
| GEN-1f | 360 errores tardíos frente a 602 del naïf |
| HEAT-1b | 20.786 turnos frente a 7.221 sin temperatura |
| Integridad | WSP 16 B · 0 hechos falsos · 0 memorias destruidas |

ECHO-2 conserva ECHO-1 y añade muerte y reaparición, aprendizaje de alimento y
veneno, supervivencia conservando memoria, cambio de distribución, patrones
sin ids de objeto o posición, flujo, consolidación, herencia de una
predisposición y regulación conjunta de energía y temperatura.

## Comparación causal de capacidad

| Examen | Referencia ECHO-1 / control | ECHO-2 | Cambio |
|---|---:|---:|---:|
| Firmas perceptivas reservadas | 256 LIF: 829/2.048 | 512 LIF: 2.048/2.048 | +1.219 |
| Discriminación temporal, 640 neuronas totales | 640 LIF: 0/256 | 512 LIF + 128 ALIF: 256/256 | +256 |
| Escala ejercitada | núcleo: 352 turnos | STREAM-1: 4.608 frames | ×13,09 |

Las dos primeras filas proceden de CAPACITY-1 y eliminan o barajan la causa que
se quiere comprobar. La tercera usa cargas diferentes: muestra escala de
secuencia ejercitada, no precisión comparable. La arquitectura neuronal es un
monitor perceptivo; Q y el gate siguen tomando la decisión causal.

## Cómo leer el resultado

ECHO-1 demuestra el ciclo base: representar, recordar, predecir, decidir,
actuar y aprender. ECHO-2 demuestra que ese ciclo puede mantenerse a través de
vidas, señales internas y secuencias más largas. Todavía no demuestra física de
vuelo, sensores reales, PX4, un dron físico ni AKD1500; esos pasos pertenecen a
ECHO-3.

La versión interactiva de esta ruta incluye las dos versiones lado a lado,
gráficas de comparación, las fases ECHO-2 y el reproductor real de los 352
turnos ECHO-1.

- [Descargar datos ECHO-1](/data/echo1-benchmark.json)
- [Descargar datos ECHO-2](/data/echo2-benchmark.json)
- [Ver la demostración ECHO-2](/docs/echoai/echo2)

— R.N.
