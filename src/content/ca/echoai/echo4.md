# ECHO-4 — full de ruta oficial

22 de setembre de 2026 · Versió 3 · CONTINUITY tancada; DREAM-A iniciat

**Objectiu:** desenvolupar representacions funcionals d'un mateix, de l'altre i de la història compartida, i mesurar quan la interacció ajuda. E4-DREAM-1 afegeix una branca cortical per millorar l'exploració amb experiència registrada.

Substitueix la versió inicial del 21 de setembre. Planificat no significa implementat. El verd correspon a un contracte i domini concrets, no a consciència subjectiva o tancament global.

## Estat actual

ECHO-1 i ECHO-2 conserven els tancaments. ECHO-3 té 14/15 fites de programari; DRONE-3 ha tancat SITL, no HIL ni gàbia. No hi ha AKD1000 al laboratori. ECHO-4 continua prioritzant programari.

WORLD està implementat; SENSATION, BOUNDARY, SELF i CONTINUITY tenen tancaments acotats. Primer increment DREAM-A verificat; DREAM-1 i ECHO-4 continuen oberts. [Evidència i límits actualitzats](/evidence/echo4/ECHO4-STATUS-20260922-v3.md).

## Full de ruta complet

1. **E4-WORLD-1 — Implementat.** Cos virtual, recursos, temperatura, accions i terminalitat. Cens: 16.002 estats vius, 48.006 transicions i 15.954 estats viables. L'agent inicial mor després de 37 accions: viabilitat física no és manteniment après. [Evidència](/evidence/echo4/WORLD1-20260921.md).
2. **E4-SENSATION-1 — Tancat en domini nominal.** Història temporal i predicció de conseqüències, sense reassignar bytes WSP. Història de dos passos: +218/+203 encerts respecte de T a B/C. L'error no identifica la causa.
3. **E4-BOUNDARY-1 — Tancat sota intervencions virtuals aparellades.** Separa influència de coincidència: 1.408/1.408 màscares correctes tant a B com a C, amb abstenció davant rebuts invàlids. Requereix restauracions supervisades; influència no és pertinença corporal.
4. **E4-SELF-1 — Verd en WORLD1-binary-couplings-single-pulse-v1.** Diagnòstic confirmat 80/80 a cada fase A/B/C; reutilització selectiva 189/240 a B i 193/240 a C. Persistència de casos mixtos incomplets i terminalitats fora del prior. No és autoreparació ni causalitat universal.
5. **E4-CONTINUITY-1 — Verd en el perfil síncron de programari WORLD-1.** CONT-A/B/C/D implementats: 69 checkpoints exactes, 300 esdeveniments coincidents, 186 torns natius i 30 alteracions rebutjades. No identitat subjectiva ni tolerància a talls físics.
6. **E4-DREAM-1 — Obert; primer increment DREAM-A verificat.** Història i replay: 3 arbres, 31 nodes i 28 intents natius. Qwen apagat; B/C/D pendents. Futura branca cortical amb pesos fixos, estratègies acotades i proves noves, sense codi arbitrari. El nucli sense LLM continua independent.
7. **E4-MAINTAIN-1 — Pendent.** Dany funcional, reparació amb cost i treball útil. Exigir activitat i treball simultanis, recursos comptabilitzats i cap rescat ocult; mesurar l'aportació del model propi.
8. **E4-OTHER-1 — Pendent.** Una altra instància amb cos, observacions i memòria privats. Predir conducta útilment en situacions noves sense llegir l'estat intern.
9. **E4-INTERACTION-1 — Pendent.** Senyals i accions amb conseqüències per als dos agents. Comparar reciprocitat, gravacions i senyals bloquejats; mesurar beneficis individuals, conjunts i costos. Cooperar sempre no és l'objectiu.
10. **E4-RELATION-1 — Pendent.** Història de trobades, confiança contextual i revisió d'expectatives. Retirar la història per mesurar-ne l'aportació respecte d'identificadors o regles fixes.
11. **E4-ROLES-1 — Pendent.** Coordinació i delegació segons informació, recursos i competència. Els rols s'han d'adaptar als canvis de capacitat; no s'imposa una jerarquia permanent.
12. **E4-INTEGRATE-1 — Pendent; futur tancament de programari.** Escenaris reservats, execucions contínues i ablacions del jo, l'altre i la història. Nucli sense còrtex i branca cortical amb costos explícits. DREAM ha de demostrar l'aportació, no heretar-la del paper.
13. **E4-RELEASE-1 — PLA després d'INTEGRATE.** REL-A: paquet instal·lable; REL-B: runtime ràpid/lent amb proves OFF/ON/fallada; REL-C: llicències, privacitat i fitxa del sistema; REL-D: publicació autoritzada a Hugging Face i reproducció des de descàrrega neta. No fusió dins dels pesos ni dependència de `echo-discord`.
14. **Validació física — Després del programari.** Sensors i cossos reals, i contractes físics ECHO-3, inclosos HIL i gàbia. Els tancaments virtuals no certifiquen maquinari.
15. **METAVERSE-1 — Al final de tot.** Representació 3D fidel d'agents, relacions i traces, després del programari i les validacions físiques previstes. Visualitzar no certifica cognició.

