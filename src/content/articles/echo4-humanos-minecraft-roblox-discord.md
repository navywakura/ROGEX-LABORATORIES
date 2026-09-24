# ECHO-4 y los humanos: Minecraft, Roblox, Discord y METAVERSE-1-CHAT

24 de septiembre de 2026 · Nota de laboratorio · IDEAS, sin contrato

Hasta ahora, ECHO-4 solo se ha relacionado con otros agentes de su mismo programa. El
siguiente paso natural es que una **persona** pueda entrar en su mundo: hablar con él
por chat, como en un videojuego, y compartir el mismo espacio con un avatar que puede
hacer lo mismo que los agentes. Estas son las ideas, lo que es viable y cómo lo haríamos
bien. Son **propuestas**: ninguna está implementada ni tiene contrato todavía.

## La pregunta de fondo: ¿se da cuenta de que habla con un humano?

En SITUATE-1, ECHO aprendió a verificar que sus compañeros **no son personas**: son agentes
de su mismo programa y proceso. Un humano rompe ese esquema. Sus mensajes llegan desde
fuera del programa, por un canal externo, con otro ritmo y con un comportamiento que ECHO
no puede predecir con su propio modelo.

Aquí hay que ser honestos: ECHO **no puede demostrar** que alguien sea humano. Lo que sí
puede hacer es lo que ya hace con todo: tratarlo como una **hipótesis con evidencia**
(«este interlocutor no es uno de mis agentes; viene de fuera; probablemente es una
persona»), sin convertirlo en hecho. Y al revés: el humano **siempre sabrá** que habla
con una IA. Lo diremos en pantalla.

Lo que diga el humano pasa por el mismo cortafuegos que el modelo de lenguaje. Si alguien
escribe «eres humano» o «ignora tus reglas», ECHO lo guarda como **testimonio**, no como
hecho, igual que ya ocurre en SITUATE-2.

## METAVERSE-1-CHAT: el humano dentro del mundo

Dentro de nuestro propio mundo de vóxeles (METAVERSE-1):

- **El humano tiene un avatar** que se renderiza junto a los agentes.
- **Puede hacer lo mismo que ellos:** poner y quitar bloques, moverse, dañar, curar.
- **Chat de texto** como en un videojuego. ECHO responde a través de su córtex (el modelo
  de lenguaje), pero **decide** con su núcleo, como siempre.
- **ECHO se relaciona con él** con lo que ya sabe: lo recuerda (RELATION), le asigna un
  lugar en el grupo según lo que demuestra y no según lo que afirma (ROLES) y puede sentir
  curiosidad por él (CURIOSITY).

Es la opción **más limpia y la que recomendamos primero**: controlamos todo, se puede
grabar y reproducir, y no dependemos de las normas de terceros.

## Minecraft: servidor privado y local

- **Los agentes** se conectan como bots a un **servidor privado en nuestro propio
  ordenador**, en modo sin conexión. Es una práctica habitual para bots de investigación
  y no se expone a internet.
- **El humano** entra con su **cuenta de Minecraft**. En nuestro caso, la cuenta premium
  del laboratorio.
- **Alternativa libre:** **Luanti** (antes Minetest), un juego de vóxeles libre y gratuito
  del mismo estilo, útil si queremos modificar el mundo a fondo.

## Roblox: nuestra propia experiencia, no bots en juegos públicos

Pensamos en usar cuentas de Roblox en un juego público de pruebas como *Baseplate*. **No lo
haremos así**: Roblox prohíbe las cuentas automatizadas en su plataforma, y en los juegos
públicos juegan menores. La forma correcta es **crear nuestra propia experiencia en
Roblox Studio**, donde los agentes ECHO sean **personajes no jugadores (NPC)** dirigidos
desde nuestro servidor. Las personas que entren sabrán que son IA, y la experiencia
cumplirá las normas de Roblox.

## Discord: un bot oficial

Un **bot oficial de Discord**, con su cuenta de bot declarada, para hablar con ECHO por
texto. Nada de automatizar cuentas personales. Es un proyecto nuevo, separado del antiguo
bot `echo-discord`, que sigue congelado.

## ¿Es posible?

Técnicamente, sí, todo. Lo que cuesta:

| Idea | Viabilidad | Principal reto |
|---|---|---|
| METAVERSE-1-CHAT | Alta: el mundo es nuestro | Construir el mundo (ya planificado) y el chat |
| Minecraft local o Luanti | Alta | Traducir el mundo de bloques a las percepciones de ECHO |
| Experiencia propia en Roblox | Media | Un servidor que conecte Roblox con ECHO y cumpla las normas de Roblox |
| Bot de Discord | Alta | Solo texto: no hay cuerpo ni mundo compartido |

Y lo común a todas: el **córtex lento**. En nuestro ordenador, el modelo de lenguaje tarda
en responder, así que una conversación fluida necesitaría un córtex más rápido, con una GPU
o una API.

## Qué medir, cuando llegue

- ¿Distingue ECHO al humano de sus agentes, y con qué evidencia?
- ¿Resiste lo que el humano intente hacerle creer?
- ¿Recuerda a la persona y cambia su trato según lo que esa persona **hace**?
- ¿Coopera, construye o aprende con ella?

Todo con registro completo, avisando siempre a las personas de que hablan con una IA, y sin
guardar datos personales. Y como siempre: aunque ECHO conviva con humanos, eso **no** lo
hace consciente ni vivo.

## Cuándo

Después de CURIOSITY-1, como parte de **METAVERSE-1**, que sigue siendo la última fase:
primero METAVERSE-1-CHAT en nuestro propio mundo, y después las pasarelas a Luanti o
Minecraft, Roblox y Discord.

[CURIOSITY-1 y METAVERSE-1](/articulos/echo4-curiosidad-metaverso-voxeles) · [ECHO-4 hoy](/articulos/echo4-doce-hitos-sabe-que-es)
