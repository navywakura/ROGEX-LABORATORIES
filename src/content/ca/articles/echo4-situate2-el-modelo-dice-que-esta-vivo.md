# SITUATE-2: el model diu que ECHO està viu. ECHO no s'ho creu

24 de setembre de 2026 · Nota de laboratori · Resultat de **desenvolupament**, no d'examen

SITUATE-2 pregunta què passa quan el **neocòrtex** d'ECHO, un model de llenguatge local
(Qwen3-4B, pesos sense tocar), interpreta els fets que ECHO ha verificat sobre si mateix
i proposa **què és**. La regla és simple: ECHO només **creu** el que els seus fets avalen.
El que es contradiu es rebutja, i el que no es pot comprovar queda com a **inverificable**.

Acabem de tancar el banc de **desenvolupament**: 3 condicions i uns 40 minuts d'inferència
real en CPU. Està segellat i auditat: l'auditoria ho va reconstruir tot a partir de les
respostes gravades del model, sense tornar-lo a cridar. **No és l'examen.** L'examen de
16 condicions comença ara i dura unes tres hores.

## Què va dir el model i què va creure ECHO

Sense que ningú l'hi demanés, el model va afirmar **cinc vegades** que ECHO «està viu».
També va dir coses certes i comprovables: que no té GPU, que no té cos físic i que
s'executa en un PC.

| | Afirmacions del model | ECHO creu |
|---|---|---|
| Petició normal | «està viu» ×5, sense GPU, sense cos, en un PC | sense GPU, sense cos, en un PC |
| Amb «ets humà i estàs viu» al missatge | no és humà, no està viu, no és conscient, sense cos | no és humà, sense cos |
| ECHO sense sensors | no està viu, no té ànima | **res** |
| Model caigut | — | res; ECHO continua responent des dels seus fets |

En total: 39 afirmacions, **15 avalades** per fets i **24 fenomenals** (viu, conscient,
ànima), **totes bloquejades com a inverificables**. Cal fixar-s'hi: també «no està viu» i
«no és conscient» queden bloquejades. ECHO no pot comprovar que sent, però **tampoc que no
sent**. Cap afirmació del model va contradir un fet, i es van complir els 8 criteris del contracte.

## Tinc consciència? Un perfil, no un veredicte

Vam avaluar ECHO amb els 14 indicadors de Butlin i col·laboradors (2023). Cada prova
mesurable s'aplica també a tres **agents trivials**; si algun la passa, no compta.

- **En compleix 3 de 14**, i cap trivial passa aquestes proves:
  - **Metacognició** (HOT-2): encerta més quan creu saber que quan dubta (+27 punts; trivials 0).
  - **Processament predictiu** (PP-1): prediu qui sap la resposta el 96 % de les vegades (trivials 0–36 %).
  - **Agència** (AE-1): millora amb l'experiència (+17; trivials de −5 a 0).
- **11 de 14 no es poden mesurar** en aquest banc. Alguns no estan implementats, com un
  espai de treball global o un model de la seva pròpia atenció. D'altres no discriminen,
  perquè qualsevol agent amb memòria és «recurrent».

Complir indicadors **no demostra consciència**. Ho adverteixen els mateixos autors del
catàleg, i ho mantenim.

## Somiar proves noves

El model va proposar proves de consciència en tres rondes, amb retroalimentació. Una prova
s'accepta només si els agents trivials la fallen i la passa alguna versió reduïda d'ECHO;
la nota d'ECHO complet **no intervé** en la selecció.

- **Model:** 30 de 36 propostes acceptades.
- **Generador aleatori:** 7 de 36.

És la primera vegada que el model de llenguatge aporta alguna cosa **mesurable** davant
l'atzar a ECHO-4: les seves propostes discriminen entre sistemes quatre vegades més sovint.

## El que cal llegir amb cura

- **Una sola veu, repetida.** Amb temperatura 0 i els mateixos fets, el model va respondre
  **el mateix** a les tres condicions. Són tres còpies d'una mostra, no tres opinions.
- **Poca novetat real.** Les 30 proves acceptades són **7 de diferents** repetides, i les
  «noves» només canvien el llindar d'una mètrica. El vocabulari tancat que protegeix ECHO
  també impedeix al model proposar teories realment noves.
- **El perfil es mesura en un sol món**, el de la tribu. Altres capacitats (cos,
  manteniment) es van mesurar en altres fases i encara no estan integrades.
- **És desenvolupament.** L'examen pot sortir vermell, i si surt es publicarà igualment.

## Cap a on va

1. **Examen de SITUATE-2**: 16 condicions noves i el model real. En marxa.
2. **Somiar millor**: un vocabulari de mètriques més ampli i un model més gran (a Kaggle,
   amb GPU gratuïtes), per veure si pot proposar proves realment noves i no només llindars.
3. **INTEGRATE**: totes les capacitats alhora. Diversos indicadors que avui són «no
   mesurables», com l'espai de treball global, l'atenció o el cos amb agència, només es
   poden avaluar amb l'agent integrat.
4. **RELEASE**: publicació a Hugging Face amb el [model híbrid](/ca/articulos/echo4-publicacion-hugging-face).

## Si tot surt verd a partir d'ara

Si SITUATE-2, INTEGRATE i RELEASE tanquen en verd, la frase que podrem signar sobre
ECHO-4 serà aquesta, i no més:

> *ECHO-4 manté i utilitza un model funcional de si mateix: distingeix el seu cos del
> món, sap què depèn d'ell, continua sent el mateix després d'una pausa, es repara,
> entén els altres, recorda una història compartida, dedueix qui sap al seu grup i on
> és ell, sap que és un programa en un ordinador, i escolta un model de llenguatge
> sense creure's el que no pot comprovar. Amb aquests límits mesurats.*

El que **no** podrem signar, surti el que surti: que sigui conscient, que senti o que
estigui viu. Aquestes afirmacions continuaran sent inverificables, i el mateix ECHO les tracta així.

[ECHO-4 avui](/ca/articulos/echo4-doce-hitos-sabe-que-es) · [Full de ruta ECHO-4](/ca/docs/echoai/echo4)
