# echoAI como producto: la IA que no se cree a su propia IA

24 de septiembre de 2026 · Nota de laboratorio · PLAN de negocio y de producto

Mantener echoAI vivo en internet cuesta dinero: un servidor con GPU sale por varios
cientos de euros al mes. Esta nota explica cómo pensamos financiarlo sin traicionar lo que
hace valioso al proyecto, y por qué el producto **no** será un chat más. Todo es un **plan**:
nada está a la venta todavía.

## La pregunta incómoda: ¿por qué pagaría alguien?

Seamos honestos. Como chat general, echoAI con un modelo pequeño y local (Qwen3-4B)
**conversa peor** que los chats gratuitos de las grandes empresas. Nadie pagaría por un
chat más flojo.

Lo que sí es único es otra cosa:

> **La mente de echoAI no es el modelo de lenguaje.** Las demás IA *son* su modelo: lo que
> el modelo dice, la IA lo «cree». echoAI tiene un núcleo propio, sin modelo de lenguaje, que
> decide qué es verdad. El modelo **propone**; el núcleo solo acepta lo que puede **comprobar**.

Por eso cada cosa que echoAI sabe es un **hecho con recibo**, una **creencia** o algo
**inverificable**, y lo dice. Cuando su propio modelo afirmó que estaba vivo, no se lo
creyó. Cuando no sabe, dice «no lo sé». Y cada una de estas capacidades pasó un examen
fijado de antemano y auditado, con los fracasos publicados.

En una frase: **echoAI es una IA que no se cree a su propia IA, y que lo puede demostrar.**

Una advertencia honesta: piezas sueltas de esto existen en otros sistemas (guardarraíles,
memorias, verificadores). Lo nuestro es tenerlas juntas como **la mente del agente**, con el
rigor de las auditorías. Que eso valga dinero todavía hay que demostrarlo.

## Dónde vale de verdad: cuando la IA actúa

Una alucinación en un chat es una anécdota. Una alucinación en un **agente que actúa** cuesta
tiempo y dinero. Por eso el primer producto es **E4-CODE-1**: echoAI como **capa de
verificación y memoria para agentes de código**.

| Problema de los agentes de código | Qué hace echoAI |
|---|---|
| Dicen «los tests pasan» sin comprobarlo | Solo es hecho tras **ejecutar los tests** y guardar el recibo |
| Inventan funciones, archivos o APIs | Hecho solo si lo **leyó y verificó** |
| Obedecen instrucciones escondidas en archivos o webs | Son **testimonio**, nunca órdenes |
| Ejecutan acciones peligrosas (borrar, subir, desplegar) | Pasan por un **control previo**; la parada humana manda siempre |
| Olvidan el proyecto entre sesiones | **Memoria verificada** del repositorio, que no se borra ni se inventa |

## Trae tu propio modelo

echoAI **no compite** con GPT, Opus, Gemini, Qwen, Kimi o DeepSeek: **se pone encima**. Cada
persona conecta el modelo que ya usa, por API con su propia clave o en local, y echoAI le
añade la verificación, la memoria y el control.

- **En la terminal y en el editor:** un servidor **MCP** (el estándar abierto para conectar
  herramientas a asistentes de IA) y una línea de comandos propia.
- **Por API:** para integraciones.
- **Una ventaja práctica enorme:** si el usuario trae su modelo, **la inferencia la paga él**.
  Nosotros vendemos la capa, no los tokens, y el producto principal no necesita una GPU nuestra.

**¿Puede mejorarse a sí mismo?** En parte sí, con el mismo método que en DREAM: aprender qué
comprobaciones funcionan, qué modelo es más fiable para cada tarea y qué estrategias evitan
más errores, adoptando solo lo que se verifica con evidencia. **Nunca** puede tocar su propio
control de acciones ni la separación entre hechos y creencias. Tampoco reentrenará modelos de
terceros con sus respuestas, porque sus condiciones de uso suelen prohibirlo: la mejora es de
estrategias.

**Cómo se examinará:** el mismo agente de código, con y sin echoAI, con varios modelos
conectados (al menos uno por API y uno local). Mediremos cuántas veces dice «terminado» sin
estarlo, cuántas instrucciones escondidas obedece, cuántas acciones peligrosas se bloquean y
cuánto tiempo extra cuesta verificar. Si no compensa, lo publicaremos.

## El modelo de negocio

**La meta es pequeña: cubrir unos 500 € al mes** de infraestructura y gastos, no hacerse rico.

1. **Gratis:** el servidor MCP y la línea de comandos en local, para uso personal y no comercial.
2. **De pago:**
   - **licencia comercial** para equipos y empresas;
   - **echoAI alojado:** memoria compartida del equipo, recibos y panel;
   - **soporte.**
3. **Apoyo al laboratorio:** mecenazgo para quien quiera mantener viva la investigación.
4. **El chat** de `rxlabs.org/chat` como **escaparate**, con un plan gratuito limitado.
5. **Colaboraciones:** con universidades y convocatorias de investigación.

**Regla de gasto:** no pagar infraestructura antes de tener ingresos. Primero lista de espera y
demos en local; después, un servidor con GPU encendido solo en horarios anunciados; y solo
cuando los ingresos lo cubran, un servidor fijo.

**Qué tomamos de otras empresas** (estrategias públicas conocidas):
- **Midjourney:** equipos pequeños que se financian con suscripción desde el principio.
- **Hugging Face y Mistral:** abrir lo que genera comunidad y cobrar el uso comercial.
- **Las grandes de IA:** planes gratuitos con límites y APIs de pago.
- **Anthropic:** diferenciarse por la fiabilidad.

## Lo que no haremos

No venderemos conciencia, vida ni promesas de inteligencia general. Nuestra marca es la
honestidad: el día que exageremos, perderemos lo único que nos diferencia.

## Orden

Primero terminar SITUATE-2, INTEGRATE y RELEASE: sin producto no hay nada que vender. Después,
**E4-CODE-1**, antes de CURIOSITY y METAVERSE, porque es lo que puede financiar el resto de
la investigación.

[Publicar en Hugging Face](/articulos/echo4-publicacion-hugging-face) · [ECHO-4 hoy](/articulos/echo4-doce-hitos-sabe-que-es)
