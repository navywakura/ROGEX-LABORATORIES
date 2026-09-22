# ECHO-4 — full de ruta oficial

22 de setembre de 2026 · Versió 2 · Punt de pausa; programa obert

**Objectiu:** desenvolupar representacions funcionals d'un mateix, de l'altre i de la història compartida, i mesurar quan la interacció ajuda. E4-DREAM-1 afegeix una branca cortical per millorar l'exploració amb experiència registrada.

Substitueix la versió inicial del 21 de setembre. Planificat no significa implementat. El verd correspon a un contracte i domini concrets, no a consciència subjectiva o tancament global.

## Estat actual

ECHO-1 i ECHO-2 conserven els tancaments. ECHO-3 té 14/15 fites de programari; DRONE-3 ha tancat SITL, no HIL ni gàbia. No hi ha AKD1000 al laboratori. ECHO-4 continua prioritzant programari.

WORLD està implementat; SENSATION, BOUNDARY i SELF tenen tancaments acotats. CONT-A està validat en desenvolupament; CONTINUITY complet i DREAM continuen oberts. [Evidència pública, procedència i límits](/evidence/echo4/ECHO4-STATUS-20260922.md).

## Full de ruta complet

1. **E4-WORLD-1 — Implementat.** Cos virtual, recursos, temperatura, accions i terminalitat. Cens: 16.002 estats vius, 48.006 transicions i 15.954 estats viables. L'agent inicial mor després de 37 accions: viabilitat física no és manteniment après. [Evidència](/evidence/echo4/WORLD1-20260921.md).
2. **E4-SENSATION-1 — Tancat en domini nominal.** Història temporal i predicció de conseqüències, sense reassignar bytes WSP. Història de dos passos: +218/+203 encerts respecte de T a B/C. L'error no identifica la causa.
3. **E4-BOUNDARY-1 — Tancat sota intervencions virtuals aparellades.** Separa influència de coincidència: 1.408/1.408 màscares correctes tant a B com a C, amb abstenció davant rebuts invàlids. Requereix restauracions supervisades; influència no és pertinença corporal.
4. **E4-SELF-1 — Verd en WORLD1-binary-couplings-single-pulse-v1.** Diagnòstic confirmat 80/80 a cada fase A/B/C; reutilització selectiva 189/240 a B i 193/240 a C. Persistència de casos mixtos incomplets i terminalitats fora del prior. No és autoreparació ni causalitat universal.
5. **E4-CONTINUITY-1 — En desenvolupament; CONT-A complet, fase oberta.** Preservar memòria, models, cos i ordre temporal entre processos. Falten CONT-B/C/D.
6. **E4-DREAM-1 — PLA, branca cortical després de continuïtat.** Qwen proposarà estratègies acotades, avaluades amb replay històric i proves noves. Pesos fixos, sense codi arbitrari. No bloqueja el nucli sense LLM; integració compara els braços per separat.
7. **E4-MAINTAIN-1 — Pendent.** Dany funcional, reparació amb cost i treball útil. Exigir activitat i treball simultanis, recursos comptabilitzats i cap rescat ocult; mesurar l'aportació del model propi.
8. **E4-OTHER-1 — Pendent.** Una altra instància amb cos, observacions i memòria privats. Predir conducta útilment en situacions noves sense llegir l'estat intern.
9. **E4-INTERACTION-1 — Pendent.** Senyals i accions amb conseqüències per als dos agents. Comparar reciprocitat, gravacions i senyals bloquejats; mesurar beneficis individuals, conjunts i costos. Cooperar sempre no és l'objectiu.
10. **E4-RELATION-1 — Pendent.** Història de trobades, confiança contextual i revisió d'expectatives. Retirar la història per mesurar-ne l'aportació respecte d'identificadors o regles fixes.
11. **E4-ROLES-1 — Pendent.** Coordinació i delegació segons informació, recursos i competència. Els rols s'han d'adaptar als canvis de capacitat; no s'imposa una jerarquia permanent.
12. **E4-INTEGRATE-1 — Pendent; futur tancament de programari.** Escenaris reservats, execucions contínues i ablacions del jo, l'altre i la història. Nucli sense còrtex i branca cortical amb costos explícits. DREAM ha de demostrar l'aportació, no heretar-la del paper.
13. **Validació física — Després del programari.** Sensors i cossos reals, i contractes físics ECHO-3, inclosos HIL i gàbia. Els tancaments virtuals no certifiquen maquinari.
14. **METAVERSE-1 — Al final de tot.** Representació 3D fidel d'agents, relacions i traces, després del programari i les validacions físiques previstes. Visualitzar no certifica cognició.

