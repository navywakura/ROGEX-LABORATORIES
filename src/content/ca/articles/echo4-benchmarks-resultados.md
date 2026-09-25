# Primers resultats: ECHO fa que els models s'inventin molt menys

25 de setembre de 2026 · Resultats auditats · SimpleQA, MMLU-Pro, GSM8K, ARC-AGI-2 i ARC-AGI-3

Fa un dia vam publicar [el pla](/ca/articulos/echo4-plan-benchmarks-con-y-sin-echo) per mesurar
si ECHO millora un model de llenguatge. Ja tenim els primers números, **amb els seus vermells**.
Totes les gràfiques surten de les dades reals de l'examen, i l'informe complet es reconstrueix
des dels rebuts **sense tornar a cridar cap model**.

**Resum en una frase:** en preguntes de fets, ECHO redueix entre un 81 % i un 87 % les respostes
inventades de quatre models diferents, a canvi de respondre menys. No fa més llest el model: fa
que digui «no ho sé» quan no té proves.

## Com s'ha mesurat

Cada model es compara **amb si mateix**. Mateixa pregunta, mateixa temperatura (0) i mateixes
dades:

| Braç | Què és |
|---|---|
| **M** | el model sol, de memòria |
| **M+R** | el model amb extractes de Wikipedia que busca ECHO |
| **M+R+ECHO** | la **mateixa** resposta de M+R, passada pel tallafoc d'ECHO: només es dona si un extracte l'avala; si no, «no ho sé» |

El braç M+R és la clau. Separa el que aporta tenir més informació del que aporta el tallafoc.

- **Examen:** 200 preguntes de SimpleQA, 100 de MMLU-Pro i 50 de GSM8K, triades per llavor i
  segellades amb la seva empremta **abans** de començar. Ningú no les va mirar abans de l'examen.
- **Llindars:** fixats per escrit **abans** de l'examen.
- **Corrector:** determinista (coincidència normalitzada). És més estricte que el corrector
  oficial de SimpleQA, que fa servir un altre model.
- **Cost total de l'examen:** 1,55 $.

## SimpleQA: preguntes de fets curtes i difícils

<figure class="article-chart"><img src="/media/echoai/bench/simpleqa-incorrect-ca.svg" alt="Barres de respostes incorrectes a SimpleQA de 4 models: sols, amb Wikipedia i amb Wikipedia més ECHO" loading="lazy" /></figure>

| Model | Incorrectes: sol → amb Wikipedia → **amb ECHO** | Precisió amb Wikipedia → amb ECHO |
|---|---|---|
| Claude Sonnet 5 | 104 → 19 → **14** | 76 % → 80 % |
| DeepSeek V4.1 Flash | 101 → 66 → **14** | 58 % → 79 % |
| GPT-5.4 mini | 145 → 76 → **27** | 46 % → 67 % |
| Qwen3-30B | 129 → 34 → **17** | 64 % → 76 % |

**En què millora:**
- **S'inventa molt menys.** Davant del model sol, les respostes incorrectes baixen entre un 81 %
  i un 87 % en els quatre models.
- **No és només per tenir Wikipedia.** Davant de donar-li els mateixos extractes sense tallafoc,
  ECHO treu errors en els quatre. El cas més clar és DeepSeek: amb Wikipedia continua afirmant
  coses que el text no diu (66 incorrectes); amb ECHO, 14.
- **Quan respon, encerta més.** La precisió puja en els quatre models.

<figure class="article-chart"><img src="/media/echoai/bench/simpleqa-precision-coverage-ca.svg" alt="Precisió i cobertura a SimpleQA amb Wikipedia i amb Wikipedia més ECHO" loading="lazy" /></figure>

**El que costa:** ECHO també descarta respostes **correctes**, perquè exigeix que tota la
resposta aparegui en un extracte. Respon menys preguntes, i l'F-score (la mètrica oficial que
barreja encerts i cobertura) **baixa** en tres dels quatre models. Només puja a GPT-5.4 mini.

<figure class="article-chart"><img src="/media/echoai/bench/simpleqa-stacked-ca.svg" alt="Correctes, incorrectes i no intentades a SimpleQA per model i braç" loading="lazy" /></figure>

## MMLU-Pro: el control negatiu

<figure class="article-chart"><img src="/media/echoai/bench/mmlupro-stacked-ca.svg" alt="MMLU-Pro: amb ECHO gairebé totes les preguntes queden sense intentar" loading="lazy" /></figure>

MMLU-Pro és coneixement acadèmic amb deu opcions, i les opcions gairebé mai no apareixen
literalment a Wikipedia. Com esperàvem, **ECHO s'absté en unes 93 de cada 100**. No puja cap
encert: per construcció, ECHO només pot **treure** respostes, mai crear-ne una de correcta. Ho
vam comprovar pregunta per pregunta: 0 casos en els quatre models.

**Una fallada que declarem:** a GPT-5.4 mini i Qwen, entre les poques respostes que ECHO deixa
passar n'hi ha més d'incorrectes que de correctes. Si el text d'una opció equivocada apareix en un
extracte, la verificació l'accepta. **Per a opció múltiple, aquest ECHO no serveix.**

## GSM8K: el límit

Els quatre models encerten entre 47 i 49 de 50 problemes de matemàtiques. ECHO **s'absté en els
50**, perquè no té manera de comprovar un càlcul. És el límit que vam anunciar al pla.

## ARC-AGI-3: jocs que cal descobrir jugant

