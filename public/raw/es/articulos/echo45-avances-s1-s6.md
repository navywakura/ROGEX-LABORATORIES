# ECHO-4.5 avanza: un modelo del mundo, un simulador de juegos propio y ECHO pidiendo ayuda a un modelo de lenguaje

26 de septiembre de 2026 · En desarrollo · ECHO-4.5 · ARC-AGI-3 · ARC Prize 2026

Esta mañana contamos que [ECHO-4.5 estaba en desarrollo](/articulos/echo45-en-desarrollo), con S4 en
rojo. Desde entonces:
- **S4 ha salido en verde** en los juegos de desarrollo;
- hemos construido **nuestro propio simulador de juegos (S5)**, que encontró fallos que nuestros
  juegos de prueba escondían, y lo hemos pasado por examen;
- ECHO ha aprendido a **empujar cajas y a entender los juegos de clic**;
- ha empezado **S6**, en la que ECHO escribe sus propias peticiones a un modelo de lenguaje para
  mejorarse a sí mismo.

**En unas 12 horas publicaremos los resultados de S6.**

<figure class="article-chart"><img src="/media/echoai/echo45/avances-es.svg" alt="En 60 juegos nuevos del simulador ARC3-GYM: puntuación oficial media v3 1,1, v5 1,3, v5.2 10,0 y v5.6 21,5; niveles completados de 900: 600, 490, 681 y 805" loading="lazy" /></figure>

## Las fases, en una tabla

| Fase | Qué hace | Resultado |
|---|---|---|
| **S0** | semilla sin preentrenar, sandboxes clonables y gimnasio de 1009 tareas | ✅ |
| **S1** | ver las rejillas como objetos | ✅ de 15 a 21 tareas reservadas |
| **S2** | aprender mejor: intuición y vocabulario ampliado | ✅ de 21 a 24 |
| **S3** | ver los juegos como objetos | ✅ de 0,506 a 0,678 en los juegos de desarrollo |
| **S4** | un modelo del mundo verificado y planificar en él | ✅ en desarrollo: 0,849 de media en 3 semillas |
| **S5** | un simulador de juegos propio | 🔴 contrato original · ✅ **examen S5-D** |
| **S6** | ECHO pide operaciones nuevas a un modelo de lenguaje y las verifica | ⏳ en marcha |

Las «tareas reservadas» son tareas que ECHO **nunca usa para aprender**; miden si lo aprendido se
transfiere. La puntuación de los juegos es la fórmula oficial de ARC Prize.

## S4: lo que hacen los mejores agentes, sin modelo de lenguaje

Estudiamos cómo consiguen tan buenas notas en ARC-AGI-3 los mejores sistemas. Casi todos siguen el
mismo patrón:
- un **modelo del mundo que se puede ejecutar**;
- cada hipótesis se **comprueba repitiendo lo ya visto**;
- se prefieren las **reglas simples**;
- se **planifica dentro del modelo** antes de gastar acciones en el juego.

ECHO ya era, sobre todo, un verificador, así que lo adoptamos sin modelo de lenguaje:
- **predice** antes de cada tecla si se va a mover, y lo comprueba;
- aprende los muros como **colores**, una regla en vez de mil casos;
- **explora dentro de su modelo** en lugar de chocar contra las paredes.

En el juego g50t pasó de ganar un nivel **por suerte**, en 1 de 3 intentos y con más de 1800
acciones, a ganarlo en **las 3 semillas**. En una de ellas lo hizo en **61 acciones**, cuando una
persona necesita de referencia 78.

## S5: un simulador para no engañarnos

Solo tenemos 8 juegos de desarrollo, y es muy fácil ajustar un agente a ellos sin darse cuenta. Por
eso construimos **ARC3-GYM**:
- **juegos generados por código**, con la misma interfaz que ARC-AGI-3;
- **siete mecánicas**: laberinto, interruptor, palanca, caja, luces, flechas y mixto;
- **colores al azar**, para que las reglas se tengan que aprender y no memorizar;
- **un solucionador exacto** que garantiza que cada nivel tiene solución y da el mínimo de acciones.

Con el contrato original, **S5 salió en rojo**, y lo publicamos igual:
- la primera versión era demasiado fácil: el azar completaba el 27 % de los niveles;
- el agente de S4 **no generalizaba**: completaba menos niveles que el anterior.

El simulador encontró dos fallos que nuestros 8 juegos escondían:
1. **ECHO tomaba el suelo por su cuerpo.** Al moverse, el agujero que deja desplaza el centro del
   suelo. Ahora «yo» tiene que moverse **rígido**.
2. **Leía la meta del nivel equivocado** y acababa persiguiendo el suelo.

