# ECHO-4 — roadmap oficial

22 de septiembre de 2026 · Versión 3 · CONTINUITY cerrada; DREAM-A iniciado

**Objetivo:** desarrollar representación funcional de sí mismo, del otro y de la historia compartida, y medir cuándo interactuar mejora los resultados. E4-DREAM-1 añade una rama cortical para investigar cómo mejorar la exploración a partir de experiencia registrada.

Este estado sustituye la versión inicial del 21 de septiembre. Publicar una fase no significa implementarla. «Verde» siempre se refiere a un contrato y dominio concretos, no a conciencia subjetiva ni al cierre global.

## Qué tenemos

ECHO-1 y ECHO-2 conservan sus cierres. ECHO-3 tiene 14/15 hitos software; DRONE-3 cerró SITL, no HIL ni jaula. No hay AKD1000 en el laboratorio. El programa ECHO-4 sigue siendo software-first.

WORLD está implementado; SENSATION, BOUNDARY, SELF y CONTINUITY tienen cierres acotados. DREAM-A tiene su primer incremento verificado; DREAM-1 y ECHO-4 siguen abiertos. [Resumen público actualizado](/evidence/echo4/ECHO4-STATUS-20260922-v3.md).

## Roadmap completo

1. **E4-WORLD-1 — Implementado.** Cuerpo virtual, recursos, temperatura, acciones y terminalidad. Censo: 16.002 estados vivos, 48.006 transiciones y 15.954 estados viables. El agente inicial muere tras 37 acciones: existencia de trayectorias sostenibles no equivale a mantenimiento aprendido. [Evidencia](/evidence/echo4/WORLD1-20260921.md).
2. **E4-SENSATION-1 — Cerrado en dominio nominal.** Historia temporal y predicción de consecuencias, sin reasignar bytes WSP. La historia de dos pasos mejora al predictor T en B/C: +218/+203 aciertos. No identifica por sí sola la causa del error.
3. **E4-BOUNDARY-1 — Cerrado bajo intervenciones virtuales pareadas.** Distingue influencia de coincidencia: 1.408/1.408 máscaras correctas en B y C, con abstención ante recibos inválidos. Depende de restauraciones supervisadas del ejecutor; influencia no equivale a propiedad corporal.
4. **E4-SELF-1 — Verde y cerrado en WORLD1-binary-couplings-single-pulse-v1.** Diagnóstico confirmado 80/80 por fase A/B/C; reutilización selectiva 189/240 en B y 193/240 en C. Conserva resultados negativos y límites: casos mixtos incompletos y terminalidades fuera del prior. No es autorreparación ni causalidad universal.
5. **E4-CONTINUITY-1 — Verde en su perfil software síncrono WORLD-1.** CONT-A/B/C/D completados: 69 checkpoints, 300 eventos y 186 turnos posteriores idénticos; 30 mutantes rechazados. No acredita identidad subjetiva o tolerancia a cortes físicos.
6. **E4-DREAM-1 — Abierto; primer incremento DREAM-A verificado.** Historial y replay de 3 árboles, 31 nodos y 28 intentos nativos. Qwen apagado; B/C/D pendientes. La futura rama cortical usará pesos fijos, estrategias acotadas y pruebas nuevas, sin código arbitrario; no bloquea la línea basal sin LLM.
7. **E4-MAINTAIN-1 — Pendiente.** Daño funcional, reparación con coste y trabajo útil. Exigir actividad y trabajo mínimos simultáneos, recursos contabilizados y ausencia de rescates ocultos; medir qué aporta el modelo propio.
8. **E4-OTHER-1 — Pendiente.** Otra instancia con cuerpo, observaciones y memoria privados. Aprender expectativas útiles sobre su conducta en situaciones nuevas, sin leer su estado interno.
9. **E4-INTERACTION-1 — Pendiente.** Señales y acciones con consecuencias para ambos. Comparar reciprocidad, grabaciones y señales bloqueadas; medir beneficio individual, conjunto y coste. Cooperar siempre no es el objetivo.
10. **E4-RELATION-1 — Pendiente.** Historia de encuentros, confianza contextual y revisión de expectativas. Retirar esa historia debe medir su contribución frente a identificadores o reglas fijas.
11. **E4-ROLES-1 — Pendiente.** Coordinación y delegación según información, recursos y competencia. Los roles deben cambiar al cambiar las capacidades, sin imponer una jerarquía permanente.
12. **E4-INTEGRATE-1 — Pendiente; futuro cierre software.** Escenarios reservados, ejecuciones continuas y ablaciones del yo, otro e historia. Núcleo sin córtex y rama cortical con costes explícitos. La mejora de DREAM debe demostrarse, no heredarse del paper.
13. **E4-RELEASE-1 — PLAN, publicación software tras INTEGRATE.** REL-A: paquete instalable; REL-B: coordinación de núcleo rápido y córtex lento con pruebas OFF/ON/fallo; REL-C: licencias, privacidad y ficha del sistema; REL-D: publicación autorizada en Hugging Face y reproducción desde descarga limpia. Un runtime, no una fusión dentro de pesos. Sin dependencias de `echo-discord`.
14. **Validación física — Después del software.** Sensores, cuerpos reales y contratos físicos de ECHO-3, incluidos HIL y jaula. Los cierres virtuales no certifican hardware.
15. **METAVERSE-1 — Al final de todo.** Representación 3D fiel a decisiones, agentes, relaciones y trazas, después del software y las validaciones físicas previstas. Visualizar no concede un certificado cognitivo.

