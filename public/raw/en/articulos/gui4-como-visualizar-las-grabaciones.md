# GUI-4: how to read the recordings

20 September 2026 · RxLabs®

GUI-4 is the window through which echoAI is watched from the inside. It
decides nothing: it observes. It never chooses an action, never writes into
the agent's memory and never shows a figure without saying where it came from.

Below are three recordings of the real application, made on 20 September. This
article explains what is being shown in each, tab by tab, and what should
**not** be concluded from them.

## First: the three origins

Every number in this window carries an origin label, and they are never mixed
inside one figure.

| Label | What it means |
|---|---|
| `en vivo` (live) | the real agent is running now in that window |
| `banco reducido` (reduced bench) | a real ECHO-3 bench runs now, with fewer cases than the certificate |
| `evidencia sellada` (sealed evidence) | a closed report from `lab/` is replayed, nothing is recomputed |

If that seems pedantic, that is exactly the point. A demo that mixes a live
run with a certified result stops being evidence and becomes advertising.

## 1 · The neural network and the case catalogue

<figure class="article-video">
  <video controls preload="metadata" poster="/media/gui4/gui4-casos-evidencia-1-poster.jpg">
    <source src="/media/gui4/gui4-casos-evidencia-1.mp4" type="video/mp4" />
  </video>
  <figcaption>1 min 24 s · the live "Red neuronal" tab and a walk through the case catalogue.</figcaption>
</figure>

At the top, the **CAPACITY-1 monitor**: 512 LIF neurons in two banks (HI and
LO) and 128 Adaptive-LIF, drawn as a history raster. Time runs to the right
and each row is a group of neurons. Each bank is normalised **against its own
peak**, because the LIF counts are far larger than the adaptation tail and a
shared scale left the pink band looking dead.

Below it, the **population rate**: how many spikes per turn each bank emits.
That shows the collective rhythm, which the raster's detail hides.

On the right, the **16-byte WSP**: the only packet the whole agent shares. The
text line translates it — `YO → OBSERVAR → AQUI @AHORA` — with the raw bytes
underneath.

And at the bottom, the part that matters: the **control path**, `CAM → Q →
gate → action`. This is what decides. The monitor above does not. They are
different claims, which is why they are drawn apart: CAPACITY-1 is measured,
but the agent still gets its Q row through CAM, not through the neurons.

The video catches the moment that counts: the agent takes **−16** of reward,
`ΔQ` drops, and the `acercarse` (approach) bar turns **red** with a negative
value. It has learned not to approach what hurts. The gold bar is the executed
action; the box on the right is the gate's verdict.

The video then moves to **Casos**, the catalogue. Each card says three things:
what it demonstrates, which control contrasts it and what it does **not**
demonstrate. The third line is the hardest to write and the most necessary.

## 2 · The benches and the evidence

<figure class="article-video">
  <video controls preload="metadata" poster="/media/gui4/gui4-casos-evidencia-2-poster.jpg">
    <source src="/media/gui4/gui4-casos-evidencia-2.mp4" type="video/mp4" />
  </video>
  <figcaption>1 min 11 s · the full catalogue, benches running and the sealed-evidence cases.</figcaption>
</figure>

Here the whole catalogue is walked and benches are run. The top bar shows the
running case and its origin: `SAFE-1 · banco reducido`, and when it ends,
`banco terminado`.

The contrasts going past are real and computed on the spot:

- **COMPOSE-1** — the full agent reaches goals the reactive Q does not, on the
  same rooms and seeds.
- **POWER-1** — predicted cost is right where the classic "come back when the
  battery drops below 20 %" aborts falsely.
- **SAFE-1** — no unsafe setpoint is accepted, even when the agent asks.
- **FUSION-1** — every observation carries source, capture and a verifiable
  extract.

Then come the **sealed evidence** cases: PATTERN-1R, DYNAMIC-1, PX4-1, HOST-1,
TRANSFER-3 and DRONE-3. Nothing is recomputed there: what a closed report in
`lab/` says is replayed, with its hash.

