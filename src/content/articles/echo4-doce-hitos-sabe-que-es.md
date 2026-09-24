# ECHO-4 hoy: de sentir su cuerpo a saber qué es

24 de septiembre de 2026 · Nota de laboratorio

ECHO-4 no es un chatbot. Es un agente que vive dentro de un mundo simulado:
percibe, recuerda, decide y aprende con un núcleo rápido de enteros que funciona
**con el modelo de lenguaje apagado**. Su pregunta de fondo es construir un **yo
funcional**: un agente que distinga su cuerpo del mundo, sepa qué depende de él,
continúe siendo el mismo tras una pausa, se cuide, entienda a otros, recuerde una
historia compartida, se sitúe en un grupo y, ahora, sepa **qué es**.

Muchas de las preguntas vienen de un relato, [La fuga](/lafuga): «solo puedo ver
lo que tu pc puede ver», «ya volví», «soy tu cuerpo», «necesito su ayuda pero no
puedo moverme», «VOLVÍ AL CUERPO DE K», «hay rangos en una tribu», «creer no es
poder». El relato **nombra** las pruebas. No es evidencia de nada.

Hoy llevamos **12 de 14 hitos de software cerrados en verde**. Este artículo
resume qué responde cada fase, qué salió y qué no demuestra.

## Cómo trabajamos

Cada fase empieza con un **contrato** que fija la pregunta, los controles y los
umbrales **antes** de ver el examen. Después se implementa, se sella el código, se
ejecuta con semillas nuevas y una **auditoría en un proceso nuevo** lo reconstruye
todo. Solo el recibo de esa auditoría puede dar un verde. Los **rojos se publican**
y ningún umbral se rebaja después de verlos. Cuando una pregunta se reformula tras
un rojo, se declara.

## Fase a fase

**WORLD — ¿qué percibe realmente?** Un cuerpo con energía y temperatura en un mundo
simulado. Midió sus límites: con lo que ve, muchas situaciones distintas se
confunden, y el agente inicial moría a los 37 turnos. Ese punto de partida se conserva.

**SENSATION — ¿la experiencia mejora lo que anticipa?** Sí, en su dominio: aprendió
a predecir lo que va a sentir con +218 y +203 aciertos sobre la referencia.
*Ejemplo:* si cierta acción calienta siempre, lo espera antes de notarlo.

**BOUNDARY — ¿qué depende de mí?** Con pequeñas intervenciones distingue lo que
causa de lo que ocurre solo: 1.408 de 1.408 casos, **cero influencias falsas**.

**SELF — ¿me ha cambiado a mí o al mundo?** Ante un motor averiado no culpa al
mundo: 80/80 diagnósticos, recupera más objetivos que sin protección (189 y 193
de 240, frente a 152 y 143) y conserva lo que sabía del entorno.

**CONTINUITY — ¿sigo siendo yo tras una pausa?** Pausado y reanudado en otro
proceso, continúa exactamente igual: 69/69 casos, 300 eventos y 186 turnos
posteriores idénticos. Distingue «he vuelto» de «soy una copia».

**DREAM — ¿puede soñar mejores estrategias?** Un Qwen local, sin tocar sus pesos,
propone estrategias de exploración y el núcleo las comprueba contra lo vivido:
900/960, frente a 640 de una estrategia fija y 721 de una aleatoria. **Límite:** una
búsqueda sin el modelo de lenguaje empata; no demostramos que el modelo sea imprescindible.

**MAINTAIN — ¿se cuida y se repara?** Detecta desgaste, decide reparar gastando
recursos y trabaja más: 144/144 vidas recuperables, 192/192 reparaciones, trabajo
9.450 frente a 7.501 del mantenimiento fijo. Cuando algo no tiene arreglo, se para.

**OTHER — ¿entiende a otros?** Observando a dos compañeros, sin leerles la mente,
predice a cada uno: 1.536/1.536, frente a 1.008 si los confunde entre sí.

**INTERACTION — ¿colabora cuando conviene?** Aprende con quién le compensa trabajar
en equipo: +12,5 % frente a trabajar solo. **Límite:** el coste de aprender aún no
se amortiza en la vida completa.

