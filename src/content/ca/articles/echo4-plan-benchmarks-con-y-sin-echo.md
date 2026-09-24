# Com mesurarem si ECHO millora un model: el pla de benchmarks

24 de setembre de 2026 · Nota de laboratori · PLA

ECHO-4 ja es pot [descarregar](/ca/releases). La pregunta següent és la que faria
qualsevol: **un model de llenguatge funciona millor amb ECHO que sense?** Aquesta nota
explica com ho mesurarem, amb quins benchmarks, què esperem i quant costarà. **Encara no hi
ha números**: no hem executat res. Primer es publica el pla; després, els resultats, també
els vermells.

## La idea: el mateix model, amb ECHO i sense ECHO

No farem un rànquing de models. Cada model es compara **amb si mateix**: la mateixa
pregunta, la mateixa temperatura i les mateixes dades, amb i sense la capa d'ECHO. L'única
diferència és ECHO.

ECHO **no sap més** que el model ni raona millor. Fa una altra cosa, i és la regla de tot el
projecte: **una afirmació només és un fet si hi ha evidència comprovada pel mateix ECHO**.
El model proposa; ECHO comprova; si no ho pot comprovar, diu «no ho sé». Per això esperem
millores en unes coses i cap en unes altres. Mesurar-les totes dues forma part del pla.

## Bloc A: preguntes de fets

| Benchmark | Què mesura | Mostra |
|---|---|---|
| **SimpleQA** (OpenAI) | preguntes de fets curtes i difícils | 200 a l'examen |
| **MMLU-Pro** | coneixement acadèmic amb 10 opcions | 100 |
| **GSM8K** | problemes de matemàtiques de primària | 50 |

Cada pregunta passa per quatre braços:

| Braç | Què és |
|---|---|
| **M** | el model sol |
| **M+R** | el model amb els **mateixos** extractes de Wikipedia que troba ECHO |
| **M+R+ECHO** | la resposta de M+R passada pel tallafoc d'ECHO: només es dona si un dels seus extractes la conté |
| **Trivial** | un agent que sempre diu «no ho sé» |

El braç **M+R** és la clau. Si només comparéssim «amb ECHO» i «sense ECHO», una millora
podria venir simplement de donar més informació al model. Amb M+R es veu **què aporta el
tallafoc per si sol**. El braç trivial recorda que abstenir-se sempre dona zero errors i no
val res.

**Què esperem:**
- **Menys respostes inventades** a SimpleQA, al preu de respondre menys: publicarem totes
  dues coses.
- **Cap millora en coneixement** (MMLU-Pro): és el control negatiu. Si ECHO «pugés» aquí,
  sospitaríem del banc. Per construcció, ECHO només pot **treure** respostes, mai crear-ne
  una de correcta nova, i ho comprovarem pregunta per pregunta.
- **Matemàtiques:** ECHO no té com verificar un càlcul, així que s'abstindrà. Ho publicarem
  com a límit.

## Els models

Cinc models per API (OpenRouter), cadascun amb i sense ECHO:
- **Qwen3-30B-A3B-2507**, de la mateixa família que el Qwen local d'ECHO;
- **Gemini 3.5 Flash**;
- **Claude Sonnet 5**;
- **GPT-5.4 mini**;
- **DeepSeek-V4.1-Flash**.

Hi afegirem **Claude Opus 5.5** a través de Claude Code, en sessions separades i sense eines.
Claude Code hi afegeix el seu propi entorn, així que Opus es compararà amb si mateix, mai en
rànquing amb els altres.

## Benchmarks frontera

| Benchmark | Què mesura | Què fa ECHO | Què esperem |
|---|---|---|---|
| **MMLU** | coneixement en 57 àrees | el mateix tallafoc | control: no pugen els encerts; potser puja la precisió |
| **Humanity's Last Exam** | preguntes de nivell frontera | el mateix tallafoc | control: gairebé mai hi haurà evidència, així que sobretot abstenció |
| **FrontierScience** (OpenAI) | ciència d'olimpíada | el mateix tallafoc | control |
| **ARC-AGI-2** | abstracció i raonament nou | **verifica programes** contra els exemples | **la prova de veritat** |
| **ARC-AGI-3** | descobrir regles jugant | **el nucli d'ECHO juga** | el primer banc extern per a ECHO sense model de llenguatge |

### ARC-AGI-2: on ECHO podria pujar la puntuació de veritat

Cada tasca d'ARC porta **exemples resolts**, i això encaixa amb com treballa ECHO:

1. El model **proposa** una transformació en forma de programa. És una hipòtesi.
2. ECHO **l'executa ell mateix** sobre tots els exemples resolts.
3. Si els reprodueix tots, queda verificada.
4. Si falla, ECHO li diu al model **en quin exemple i en quines cel·les** s'ha equivocat, i el
   model ho torna a provar.
5. Només s'envia una resposta verificada.

És el mateix que ja feia [DREAM](/ca/articulos/echo4-dream-rsi-historia-compartida): el model
proposa i el nucli ho comprova contra el que ha viscut.

Perquè el resultat sigui honest hi haurà un control amb **els mateixos intents, però sense
verificar**. Si aquest control empata amb ECHO, publicarem que la millora venia d'intentar-ho
més vegades i no de la verificació.

El codi que escriu el model s'executarà **aïllat**: una sola funció, sense importacions ni
fitxers, en un procés a part, sense xarxa i amb límits de temps i memòria.

### ARC-AGI-3: el món natural d'ECHO

ARC-AGI-3 són **jocs interactius**. L'agent veu la pantalla, actua i ha de descobrir les
regles jugant. És exactament el que fa ECHO des de la seva primera versió:

- percep;
- prediu el que passarà;
- actua;
- aprèn de l'error;
- intervé per saber què depèn d'ell.

Ho mesurarem de dues maneres:
- **ECHO sol, sense model de llenguatge**, davant l'agent aleatori de referència i un model
  de llenguatge jugant sol.
- **ECHO amb còrtex:** el model proposa regles («crec que el bloc blau obre la porta») i ECHO
  **les comprova actuant**.

Abans cal construir un codificador que tradueixi la pantalla del joc al paquet WSP d'ECHO,
així que va després d'ARC-AGI-2. No sabem què en sortirà, i per això és interessant.

## Com ho farem (el mètode de sempre)

- **Contracte abans de mirar:** la pregunta, els braços i els llindars es fixen abans de
  l'examen. Cada bloc té el seu.
- **Mostres congelades:** les preguntes de l'examen es van triar per llavor i es van
  segellar amb la seva empremta **abans** de començar. Ningú no les ha mirat. El
  desenvolupament fa servir altres preguntes.
- **Rebuts:** cada resposta de cada model i cada extracte de Wikipedia es desen. L'auditoria
  recalcula tots els números **sense tornar a cridar** cap model.
- **Corrector determinista:** coincidència normalitzada amb la resposta oficial, 100 %
  reproduïble. És més estricte que el corrector oficial de SimpleQA, que fa servir un altre
  model, i ho declarem.
- **Es publica tot:** cada gràfica amb el seu cost (ECHO hi afegeix temps i crides) i cada
  vermell.

## Quant costarà

| Bloc | Cost estimat |
|---|---|
| A: SimpleQA + MMLU-Pro + GSM8K | ≈ 5 $ |
| MMLU + Humanity's Last Exam + FrontierScience | ≈ 25 $ |
| ARC-AGI-2 amb els braços d'ECHO | ≈ 60–130 $ |
| ARC-AGI-3: ECHO sol | 0 $ |
| ARC-AGI-3: braços amb model de llenguatge | ≈ 10–40 $ |
| Opus 5.5 via Claude Code | 0 $ (quota de la subscripció) |
| **Total** | **≈ 100–220 $** |

El que més encareix és **raonar**. Alguns models «pensen» en silenci abans de respondre i
aquests tokens també es paguen. En una prova, Gemini 3.5 Flash va gastar uns 380 tokens ocults
en una pregunta d'una línia, i en aquest model no es pot desactivar.

## Una anècdota, no un resultat

En comprovar la connexió amb els models, els vam fer una sola pregunta de fets de prova: qui
va rebre un premi científic concret en un any concret.

- Un va dir «no ho sé».
- Els altres quatre van donar, amb tota seguretat, **quatre noms diferents per a la mateixa
  persona**.

Com a molt un dels quatre pot tenir raó: almenys tres van afirmar una cosa falsa sense dubtar.
Una pregunta no demostra res, però és justament el problema que aquest banc vol mesurar: un
model que afirma el que no sap. ECHO no acceptaria cap d'aquests noms sense un extracte que
l'avali.

## El que queda fora de moment

- **SWE-bench** (arreglar incidències reals de codi): és la prova natural del [servidor MCP
  d'ECHO](/ca/releases), però necessita Docker, uns 100 GB i moltes hores. El deixem per més
  endavant.
- **Cap resultat no es publicarà sense la seva auditoria.**

Quan tinguem números, els publicarem aquí amb les seves gràfiques, els seus intervals, el seu
cost i els seus vermells.