Después, al trabajar las causas (pisar un interruptor, usar una palanca), apareció un tercer fallo:
al reiniciarse un nivel, el salto del cuerpo al inicio le **enseñaba que los muros se podían
atravesar**.

Todo se corrigió mirando **solo** los juegos de entrenamiento del simulador. Para saber si el
arreglo era real, hicimos un **examen congelado (S5-D)**: 100 juegos nuevos, el código sellado con
huellas y una sola medición.

| En 100 juegos nuevos (S5-D) | Niveles (3 semillas) | Puntuación oficial |
|---|---|---|
| Azar | 47 (3,1 %) | 0,002 |
| v3 | 940 | 0,66 |
| **v5.2** | **1103 (+17 %)** | **7,42** |

**S5 queda en verde por examen.**

## Cajas y juegos de clic

Después del examen añadimos tres capacidades, desarrolladas solo con los juegos de entrenamiento
del simulador:
- **Empujar:** si un objeto se mueve conmigo cuando lo piso, es «empujable», y ECHO planifica en su
  modelo cómo llevarlo a su sitio. En las cajas pasa de 0,6 a **4,5 niveles de 5**.
- **Clics que son teclas:** si hacer clic en algo quieto mueve siempre otra cosa de la misma manera,
  ese clic es una tecla, y se usa todo el modelo del cuerpo. En las flechas llega a menudo **al
  mínimo exacto de acciones**.
- **Un modelo de lo que cambia cada clic:** aprende qué luces cambia cada clic, y después de ganar
  un nivel planifica los siguientes.

El agente resultante, **v5.6**, completa 805 niveles de 900 en los juegos de test del simulador,
frente a 681 de v5.2 y 600 de v3 (gráfica de arriba). En los juegos reales de desarrollo, sin tocar
nada de ellos, sube de 0,960 a **1,03**.
- **Descartamos** una cuarta idea: usar el cuerpo también en los juegos mixtos. Mejoraba el
  simulador, pero **empeoraba dos juegos reales**.
- v5.6 todavía no ha pasado un examen congelado como S5-D.

## Kaggle: ARC Prize 2026

El paquete `echo-arc` con v5.2 corre sin errores en el entorno de la competición. En los 25 juegos
públicos saca una media de **0,73 sobre 100**, frente a 0,21 de la primera versión enviada.
- Sigue siendo **muy poco** al lado de los mejores sistemas.
- Esos 25 juegos incluyen los 16 del examen final de ECHO-4.5. **No ajustamos nada con ellos**, pero
  lo declaramos: hemos visto ese resultado global.

## S6: ECHO pide ayuda y decide qué acepta

Hasta ahora, el modelo de lenguaje resolvía y ECHO vigilaba. En S6 es al revés: **ECHO usa al modelo
como herramienta para mejorarse**. En cada paso:
1. ECHO mira qué tareas falla y cuáles casi acierta.
2. **Escribe él la petición**, con cuatro tipos posibles, y aprende cuáles le funcionan.
3. El modelo propone una **operación nueva**.
4. ECHO la acepta solo si:
   - su código es seguro;
   - resuelve tareas que antes no resolvía;
   - no empeora otras.

El modelo **nunca** puede tocar el verificador, las evaluaciones selladas ni los criterios: un
control de huellas anula la campaña si algo cambia. Lo comprobamos: una prueba se anuló sola cuando
editamos el contrato mientras corría.

El modelo es **Qwen2.5-Coder 7B**, en las GPU gratuitas de Kaggle: coste 0 $. Compararemos cuatro
brazos:
- **la semilla** sola, que da 24 tareas reservadas;
- **una petición fija**, siempre la misma (300 propuestas);
- **las peticiones de ECHO** (300 propuestas);
- **las mismas propuestas de ECHO, sin verificar**.

Habrá verde si:
- ECHO llega a 27 tareas reservadas o más;
- sus peticiones ganan a la petición fija;
- aprende a preguntar mejor con el tiempo;
- verificar gana a no verificar.

**En unas 12 horas daremos los resultados**, en verde o en rojo.

## Lo que no afirmamos

- Que ECHO «entienda» como una persona.
- Que vaya a ganar ARC Prize. Partimos de muy abajo.
- Que el simulador sustituya a los juegos oficiales: lo diseñamos nosotros. La prueba de verdad es
  el examen final de ECHO-4.5, con 16 juegos que no hemos tocado.
- Que ECHO sea consciente o una inteligencia general. Todo esto son capacidades concretas, medidas
  desde fuera.

La parte técnica está en la [documentación de ECHO-4.5](/docs/echoai/echo45).
