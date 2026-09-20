# GUI-4: cómo visualizar las grabaciones

20 de septiembre de 2026 · RxLabs®

GUI-4 es la ventana con la que se mira a echoAI por dentro. No decide nada:
observa. Nunca elige una acción, nunca escribe en la memoria del agente y
nunca enseña una cifra sin decir de dónde sale.

Abajo hay tres grabaciones de la aplicación real, hechas el 20 de septiembre.
Este artículo explica qué se está viendo en cada una, pestaña por pestaña, y
qué **no** hay que deducir de ellas.

## Lo primero: los tres orígenes

Todo número en esta ventana lleva una etiqueta de origen, y no se mezclan
nunca dentro de una misma cifra.

| Etiqueta | Qué significa |
|---|---|
| `en vivo` | el agente real está corriendo ahora en esa ventana |
| `banco reducido` | un banco real de ECHO-3 corre ahora, con menos casos que el certificado |
| `evidencia sellada` | se reproduce un informe cerrado de `lab/`, sin recalcular nada |

Si esto le parece pedante, es justamente el punto. Una demo que mezcla una
ejecución en directo con un resultado certificado deja de ser evidencia y pasa
a ser publicidad.

## 1 · La red neuronal y el catálogo de casos

<figure class="article-video">
  <video controls preload="metadata" poster="/media/gui4/gui4-casos-evidencia-1-poster.jpg">
    <source src="/media/gui4/gui4-casos-evidencia-1.mp4" type="video/mp4" />
  </video>
  <figcaption>1 min 24 s · pestaña «Red neuronal» en vivo y recorrido por el catálogo de casos.</figcaption>
</figure>

Arriba, el **monitor CAPACITY-1**: 512 neuronas LIF en dos bancos (HI y LO) y
128 Adaptive-LIF, dibujadas como un raster de historia. El tiempo avanza hacia
la derecha y cada fila es un grupo de neuronas. Cada banco se normaliza **con
su propio pico**, porque los recuentos de los LIF son mucho mayores que la
cola de adaptación y con una escala común la banda rosa parecía muerta.

Debajo, la **tasa de población**: cuántos spikes por turno emite cada banco.
Ahí se ve el ritmo de conjunto, que en el raster se pierde entre el detalle.

A la derecha, el **WSP de 16 bytes**: el único paquete que comparte todo el
agente. La línea de texto lo traduce —`YO → OBSERVAR → AQUI @AHORA`— y debajo
están los bytes crudos.

Y abajo del todo, lo importante: el **camino de control**, `CAM → Q → gate →
acción`. Esto es lo que decide. El monitor de arriba, no. Son afirmaciones
distintas y por eso se dibujan separadas: CAPACITY-1 está medido, pero el
agente sigue obteniendo su fila de Q por CAM, no por las neuronas.

En el vídeo se ve el momento que importa: el agente recibe **−16** de
recompensa, `ΔQ` baja, y la barra de `acercarse` se vuelve **roja** con valor
negativo. Ha aprendido a no acercarse a lo que pega. La barra dorada es la
acción ejecutada; el recuadro de la derecha, el veredicto del gate.

Luego el vídeo pasa a **Casos**, el catálogo. Cada tarjeta dice tres cosas:
qué demuestra, qué control la contrasta y qué **no** demuestra. La tercera
línea es la que más cuesta escribir y la que más falta hace.

## 2 · Los bancos y la evidencia

<figure class="article-video">
  <video controls preload="metadata" poster="/media/gui4/gui4-casos-evidencia-2-poster.jpg">
    <source src="/media/gui4/gui4-casos-evidencia-2.mp4" type="video/mp4" />
  </video>
  <figcaption>1 min 11 s · catálogo completo, bancos ejecutándose y casos de evidencia sellada.</figcaption>
</figure>

Aquí se recorre el catálogo entero y se ejecutan bancos. En la barra superior
aparece el caso que corre y su origen: `SAFE-1 · banco reducido`, y al
terminar, `banco terminado`.

Los contrastes que se ven pasar son reales y se calculan en el momento:

- **COMPOSE-1** — el agente completo alcanza metas que la Q reactiva no
  alcanza, sobre las mismas salas y semillas.
- **POWER-1** — el coste previsto acierta donde el clásico «vuelve cuando la
  batería baje del 20 %» aborta en falso.
- **SAFE-1** — ningún setpoint inseguro se acepta, aunque el agente lo pida.
- **FUSION-1** — cada observación lleva fuente, captura y extracto verificable.

Después vienen los casos de **evidencia sellada**: PATTERN-1R, DYNAMIC-1,
PX4-1, HOST-1, TRANSFER-3 y DRONE-3. Ahí no se recalcula nada: se reproduce lo
que dice un informe cerrado de `lab/`, con su hash.

### Un detalle que el vídeo enseña y conviene explicar

