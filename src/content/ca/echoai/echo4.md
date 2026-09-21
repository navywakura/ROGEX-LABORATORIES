# ECHO-4 — full de ruta oficial

21 de setembre de 2026 · Versió 1 · Desenvolupament iniciat

**Objectiu:** desenvolupar representacions funcionals d'un mateix, de l'altre i de la història compartida, i aprendre quan la interacció millora els resultats de tots dos agents.

La hipòtesi és que la reciprocitat i la memòria de les trobades poden contribuir a l'adaptació. Mesurarem separadament resultats individuals, conjunts i costos de coordinació, incloses situacions on actuar independentment sigui preferible.

Aquest document substitueix l'ordre preliminar del primer article. Cada fase pendent necessita un contracte de sensors, memòria, aprenentatge, controls i llindars abans de validar-la.

## Punt de partida

NEXUS-0 aporta WSP, CAM, Q, T i el gate. ECHO-1 i ECHO-2 conserven els seus tancaments. ECHO-3 té 14/15 fites completes en l'àmbit de programari; DRONE-3 té SITL tancat, amb HIL i gàbia pendents.

**E4-WORLD-1 està implementat.** L'informe enumera 16.002 estats vius, 48.006 transicions i un nucli de viabilitat de 15.954 estats. Documenta 45 proves noves i 48 de regressió seleccionades. L'agent inicial mor per calor després de 37 accions: el manteniment après continua pendent. Les 32 classes d'observació vives presenten ambigüitat dinàmica. [Evidència i reproducció](/evidence/echo4/WORLD1-20260921.md).

El desenvolupament continua amb **E4-SENSATION-1**. Publicar aquest full de ruta no implementa els mòduls pendents.

## Ordre tècnic i requisits d'acceptació

1. **E4-WORLD-1 · Implementat.** Cos virtual, recursos, temperatura, accions i condicions terminals. El verificador estableix trajectòries sostenibles amb observació completa; la seva política testimoni queda fora de l'agent.

2. **E4-SENSATION-1 · Fase següent; contracte i implementació pendents.** Comparar l'observació actual amb historials de 2 i 4 passos que incloguin accions executades. Estimar tendències, resultats i incertesa amb memòria acotada i enters. Mesurar ambigüitat resolta, predicció en trajectòries noves i cost. Un resultat inesperat no identifica la causa.

3. **E4-BOUNDARY-1 · Pendent.** Estimar influència causal sobre variables i capacitats mitjançant intervencions comparables, accions vetades, retards i pertorbacions. Distingir efectes propis de coincidències i conservar el resultat desconegut. Controlar una porta no la converteix en cos; predir un rellotge no implica controlar-lo. SELF investiga la pertinença corporal.

4. **E4-SELF-1 · Pendent.** Combinar capacitats corporals, predicció i evidència per distingir canvis propis, externs, mixtos o desconeguts. L'atribució ha de millorar la recuperació sense descartar coneixement ambiental no refutat. SELF-1 històric aporta mètodes, però aquest domini necessita evidència nova.

5. **E4-CONTINUITY-1 · Pendent.** Preservar estat causal, memòria útil, ordre dels esdeveniments i durada. Comparar execució contínua amb pausa i restauració en un procés nou amb entrades futures idèntiques. Distingir restauració, canvi de cos i individu nou; rebutjar estats incompatibles.

6. **E4-MAINTAIN-1 · Pendent.** Introduir dany funcional, reparació costosa i feina útil. Complir alhora un horitzó d'activitat i un mínim de feina, comptabilitzant recursos i sense rescats ocults. Comparar amb l'eliminació del model propi.

7. **E4-OTHER-1 · Pendent.** Dues instàncies amb cossos, memòries i observacions separats. Aprendre expectatives sobre la contrapart a partir del comportament accessible. Predir en situacions noves i adaptar decisions a diferències d'informació sense llegir memòria privada.

8. **E4-INTERACTION-1 · Pendent.** Accions i senyals amb conseqüències per a tots dos. Aprendre quan coordinar-se ajuda i demostrar que bloquejar o substituir senyals modifica decisions rellevants. Comparar reciprocitat, enregistraments i controls equivalents; informar de beneficis individuals, resultats conjunts i costos.

9. **E4-RELATION-1 · Pendent.** Memòria de trobades i expectatives específiques d'una relació. Aprofitar la història compartida en trobades noves, revisar fiabilitat segons context i adaptar-se a canvis de comportament. Retirar aquesta memòria per mesurar-ne l'aportació més enllà d'identificadors o regles fixes.

