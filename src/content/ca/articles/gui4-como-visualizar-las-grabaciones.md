# GUI-4: com llegir els enregistraments

20 de setembre de 2026 · RxLabs®

GUI-4 és la finestra amb què es mira echoAI per dins. No decideix res: observa.
Mai tria una acció, mai escriu a la memòria de l'agent i mai ensenya una xifra
sense dir d'on surt.

A sota hi ha tres enregistraments de l'aplicació real, fets el 20 de setembre.
Aquest article explica què s'hi veu, pestanya per pestanya, i què **no** se'n
pot deduir.

## Primer: els tres orígens

Tot número d'aquesta finestra porta una etiqueta d'origen, i no es barregen mai
dins d'una mateixa xifra.

| Etiqueta | Què vol dir |
|---|---|
| `en vivo` (en directe) | l'agent real corre ara en aquella finestra |
| `banco reducido` (banc reduït) | un banc real d'ECHO-3 corre ara, amb menys casos que el certificat |
| `evidencia sellada` (evidència segellada) | es reprodueix un informe tancat de `lab/`, sense recalcular res |

Si sembla pedant, és justament el punt. Una demostració que barreja una
execució en directe amb un resultat certificat deixa de ser evidència i passa a
ser publicitat.

## 1 · La xarxa neuronal i el catàleg de casos

<figure class="article-video">
  <video controls preload="metadata" poster="/media/gui4/gui4-casos-evidencia-1-poster.jpg">
    <source src="/media/gui4/gui4-casos-evidencia-1.mp4" type="video/mp4" />
  </video>
  <figcaption>1 min 24 s · la pestanya «Red neuronal» en directe i un recorregut pel catàleg de casos.</figcaption>
</figure>

A dalt, el **monitor CAPACITY-1**: 512 neurones LIF en dos bancs (HI i LO) i
128 Adaptive-LIF, dibuixades com un raster d'història. El temps avança cap a la
dreta i cada fila és un grup de neurones. Cada banc es normalitza **amb el seu
propi pic**, perquè els recomptes dels LIF són molt més grans que la cua
d'adaptació i amb una escala comuna la banda rosa semblava morta.

A sota, la **taxa de població**: quants spikes per torn emet cada banc. Allà es
veu el ritme de conjunt, que al raster es perd entre el detall.

A la dreta, el **WSP de 16 bytes**: l'únic paquet que comparteix tot l'agent.
La línia de text el tradueix —`YO → OBSERVAR → AQUI @AHORA`— i a sota hi ha els
bytes crus.

I al capdavall, el que importa: el **camí de control**, `CAM → Q → gate →
acció`. Això és el que decideix. El monitor de dalt, no. Són afirmacions
diferents i per això es dibuixen separades: CAPACITY-1 està mesurat, però
l'agent continua obtenint la seva fila de Q per CAM, no per les neurones.

Al vídeo es veu el moment que compta: l'agent rep **−16** de recompensa, `ΔQ`
baixa, i la barra d'`acercarse` es torna **vermella** amb valor negatiu. Ha
après a no acostar-se al que pica. La barra daurada és l'acció executada; el
requadre de la dreta, el veredicte del gate.

Després el vídeo passa a **Casos**, el catàleg. Cada targeta diu tres coses:
què demostra, quin control la contrasta i què **no** demostra. La tercera línia
és la que més costa escriure i la que més falta fa.

## 2 · Els bancs i l'evidència

<figure class="article-video">
  <video controls preload="metadata" poster="/media/gui4/gui4-casos-evidencia-2-poster.jpg">
    <source src="/media/gui4/gui4-casos-evidencia-2.mp4" type="video/mp4" />
  </video>
  <figcaption>1 min 11 s · el catàleg sencer, bancs executant-se i els casos d'evidència segellada.</figcaption>
</figure>

Aquí es recorre el catàleg sencer i s'executen bancs. A la barra superior
apareix el cas que corre i el seu origen: `SAFE-1 · banco reducido`, i en
acabar, `banco terminado`.

Els contrastos que hi passen són reals i es calculen al moment:

- **COMPOSE-1** — l'agent complet assoleix metes que la Q reactiva no assoleix,
  sobre les mateixes sales i llavors.
- **POWER-1** — el cost previst encerta on el clàssic «torna quan la bateria
  baixi del 20 %» avorta en fals.
- **SAFE-1** — cap setpoint insegur s'accepta, encara que l'agent el demani.
- **FUSION-1** — cada observació porta font, captura i extracte verificable.

Després venen els casos d'**evidència segellada**: PATTERN-1R, DYNAMIC-1,
PX4-1, HOST-1, TRANSFER-3 i DRONE-3. Allà no es recalcula res: es reprodueix el
que diu un informe tancat de `lab/`, amb el seu hash.

### Un detall que el vídeo ensenya i convé explicar

