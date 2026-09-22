# E4-RELATION-1 · RELATION-A

22 de setembre de 2026 · A vàlid; RELATION-1 continua obert

RELATION estudia si la història de trobades entre agents pot millorar decisions posteriors. «Compartida» vol dir que tots dos van participar en una trobada, no que comparteixin memòria. Cada agent conserva la seva observació. No es pressuposa confiança sentida, ànima ni consciència subjectiva.

## RELATION-A

Cada observador desa episodis factuals a la CAM existent: context, accions observades, tick, cost propi i producció pròpia. Els enllaços recorren la seqüència global o la d'una contraparte identificada. Rebuts i enllaços utilitzen camps host existents; el layout WSP de 16 bytes no canvia i E[6] continua a zero. No es copia la Q d'un altre agent ni s'introdueix una altra CAM, bus o política.

Les històries poden ser asimètriques i incompletes. Sense identitat, la trobada queda sense atribució; un rebut absent no es transforma en una acció suposada. Una proposta o un intent no compten com a èxit. Els resums són consultes derivades, no fets nous ni puntuacions d'afecte.

## Resultats

Tres llavors de desenvolupament (113, 127 i 139), 144 rondes cadascuna: 96 d'entrenament i 48 greedy. Es van reconstruir **912 episodis primaris** en 7.440 torns natius incloent controls, ordre invers i observació parcial.

La memòria és passiva en aquest increment: accions, costos, prediccions i resultats van coincidir amb el control sense enregistrament. Invertir l'ordre va reproduir traces i digests. Això confirma registre i reconstrucció sota el contracte provat; no demostra que recordar millori la política ni que existeixi confiança o relació sentida.

Es van aprovar **36 proves noves** i **181 proves diferents** amb regressions seleccionades. Es van comprovar capacitat i ticks, identitats separades, perspectives parcials, enllaços corruptes, errors d'escriptura i reconstrucció en CAM amb adreces diferents. Si falla l'enregistrament després d'una acció, es conserven els costos i s'atura la sessió; no s'afirma rollback físic.

## Què falta

RELATION-B ha de distingir una biografia útil d'un registre decoratiu: transferir la història a decisions en una tasca nova. Compararà història completa amb controls sense història, només OTHER, identitat agrupada i ordre eliminat; igualarà formació, recursos i oportunitats; i comptabilitzarà si s'amortitza el cost de formació. RELATION-C estudiarà ruptura/reunió i històries contradictòries o incompletes. RELATION-D serà un examen nou preregistrat i auditat.

Fins que B/C/D es tanquin, **RELATION-1 no és verd**. A no mesura confiança subjectiva, no acredita autoreparació ni consciència i no altera INTERACTION. No s'ha activat cap LLM. [Full de ruta ECHO-4](/ca/docs/echoai/echo4) · [Article](/ca/articulos/echo4-relacion-historia-medida).