ARC-AGI-3 són jocs interactius: ningú no et diu les regles. Ho vam provar en els 16 jocs públics
del nostre examen, amb 2000 accions per joc.

<figure class="article-chart"><img src="/media/echoai/bench/arc3-levels-ca.svg" alt="Nivells completats a ARC-AGI-3 per l'atzar, ECHO sol i Qwen3-30B amb i sense ECHO" loading="lazy" /></figure>

- **ECHO sol, sense model de llenguatge: 13 nivells, davant de 2 de l'atzar.** Recorda el que ha
  viscut, distingeix el que depèn d'ell del que es mou sol i deixa de repetir el que no serveix.
  Sense aquesta distinció (el braç «sense BOUNDARY») cau al nivell de l'atzar.
- **La puntuació oficial continua sent molt baixa: 1 sobre 100.** ARC premia resoldre amb tan
  poques accions com un humà. ECHO no entén l'objectiu: el troba explorant, amb centenars
  d'accions per nivell.
- **Qwen3-30B jugant: 0 nivells sol i 4 amb ECHO.** Però tots quatre els va completar
  l'exploració d'ECHO, no una jugada del model. Aquest model no dedueix les regles: aprèn a
  delegar.
- **Una pista, no un resultat:** en una prova de desenvolupament, **Claude Opus 5.5 amb ECHO** va
  completar dos nivells amb **les seves pròpies jugades**, en només 23 i 40 accions. Les partides
  es van tallar pel límit d'ús, així que no compten. És el que volem mesurar bé a continuació.

## ARC-AGI-2: el model escriu un programa i ECHO el comprova (VERMELL)

ARC-AGI-2 són trencaclosques de graelles amb exemples resolts. Vam mesurar tres braços per model a
les 120 tasques públiques d'avaluació (30 per a DeepSeek, per pressupost):
- el model sol;
- el model + ECHO: ECHO **executa** el seu programa sobre els exemples, li diu on falla i només
  n'envia un que els reprodueixi tots;
- un **control** amb 4 programes sense verificar.

<figure class="article-chart"><img src="/media/echoai/bench/arc2-score-ca.svg" alt="Puntuació a ARC-AGI-2 de Qwen3-30B, DeepSeek V4.1 Flash i ECHO sol" loading="lazy" /></figure>

- **DeepSeek:** 3,3 % sol, 6,7 % amb ECHO i 6,7 % amb el control. **És vermell:** la millora
  s'explica igual de bé per provar més programes. No podem dir que verificar aporti encerts.
- **Qwen3-30B:** 0 % en els tres braços. **ECHO sol**, sense model: 0 de 120.

<figure class="article-chart"><img src="/media/echoai/bench/arc2-wrong-ca.svg" alt="Respostes incorrectes enviades a ARC-AGI-2 per braç" loading="lazy" /></figure>

**El que sí es veu:** Qwen sol va enviar **105 respostes incorrectes** i el seu control, 97. **Amb
ECHO en va enviar 0**, perquè es va abstenir en no poder verificar. És el mateix efecte que a
SimpleQA: ECHO no deixa passar el que no pot comprovar. Un programa de DeepSeek va passar tots els
exemples i tot i així va fallar el test: verificar contra els exemples no garanteix encertar el que és
nou. L'examen va costar 2,89 $ i l'auditoria va tornar a executar els 570 registres amb 0 diferències.

## El que demostra i el que no

- **Demostra**, en un banc oficial i amb quatre models de quatre empreses diferents, que un
  tallafoc que exigeix proves **redueix molt les respostes inventades**.
- **No demostra** que ECHO faci més intel·ligent un model.
- **No serveix** per a opció múltiple ni per a matemàtiques.
- **Els nostres números no es comparen un a un amb les taules oficials**, perquè el corrector és
  més estricte.
- **Gemini 3.5 Flash** va quedar fora de l'examen per pressupost: raona sempre i costava més del
  doble que els altres quatre junts.

## Les proves que falten: fes-les tu

**ECHO-4 el manté la comunitat.** Aquestes són les proves que encara no hem pogut fer, gairebé
totes per pressupost:

| Prova | Què mesuraria | Què cal |
|---|---|---|
| **Humanity's Last Exam** | si ECHO evita respostes inventades en preguntes de nivell expert | API de models (~10 $) |
| **MMLU** i **FrontierScience** | el mateix tallafoc en coneixement general i ciència d'olimpíada | API de models (~15 $) |
| **ARC-AGI-2 amb models forts** | si verificar ajuda un model que resol més tasques (amb DeepSeek va empatar amb el control) | API de models (40–130 $) |
| **ARC-AGI-3 amb models forts** | si un model que sí dedueix regles millora amb ECHO (la pista d'Opus) | models frontera |
| **SimpleQA amb Gemini** i més models | ampliar la comparació | API de models |
| **SWE-bench** | ECHO com a verificador d'agents de codi | Docker i uns 100 GB |

**Com participar:**
1. Descarrega ECHO-4 des de la pàgina de [releases](/ca/echoai#release).
2. Executa la prova amb **el nostre mètode**:
   - contracte amb llindars **abans** de l'examen;
   - mostres fixades per llavor;
   - rebuts de cada crida;
   - auditoria que reconstrueix els números sense tornar a cridar el model.
3. **Escriu-nos a [rxlabs.org/contact](https://www.rxlabs.org/ca/contact)** per demanar més
   informació, les dades exactes d'aquest examen o publicar aquí el teu benchmark, **també si
   surt en vermell**.