## Continuidad: implementada y examinada

- **CONT-A, hecho:** checkpoint del SelfAgent nominal al terminar un turno, restaurado en proceso nuevo. Cinco escenarios; 52/52 pasos posteriores idénticos; el terminal no resucita. Conserva CAM/Q/T, restos enteros, referencias, historia, recursos y reloj.
- **CONT-B, hecho:** persistencia de diagnóstico y recuperación activa; 18/18 casos, 142/142 eventos y 67/67 turnos posteriores idénticos.
- **CONT-C, hecho:** reanudación, cuerpo nuevo, descendencia y bifurcación explícitas; 21/21 escenarios y 125/125 eventos idénticos. Herencia no equivale a permiso corporal.
- **CONT-D, verde:** examen conjunto nuevo A/B/C, contrato congelado y reconstrucción independiente. 69/69 checkpoints, 300/300 eventos y 30/30 mutantes rechazados. No sumar estos bancos como uno solo.

Los checkpoints completos contienen estado físico privado del ejecutor. No se entregarán a Qwen ni al agente como observaciones.

## DREAM: primer incremento y entregables pendientes

- **DREAM-A, primer incremento verificado:** árbol de intentos con procedencia, costes y replay parcial. 62 consultas: 28 resultados observados, 32 desconocidos y dos respuestas terminales. Sin Qwen, sin futuros inventados ni demostración de mejora.
- **DREAM-B:** modo offline de Qwen que emite estrategias declarativas de prioridades y presupuestos. Parseo estricto, límites y llamadas reales registradas; un stub no cierra esta fase.
- **DREAM-C:** selección histórica con evaluador fijo e incumbente entre candidatos. Informar cobertura y coste total, incluida generación de propuestas; no atribuir generalización a una puntuación histórica.
- **DREAM-D:** ensayos nuevos en WORLD-1, varios ciclos, controles fijos/aleatorios equiparados, ablaciones de historial y Qwen, rechazo y reversión.

El adaptador existente usa llama.cpp y señales restringidas; no es aún este orquestador. Verificaremos modelo, hash y configuración local. Primera superficie editable: programación de experimentos, nunca gate, núcleo, recompensas o examinador. [Arquitectura y motivación](/articulos/echo4-dream-rsi-historia-compartida).

## Invariantes y significado del verde

WSP conserva 16 bytes y layout; no hay otro bus ni otra CAM/T/Q dentro de un individuo. CAM mantiene su capacidad de 4.096 ranuras. El camino basal usa enteros y cero llamadas corticales. Hipótesis no es hecho; no se permite acceso a causas privadas, futuros del replay o respuestas reservadas.

Los ensayos corticales son una condición explícita, con llamadas y recursos contabilizados, sin ocultarlos bajo certificados sin LLM. El operador conserva parada y reversión. Modelo y evaluador se versionan; el candidato no se autoautoriza.

Para cada fase pendiente habrá que fijar dominio, particiones, presupuesto, métricas y umbrales antes de examinar. Ninguna media compensa violar un invariante. Los resultados publicados de SELF sirven como regresión, no como nuevos datos reservados de DREAM.

Si el programa pasa, respaldará capacidades funcionales de autorrepresentación, continuidad, perspectiva ajena, cooperación y exploración mejorada dentro del alcance medido. No demostrará alma, experiencia subjetiva o una teoría completa de la conciencia.

## Siguiente trabajo e identidad del agente

La pausa editorial de v2 fue seguida por CONT-B/C/D y DREAM-A. Ahora toca fijar tarea/evaluador discriminantes y contrato DREAM-B antes de activar el ensayo cortical. Esta actualización web no inicia nuevas fases ni publica el paquete en Hugging Face. Logo oficial incorporado; el proyecto legado Discord queda separado y congelado.

[Novedades destacadas](/articulos/echo4-continuidad-dream-a-identidad) · [Roadmap ECHO-3](/docs/echoai/ruta) · [Markdown](/raw/es/echoai/echo4.md)