## Continuïtat: implementada i examinada

- **CONT-A, fet:** checkpoint del SelfAgent nominal entre torns complets i restauració en procés nou. Cinc escenaris, 52/52 passos posteriors idèntics; el terminal no ressuscita. Conserva CAM/Q/T, restes enteres, referències, història, recursos i rellotge.
- **CONT-B, fet:** persistència de diagnòstic i recuperació activa; 18/18 casos, 142/142 esdeveniments i 67/67 torns posteriors idèntics.
- **CONT-C, fet:** represa, cos nou, descendència i bifurcació explícits; 21/21 escenaris i 125/125 esdeveniments idèntics. Herència no és permís corporal.
- **CONT-D, verd:** examen conjunt nou A/B/C, contracte congelat i reconstrucció independent; 69/69 checkpoints, 300/300 esdeveniments i 30/30 alteracions rebutjades. Són bancs diferents, no un únic experiment acumulat.

Els checkpoints complets contenen física privada de l'executor. No són observacions de Qwen ni de l'agent.

## DREAM: primer increment i treball pendent

- **DREAM-A, primer increment verificat:** arbres amb procedència i replay parcial. 62 consultes: 28 observades, 32 desconegudes i dues respostes terminals. Sense Qwen, futurs inventats ni millora demostrada.
- **DREAM-B:** Qwen offline proposa prioritats i pressupostos declaratius, amb parseig estricte i inferència real registrada. Un stub no tanca aquesta fase.
- **DREAM-C:** selecció històrica amb avaluador fix i estratègia vigent entre candidats. Informar cobertura i cost total, incloses propostes; la puntuació històrica no demostra generalització.
- **DREAM-D:** proves noves WORLD-1, diversos cicles, controls fixos/aleatoris amb pressupost equivalent, ablacions d'historial i Qwen, rebuig i reversió.

L'adaptador llama.cpp existent interpreta senyals; encara no és l'orquestrador. Identificarem model, hash i configuració. Inicialment només es modifica la programació d'experiments, mai nucli, gate, recompenses o examinador. [Arquitectura i motivació](/ca/articulos/echo4-dream-rsi-historia-compartida).

## Invariants i tancament

WSP conserva 16 bytes i layout; un sol bus/CAM/T/Q per individu. CAM manté 4.096 ranures. El camí basal utilitza enters i zero crides corticals. Hipòtesi no és fet; causes privades, futurs del replay i respostes reservades queden fora de l'abast.

Els assajos corticals declaren crides i recursos, sense amagar-los sota certificats sense LLM. L'operador conserva aturada i reversió. Models i avaluadors es versionen; els candidats no s'autoautoritzen.

Cada fase pendent requereix domini, particions, pressupostos, mètriques i llindars fixats abans de l'examen. Les mitjanes no compensen violacions d'invariants. Els casos SELF publicats són regressió, no nous casos reservats per a DREAM.

L'èxit recolzaria capacitats funcionals acotades de model propi, continuïtat, model de l'altre, cooperació i exploració millorada. No demostraria ànima, experiència subjectiva ni una teoria completa de la consciència.

## Següent treball i identitat de l'agent

Després de la pausa v2 s'han implementat CONT-B/C/D i DREAM-A. Ara cal fixar tasca/avaluador discriminants i contracte DREAM-B abans de l'assaig cortical. Aquesta actualització web no inicia fases noves ni publica el paquet. Logo oficial incorporat; el projecte llegat Discord queda separat i congelat.

[Noves destacades](/ca/articulos/echo4-continuidad-dream-a-identidad) · [Full de ruta ECHO-3](/ca/docs/echoai/ruta) · [Markdown](/raw/ca/echoai/echo4.md)