Hacia el final de esta grabación se ven tres casos en gris, con el botón
**«No disponible»** y un aviso: SIM-3, GROUND-1 y CAUSE-1 «necesitan el
contenedor PX4/Gazebo».

**Eso ya no es así, y el motivo que ponía estaba mal planteado.** Al
comprobarlo resultó que los tres tienen evidencia guardada y se pueden
recalcular en la propia máquina, sin contenedor: CAUSE-1 ni siquiera lo usa,
usa `bwrap`. Desde entonces los tres son bancos ejecutables:

| Caso | Qué recalcula | Resultado |
|---|---|---|
| CAUSE-1 | atribución sobre 16 vuelos guardados | 16/16 frente a 8/16 del control temporal |
| SIM-3 | reconstrucción de la evidencia sellada | 416/416 comprobaciones |
| GROUND-1 | integridad temporal de 30 vuelos grabados | 30/30 ciclo de vida y etapas |

Los 17 casos se ejecutan hoy; ninguno está bloqueado. Dejamos el vídeo como
está en lugar de regrabarlo, porque enseña algo verdadero: un caso bloqueado
**no se oculta, se muestra con su motivo escrito**, y cuando el motivo resulta
estar mal, se corrige.

Lo que sigue siendo cierto: en esos tres no se vuela nada nuevo. Los vuelos ya
estaban grabados y lo que corre en vivo es el cálculo sobre ellos.

## 3 · La red neuronal en árbol

<figure class="article-video">
  <video controls preload="metadata" poster="/media/gui4/gui4-red-arbol-poster.jpg">
    <source src="/media/gui4/gui4-red-arbol.mp4" type="video/mp4" />
  </video>
  <figcaption>1 min 7 s · pestaña «Red · árbol», el grafo orbitable con actividad en vivo.</figcaption>
</figure>

Esta es la vista clásica, heredada de NEURAL-VIZ-1 y conservada tal cual. El
grafo se orbita arrastrando y se acerca con la rueda.

De derecha a izquierda: **WSP 16 B** entra, alimenta **LIF 256 · HI**, que
alimenta **LIF 256 · LO**, que alimenta **Adaptive-LIF 128 · monitor**. Los
puntos rosas son spikes de la cabeza adaptativa. Aparte, **CAM → Q · 3
acciones** con el nodo dorado —la acción ejecutada— y **GATE** en verde.

Fíjese en que la rama del monitor **no está conectada a Q**. No es un fallo de
dibujo: es la verdad del sistema. CAPACITY-1 demostró su mejora perceptiva,
pero el agente actual sigue decidiendo por CAM y Q. Dibujar una flecha entre
ellos sería inventarse una arquitectura que no existe.

Las dos vistas se complementan. El raster dice **cuándo** disparó el monitor;
el árbol dice **qué está conectado con qué**. Por eso GUI-4 añadió la nueva en
lugar de sustituir la vieja.

## Las demás pestañas

- **Dron 3D** — el cuerpo en una escena acelerada por GPU. La GPU dibuja; no
  decide acciones ni simula aerodinámica.
- **Banco** — ejecuta los bancos con barra de progreso y exporta un JSON con
  semillas, denominador, control y límite, para que el número se pueda
  rastrear. El fichero lleva escrito que **no es un certificado**.
- **Evidencia** — los informes sellados con su hash y su límite.
- **Tutorial** — lo mismo que este artículo, dentro de la aplicación.

## Cómo se graba

La barra superior tiene **Capturar (F5)**, **Grabar**, **Pausa** y **Paso**, y
un interruptor de **Presentación** que agranda la tipografía y esconde los
datos crudos.

La grabación no es una captura de pantalla: la aplicación **vuelca sus propios
frames**, un PNG por turno, más un `manifest.json` con el caso, el origen, el
número de frames y el rango de turnos. Así cada frame corresponde a un turno
exacto y no depende del compositor. Al parar, ffmpeg monta el vídeo.

## Lo que estas grabaciones no demuestran

- **No demuestran inteligencia general.** Son bancos acotados con sus
  controles al lado.
- **No demuestran autonomía física.** No hay dron, ni jaula, ni
  hardware-in-the-loop. ECHO-3 sigue en 14/15.
- **Un caso en vivo es una ejecución, no una medida.** n=1 no es un resultado.
- **Un banco reducido no es el certificado de su fase.** Tiene menos potencia
  y puede salir distinto por azar; por eso lleva el denominador a la vista.
- El vídeo ilustra. El certificado sale de `lab/` y de sus hashes, no de una
  pantalla.

[DRONE-3](/docs/echoai/drone3) · [TRANSFER-3](/docs/echoai/transfer) ·
[Hoja de ruta ECHO-3](/docs/echoai/ruta) ·
[Datos e informes de origen](/data/echo3-status.json)
