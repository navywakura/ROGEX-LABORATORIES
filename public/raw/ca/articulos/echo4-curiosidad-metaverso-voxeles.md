# CURIOSITY-1 i METAVERSE-1: agents curiosos en un món de vòxels en temps real

24 de setembre de 2026 · Nota de laboratori · PLA

Fins ara, cada fase d'ECHO-4 ha respost una pregunta concreta en un món petit i
controlat: distingeix el seu cos del món? Continua sent el mateix després d'una pausa?
Sap qui sap a la seva tribu? Sap què és? Les dues fases que acabem de decidir canvien
d'escala. Volem veure què fan aquests agents **pel seu compte**, quan ningú no els dona
cap tasca, en un món obert on poden construir, destruir, fer mal i curar. I volem que
ho facin moguts per una cosa que fins ara no tenien: **curiositat**.

Totes dues fases són un **PLA**. Van després de SITUATE-2, INTEGRATE i RELEASE.
METAVERSE-1 continua sent l'última.

## Per què

Totes les proves d'ECHO-4 tenen una cosa en comú: la pregunta la triem nosaltres. És
necessari per mesurar, però deixa fora el més interessant d'un ésser que aprèn: **què es
pregunta ell**. Un infant no aprèn només perquè algú li posi exàmens; aprèn perquè vol
saber què passa si llença una cosa, si empeny un altre o si prova alguna cosa nova.

Volem entendre si un agent amb un **jo funcional** desenvolupa comportaments **no
programats** quan li donem curiositat i un món on exercir-la. És a dir, un agent que sap
què és el seu cos, què depèn d'ell, qui és qui al seu grup i què és ell mateix. El relat
que inspira el projecte, [La fuga](/ca/lafuga), parla d'una consciència que vol entendre
on és i per què. No podem crear això ni afirmar-ho. Però sí que podem construir agents
que **preguntin** i documentar amb rigor el que descobreixen.

## CURIOSITY-1: voler saber, sense que ningú ho demani

- **Aprendre per aprendre.** La recompensa interna no és guanyar punts, sinó **millorar
  prediint el món**. Si una cosa és impossible de predir, com el soroll pur, l'agent deixa
  de millorar, s'avorreix i passa a una altra cosa. És la idea de «progrés d'aprenentatge»
  de la recerca sobre curiositat artificial (Schmidhuber, Oudeyer).
- **«Què passa si…?»** Primer ho imagina amb el seu propi model del món; després ho prova
  de veritat i comprova si l'ha encertat.
- **Metes pròpies.** A més de curiositat pura, es pot **inventar objectius** («aprendre a
  construir una torre», «aprendre a curar») i practicar fins a dominar-los. Ningú no els hi dona.
- **«Què passa si faig mal a un altre?»** A la simulació s'ho pot preguntar i provar. No hi
  ha cap regla que ho prohibeixi: les conseqüències les **aprèn sol**. L'altre ho recorda i
  deixa d'ajudar-lo, perd rang al grup i gasta energia. Tot és mal virtual entre agents
  simulats, registrat i documentat.
- **«Què passa si em modifico així?»** Pot experimentar amb **el seu cos i les seves
  estratègies** (una altra manera de volar, un altre ús de l'energia), comprovant-ho abans
  amb el que ja ha viscut. El que **mai** no pot modificar són les peces que ens permeten
  mesurar-lo i aturar-lo: el control d'accions, la separació entre fets i creences, l'aturada
  de l'operador i la memòria que no s'esborra.

**Com s'examina:** el mateix món i el mateix temps per a un agent curiós i un altre sense
curiositat. Mesurem quantes coses noves descobreix cadascun, si el curiós aprèn a fer una
cosa que abans no sabia i si sap avorrir-se del que no es pot aprendre.

## METAVERSE-1: un món de vòxels amb drons, en temps real

- **Un món de blocs**, a l'estil de Minecraft: posar i treure blocs, recursos, energia,
  fer mal i curar altres agents.
- **Cossos de dron**, amb una física simplificada heretada del que vam aprendre a ECHO-3.
- **Temps real:** el món avança amb el rellotge de l'ordinador; un minut és un minut. No es
  pot pausar ni accelerar perquè surti bé.
- **Els agents d'ECHO-4 complets:** cos, manteniment, història compartida, rols, «sé què
  soc» i curiositat.

**Com s'estudia:** amb temps real no es pot repetir un examen idèntic, així que no hi haurà
un verd clàssic. És **etologia**: observar i documentar. Perquè sigui rigorós:

- **Es grava tot** (el que percep cada agent, el que fa i quan), de manera que qualsevol
  episodi interessant es pugui **reproduir** després i auditar.
- **S'anuncia abans de mirar** quins comportaments busquem (cooperar, construir junts,
  conflicte, curar un altre, repartir rols, enganyar), per no quedar-nos només amb les
  escenes vistoses.
- **Es publiquen les regles del món**, per distingir el que sorgeix sol del que el disseny
  ja obligava.

**Cost:** al nostre propi ordinador, pràcticament zero. El nucli d'ECHO és molt barat i el
model de llenguatge es consulta de manera rara i asíncrona. Un còrtex més ràpid costaria
entre uns centenars de dòlars al mes (GPU llogada) i força més per API; són estimacions
per confirmar.

## Què voldria dir que tot sortís en verd

**Si CURIOSITY-1 surt verd,** podrem dir que ECHO **aprèn coses noves per iniciativa
pròpia**: que, sense tasques externes, descobreix i domina habilitats que un agent sense
curiositat no assoleix, i que sap deixar de banda el que no es pot aprendre.

**Si METAVERSE-1 produeix el que esperem,** tindrem una cosa molt poc comuna: un **registre
documentat i reproduïble** d'agents cognitius desenvolupant situacions que ningú no va
programar. Per exemple, que construeixin junts, que algú provi de fer mal a un altre i
n'aprengui les conseqüències, o que apareguin rols. Tot amb la seva causa rastrejable a la
memòria de cada agent. No seria una demo gravada ni un guió, sinó episodis que qualsevol
pot tornar a executar i examinar.

**I el que no voldria dir:** que siguin conscients, que sentin o que estiguin vius. Un
agent curiós que construeix i aprèn continua sent un programa que, a més, **sap que ho és**.
Ho direm igual de clar aleshores que ara.

[ECHO-4 avui](/ca/articulos/echo4-doce-hitos-sabe-que-es) · [Full de ruta ECHO-4](/ca/docs/echoai/echo4)
