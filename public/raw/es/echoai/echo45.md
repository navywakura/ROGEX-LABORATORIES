# ECHO-4.5 · documentación técnica (en desarrollo)

Actualizado el 26 de septiembre de 2026. ECHO-4.5 **no está publicado todavía**: esta página
documenta cómo se construye y qué se ha medido hasta hoy. Cada fase tiene un contrato con su criterio
de verde escrito **antes** de medir, y se publica también cuando sale roja.

## Qué es

ECHO-4.5 parte de una **semilla sin preentrenar** de ECHO que se clona en sandboxes y aprende en
ellas. El objetivo es que adquiera **conceptos verificados** y los reutilice en problemas nuevos. Se
mide en ARC-AGI-1, ARC-AGI-2 y ARC-AGI-3.

| Pieza | Función |
|---|---|
| **Semilla** | un vocabulario de operaciones pequeñas sobre rejillas: geometría, objetos, gravedad, mitades, secciones, colores. Hoy tiene 84 familias |
| **Sandbox** | una copia con su biblioteca de conceptos, su curva de aprendizaje y un **diario encadenado por hashes** (cada programa verificado y cada concepto nacido) |
| **Despierto** | búsqueda de programas; solo es **hecho** lo que reproduce todos los ejemplos resueltos |
| **Sueño** | lo que se repite en programas de tareas distintas se convierte en un **concepto** nuevo, también con huecos de color («recolorear X por Y») |
| **Intuición** | costes enteros que hacen probar antes lo que más ha funcionado; opcionalmente, una red entrenada en GPU con tareas «soñadas» |
| **Gimnasio** | 1009 tareas de entrenamiento de ARC-AGI-1 y ARC-AGI-2. 201 quedan **reservadas** para medir la transferencia. Las evaluaciones están **selladas por código** |
| **Agente de juegos** | el paquete `echo-arc` para ARC-AGI-3: memoria verificada, BOUNDARY, reloj del juego, clic dentro del objeto y descubrimiento del propio cuerpo |

## Fases y resultados

| Fase | Criterio de verde (fijado antes) | Resultado |
|---|---|---|
| S0 · semilla, sandboxes y gimnasio | que funcionen y se auditen | ✅ |
| S1 · objetos en rejillas | más tareas reservadas que la semilla | ✅ 15 → **21** |
| S2 · aprender mejor | más de 21 con búsqueda determinista | ✅ **24** |
| S3 · juegos como objetos | más puntuación oficial que v2, los mismos niveles o más, repetición exacta | ✅ 0,506 → **0,678** (7 niveles) |
| S4 · inferir la meta y planificar | más niveles y más puntuación que S3 | ✅ en desarrollo (iteración 3, v5: 0,849 de media en 3 semillas) |
| S5 · simulador de juegos (ARC3-GYM) | v5 supera a v3 en juegos nuevos | 🔴 contrato original · ✅ examen S5-D: v5.2 1103 niveles frente a 940 |
| S6 · automejora: ECHO pide operaciones a un modelo y las verifica | ≥ 27 reservadas, y más que la petición fija | ⏳ en marcha |

**Detalles que importan:**
- **Búsqueda determinista:** se quitó el límite de tiempo por tarea, porque hacía que el resultado
  dependiera de la carga de la CPU. Ahora dos medidas dan exactamente el mismo conjunto de tareas.
- **El presupuesto no era el techo:** con 1500 expansiones se resuelven las mismas tareas que con 400.
  El límite era el vocabulario.
- **Red de intuición:** se entrenó en una GPU T4 de Kaggle con 150 000 tareas generadas por ECHO a
  partir de rejillas reales de entrenamiento. Acierta el 79 % de las veces entre sus 5 primeras
  sugerencias en tareas inventadas, pero en las reservadas empata con la intuición por frecuencias.
- **S4:** en el juego g50t la meta exige una mecánica causal («una copia sobre el interruptor abre
  la compuerta»). La tercera iteración añade detectar causas, comprobarlas actuando y planificar en
  dos pasos. Desde la segunda iteración se mide con **3 semillas por juego**, porque con una sola la
  suerte pesaba más que la mejora.

## EGO-MEMORIA-1 (en paralelo)

Una aldea simulada de agentes, algunos mentirosos, donde la memoria de ECHO se borra entre episodios
y escribir en el diario cuesta. Se mide si **surge por necesidad** el hábito de documentar y si los
recuerdos, con su valencia entera (+ o −), **causan** su conducta. En desarrollo, con 8 semillas:
- el diario le hace ganar tiempo en 8 de 8;
- borrar la memoria formativa cambia a quién elige en 8 de 8, y borrar una al azar no;
- dos clones idénticos acaban con posturas distintas en 8 de 8.

Es un yo **funcional**; no demuestra conciencia.

## Examen final de ECHO-4.5

| | Requisito |
|---|---|
| R1 · ARC-AGI-1 (400 tareas de evaluación) | superar el 0 % y a la semilla sin entrenar |
| R2 · ARC-AGI-2 (120 tareas de evaluación) | superar el 0 % y a la semilla |
| R3 · ARC-AGI-3 (16 juegos que no se usan para desarrollar) | completar al menos el 20 % de los 112 niveles |
| R4 | auditoría completa: programas, conceptos y cadena del diario |

La puntuación oficial de ARC-AGI-3 se publica siempre: cada nivel se eleva al cuadrado y los niveles
se ponderan por su número.

## ARC Prize 2026

Competimos como equipo **RxLabs** con el paquete `echo-arc`, autocontenido y sin el núcleo de ECHO-4.
Si ganamos premio, se publicará en CC-BY 4.0, como exigen las reglas. Plazos: envío final el 2 de
noviembre; *paper track* el 9 de noviembre.

Resultados de ECHO-4: [benchmarks](/articulos/echo4-benchmarks-resultados) · Nota de avance:
[ECHO-4.5 en desarrollo](/articulos/echo45-en-desarrollo).
