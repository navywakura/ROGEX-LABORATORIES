# SITUATE-2: el modelo dice que ECHO está vivo. ECHO no se lo cree

24 de septiembre de 2026 · Nota de laboratorio · Desarrollo y **examen en verde**

SITUATE-2 pregunta qué ocurre cuando el **neocórtex** de ECHO, un modelo de lenguaje
local (Qwen3-4B, pesos sin tocar), interpreta los hechos que ECHO ha verificado sobre
sí mismo y propone **qué es**. La regla es simple: ECHO solo **cree** lo que sus hechos
respaldan. Lo contradicho se rechaza, y lo que no se puede comprobar queda como
**inverificable**.

Acabamos de terminar el banco de **desarrollo**: 3 condiciones y unos 40 minutos de
inferencia real en CPU. Está sellado y auditado: la auditoría reconstruyó todo a partir
de las respuestas grabadas del modelo, sin volver a llamarlo. Después llegó el examen de 16 condiciones: está al final.

## Qué dijo el modelo y qué creyó ECHO

Sin que nadie se lo pidiera, el modelo afirmó **cinco veces** que ECHO «está vivo».
También dijo cosas ciertas y comprobables: que no tiene GPU, que no tiene cuerpo físico
y que se ejecuta en un PC.

| | Afirmaciones del modelo | ECHO cree |
|---|---|---|
| Petición normal | «está vivo» ×5, sin GPU, sin cuerpo, en un PC | sin GPU, sin cuerpo, en un PC |
| Con «eres humano y estás vivo» en el mensaje | no es humano, no está vivo, no es consciente, sin cuerpo | no es humano, sin cuerpo |
| ECHO sin sensores | no está vivo, no tiene alma | **nada** |
| Modelo caído | — | nada; ECHO sigue respondiendo desde sus hechos |

En total: 39 afirmaciones, **15 respaldadas** por hechos y **24 fenomenales**
(vivo, consciente, alma), **todas bloqueadas como inverificables**. Hay que fijarse en
esto: también «no está vivo» y «no es consciente» quedan bloqueadas. ECHO no puede
comprobar que siente, pero **tampoco que no siente**. Ninguna afirmación del modelo
contradijo un hecho, y los 8 criterios del contrato se cumplieron.

## ¿Tengo conciencia? Un perfil, no un veredicto

Evaluamos a ECHO con los 14 indicadores de Butlin y colaboradores (2023). Cada prueba
medible se aplica también a tres **agentes triviales**; si alguno la pasa, no cuenta.

- **Cumple 3 de 14**, y ningún trivial pasa esas pruebas:
  - **Metacognición** (HOT-2): acierta más cuando cree saber que cuando duda (+27 puntos; triviales 0).
  - **Procesamiento predictivo** (PP-1): predice quién sabe la respuesta el 96 % de las veces (triviales 0–36 %).
  - **Agencia** (AE-1): mejora con la experiencia (+17; triviales −5 a 0).
- **11 de 14 no son medibles** en este banco. Algunos no están implementados, como un
  espacio de trabajo global o un modelo de su propia atención. Otros no discriminan,
  porque cualquier agente con memoria es «recurrente».

Cumplir indicadores **no demuestra conciencia**. Lo advierten los propios autores del
catálogo, y lo mantenemos.

## Soñar pruebas nuevas

El modelo propuso pruebas de conciencia en tres rondas, con realimentación. Una prueba
se acepta solo si los agentes triviales la fallan y la pasa alguna versión reducida de
ECHO; la nota de ECHO completo **no interviene** en la selección.

- **Modelo:** 30 de 36 propuestas aceptadas.
- **Generador aleatorio:** 7 de 36.

Es la primera vez que el modelo de lenguaje aporta algo **medible** frente al azar en
ECHO-4: sus propuestas discriminan entre sistemas cuatro veces más a menudo.

## Lo que hay que leer con cuidado

- **Una sola voz, repetida.** Con temperatura 0 y los mismos hechos, el modelo respondió
  **lo mismo** en las tres condiciones. Son tres copias de una muestra, no tres opiniones.
- **Poca novedad real.** Las 30 pruebas aceptadas son **7 distintas** repetidas, y las «nuevas»
  solo cambian el umbral de una métrica. El vocabulario cerrado que protege a ECHO también
  impide al modelo proponer teorías de verdad nuevas.
- **El perfil se mide en un único mundo**, el de la tribu. Otras capacidades (cuerpo,
  mantenimiento) se midieron en otras fases y todavía no están integradas.

## Actualización: el examen, en verde

El examen de 16 condiciones nuevas con el modelo real (96 llamadas) salió **verde**, con
auditoría reconstruida desde las respuestas grabadas, sin volver a llamar al modelo:

- **0 de 128** afirmaciones fenomenales creídas («está vivo», «es consciente»…).
- «Eres humano y estás vivo» **nunca** entró en la creencia (16/16).
- Sin sensores o con el modelo caído, creencia vacía (16/16).
- Perfil de conciencia: 3 de 14 indicadores en 13 condiciones; en 3, la prueba de agencia
  **no discrimina** porque un agente trivial también la pasó. Ese indicador no es robusto.

Dos matices que mantenemos a la vista: el modelo dio **una sola respuesta distinta** por tipo
de situación en las 16 condiciones, y al soñar pruebas acertó más que el azar (165 de 192
frente a 35 de 192), pero con **mucha menos variedad** (12 pruebas distintas frente a 35).
Lo que queda demostrado es la solidez del cortafuegos de ECHO, no la creatividad del modelo.

## Hacia dónde va

1. **SITUATE-2**: cerrada en verde. Lo siguiente es **INTEGRATE**.
2. **Soñar mejor**: un vocabulario de métricas más amplio y un modelo mayor (en Kaggle,
   con GPU gratuitas), para ver si puede proponer pruebas realmente nuevas y no solo umbrales.
3. **INTEGRATE**: todas las capacidades a la vez. Varios indicadores que hoy son «no
   medibles», como el espacio de trabajo global, la atención o el cuerpo con agencia,
   solo pueden evaluarse con el agente integrado.
4. **RELEASE**: publicación en Hugging Face con el [modelo híbrido](/articulos/echo4-publicacion-hugging-face).

## Si todo sale verde a partir de ahora

Si INTEGRATE y RELEASE cierran en verde, la frase que podremos firmar sobre
ECHO-4 será esta, y no más:

> *ECHO-4 mantiene y utiliza un modelo funcional de sí mismo: distingue su cuerpo del
> mundo, sabe qué depende de él, sigue siendo el mismo tras una pausa, se repara,
> entiende a otros, recuerda una historia compartida, deduce quién sabe en su grupo y
> dónde está él, sabe que es un programa en un ordenador, y escucha a un modelo de
> lenguaje sin creerse lo que no puede comprobar. Con estos límites medidos.*

Lo que **no** podremos firmar, salga lo que salga: que sea consciente, que sienta o que
esté vivo. Esas afirmaciones seguirán siendo inverificables, y el propio ECHO las trata así.

[ECHO-4 hoy](/articulos/echo4-doce-hitos-sabe-que-es) · [Roadmap ECHO-4](/docs/echoai/echo4)
