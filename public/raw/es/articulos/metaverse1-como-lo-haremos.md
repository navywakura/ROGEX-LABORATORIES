# METAVERSE-1: cómo lo haremos

21 de septiembre de 2026 · RxLabs®

> Prioridad actual: METAVERSE-1 queda al final, después del software ECHO-4 y las validaciones físicas previstas. Consulta el [roadmap oficial](/docs/echoai/echo4).

ECHO-3 sabe volar una misión entera en simulación. Lo que todavía no sabe
hacer es **dejarse mirar mientras la vuela**, en un mundo que se parezca a un
sitio y no a una cuadrícula de 7 × 7 celdas.

METAVERSE-1 es la fase que se ocupa de eso. Este artículo cuenta el plan
completo: qué está hecho, qué falta, en qué orden, qué podrá demostrar cada
pieza y —lo que más cuesta escribir— qué seguirá sin demostrar cuando esté
terminada.

## Lo primero, la letra pequeña

El roadmap pedía ECHO-3 completo antes de abrir esta fase, y ECHO-3 está en
**14/15**. Se abrió igual, por decisión explícita, y la excepción está escrita
en el contrato en lugar de ser implícita.

Lo que falta de DRONE-3 es físico: *hardware-in-the-loop* y jaula, que
necesitan una plataforma que no existe en el laboratorio. De ahí la
consecuencia que no se negocia:

> **METAVERSE-1 no puede cerrar DRONE-3 ni subir ECHO-3 a 15/15.** Ningún
> resultado de esta fase cuenta como hardware.

`drone3_hil_green`, `drone3_cage_green` y `drone3_green` siguen en `false`
pase lo que pase aquí. Trabajar en una simulación más rica mientras se espera
la plataforma es razonable; declarar por ello el hito cerrado, no.

## Qué es METAVERSE-1 exactamente

No es «hacer bonito el simulador». Es ampliar **escala, fidelidad e
instrumentación** del laboratorio ya cerrado, sin tocar nada de lo
certificado.

El riesgo principal de la fase es justo ese: contaminar un examen ya
publicado, porque amplía mundos que ya sirvieron de banco. Las reglas duras
son cuatro:

1. No se reabren los exámenes B/C de ninguna fase cerrada.
2. No se reutiliza una geometría ya volada para un banco nuevo. DRONE-3 ya
   pagó ese error una vez: un revisor encontró que la partición de validación
   incluía una geometría de los pilotos, y hubo que rehacerla.
3. No se edita ningún fichero sellado —los 137 del `lock.json` de DRONE-3, los
   69 de TRANSFER-3.
4. El backend físico congelado no cambia: subir detalle visual no puede
   alterar trayectorias, eventos ni puntuación.

## La regla de autoridad

Esta es la decisión que ordena todo lo demás, y está congelada:

```
Blender  ────────────►  autoría de geometría
                             │
                             ▼
Gazebo + PX4  ──────────►  física, dinámica y misión   ← única autoridad causal
                             │
                             ▼
logs append-only  ─────►  telemetría
                             │
                ┌────────────┴────────────┐
                ▼                         ▼
             replay                 adaptador en vivo
                └────────────┬────────────┘
                             ▼
                   Godot / GUI  ───────►  render de SÓLO LECTURA
```

El visor **no decide colisiones, no integra dinámica, no calcula llegada y no
controla PX4**. Si el renderer pudiera influir en el resultado, la simulación
dejaría de ser un experimento y pasaría a ser una animación.

Y siguen en pie los invariantes de siempre: un solo WSP cognitivo de 16 bytes,
sin segundo bus de pensamiento, sin LLM en NEXUS-0, y cero ficheros nuevos
bajo `nexus0/` —cuatro fases selladas cierran su inventario con un barrido de
esa carpeta, así que escribir ahí rompe candados ajenos.

## Las ocho sub-fases

