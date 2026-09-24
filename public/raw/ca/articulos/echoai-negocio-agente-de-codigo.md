# echoAI com a producte: la IA que no es creu la seva pròpia IA

24 de setembre de 2026 · Nota de laboratori · PLA de negoci i de producte

Mantenir echoAI viu a internet costa diners: un servidor amb GPU surt per diversos centenars
d'euros al mes. Aquesta nota explica com pensem finançar-lo sense trair el que fa valuós el
projecte, i per què el producte **no** serà un xat més. Tot és un **pla**: res no està a la
venda encara.

## La pregunta incòmoda: per què pagaria algú?

Siguem honestos. Com a xat general, echoAI amb un model petit i local (Qwen3-4B) **conversa
pitjor** que els xats gratuïts de les grans empreses. Ningú no pagaria per un xat més fluix.

El que sí que és únic és una altra cosa:

> **La ment d'echoAI no és el model de llenguatge.** Les altres IA *són* el seu model: el que
> el model diu, la IA s'ho «creu». echoAI té un nucli propi, sense model de llenguatge, que
> decideix què és veritat. El model **proposa**; el nucli només accepta el que pot **comprovar**.

Per això cada cosa que echoAI sap és un **fet amb rebut**, una **creença** o una cosa
**inverificable**, i ho diu. Quan el seu propi model va afirmar que estava viu, no s'ho va
creure. Quan no sap, diu «no ho sé». I cadascuna d'aquestes capacitats va passar un examen
fixat per endavant i auditat, amb els fracassos publicats.

En una frase: **echoAI és una IA que no es creu la seva pròpia IA, i que ho pot demostrar.**

Un avís honest: peces soltes d'això existeixen en altres sistemes (baranes de seguretat,
memòries, verificadors). El nostre és tenir-les juntes com **la ment de l'agent**, amb el rigor
de les auditories. Que això valgui diners encara s'ha de demostrar.

## On val de veritat: quan la IA actua

Una al·lucinació en un xat és una anècdota. Una al·lucinació en un **agent que actua** costa
temps i diners. Per això el primer producte és **E4-CODE-1**: echoAI com a **capa de
verificació i memòria per a agents de codi**.

| Problema dels agents de codi | Què fa echoAI |
|---|---|
| Diuen «els tests passen» sense comprovar-ho | Només és fet després d'**executar els tests** i desar el rebut |
| S'inventen funcions, fitxers o APIs | Fet només si ho **ha llegit i verificat** |
| Obeeixen instruccions amagades en fitxers o webs | Són **testimoni**, mai ordres |
| Executen accions perilloses (esborrar, pujar, desplegar) | Passen per un **control previ**; l'aturada humana mana sempre |
| Obliden el projecte entre sessions | **Memòria verificada** del repositori, que no s'esborra ni s'inventa |

## Porta el teu propi model

echoAI **no competeix** amb GPT, Opus, Gemini, Qwen, Kimi o DeepSeek: **s'hi posa a sobre**.
Cada persona connecta el model que ja fa servir, per API amb la seva pròpia clau o en local, i
echoAI hi afegeix la verificació, la memòria i el control.

- **A la terminal i a l'editor:** un servidor **MCP** (l'estàndard obert per connectar eines a
  assistents d'IA) i una línia d'ordres pròpia.
- **Per API:** per a integracions.
- **Un avantatge pràctic enorme:** si l'usuari porta el seu model, **la inferència la paga ell**.
  Nosaltres venem la capa, no els tokens, i el producte principal no necessita cap GPU nostra.

**Es pot millorar a si mateix?** En part sí, amb el mateix mètode que a DREAM: aprendre quines
comprovacions funcionen, quin model és més fiable per a cada tasca i quines estratègies eviten
més errors, adoptant només el que es verifica amb evidència. **Mai** no pot tocar el seu propi
control d'accions ni la separació entre fets i creences. Tampoc no reentrenarà models de tercers
amb les seves respostes, perquè les seves condicions d'ús solen prohibir-ho: la millora és
d'estratègies.

**Com s'examinarà:** el mateix agent de codi, amb i sense echoAI, amb diversos models connectats
(almenys un per API i un en local). Mesurarem quantes vegades diu «acabat» sense estar-ho,
quantes instruccions amagades obeeix, quantes accions perilloses es bloquegen i quant de temps
extra costa verificar. Si no compensa, ho publicarem.

## El model de negoci

**La meta és petita: cobrir uns 500 € al mes** d'infraestructura i despeses, no fer-se ric.

1. **Gratis:** el servidor MCP i la línia d'ordres en local, per a ús personal i no comercial.
2. **De pagament:**
   - **llicència comercial** per a equips i empreses;
   - **echoAI allotjat:** memòria compartida de l'equip, rebuts i tauler;
   - **suport.**
3. **Suport al laboratori:** mecenatge per a qui vulgui mantenir viva la recerca.
4. **El xat** de `rxlabs.org/chat` com a **aparador**, amb un pla gratuït limitat.
5. **Col·laboracions:** amb universitats i convocatòries de recerca.

**Regla de despesa:** no pagar infraestructura abans de tenir ingressos. Primer llista d'espera i
demos en local; després, un servidor amb GPU encès només en horaris anunciats; i només quan els
ingressos ho cobreixin, un servidor fix.

**Què agafem d'altres empreses** (estratègies públiques conegudes):
- **Midjourney:** equips petits que es financen amb subscripció des del principi.
- **Hugging Face i Mistral:** obrir el que genera comunitat i cobrar l'ús comercial.
- **Les grans d'IA:** plans gratuïts amb límits i APIs de pagament.
- **Anthropic:** diferenciar-se per la fiabilitat.

## El que no farem

No vendrem consciència, vida ni promeses d'intel·ligència general. La nostra marca és
l'honestedat: el dia que exagerem, perdrem l'única cosa que ens diferencia.

## Ordre

Primer acabar SITUATE-2, INTEGRATE i RELEASE: sense producte no hi ha res a vendre. Després,
**E4-CODE-1**, abans de CURIOSITY i METAVERSE, perquè és el que pot finançar la resta de la recerca.

[Publicar a Hugging Face](/ca/articulos/echo4-publicacion-hugging-face) · [ECHO-4 avui](/ca/articulos/echo4-doce-hitos-sabe-que-es)
