# METAVERSE-1: com ho farem

21 de setembre de 2026 · RxLabs®

ECHO-3 sap volar una missió sencera en simulació. El que encara no sap fer és
**deixar-se mirar mentre la vola**, en un món que s'assembli a un lloc i no a
una quadrícula de 7 × 7 cel·les.

METAVERSE-1 és la fase que se n'ocupa. Aquest article explica el pla sencer:
què està fet, què falta, en quin ordre, què podrà demostrar cada peça i —la
part que més costa d'escriure— què continuarà sense demostrar quan estigui
acabada.

## Primer, la lletra petita

El full de ruta demanava ECHO-3 complet abans d'obrir aquesta fase, i ECHO-3
és a **14/15**. Es va obrir igualment, per decisió explícita, i l'excepció
queda escrita al contracte en comptes de ser implícita.

El que falta de DRONE-3 és físic: *hardware-in-the-loop* i gàbia, que
necessiten una plataforma que no existeix al laboratori. D'aquí la
conseqüència que no es negocia:

> **METAVERSE-1 no pot tancar DRONE-3 ni pujar ECHO-3 a 15/15.** Cap resultat
> d'aquesta fase compta com a maquinari.

`drone3_hil_green`, `drone3_cage_green` i `drone3_green` continuen en `false`
passi el que passi aquí. Treballar en una simulació més rica mentre s'espera
la plataforma és raonable; declarar la fita tancada per això, no.

## Què és METAVERSE-1 exactament

No és «fer bonic el simulador». És ampliar **escala, fidelitat i
instrumentació** del laboratori ja tancat, sense tocar res del que està
certificat.

El risc principal de la fase és justament aquest: contaminar un examen ja
publicat, perquè amplia móns que ja van servir de banc. Quatre regles dures:

1. No es reobren els exàmens B/C de cap fase tancada.
2. No es reutilitza una geometria ja volada per a un banc nou. DRONE-3 ja va
   pagar aquest error un cop: un revisor va trobar que la partició de validació
   incloïa una geometria dels pilots, i es va haver de refer.
3. No s'edita cap fitxer segellat —els 137 del `lock.json` de DRONE-3, els 69
   de TRANSFER-3.
4. El backend físic congelat no canvia: apujar detall visual no pot alterar
   trajectòries, esdeveniments ni puntuació.

## La regla d'autoritat

Aquesta és la decisió que ordena tota la resta, i està congelada:

```
Blender  ────────────►  autoria de geometria
                             │
                             ▼
Gazebo + PX4  ──────────►  física, dinàmica i missió   ← única autoritat causal
                             │
                             ▼
registres append-only  ►  telemetria
                             │
                ┌────────────┴────────────┐
                ▼                         ▼
           reproducció              adaptador en directe
                └────────────┬────────────┘
                             ▼
                   Godot / GUI  ───────►  render de NOMÉS LECTURA
```

El visor **no decideix col·lisions, no integra dinàmica, no calcula arribada i
no controla PX4**. Si el renderer pogués influir en el resultat, la simulació
deixaria de ser un experiment i passaria a ser una animació.

I continuen drets els invariants de sempre: un sol WSP cognitiu de 16 bytes,
sense segon bus de pensament, sense LLM a NEXUS-0, i zero fitxers nous sota
`nexus0/` —quatre fases segellades tanquen el seu inventari amb un escombrat
d'aquesta carpeta, així que escriure-hi trenca panys aliens.

## Les vuit subfases

| Subfase | Què amplia | Estat |
|---|---|---|
| **META-WORLD-2** | escala i fidelitat visual del món | ✅ verd |
| **FLIGHT-2** | dinàmica de més fidelitat | pendent |
| **SENSOR-2** | més sensors i condicions | pendent |
| **PX4-2** | extensió del control de vol | pendent |
| **COMMAND-1** | ordres humanes verificades | pendent |
| **TRANSFER-META-1** | escala i transferència entre cossos | pendent |
| **GUI-METAVERSE-1** | visor, línia de temps, tutorial i reproducció | pendent |
| **CHIMP-1** | eina amb física i tasca composta | pendent |

