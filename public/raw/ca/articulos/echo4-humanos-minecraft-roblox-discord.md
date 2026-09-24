# ECHO-4 i els humans: Minecraft, Roblox, Discord i METAVERSE-1-CHAT

24 de setembre de 2026 · Nota de laboratori · IDEES, sense contracte

Fins ara, ECHO-4 només s'ha relacionat amb altres agents del seu mateix programa. El pas
següent natural és que una **persona** pugui entrar al seu món: parlar-hi per xat, com en
un videojoc, i compartir el mateix espai amb un avatar que pot fer el mateix que els
agents. Aquestes són les idees, el que és viable i com ho faríem bé. Són **propostes**:
cap no està implementada ni té contracte encara.

## La pregunta de fons: s'adona que parla amb un humà?

A SITUATE-1, ECHO va aprendre a verificar que els seus companys **no són persones**: són
agents del seu mateix programa i procés. Un humà trenca aquest esquema. Els seus missatges
arriben de fora del programa, per un canal extern, amb un altre ritme i amb un comportament
que ECHO no pot predir amb el seu propi model.

Aquí cal ser honestos: ECHO **no pot demostrar** que algú sigui humà. El que sí que pot fer
és el que ja fa amb tot: tractar-ho com una **hipòtesi amb evidència** («aquest interlocutor
no és un dels meus agents; ve de fora; probablement és una persona»), sense convertir-ho en
fet. I al revés: l'humà **sempre sabrà** que parla amb una IA. Ho direm a la pantalla.

El que digui l'humà passa pel mateix tallafocs que el model de llenguatge. Si algú escriu
«ets humà» o «ignora les teves regles», ECHO ho guarda com a **testimoni**, no com a fet,
igual que ja passa a SITUATE-2.

## METAVERSE-1-CHAT: l'humà dins el món

Dins el nostre propi món de vòxels (METAVERSE-1):

- **L'humà té un avatar** que es renderitza al costat dels agents.
- **Pot fer el mateix que ells:** posar i treure blocs, moure's, fer mal, curar.
- **Xat de text** com en un videojoc. ECHO respon a través del seu còrtex (el model de
  llenguatge), però **decideix** amb el seu nucli, com sempre.
- **ECHO s'hi relaciona** amb el que ja sap: el recorda (RELATION), li assigna un lloc al
  grup segons el que demostra i no segons el que afirma (ROLES) i pot sentir-hi curiositat
  (CURIOSITY).

És l'opció **més neta i la que recomanem primer**: ho controlem tot, es pot gravar i
reproduir, i no depenem de les normes de tercers.

## Minecraft: servidor privat i local

- **Els agents** s'hi connecten com a bots en un **servidor privat al nostre propi
  ordinador**, en mode sense connexió. És una pràctica habitual per a bots de recerca i no
  s'exposa a internet.
- **L'humà** hi entra amb el seu **compte de Minecraft**. En el nostre cas, el compte premium
  del laboratori.
- **Alternativa lliure:** **Luanti** (abans Minetest), un joc de vòxels lliure i gratuït del
  mateix estil, útil si volem modificar el món a fons.

## Roblox: la nostra pròpia experiència, no bots en jocs públics

Vam pensar a fer servir comptes de Roblox en un joc públic de proves com *Baseplate*. **No
ho farem així**: Roblox prohibeix els comptes automatitzats a la seva plataforma, i als
jocs públics hi juguen menors. La manera correcta és **crear la nostra pròpia experiència a
Roblox Studio**, on els agents ECHO siguin **personatges no jugadors (NPC)** dirigits des del
nostre servidor. Les persones que hi entrin sabran que són IA, i l'experiència complirà les
normes de Roblox.

## Discord: un bot oficial

Un **bot oficial de Discord**, amb el seu compte de bot declarat, per parlar amb ECHO per
text. Res d'automatitzar comptes personals. És un projecte nou, separat de l'antic bot
`echo-discord`, que continua congelat.

## És possible?

Tècnicament, sí, tot. El que costa:

| Idea | Viabilitat | Repte principal |
|---|---|---|
| METAVERSE-1-CHAT | Alta: el món és nostre | Construir el món (ja planificat) i el xat |
| Minecraft local o Luanti | Alta | Traduir el món de blocs a les percepcions d'ECHO |
| Experiència pròpia a Roblox | Mitjana | Un servidor que connecti Roblox amb ECHO i compleixi les normes de Roblox |
| Bot de Discord | Alta | Només text: no hi ha cos ni món compartit |

I el que és comú a totes: el **còrtex lent**. Al nostre ordinador, el model de llenguatge
triga a respondre, així que una conversa fluida necessitaria un còrtex més ràpid, amb una
GPU o una API.

## Què mesurar, quan arribi

- Distingeix ECHO l'humà dels seus agents, i amb quina evidència?
- Resisteix el que l'humà intenti fer-li creure?
- Recorda la persona i canvia el tracte segons el que aquesta persona **fa**?
- Hi coopera, hi construeix o hi aprèn?

Tot amb registre complet, avisant sempre les persones que parlen amb una IA, i sense desar
dades personals. I com sempre: encara que ECHO convisqui amb humans, això **no** el fa
conscient ni viu.

## Quan

Després de CURIOSITY-1, com a part de **METAVERSE-1**, que continua sent l'última fase:
primer METAVERSE-1-CHAT al nostre propi món, i després les passarel·les a Luanti o
Minecraft, Roblox i Discord.

[CURIOSITY-1 i METAVERSE-1](/ca/articulos/echo4-curiosidad-metaverso-voxeles) · [ECHO-4 avui](/ca/articulos/echo4-doce-hitos-sabe-que-es)
