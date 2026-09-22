# ECHO-4 — resumen público de estado y evidencia

2026-09-22. Instantánea editorial de los informes del laboratorio; no es un nuevo certificado ni una campaña ejecutada para este artículo.

Este resumen acompaña al roadmap v2. Los conteos corresponden a bancos distintos: no sumarlos como una única campaña. Se publican resultados y límites, no checkpoints físicos privados ni datos reservados de experimentos futuros. Los hashes identifican artefactos; por sí solos no demuestran corrección ni constituyen firmas.

## WORLD

Implementado. Censo de 16.002 estados vivos, 48.006 transiciones y núcleo de viabilidad de 15.954 estados. El agente inicial termina por calor tras 37 acciones. Existen 32 clases de observación viva con ambigüedad dinámica. El censo prueba viabilidad con información completa, no mantenimiento autónomo aprendido.

Informe público previo: [WORLD1-20260921.md](WORLD1-20260921.md).

## SENSATION

Cierre nominal. Predicción con historia de dos pasos:

| Fase | Historia | Predictor T | Diferencia |
|---|---:|---:|---:|
| B | 22.052/25.781 | 21.834/25.781 | +218 |
| C | 22.418/26.030 | 22.215/26.030 | +203 |

145 pruebas en su cierre y auditoría válida. No concede identificación causal.

Identidad de campaña: `96f2deaeefdc40a38d45710dc732106f68295d7a81553bef4b6e554a8f8d1b88`.

## BOUNDARY

En B y C, 1.408/1.408 máscaras de influencia correctas, frente a 778 y 765 del control de coincidencia. Cero influencias falsas en ese banco; 512/512 abstenciones ante evidencia inválida por fase. 179 pruebas en su cierre.

Alcance: ensayos virtuales pareados y restaurados por un ejecutor confiable. No demuestra pertenencia corporal general ni control causal fuera de ese protocolo.

Identidad: `48789bd52dd733f4f278c09160894d5869530ad0ecfeebe21735ab06e43641f6`.

## SELF final

Fuente del laboratorio: `docs/ECHO4-SELF1-FINAL-RESULTS.md`, campaña `lab/echo4/self1-final-v1/`.

Dominio cerrado: `WORLD1-binary-couplings-single-pulse-v1`. Diagnóstico confirmado 80/80 en cada A/B/C. 329 pruebas pasaron. Replay completo en proceso nuevo verificó A/B/C y seis cadenas de evidencia previas. El recibo final concede `self1_green=true`; el informe de campaña conserva deliberadamente `self1_green=false` porque no se autocertifica.

| Reutilización, objetivos de 240 | A | B | C |
|---|---:|---:|---:|
| Selectivo | 186 | 189 | 193 |
| Sin protección | 148 | 152 | 143 |
| Congelar todo | 136 | 144 | 148 |
| Sin T al decidir | 80 | 96 | 84 |

Límites materiales:

- En causas mixtas persisten 54/144, 51/144 y 47/144 objetivos fallidos en A/B/C.
- Vida de 24 pasos: A completa 40/44 condiciones viables; B y C 40/40. Las cuatro paradas viables de A no son vidas completadas.
- Dentro del dominio no hay muertes del selectivo; **fuera del prior hay 3/4/4 terminalidades**. Abstenerse después del daño no equivale a prevenirlo.
- Hay 48/48 pruebas de abstención por fase. Se mantiene un contraejemplo de causas distintas con observaciones indistinguibles.
- La restauración corporal es tarea del ejecutor, no autorreparación.
- SELF-C v1 roja y SELF-C v2 con cierre acotado permanecen conservadas.

Identidad final: `98ffc1ca438171a9bfb6a3926f5d3eef142f9338bc04827e311fc2bedec1a463`.

## CONT-A, no CONTINUITY completo

Fuente: `docs/ECHO4-CONTINUITY1-A-RESULTS.md`; campaña `lab/echo4/continuity1-a-v1/`.

29 pruebas nuevas. Cinco escenarios nominales: 52/52 pasos posteriores idénticos entre continuación y restauración en proceso nuevo; el caso terminal tiene cero pasos posteriores y no resucita. Checkpoints al terminar turnos completos: no captura concurrente, recuperación activa o garantía ante pérdida de energía.

Batería amplia: 805 casos. El primer intento encontró ocho errores de permisos de sockets GUI; una repetición autorizada de los grupos afectados pasó 29/29. Resultado combinado: 804 aprobadas y un fallo esperado histórico, no una única ejecución inicial íntegramente verde.

Estado: `development_passed=true`, verificación `valid=true` y `findings=[]`; **`continuity1_green=false`**. Las 50 fuentes selladas por SELF mantienen sus hashes; no es una repetición de su campaña.

Reproducción desde el repositorio ECHO, con los artefactos del laboratorio:

```bash
PYTHONPATH=.. python3 -m unittest echoai.tests.test_echo4_continuity1 -v
PYTHONPATH=.. python3 -m echoai.echo4.continuity_bench verify lab/echo4/continuity1-a-v1
```

El sitio publica este resumen, no el paquete completo de reproducción ni los checkpoints privados. Reproducir requiere obtener por separado el código y los artefactos indicados; no se presenta esta página como auditoría externa independiente.

## No implementado ni certificado aquí

CONT-B/C/D, DREAM-A/B/C/D, MAINTAIN, OTHER, INTERACTION, RELATION, ROLES e INTEGRATE. Hardware y METAVERSE-1 posteriores. No se ha medido eficacia de Qwen para DREAM ni mejora de sus pesos. No se afirma experiencia subjetiva.

[Roadmap](/docs/echoai/echo4) · [Artículo](/articulos/echo4-dream-rsi-historia-compartida)