Una feta, set per endavant.

## Què ja està fet

### META-WORLD-2 — la retícula de regions

COMPOSE-1 feia servir una llosa fixa de 7 × 7 cel·les de tres metres.
META-WORLD-2 la substitueix per una **retícula de regions**, i el detall que ho
fa possible és un invariant de vuit bits que ja hi era sense fer servir:

- una regió conté com a màxim **256 cel·les**, així que l'índex *local* cap en
  un byte —això és el que identifica `seq`, estat local, mai l'índex cru del
  món;
- la regió és **un altre byte**: el camp `region` que el paquet de FUSION-1 ja
  reservava i que fins ara anava sempre a 0.

Dos bytes adrecen 65.536 cel·les. El món certificat en feia servir 49.

| | mínim | 3 × 2 regions | 4 × 4 regions |
|---|---:|---:|---:|
| Regions | 1 | 6 | 16 |
| Cel·les | 49 | 294 | 784 |
| Mida | 21 × 21 m | 63 × 42 m | 84 × 84 m |

El que s'ha mesurat: **48/48 traces idèntiques** al món certificat —12 llavors
× 4 condicions, comparant l'escaneig, el resultat de cada pas, la distància a
casa i la de l'oracle, torn a torn—; **12/12** en detall visual sense moure una
capsa de col·lisió; **4/4** retícules adreçables; i zero branques per llavor o
per nom de món, comprovat analitzant l'arbre sintàctic del motor, no amb
`grep`.

Cinc mutants, tots cinc caçats. I una decisió deliberada: la retícula **no
hereta** de la classe del món certificat, perquè una subclasse faria que la
comparació no pogués fallar mai. Hi ha un test que ho comprova.

### La custòdia dels assets — reparada avui

En reprendre va aparèixer un defecte lleig. El constructor de móns escrivia el
seu rebut a `<nom>.json`; quan la declaració d'entrada tenia aquest mateix nom
en aquesta mateixa carpeta, **el rebut sobreescrivia la font**. Un món
—`wide-3x2`— va perdre així la seva declaració: va quedar un fitxer que es
citava a si mateix com el seu propi origen. La malla existia; la prova de què
la va produir, no.

Ara són tres rutes fixes i diferents:

```
<món>.declaration.json     font immutable
<món>.glb                  resultat visual
<món>.build-receipt.json   eina, paràmetres i resums
```

I l'ordre importa: es fa el resum de la declaració, s'exporta, es llegeix el
GLB com a contenidor glTF, **Blender reimporta el que Blender acaba
d'escriure**, es comprova que la declaració no ha canviat, i *només aleshores*
s'escriu el rebut. Si alguna cosa falla, no s'escriu cap rebut: una construcció
trencada no pot deixar un rebut verd perquè algú se'n fiï més tard.

El món perdut es va regenerar des dels seus paràmetres, i el resultat va ser
millor del que s'esperava: el GLB reconstruït és **byte a byte idèntic** a
l'original (`89dd499e…`). Continua sent formalment una reconstrucció —el
fitxer font es va perdre i això no es desfà, i el rebut ho diu— però produeix
el mateix artefacte bit a bit.

Dotze proves noves, cadascuna trencant la seva regla a propòsit. **40/40 en
verd.**

### Les eines, triades amb motiu

Mesurat contra la màquina real: AMD integrada, Mesa 25.3, OpenGL 4.6, **sense
CUDA**.