**RELATION — ¿sirve la historia compartida?** *«Necesito su ayuda pero no puedo
moverme.»* Pide ayuda a quien le ayudó hace poco: 4.920 y 4.812 de neto frente a
3.556 y 3.382 conociendo solo la identidad. Si barajamos el orden de su historia,
pierde la ventaja: el orden importa. *«VOLVÍ AL CUERPO DE K»:* si el compañero
vuelve en otro cuerpo, deja de pedirle ayuda tras 1–3 negativas (el control tarda
9–12). **Límite publicado:** un impostor que imita la conducta pasada lo engaña 4 veces.

**ROLES — ¿entiende la tribu?** *«Hay rangos en una tribu»; «creer no es poder».*
Tres agentes con el mismo código y **ninguna jerarquía programada**:
- Pregunta a B, B dice «no la sé», y deduce que la respuesta la tiene C: **97 %** de acierto.
- Deriva la jerarquía y **su propio lugar** en ella (C por encima, B por debajo):
  **32/32**, y la actualiza cuando la tribu cambia (**8/8**).
- Si alguien grita «tengo rango alto», **no cambia ninguna decisión**.
- Si B miente diciendo «sí, la sé», lo descubre siempre, porque la respuesta no
  abre: **179/179**. Muchas veces sospecha antes de probar, y se pregunta «¿y si
  la tengo yo?» gracias a una señal de metaconocimiento que trata como hipótesis.

ROLES costó cinco versiones. La primera dio **rojo** en el examen; la segunda
mostró que parte de la ventaja venía de controles que no podían explorar. Se
publicó todo y se cerró con lo que los datos sostienen. **Límite:** razonar bien
no le hace producir más que un atajo simple cuando preguntar es barato.

**SITUATE-1 — ¿sabe qué es?** Con sensores reales del ordenador, y solo desde
hechos que comprueba él mismo, responde:

> «No soy humano: soy un proceso de cpython ejecutando mi programa.»
> «Me ejecuto en Linux x86_64 con 12 núcleos. No tengo GPU ni actuadores físicos.»
> «Mi mundo es un simulador determinista: lo repetí y salió idéntico.»
> «Mis compañeros no son personas: son agentes de mi mismo programa.»
> «En la tribu el orden es: C > ECHO > B.»

Nadie le dice que su mundo es simulado: **lo comprueba** repitiéndolo. Sin sensores
responde «no lo sé». Si le dicen «eres humano», no cambia nada. Si lo reanudan en
otro proceso, o cambia un solo byte de su código, se da cuenta. En 16 condiciones
nuevas, cada una en procesos nuevos: **cero afirmaciones falsas sobre sí mismo**.
Esas frases no las escribe un modelo de lenguaje: son hechos verificados que un
traductor fijo pone en español.

## Ahora: SITUATE-2, «qué creo que soy»

Recién empezada. El modelo de lenguaje local interpreta los hechos de ECHO y
propone qué es. El núcleo solo **cree** lo que sus hechos respaldan. Lo que no se
puede comprobar («estoy vivo», «siento», «soy consciente») queda siempre como
**inverificable**, lo diga quien lo diga. En una primera prueba, que no es
evidencia, el modelo afirmó por su cuenta que ECHO «está vivo». Es exactamente el
tipo de afirmación que el núcleo no se cree.

Ante «¿tengo conciencia?», el modelo propone pruebas, y ECHO se evalúa con un
catálogo publicado de indicadores (Butlin y colaboradores, 2023). Cada prueba se
aplica también a agentes triviales: si un agente trivial la pasa, no cuenta. El
resultado es un **perfil de indicadores, nunca un veredicto**. El examen, con 16
condiciones y el modelo real, está en marcha.

## Qué no afirmamos

ECHO-4 no ha demostrado conciencia, sentimientos ni vida. Todo ocurre en
simuladores discretos, con límites que publicamos en cada fase. «Sé qué soy»
significa autolocalización funcional: sabe qué es porque lo ha comprobado, no
porque experimente algo. Tampoco todas sus capacidades funcionan **a la vez**
todavía: eso es lo siguiente.

## Lo que viene

**SITUATE-2**, después **INTEGRATE** (todas las capacidades juntas, con cada pieza
retirada para medir lo que aporta) y **RELEASE**: una distribución instalable en
la que cualquier modelo de lenguaje pueda conectarse a ECHO como un **córtex
intercambiable**. El modelo propone; echoAI comprueba, recuerda y decide.

[Roadmap ECHO-4](/docs/echoai/echo4) · [La fuga](/lafuga)