Cap al final d'aquest enregistrament es veuen tres casos en gris, amb el botó
**«No disponible»** i un avís: SIM-3, GROUND-1 i CAUSE-1 «necessiten el
contenidor PX4/Gazebo».

**Això ja no és així, i el motiu que hi deia estava mal plantejat.** En
comprovar-ho va resultar que els tres tenen evidència guardada i es poden
recalcular a la mateixa màquina, sense contenidor: CAUSE-1 ni tan sols
n'utilitza, fa servir `bwrap`. Des d'aleshores els tres són bancs executables:

| Cas | Què recalcula | Resultat |
|---|---|---|
| CAUSE-1 | atribució sobre 16 vols guardats | 16/16 davant 8/16 del control temporal |
| SIM-3 | reconstrucció de l'evidència segellada | 416/416 comprovacions |
| GROUND-1 | integritat temporal de 30 vols enregistrats | 30/30 cicle de vida i etapes |

Els 17 casos s'executen avui; cap està bloquejat. Deixem el vídeo tal com és en
comptes de tornar-lo a gravar, perquè ensenya una cosa certa: un cas bloquejat
**no s'amaga, es mostra amb el motiu escrit**, i quan el motiu resulta estar
malament, es corregeix.

El que continua sent cert: en aquests tres no es vola res de nou. Els vols ja
estaven enregistrats i el que corre en directe és el càlcul sobre ells.

## 3 · La xarxa neuronal en arbre

<figure class="article-video">
  <video controls preload="metadata" poster="/media/gui4/gui4-red-arbol-poster.jpg">
    <source src="/media/gui4/gui4-red-arbol.mp4" type="video/mp4" />
  </video>
  <figcaption>1 min 7 s · la pestanya «Red · árbol», el graf orbitable amb activitat en directe.</figcaption>
</figure>

Aquesta és la vista clàssica, heretada de NEURAL-VIZ-1 i conservada tal qual.
El graf s'orbita arrossegant i s'hi fa zoom amb la roda.

De dreta a esquerra: **WSP 16 B** entra, alimenta **LIF 256 · HI**, que
alimenta **LIF 256 · LO**, que alimenta **Adaptive-LIF 128 · monitor**. Els
punts rosats són spikes del cap adaptatiu. A part, **CAM → Q · 3 accions** amb
el node daurat —l'acció executada— i **GATE** en verd.

Fixeu-vos que la branca del monitor **no està connectada a Q**. No és un error
de dibuix: és la veritat del sistema. CAPACITY-1 va demostrar la seva millora
perceptiva, però l'agent actual continua decidint per CAM i Q. Dibuixar-hi una
fletxa seria inventar-se una arquitectura que no existeix.

Les dues vistes es complementen. El raster diu **quan** va disparar el monitor;
l'arbre diu **què està connectat amb què**. Per això GUI-4 va afegir la nova en
comptes de substituir la vella.

## Les altres pestanyes

- **Dron 3D** — el cos en una escena accelerada per GPU. La GPU dibuixa; no
  decideix accions ni simula aerodinàmica.
- **Banco** — executa els bancs amb barra de progrés i exporta un JSON amb
  llavors, denominador, control i límit, perquè el número es pugui rastrejar.
  El fitxer hi porta escrit que **no és un certificat**.
- **Evidencia** — els informes segellats amb el seu hash i el seu límit.
- **Tutorial** — el mateix que aquest article, dins de l'aplicació.

## Com es grava

La barra superior té **Capturar (F5)**, **Grabar**, **Pausa** i **Paso**, i un
interruptor de **Presentación** que fa la tipografia més gran i amaga les dades
crues.

L'enregistrament no és una captura de pantalla: l'aplicació **bolca els seus
propis frames**, un PNG per torn, més un `manifest.json` amb el cas, l'origen,
el nombre de frames i el rang de torns. Així cada frame correspon a un torn
exacte i no depèn del compositor. En aturar, ffmpeg munta el vídeo.

## Què no demostren aquests enregistraments

- **No demostren intel·ligència general.** Són bancs acotats amb els seus
  controls al costat.
- **No demostren autonomia física.** No hi ha dron, ni gàbia, ni
  hardware-in-the-loop. ECHO-3 continua a 14/15.
- **Un cas en directe és una execució, no una mesura.** n=1 no és un resultat.
- **Un banc reduït no és el certificat de la seva fase.** Té menys potència i
  pot sortir diferent per atzar; per això porta el denominador a la vista.
- El vídeo il·lustra. El certificat surt de `lab/` i dels seus hashes, no d'una
  pantalla.

[DRONE-3](/ca/docs/echoai/drone3) · [TRANSFER-3](/ca/docs/echoai/transfer) ·
[Full de ruta ECHO-3](/ca/docs/echoai/ruta) ·
[Dades i informes d'origen](/data/echo3-status.json)
