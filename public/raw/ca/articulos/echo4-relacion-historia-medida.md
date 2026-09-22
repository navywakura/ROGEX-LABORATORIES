# ECHO-4 · RELATION-A: una història que es pot reconstruir

22 de setembre de 2026 · Nota de laboratori

RELATION-A ja està implementada i validada com a primer increment d'**E4-RELATION-1**. És un pas d'infraestructura modest: l'agent pot desar episodis de trobades a la memòria existent i reconstruir-ne la seqüència. Encara no hem demostrat que aquesta història l'ajudi a decidir millor.

## Una història compartida, dues memòries privades

La inspiració és senzilla: dos agents interactuen i, amb el temps, aquesta seqüència podria canviar què espera cadascun de l'altre. A la implementació, «compartida» només vol dir que tots dos van participar en la trobada. Cada observador conserva el seu registre; no hi ha memòria global comuna ni accés a la Q, els recursos o els incentius privats de l'altra part.

Cada episodi registra context, accions realment observades, tick, cost propi i producció pròpia. Els enllaços recorren les trobades en ordre global o per identitat coneguda. Si falta la identitat o un rebut, la història conserva aquesta incertesa: no inventa una parella ni una acció. Una intenció o un intent tampoc es converteix automàticament en èxit.

El contracte manté WSP de 16 bytes, deixa E[6] a zero i desa rebuts als camps host existents de CAM. No crea cap altre bus o política, no canvia Agent.turn, T, Q ni el gate i no crida cap LLM. Els resums es deriven en consultar-los; no afegeixen fets ni puntuació de «confiança».

## Què diuen les proves

El banc va fer servir tres llavors de desenvolupament —113, 127 i 139— amb 144 rondes cadascuna: 96 d'entrenament i 48 greedy. Es van reconstruir **912 episodis primaris** en 7.440 torns natius comptant controls, ordre invers i observació parcial.

La comprovació clau també és un resultat negatiu: amb registre i sense, accions, costos, prediccions i resultats van ser idèntics. Invertir l'ordre va reproduir traces i digests de la història. Així sabem que A desa i reconstrueix trobades sense alterar la política. Encara no sabem si una biografia relacional aporta una capacitat nova.

Es van aprovar **36 proves noves** i **181 proves diferents** amb regressions seleccionades. Cobreixen capacitat i ticks, perspectives diferents, trobades sense identitat, corrupció, rebuts i errors parcials. Si falla el desament després d'executar una acció, es conserven els costos i s'atura la sessió; el programari no fingeix que ha desfet la física.

## La prova pendent

RELATION-B posarà la història a treballar: decisions en una tasca nova, amb el mateix pressupost i oportunitats per a cada condició. Compararem història completa amb controls sense història, només el model OTHER, identitat agrupada i ordre eliminat. També mesurarem el cost d'aprendre aquesta història: un avantatge que costi més del que retorna no seria pràctic.

Després queden C (ruptura, retrobament i història contradictòria o incompleta) i D (un examen nou, fixat abans d'executar-lo i reconstruït per una auditoria independent). Fins que es tanquin, **RELATION-1 continua obert**. A no demostra confiança sentida, consciència subjectiva ni autoreparació. És un registre auditable sobre el qual ara podem plantejar un experiment causal.

[Contracte i documentació RELATION-A](/ca/docs/echoai/relation) · [Full de ruta ECHO-4](/ca/docs/echoai/echo4).
