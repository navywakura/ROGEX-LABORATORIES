# ECHO-4 — actualización pública v3

2026-09-22. Resumen editorial de evidencia del laboratorio. Sustituye el
estado actual de v2, que se conserva como instantánea histórica. No publica
checkpoints privados ni datos reservados, ni es una nueva auditoría externa.

## Continuidad cerrada en su perfil

Fuente: `docs/ECHO4-CONTINUITY1-D-RESULTS.md` y
`lab/echo4/continuity1-final-v1/audit-receipt.json`.
CONT-A/B/C implementados y reexaminados; CONT-D verde. Operaciones síncronas
terminadas en WORLD-1 y custodio confiable.

| Examen | Checkpoints | Eventos | Turnos nativos posteriores | Mutantes rechazados |
|---|---:|---:|---:|---:|
| A | 23/23 | 90/90 | 52/52 | 10/10 |
| B | 23/23 | 100/100 | 62/62 | 10/10 |
| C | 23/23 | 110/110 | 72/72 | 10/10 |
| Total | 69/69 | 300/300 | 186/186 | 30/30 |

Son etapas nuevas del examen, no los nombres de los componentes CONT-A/B/C.
El informe de campaña no se autocertifica; el recibo concede
`valid=true`, `continuity1_green=true`, sin hallazgos. Reproducción:
`69d57a0b03a468b3f2be7fedde5bce7edeaa2db5a2576ce9160726e2a90cec7c`.

Control de historia: borrarla altera el aprendizaje PATTERN, pero acciones
y predicciones empatan. El control nominal tiene cero restos Q no nulos;
el testigo aritmético separado muestra por qué conservarlos cuando existen.
No se deduce una ventaja de supervivencia de esos controles. Terminales,
vetos y abstenciones conservados. No identidad subjetiva, autorreparación,
captura concurrente, tolerancia física a cortes o exclusividad distribuida.

## DREAM-A: primer incremento verificado, DREAM-1 abierto

Fuente: `docs/ECHO4-DREAM1-A-RESULTS.md` y
`lab/echo4/dream1-a-v1/report.json`.
Tres árboles nominales/de terminalidad; 31 nodos incluida cada raíz,
28 intentos nativos nuevos. Replay de 62 consultas: 28 resultados observados,
32 desconocidos y dos respuestas terminales sobre la misma raíz.
No se inventan ramas ausentes ni se exponen futuros no revelados.

Reconstrucción válida, seis grupos de comprobación correctos:
`011cc0d91febda369348997c69f9d46e3a19c089aadf8662e71fbe46eaa7f8aa`.
`dream1_green=false`, `qwen_implemented=false`. No se ha medido automejora.
66 fuentes fijadas; CONT-D vinculado por su certificado e integridad, sin
repetir aquí todo su examen. Preparación: 192 pasos de escuela y 44 de
prefijo; checkpoints privados: 50.513.326 bytes. Replay: cero nuevos turnos
nativos y cero llamadas LLM, no coste computacional total cero.

31 pruebas nuevas y 717 regresiones: 748 distintas, 747 aprobadas y un fallo
esperado histórico. Ocho errores GUI iniciales por sockets del sandbox se
resolvieron repitiendo con permiso los 29 tests del grupo, sin duplicar el
conteo. Es la batería de esa entrega, no una nueva campaña para la web.

## Estado global

WORLD implementado; SENSATION, BOUNDARY y SELF mantienen sus cierres acotados
y límites publicados en [v2](ECHO4-STATUS-20260922.md). CONTINUITY cerrado;
DREAM-B/C/D, MAINTAIN, OTHER, INTERACTION, RELATION, ROLES e INTEGRATE pendientes.
RELEASE-1 es un plan de distribución autorizada tras INTEGRATE, con licencias,
privacidad, paquete y reproducción. Hardware posterior; METAVERSE-1 último.
Logo oficial no equivale a cierre científico. No subjetividad certificada.

## Reproducción en el repositorio y con sus artefactos

```bash
PYTHONPATH=.. python3 -m echoai.echo4.continuity_final_audit verify lab/echo4/continuity1-final-v1
PYTHONPATH=.. python3 -m echoai.echo4.dream_history_bench verify lab/echo4/dream1-a-v1
```

El sitio publica este resumen, no todos los artefactos necesarios. Los hashes
identifican evidencia; no son firmas ni pruebas suficientes de corrección.

[Roadmap](/docs/echoai/echo4) · [Novedades](/articulos/echo4-continuidad-dream-a-identidad)