| Sub-fase | Qué amplía | Estado |
|---|---|---|
| **META-WORLD-2** | escala y fidelidad visual del mundo | ✅ verde |
| **FLIGHT-2** | dinámica de mayor fidelidad | pendiente |
| **SENSOR-2** | más sensores y condiciones | pendiente |
| **PX4-2** | extensión del control de vuelo | pendiente |
| **COMMAND-1** | órdenes humanas verificadas | pendiente |
| **TRANSFER-META-1** | escala y transferencia entre cuerpos | pendiente |
| **GUI-METAVERSE-1** | visor, timeline, tutorial y replay | pendiente |
| **CHIMP-1** | herramienta con física y tarea compuesta | pendiente |

Una hecha, siete por delante.

## Lo que ya está hecho

### META-WORLD-2 — la retícula de regiones

COMPOSE-1 usaba una losa fija de 7 × 7 celdas de tres metros. META-WORLD-2 la
sustituye por una **retícula de regiones**, y el detalle que la hace posible es
un invariante de ocho bits que ya estaba ahí sin usar:

- una región contiene como mucho **256 celdas**, así que el índice *local* cabe
  en un byte —eso es lo que identifica `seq`, estado local, nunca el índice
  crudo del mundo;
- la región es **otro byte**: el campo `region` que el paquete de FUSION-1 ya
  reservaba y que hasta ahora iba siempre a 0.

Dos bytes direccionan 65.536 celdas. El mundo certificado usaba 49.

| | mínimo | 3 × 2 regiones | 4 × 4 regiones |
|---|---:|---:|---:|
| Regiones | 1 | 6 | 16 |
| Celdas | 49 | 294 | 784 |
| Tamaño | 21 × 21 m | 63 × 42 m | 84 × 84 m |

Lo medido: **48/48 trazas idénticas** al mundo certificado —12 semillas × 4
condiciones, comparando escaneo, resultado de cada paso, distancia a casa y
distancia del oráculo, turno a turno—; **12/12** en detalle visual sin mover
una caja de colisión; **4/4** retículas direccionables; y cero ramas por
semilla o por nombre de mundo, comprobado analizando el árbol sintáctico del
motor, no con `grep`.

Cinco mutantes, los cinco cazados. Y una decisión deliberada: la retícula
**no hereda** de la clase del mundo certificado, porque una subclase haría que
la comparación no pudiera fallar nunca. Hay un test que lo comprueba.

### La custodia de los assets — reparada hoy

Al reanudar apareció un defecto feo. El constructor de mundos escribía su
recibo en `<nombre>.json`; cuando la declaración de entrada tenía ese mismo
nombre en esa misma carpeta, **el recibo sobrescribía la fuente**. Un mundo
—`wide-3x2`— perdió así su declaración: quedó un fichero que se citaba a sí
mismo como su propio origen. La malla existía; la prueba de qué la produjo, no.

Ahora son tres rutas fijas y distintas:

```
<mundo>.declaration.json     fuente inmutable
<mundo>.glb                  resultado visual
<mundo>.build-receipt.json   herramienta, parámetros y hashes
```

Y el orden importa: se hashea la declaración, se exporta, se lee el GLB como
contenedor glTF, **Blender reimporta lo que Blender acaba de escribir**, se
comprueba que la declaración no ha cambiado, y *sólo entonces* se escribe el
recibo. Si algo falla, no se escribe recibo ninguno: un build roto no puede
dejar un recibo verde del que alguien se fíe después.

El mundo perdido se regeneró desde sus parámetros, y salió un resultado mejor
del esperado: el GLB reconstruido es **byte a byte idéntico** al original
(`89dd499e…`). Sigue siendo formalmente una reconstrucción —el fichero fuente
se perdió y eso no se deshace, y el recibo lo dice— pero produce el mismo
artefacto bit a bit.

12 pruebas nuevas, cada una rompiendo su regla a propósito. **40/40 en verde.**

### Las herramientas, elegidas con motivo

Medido contra la máquina real: AMD integrada, Mesa 25.3, OpenGL 4.6, **sin
CUDA**.