| Peça | Elecció | Per què |
|---|---|---|
| Física i vol | Gazebo Harmonic + PX4 v1.15.4 | és el backend que va certificar cinc fases; canviar-lo obligaria a recertificar-les |
| Modelatge 3D | Blender per script | lliure, exporta a glTF, i genera geometria de manera reproduïble en comptes de a mà |
| Visor | VTK avui, Godot 4.7 com a candidat | un renderer separat només s'accepta si millora la presentació sense tocar física ni registres |
| Vídeo | ffmpeg amb libopenh264 | l'ffmpeg del sistema no porta libx264; el codificador es detecta, no se suposa |

Descartats: **Isaac Sim** (exigeix RTX i no és lliure), **Unreal** (llicència i
aquesta gràfica), **O3DE** (massa pes per al que aporta) i **Webots** (bo, però
és canviar de backend físic i llençar certificats).

## Què falta, etapa per etapa

### Etapa 1 · FLIGHT-2 — paritat Gazebo/PX4

**La pregunta:** el món ampliat reprodueix el món certificat *en Python*. El
reprodueix també **dins del simulador**?

És el buit que META-WORLD-2 va deixar declarat al seu propi informe, i és
honest dir-ho així: que una retícula doni les mateixes traces que la llosa
fixa no demostra que l'SDF ampliat es comporti igual quan el carrega Gazebo.

La feina: generar l'SDF des de la mateixa declaració canònica, començar pel cas
mínim, després 2 × 2 i 3 × 2, volar la missió al backend congelat i comparar
posa, contactes, esdeveniments, arribada i puntuació contra els contractes
actuals.

**Criteri de sortida:** la missió passa al món objectiu amb evidència
reproduïble, i el renderer no intervé en el resultat.

### Etapa 2 · El contracte de telemetria — TRANSFER-META-1

Un adaptador, fora del nucli, que llegeixi les fonts que ja existeixen i
produeixi **un sol esquema** que serveixi igual per al que passa ara i per al
que es reprodueix després. Ha de normalitzar rellotge monotònic i rellotge
d'origen, posició i orientació, sensors, el WSP observat, CAM/T/PATTERN/Q quan
hi siguin, el gate, el setpoint, l'ACK, l'arribada i la recompensa, la
identitat del món, i l'origen de cada dada sense barrejar-la mai.

És de només lectura davant del vol: no introdueix ordres laterals.

**Criteri de sortida:** una mateixa seqüència es reprodueix de manera
determinista i alimenta un consumidor en directe amb el mateix esquema.

### Etapa 3 · El visor, en només lectura

Importar el GLB validat, documentar i provar la conversió d'eixos entre
Blender, Gazebo i Godot —que és on es cometen els errors silenciosos—, dibuixar
la posa des de l'adaptador sense física pròpia, i afegir càmera lliure, de
persecució i FPV, més estela, obstacles i marcadors d'inici i meta.

I un indicador que no es pugui ignorar: **en directe** o **reproducció**.

**Criteri de sortida:** la mateixa reproducció dona la mateixa trajectòria
visible, i tancar el visor no afecta la missió.

### Etapa 4 · Temps real

Seguir el flux de l'execució activa: definir *buffering*, ordre temporal i què
es fa amb un esdeveniment que arriba tard. Mesurar latència d'extrem a extrem i
*jitter*. Provar desconnexió i reconnexió.

La regla quan el renderer no arriba al ritme: **es descarten o s'interpolen
quadres visuals, mai telemetria de custòdia.** La imatge pot anar a batzegades;
el registre, no.

### Etapa 5 · Línia de temps i GUI-4

Reproducció, pausa, *scrub*, velocitat variable, salt directe a un gate, a un
ACK, a l'arribada o a una anomalia, i elecció entre directe i reproducció. Els
marcadors visuals es vinculen amb els esdeveniments reals, i la veritat privada
de l'operador es manté separada de la vista pública.

Cap acció purament visual pot escriure sobre la missió.

### Etapa 6 · Decidir el renderer oficial

Cal resoldre-ho per escrit, no per inèrcia:

- **VTK dins de GUI-4** — el camí més curt a una sola finestra Python nativa,
  però exigeix elevar molt l'escena 3D actual.
