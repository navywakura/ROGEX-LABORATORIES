# ECHO-4.5 está en desarrollo: un ECHO sin entrenar que aprende conceptos y juega a descubrir reglas

26 de septiembre de 2026 · En desarrollo · ECHO-4.5 · ARC-AGI-1, 2 y 3

Después de publicar [los benchmarks de ECHO-4](/articulos/echo4-benchmarks-resultados) nos
hicimos una pregunta incómoda: ECHO es muy bueno diciendo «no lo sé», pero **en ARC no sabe casi
nada**. En ARC-AGI-3 completa niveles explorando, con cientos de acciones, y su puntuación oficial es
de 0,07 sobre 100. En ARC-AGI-2, sin un modelo de lenguaje, resolvió 0 de 120.

Así nació **ECHO-4.5**: una **semilla de ECHO sin preentrenar** que se clona en sandboxes y **aprende
allí**. Aprende conceptos a partir de lo que resuelve y los reutiliza en problemas que nunca ha visto.
Esta nota cuenta dónde estamos: cuatro fases en verde, una en rojo y lo que falta.

<figure class="article-chart"><img src="/media/echoai/echo45/g50t-portada.png" alt="Juego g50t de ARC-AGI-3: el cuadrado de ECHO llega al marco en U después de abrir la compuerta" loading="lazy" /></figure>

## La idea

- **Una semilla que sabe muy poco:** unas decenas de operaciones pequeñas sobre rejillas.
- **Sandboxes clonables:** cada copia tiene su biblioteca de conceptos, su curva de aprendizaje y un
  **diario encadenado por hashes** donde queda cada hecho y cada concepto nacido.
- **Aprende en dos fases:**
  - **despierto**, busca programas, y solo guarda como hecho lo que reproduce **todos** los
    ejemplos;
  - **dormido**, convierte en concepto nuevo lo que se repite en tareas distintas.
- **Las evaluaciones oficiales están selladas por código** y no se abren hasta el examen final.

## Dónde estamos

<figure class="article-chart"><img src="/media/echoai/echo45/progreso-es.svg" alt="Progreso de ECHO-4.5: tareas reservadas de 15 a 24 y puntuación en juegos de desarrollo de 0,506 a 0,678; S4 en rojo" loading="lazy" /></figure>

| Fase | Qué hace | Resultado |
|---|---|---|
| **S0** | semilla, sandboxes y gimnasio de 1009 tareas | ✅ hecho |
| **S1** | ver las rejillas como **objetos** | ✅ de 15 a **21** tareas reservadas |
| **S2** | aprender mejor: intuición, vocabulario ampliado y búsqueda determinista | ✅ de 21 a **24** |
| **S3** | ver los **juegos** como objetos | ✅ puntuación en juegos de desarrollo de 0,506 a **0,678** |
| **S4** | deducir la **meta** de un juego y planificar | 🔴 **en curso**: dos iteraciones en rojo |
| **S5** | simulador propio de juegos para entrenar | pendiente |

Las «tareas reservadas» son 201 tareas de entrenamiento que ECHO **nunca usa para aprender**. Sirven
para medir si lo aprendido **se transfiere** a problemas nuevos.

## Lo que hemos aprendido por el camino

- **Aprender no sirve si no llegas.** Durante tres rondas de entrenamiento el aprendizaje no subió
  nada, porque el vocabulario no alcanzaba las soluciones. Buscar cuatro veces más tampoco cambió
  nada. Lo que funcionó fue **ampliar el vocabulario**: rejillas divididas por líneas, contornos,
  huecos, contar objetos.
- **Más vocabulario a ciegas empeora.** Añadir operaciones sin más **empeoró** el resultado. Hizo
  falta una **intuición**, que prueba antes lo que más ha funcionado. También entrenamos una red
  neuronal en una GPU con 150 000 tareas «soñadas» por el propio ECHO: acierta el 79 % de las veces
  en tareas inventadas, pero en las reales empata con la intuición simple.
- **ECHO descubre quién es.** En los juegos con teclas, identifica solo qué objeto es su cuerpo,
  porque es lo que se mueve cuando él actúa.
- **Saber quién eres no basta sin una meta.** Explorar sin saber adónde ir no suma niveles.

## El rojo más interesante: entender una mecánica

<figure class="article-chart"><img src="/media/echoai/echo45/g50t-copia-interruptor.png" alt="Cinco fotogramas del juego g50t: una copia roja sobre el interruptor abre la compuerta y el cuadrado llega al marco en U" loading="lazy" /></figure>

En el juego **g50t** controlas un cuadrado granate en un laberinto. La meta es un marco en forma de U
del mismo color. El camino está cortado por una compuerta. La tecla **ACTION5** deja una **copia**
de ti y te devuelve al principio. Si dejas la copia **sobre el interruptor** (el extremo de la tubería
celeste), la compuerta se abre y puedes llegar a la meta.

ECHO lo consiguió **por casualidad**, tras 1800 acciones. Una persona lo deduce en unas decenas. Al
medir con tres semillas por juego vimos que esa victoria fue suerte: la sacó en 1 de 3. Por eso S4
sigue en rojo.

**Lo que falta ahora es la causalidad.** ECHO tiene que notar que «cuando había algo mío en ese
punto, la compuerta cambió», comprobarlo actuando y planificar en dos pasos: primero la causa, luego
la meta. Es la tercera iteración de S4.

## Cómo lo mediremos

**El examen final de ECHO-4.5** comparará el ECHO entrenado con la semilla sin entrenar:

| | Requisito |
|---|---|
| **ARC-AGI-1** | superar el 0 % y a la semilla |
| **ARC-AGI-2** | superar el 0 % y a la semilla |
| **ARC-AGI-3** | completar al menos el **20 % de los niveles** de 16 juegos que no ha tocado (hoy, 11,6 %) |
| **Auditoría** | completa |

Además competimos en **ARC Prize 2026** en Kaggle como equipo RxLabs. Partimos de muy abajo: hoy el
primero de ARC-AGI-3 tiene 19,45 puntos y nosotros, menos de 1. Lo que nos interesa es medir **cuánto
aporta ECHO** y contarlo en el *paper track*.

## Lo que no afirmamos

- Que ECHO «entienda» como una persona. Aquí «entender» significa reutilizar un concepto verificado
  en tareas nuevas.
- Que vaya a ganar ARC Prize.
- Que los resultados sobre el «yo» de ECHO sean conciencia: son funcionales y se miden desde fuera.

Lo técnico está en la [documentación de ECHO-4.5](/docs/echoai/echo45). Publicaremos cada
fase, verde o roja.