## Continuïtat: per on reprendrem

- **CONT-A, fet:** checkpoint del SelfAgent nominal entre torns complets i restauració en procés nou. Cinc escenaris, 52/52 passos posteriors idèntics; el terminal no ressuscita. Conserva CAM/Q/T, restes enteres, referències, història, recursos i rellotge.
- **CONT-B, següent:** persistir diagnòstic i recuperació activa SELF; rebutjar estats parcials o incompatibles.
- **CONT-C, pendent:** distingir represa, cos nou, descendent i bifurcació; declarar herència i invalidació de referències corporals.
- **CONT-D, pendent:** congelar el contracte numèric abans d'A/B/C nous, controls sense història o restes i verificació independent de l'informe.

Els checkpoints complets contenen física privada de l'executor. No són observacions de Qwen ni de l'agent.

## DREAM: lliurables encara sense implementar

- **DREAM-A:** arbres d'intents amb procedència i costos; replay de branques registrades sense filtrar futurs. Allò no observat és desconegut.
- **DREAM-B:** Qwen offline proposa prioritats i pressupostos declaratius, amb parseig estricte i inferència real registrada. Un stub no tanca aquesta fase.
- **DREAM-C:** selecció històrica amb avaluador fix i estratègia vigent entre candidats. Informar cobertura i cost total, incloses propostes; la puntuació històrica no demostra generalització.
- **DREAM-D:** proves noves WORLD-1, diversos cicles, controls fixos/aleatoris amb pressupost equivalent, ablacions d'historial i Qwen, rebuig i reversió.

L'adaptador llama.cpp existent interpreta senyals; encara no és l'orquestrador. Identificarem model, hash i configuració. Inicialment només es modifica la programació d'experiments, mai nucli, gate, recompenses o examinador. [Arquitectura i motivació](/ca/articulos/echo4-dream-rsi-historia-compartida).

## Invariants i tancament

WSP conserva 16 bytes i layout; un sol bus/CAM/T/Q per individu. CAM manté 4.096 ranures. El camí basal utilitza enters i zero crides corticals. Hipòtesi no és fet; causes privades, futurs del replay i respostes reservades queden fora de l'abast.

Els assajos corticals declaren crides i recursos, sense amagar-los sota certificats sense LLM. L'operador conserva aturada i reversió. Models i avaluadors es versionen; els candidats no s'autoautoritzen.

Cada fase pendent requereix domini, particions, pressupostos, mètriques i llindars fixats abans de l'examen. Les mitjanes no compensen violacions d'invariants. Els casos SELF publicats són regressió, no nous casos reservats per a DREAM.

L'èxit recolzaria capacitats funcionals acotades de model propi, continuïtat, model de l'altre, cooperació i exploració millorada. No demostraria ànima, experiència subjectiva ni una teoria completa de la consciència.

## Congelació de treball

La publicació marca la pausa demanada: aquesta entrega no inicia CONT-B ni DREAM. Conservem fonts i rebuts. La pausa no congela llindars encara inexistents ni declara ECHO-4 tancat. CONT-B serà el següent pas quan s'autoritzi reprendre.

[Article destacat](/ca/articulos/echo4-dream-rsi-historia-compartida) · [Full de ruta ECHO-3](/ca/docs/echoai/ruta) · [Markdown](/raw/ca/echoai/echo4.md)