10. **E4-ROLES-1 · Pendent.** Diferències d'informació, recursos i capacitats, amb delegació i coordinació canviants. Els rols han de seguir la competència rellevant quan canviïn les condicions. La jerarquia humana inspira preguntes; no n'assumim una explicació universal ni rangs permanents.

11. **E4-INTEGRATE-1 · Pendent; tancament de programari ECHO-4.** Integrar capacitats en execucions contínues i escenaris reservats de validació i confirmació. Complir requisits conjunts i demostrar l'aportació del model propi, del model de l'altre i de la història compartida mitjançant ablacions.

12. **Validació física · Després del programari.** Traslladar capacitats pertinents a sensors i cossos reals, reprenent els contractes físics, HIL i gàbia d'ECHO-3. Els resultats virtuals no atorguen aprovació física: recursos i energia requereixen mesures en aquell domini.

13. **METAVERSE-1 · Última fase.** Representar agents, relacions i trajectòries en un entorn 3D observable i interactiu després del programa de programari i les validacions físiques previstes. La representació ha de reflectir fidelment decisions registrades. El contracte visual continua separat del tancament cognitiu.

## Primer lliurable: contracte SENSATION

Comencem amb una auditoria temporal: observació actual davant d'historials de 2 i 4 passos en trajectòries declarades. Comptarem casos restants que exigeixen decisions incompatibles, errors predictius i abstencions. Compararem amb el predictor existent amb accés idèntic a les dades.

Els registres exactes de reserva i temperatura actualitzen la fisiologia. El contracte especificarà què rep el predictor: l'accés directe seria una ampliació sensorial declarada, no una millora atribuïble només a recordar observacions.

Un resum de quatre estats —compatible, desviació petita, desviació gran, evidència insuficient— pot ajudar a inspeccionar. Error i incertesa continuen separats. Un predictor lineal enter és un candidat a avaluar, no un algoritme ja seleccionat o implementat.

## Arquitectura i invariants

WSP manté **16 bytes i la distribució de camps congelada**; no té 4–5 bytes lliures per reassignar. Historials i estimacions necessiten un pressupost fix declarat dins l'arquitectura existent, sense un segon bus cognitiu.

CAM conserva episodis en 4.096 ranures sense destrucció. Q conserva la política i T el model de transició. Els models apresos són estimacions; la confiança no converteix prediccions en fets. El camí ràpid utilitza enters, el còrtex roman apagat i aquests bancs no utilitzen LLM.

Cada individu manté estat separat i observacions autoritzades. Les interaccions públiques entren per la representació existent. No hi ha accés a etiquetes privades, llavors, solucions de l'avaluador ni memòria de la contrapart. L'aturada de l'operador conserva l'autoritat.

## Què significa el tancament verd

Abans de validar, cada contracte fixarà domini, dades reservades, pressupostos d'aprenentatge i memòria, horitzó, errors acceptables, millora mínima i tractament de la incertesa. Els llindars numèrics finals de les fases pendents encara no estan aprovats.

Publicarem resultats negatius, controls convencionals competents, ablacions, traces amb procedència i reproducció en processos nous. Retirar memòria, models o reciprocitat ha de permetre avaluar-ne l'aportació. Una política greedy no implica aprenentatge congelat.

El tancament exigeix criteris conjunts, zero fets falsos, zero ranures destruïdes, zero crides al còrtex i cap accés a oracles. L'èxit mitjà no compensa un invariant trencat.

Un èxit donaria suport a capacitats delimitades de representació pròpia, perspectiva de l'altre, continuïtat i cooperació apresa. Afirmar que la interacció millora la representació pròpia exigeix mesurar específicament aquest efecte. L'experiència subjectiva i una explicació general de la consciència continuen sent preguntes addicionals.

## Per què investigar-ho?

Podríem separar què deu el comportament al cos, a la memòria i a aprendre amb un altre. Poder intervenir i reproduir històries és el valor del laboratori. Els resultats negatius també poden identificar informació o capacitats que falten.

Hi ha precedents de modelatge d'altres agents: [Machine Theory of Mind](https://arxiv.org/abs/1802.07740). Cal comprovar els efectes dels senyals: [On the Pitfalls of Measuring Emergent Communication](https://arxiv.org/abs/1903.05168). Investiguem la integració sota les restriccions d'ECHO-AI; qualsevol novetat específica s'ha de contrastar amb treballs existents.

[Anunci del desenvolupament](/ca/articulos/echo4-inicio-roadmap-oficial) · [Filosofia i inspiració](/ca/articulos/echo4-ego-funcional) · [Full de ruta ECHO-3](/ca/docs/echoai/ruta) · [Markdown](/raw/ca/echoai/echo4.md)