- **Godot separat** — més qualitat i millors eines 3D, però només val si el
  requisit final admet dos processos i dues finestres.
- **Integració incrustada** — no es dona per feta; es prova i es mesura abans
  de comprometre res.

GUI-METAVERSE-1 no es declara tancada fins a documentar quina de les tres
compleix el requisit i tenir proves d'extrem a extrem.

### Etapa 7 · Tancament i regressió

Banc determinista de reproducció; proves que el visor no altera missió ni
registres; proves de coordenades, orientació i sincronització; pressupostos
mesurats d'FPS, latència, memòria i pèrdues visuals; evidència separada per a
directe i per a reproducció; i repetir les regressions de NEXUS-0, vol,
METAVERSE-1 i GUI-4.

## Què podrà demostrar

Quan estigui tancada, aquesta fase permetrà ensenyar —i auditar— coses que avui
no es poden:

- **Una missió completa d'ECHO-3 vista des de dins del món**, no com una taula
  de números: el cos movent-se, l'estela, l'obstacle que esquiva, el moment
  exacte en què el gate diu BLOCK.
- **La mateixa missió, reproduïda després** des d'evidència guardada, amb el
  mateix món i el mateix contracte temporal. Veure una cosa dues vegades i que
  surti igual és el que separa un experiment d'una demostració.
- **Correlacionar escena i decisió.** Saltar a l'instant de l'ACK i veure què
  veia l'agent, quin WSP va entrar, quina fila de Q es va consultar i què va
  dir el gate.
- **Que l'escala no canvia la física.** Un món de 84 × 84 m que puntua igual que
  la llosa de 21 × 21 allà on no va canviar la geometria.
- **Que el visor és innocent.** Tancar la finestra i que la missió continuï
  igual; canviar el detall visual i que el resum de col·lisió no es mogui.

## Què continuarà sense demostrar

Això és el que convé tenir escrit abans, no després:

- **Res sobre maquinari.** No hi ha dron físic, ni gàbia, ni
  *hardware-in-the-loop*. ECHO-3 es queda a 14/15 acabi com acabi aquesta fase.
- **Res sobre intel·ligència nova.** Aquí creix l'escenari, no l'agent. Que
  ECHO-3 resolgui sales de 84 × 84 m està **sense mesurar**, i mesurar-ho és
  feina de COMPOSE a escala, no de METAVERSE-1.
- **Un món bonic no és un món vàlid.** La fidelitat visual es manté
  deliberadament separada de la geometria de col·lisió, i l'únic motiu pel qual
  això es pot afirmar és que hi ha un resum que ho comprova.
- **Varietat, avui, és modesta.** Dues plantilles, regions rectangulars de la
  mateixa mida i alçada fixa: l'eix Z continua sense fer-se servir.
- **Una animació local no és un tancament.** Fins que no hi hagi una missió real
  vista en directe i reproduïda després, GUI-METAVERSE-1 continua oberta per bé
  que es vegi un enregistrament.

## Com sabrem que està acabada

Hi ha una sola condició, i és exigent a propòsit:

> Una missió real d'ECHO-3 a Gazebo/PX4 es pot veure en temps real i
> reproduir-se després des d'evidència persistida, amb el mateix món i el
> mateix contracte temporal, **sense que Blender, Godot o la GUI creïn una
> segona veritat física ni modifiquin la missió**.

Mentre alguna d'aquestes condicions no es compleixi, la fase continua oberta. I
si pel camí apareix que el requisit d'una sola finestra xoca amb el visor
separat, això es decideix i s'escriu; no es resol fent veure que no existia.

[Full de ruta ECHO-3](/ca/docs/echoai/ruta) ·
[DRONE-3](/ca/docs/echoai/drone3) ·
[GUI-4: com llegir els enregistraments](/ca/articulos/gui4-como-visualizar-las-grabaciones) ·
[Dades i informes d'origen](/data/echo3-status.json)