### One detail the video shows, worth explaining

Towards the end of this recording three cases appear greyed out, with a
**"No disponible"** button and a warning: SIM-3, GROUND-1 and CAUSE-1 "need the
PX4/Gazebo container".

**That is no longer true, and the reason given was badly framed.** On checking,
all three have saved evidence and can be recomputed on the machine itself,
without a container — CAUSE-1 does not even use one, it uses `bwrap`. Since
then the three are runnable benches:

| Case | What it recomputes | Result |
|---|---|---|
| CAUSE-1 | attribution over 16 saved flights | 16/16 against the temporal control's 8/16 |
| SIM-3 | rebuilding the sealed evidence | 416/416 checks |
| GROUND-1 | temporal integrity of 30 recorded flights | 30/30 lifecycle and stages |

All 17 cases run today; none is blocked. The video is left as it is rather
than re-recorded, because it shows something true: a blocked case **is not
hidden, it is shown with its reason written**, and when the reason turns out to
be wrong, it gets corrected.

What remains true: nothing new is flown in those three. The flights were
already recorded, and what runs live is the computation over them.

## 3 · The neural network as a tree

<figure class="article-video">
  <video controls preload="metadata" poster="/media/gui4/gui4-red-arbol-poster.jpg">
    <source src="/media/gui4/gui4-red-arbol.mp4" type="video/mp4" />
  </video>
  <figcaption>1 min 7 s · the "Red · árbol" tab, an orbitable graph with live activity.</figcaption>
</figure>

This is the classic view, inherited from NEURAL-VIZ-1 and kept untouched. Drag
to orbit the graph, scroll to zoom.

Right to left: **WSP 16 B** enters, feeds **LIF 256 · HI**, which feeds
**LIF 256 · LO**, which feeds **Adaptive-LIF 128 · monitor**. The pink dots
are spikes from the adaptive head. Separately, **CAM → Q · 3 actions** with
the gold node — the executed action — and **GATE** in green.

Notice that the monitor branch **is not wired to Q**. That is not a drawing
mistake: it is the truth of the system. CAPACITY-1 demonstrated its perceptual
improvement, but the current agent still decides through CAM and Q. Drawing an
arrow between them would invent an architecture that does not exist.

The two views complement each other. The raster says **when** the monitor
fired; the tree says **what is wired to what**. That is why GUI-4 added the new
one instead of replacing the old one.

## The other tabs

- **Dron 3D** — the body in a GPU-accelerated scene. The GPU draws; it does not
  decide actions or simulate aerodynamics.
- **Banco** — runs the benches with a progress bar and exports a JSON with
  seeds, denominator, control and limit, so the number can be retraced. The
  file states that it is **not a certificate**.
- **Evidencia** — the sealed reports with their hash and their limit.
- **Tutorial** — the same as this article, inside the application.

## How it records

The top bar has **Capturar (F5)**, **Grabar**, **Pausa** and **Paso**, plus a
**Presentación** switch that enlarges the type and hides raw data.

Recording is not a screen grab: the application **dumps its own frames**, one
PNG per turn, plus a `manifest.json` with the case, the origin, the frame count
and the turn range. Every frame therefore matches an exact turn and does not
depend on the compositor. On stopping, ffmpeg assembles the video.

## What these recordings do not demonstrate

- **They do not demonstrate general intelligence.** They are bounded benches
  with their controls beside them.
- **They do not demonstrate physical autonomy.** There is no drone, no cage, no
  hardware-in-the-loop. ECHO-3 stays at 14/15.
- **A live case is one run, not a measurement.** n=1 is not a result.
- **A reduced bench is not its phase's certificate.** It has less power and can
  come out differently by chance; that is why the denominator is on screen.
- The video illustrates. The certificate comes from `lab/` and its hashes, not
  from a screen.

[DRONE-3](/en/docs/echoai/drone3) · [TRANSFER-3](/en/docs/echoai/transfer) ·
[ECHO-3 roadmap](/en/docs/echoai/ruta) ·
[Data and source reports](/data/echo3-status.json)