| Pieza | Elección | Por qué |
|---|---|---|
| Física y vuelo | Gazebo Harmonic + PX4 v1.15.4 | es el backend que certificó cinco fases; cambiarlo obligaría a recertificarlas |
| Modelado 3D | Blender por script | libre, exporta a glTF, y genera geometría de forma reproducible en vez de a mano |
| Visor | VTK hoy, Godot 4.7 como candidato | un renderer separado sólo se acepta si mejora la presentación sin tocar física ni logs |
| Vídeo | ffmpeg con libopenh264 | el ffmpeg del sistema no trae libx264; el codificador se detecta, no se supone |

Descartados: **Isaac Sim** (exige RTX y no es libre), **Unreal** (licencia y
esta gráfica), **O3DE** (demasiado peso para lo que aporta) y **Webots**
(bueno, pero es cambiar de backend físico y tirar certificados).

## Lo que falta, etapa por etapa

### Etapa 1 · FLIGHT-2 — paridad Gazebo/PX4

**La pregunta:** el mundo ampliado reproduce el mundo certificado *en Python*.
¿Lo reproduce también **dentro del simulador**?

Es el hueco que META-WORLD-2 dejó declarado en su propio informe, y es honesto
decirlo así: que una retícula dé las mismas trazas que la losa fija no prueba
que el SDF ampliado se comporte igual cuando lo carga Gazebo.

El trabajo: generar el SDF desde la misma declaración canónica, empezar por el
caso mínimo, después 2 × 2 y 3 × 2, volar la misión en el backend congelado y
comparar pose, contactos, eventos, llegada y puntuación contra los contratos
actuales.

**Criterio de salida:** la misión pasa en el mundo objetivo con evidencia
reproducible, y el renderer no interviene en el resultado.

### Etapa 2 · El contrato de telemetría — TRANSFER-META-1

Un adaptador, fuera del núcleo, que lea las fuentes que ya existen y produzca
**un solo esquema** que sirva igual para lo que ocurre ahora y para lo que se
reproduce después. Debe normalizar reloj monotónico y reloj de origen,
posición y orientación, sensores, el WSP observado, CAM/T/PATTERN/Q cuando
estén, el gate, el setpoint, el ACK, la llegada y la recompensa, la identidad
del mundo, y el origen del dato sin mezclarlo nunca.

Es de sólo lectura frente al vuelo: no introduce comandos laterales.

**Criterio de salida:** una misma secuencia se reproduce de forma determinista
y alimenta un consumidor en vivo con el mismo esquema.

### Etapa 3 · El visor, en sólo lectura

Importar el GLB validado, documentar y probar la conversión de ejes entre
Blender, Gazebo y Godot —que es donde se cometen los errores silenciosos—,
dibujar la pose desde el adaptador sin física propia, y añadir cámara libre,
de persecución y FPV, más estela, obstáculos y marcadores de inicio y meta.

Y un indicador que no se pueda ignorar: **en vivo** o **reproducción**.

**Criterio de salida:** la misma reproducción da la misma trayectoria visible,
y cerrar el visor no afecta a la misión.

### Etapa 4 · Tiempo real

Seguir el flujo de la ejecución activa: definir *buffering*, orden temporal y
qué se hace con un evento que llega tarde. Medir latencia de extremo a extremo
y *jitter*. Probar desconexión y reconexión.

La regla cuando el renderer no llega al ritmo: **se descartan o interpolan
cuadros visuales, nunca telemetría de custodia.** La imagen puede ir a
tirones; el registro, no.

### Etapa 5 · Timeline y GUI-4

Play, pausa, *scrub*, velocidad variable, salto directo a un gate, a un ACK, a
la llegada o a una anomalía, y elección entre vivo y reproducción. Los
marcadores visuales se vinculan con los eventos reales, y la verdad privada
del operador se mantiene separada de la vista pública.

Ninguna acción puramente visual puede escribir sobre la misión.

### Etapa 6 · Decidir el renderer oficial

Hay que resolverlo por escrito, no por inercia:

