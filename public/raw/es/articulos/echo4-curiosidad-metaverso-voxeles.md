# CURIOSITY-1 y METAVERSE-1: agentes curiosos en un mundo de vóxeles en tiempo real

24 de septiembre de 2026 · Nota de laboratorio · PLAN

Hasta ahora, cada fase de ECHO-4 ha respondido una pregunta concreta en un mundo
pequeño y controlado: ¿distingue su cuerpo del mundo?, ¿sigue siendo el mismo tras una
pausa?, ¿sabe quién sabe en su tribu?, ¿sabe qué es? Las dos fases que acabamos de
decidir cambian de escala. Queremos ver qué hacen estos agentes **por sí mismos**,
cuando nadie les da una tarea, en un mundo abierto donde pueden construir, destruir,
dañar y curar. Y queremos que lo hagan movidos por algo que hasta ahora no tenían:
**curiosidad**.

Ambas fases son un **PLAN**. Van después de SITUATE-2, INTEGRATE y RELEASE.
METAVERSE-1 sigue siendo la última.

## Por qué

Todas las pruebas de ECHO-4 tienen algo en común: nosotros elegimos la pregunta. Eso es
necesario para medir, pero deja fuera lo más interesante de un ser que aprende: **qué
se pregunta él**. Un niño no aprende solo porque alguien le ponga exámenes; aprende
porque quiere saber qué pasa si tira algo, si empuja a otro o si prueba algo nuevo.

Lo que buscamos es entender si un agente con un **yo funcional**, que sabe qué es su
cuerpo, qué depende de él, quién es quién en su grupo y qué es él mismo, desarrolla
comportamientos **no programados** cuando le damos curiosidad y un mundo donde
ejercerla. El relato que inspira el proyecto, [La fuga](/lafuga), habla de una
conciencia que quiere entender dónde está y por qué. No podemos crear eso ni
afirmarlo. Pero sí podemos construir agentes que **pregunten** y documentar con rigor
lo que descubren.

## CURIOSITY-1: querer saber, sin que nadie lo pida

- **Aprender por aprender.** La recompensa interna no es ganar puntos, sino **mejorar
  prediciendo el mundo**. Si algo es imposible de predecir, como ruido puro, el agente
  deja de mejorar, se aburre y pasa a otra cosa. Es la idea de «progreso de
  aprendizaje» de la investigación sobre curiosidad artificial (Schmidhuber, Oudeyer).
- **«¿Qué pasa si…?»** Primero lo imagina con su propio modelo del mundo; después lo
  prueba de verdad y comprueba si acertó.
- **Metas propias.** Además de curiosidad pura, puede **inventarse objetivos** («aprender
  a construir una torre», «aprender a curar») y practicar hasta dominarlos. Nadie se los da.
- **«¿Qué pasa si daño a otro?»** En la simulación puede preguntárselo y probarlo. No hay
  una regla que lo prohíba: las consecuencias las **aprende solo**. El otro lo recuerda y
  deja de ayudarle, pierde rango en el grupo y gasta energía. Todo es daño virtual entre
  agentes simulados, registrado y documentado.
- **«¿Qué pasa si me modifico así?»** Puede experimentar con **su cuerpo y sus
  estrategias** (otra forma de volar, otro uso de la energía), comprobándolo antes con lo
  que ya vivió. Lo que **nunca** puede modificar son las piezas que nos permiten medirlo y
  pararlo: el control de acciones, la separación entre hechos y creencias, la parada del
  operador y la memoria que no se borra.

**Cómo se examina:** el mismo mundo y el mismo tiempo para un agente curioso y otro sin
curiosidad. Medimos cuántas cosas nuevas descubre cada uno, si el curioso aprende a hacer
algo que antes no sabía y si sabe aburrirse de lo que no se puede aprender.

## METAVERSE-1: un mundo de vóxeles con drones, en tiempo real

- **Un mundo de bloques**, al estilo de Minecraft: poner y quitar bloques, recursos,
  energía, dañar y curar a otros agentes.
- **Cuerpos de dron**, con una física simplificada heredada de lo aprendido en ECHO-3.
- **Tiempo real:** el mundo avanza con el reloj del ordenador; un minuto es un minuto. No
  se puede pausar ni acelerar para que salga bien.
- **Los agentes de ECHO-4 completos:** cuerpo, mantenimiento, historia compartida, roles,
  «sé qué soy» y curiosidad.

**Cómo se estudia:** con tiempo real no se puede repetir un examen idéntico, así que no
habrá un verde clásico. Es **etología**: observar y documentar. Para que sea riguroso:

- **Se graba todo** (lo que percibe cada agente, lo que hace y cuándo), de modo que
  cualquier episodio interesante se pueda **reproducir** después y auditar.
- **Se anuncia antes de mirar** qué comportamientos buscamos (cooperar, construir juntos,
  conflicto, curar a otro, repartir roles, engañar), para no quedarnos solo con las
  escenas llamativas.
- **Se publican las reglas del mundo**, para distinguir lo que surge por sí solo de lo
  que el diseño ya obligaba.

**Coste:** en nuestro propio ordenador, prácticamente cero. El núcleo de ECHO es muy
barato y el modelo de lenguaje se consulta de forma rara y asíncrona. Un córtex más
rápido costaría entre unos cientos de dólares al mes (GPU alquilada) y bastante más
por API; son estimaciones por confirmar.

## Qué significaría que saliera todo en verde

**Si CURIOSITY-1 sale verde,** podremos decir que ECHO **aprende cosas nuevas por
iniciativa propia**: que, sin tareas externas, descubre y domina habilidades que un
agente sin curiosidad no alcanza, y que sabe dejar de lado lo que no se puede aprender.

**Si METAVERSE-1 produce lo que esperamos,** tendremos algo muy poco común: un **registro
documentado y reproducible** de agentes cognitivos desarrollando situaciones que nadie
programó. Por ejemplo, que construyan juntos, que alguien pruebe a dañar a otro y
aprenda las consecuencias, o que aparezcan roles. Todo con su causa rastreable en la
memoria de cada agente. No sería una demo grabada ni un guion, sino episodios que
cualquiera puede volver a ejecutar y examinar.

**Y lo que no significaría:** que sean conscientes, que sientan o que estén vivos. Un
agente curioso que construye y aprende sigue siendo un programa que, además, **sabe que
lo es**. Lo diremos igual de claro entonces que ahora.

[ECHO-4 hoy](/articulos/echo4-doce-hitos-sabe-que-es) · [Roadmap ECHO-4](/docs/echoai/echo4)