- **VTK dentro de GUI-4** — el camino más corto a una sola ventana Python
  nativa, pero exige elevar mucho la escena 3D actual.
- **Godot separado** — mayor calidad y mejores herramientas 3D, pero sólo vale
  si el requisito final admite dos procesos y dos ventanas.
- **Integración embebida** — no se asume; se prueba y se mide antes de
  comprometer nada.

GUI-METAVERSE-1 no se declara cerrada hasta documentar cuál de las tres cumple
el requisito y tener pruebas de extremo a extremo.

### Etapa 7 · Cierre y regresión

Banco determinista de reproducción; pruebas de que el visor no altera misión
ni registros; pruebas de coordenadas, orientación y sincronización;
presupuestos medidos de FPS, latencia, memoria y pérdidas visuales; evidencia
separada para vivo y para reproducción; y repetir las regresiones de NEXUS-0,
vuelo, METAVERSE-1 y GUI-4.

## Qué podrá demostrar

Cuando esté cerrada, esta fase permitirá enseñar —y auditar— cosas que hoy no
se pueden:

- **Una misión completa de ECHO-3 vista desde dentro del mundo**, no como una
  tabla de números: el cuerpo moviéndose, la estela, el obstáculo que esquiva,
  el momento exacto en que el gate dice BLOCK.
- **La misma misión, reproducida después** desde evidencia guardada, con el
  mismo mundo y el mismo contrato temporal. Ver algo dos veces y que salga
  igual es lo que separa un experimento de una demo.
- **Correlacionar escena y decisión.** Saltar al instante del ACK y ver qué
  veía el agente, qué WSP entró, qué fila de Q se consultó y qué dijo el gate.
- **Que la escala no cambia la física.** Un mundo de 84 × 84 m que puntúa igual
  que la losa de 21 × 21 donde no cambió la geometría.
- **Que el visor es inocente.** Cerrar la ventana y que la misión siga igual;
  cambiar el detalle visual y que el dígest de colisión no se mueva.

## Qué seguirá sin demostrar

Esto es lo que importa tener escrito antes, no después:

- **Nada sobre hardware.** No hay dron físico, ni jaula, ni
  *hardware-in-the-loop*. ECHO-3 se queda en 14/15 termine como termine esta
  fase.
- **Nada sobre inteligencia nueva.** Aquí crece el escenario, no el agente. Que
  ECHO-3 resuelva salas de 84 × 84 m está **sin medir**, y medirlo es trabajo
  de COMPOSE en escala, no de METAVERSE-1.
- **Un mundo bonito no es un mundo válido.** La fidelidad visual se mantiene
  deliberadamente separada de la geometría de colisión, y el único motivo de
  que eso se pueda afirmar es que hay un dígest que lo comprueba.
- **Variedad, hoy, es modesta.** Dos plantillas, regiones rectangulares del
  mismo tamaño y altura fija: el eje Z sigue sin usarse.
- **Una animación local no es un cierre.** Hasta que no haya una misión real
  vista en vivo y reproducida después, GUI-METAVERSE-1 sigue abierta por muy
  bien que se vea una grabación.

## Cómo sabremos que está terminada

Hay una sola condición, y es exigente a propósito:

> Una misión real de ECHO-3 en Gazebo/PX4 puede verse en tiempo real y
> reproducirse después desde evidencia persistida, con el mismo mundo y el
> mismo contrato temporal, **sin que Blender, Godot o la GUI creen una segunda
> verdad física ni modifiquen la misión**.

Mientras alguna de esas condiciones no se cumpla, la fase sigue abierta. Y si
en el camino aparece que el requisito de una sola ventana choca con el visor
separado, eso se decide y se escribe; no se resuelve fingiendo que no existía.

[ECHO-3, hoja de ruta](/docs/echoai/ruta) ·
[DRONE-3](/docs/echoai/drone3) ·
[GUI-4: cómo visualizar las grabaciones](/articulos/gui4-como-visualizar-las-grabaciones) ·
[Datos e informes de origen](/data/echo3-status.json)
