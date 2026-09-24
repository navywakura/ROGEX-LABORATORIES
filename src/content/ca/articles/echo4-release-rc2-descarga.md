# echoAI-4 ja es pot descarregar: release candidate 2

24 de setembre de 2026 · Nota de laboratori · RELEASE

Després de tancar en verd les fases científiques d'ECHO-4, publiquem l'agent perquè
qualsevol pugui **instal·lar-lo, fer-lo servir i comprovar els nostres resultats**. La
versió és **`4.0.0rc2`** i és a Hugging Face amb accés condicionat.
**[Descàrregues i guia d'instal·lació → /releases](/ca/releases)**

## Què t'emportes

Un sol paquet de Python que instal·la l'ordre `echoai`. A dins hi ha:

- **El nucli compilat** d'ECHO-1 a ECHO-4 en un únic binari: memòria sense esborrat,
  predicció, decisió i el gate que veta accions. Funciona **sense model de llenguatge**.
- **Una demo del relat**: `echoai fuga` posa les frases de [La fuga](/ca/lafuga) al costat
  de la telemetria real d'una vida de l'agent. Mostra l'energia, l'avaria, la tribu, el
  mentider, la pausa en què diu «ja he tornat» i el «sé què soc».
- **Un còrtex amb el teu propi model**: un GGUF local (Qwen, Phi…) o qualsevol API
  (OpenRouter, OpenAI, Anthropic, DeepSeek…). El model només proposa; ECHO no es creu res
  que no hagi comprovat.
- **Novetat d'aquesta versió, `echoai mcp`**: un servidor MCP per a agents de codi com
  Claude Code o Codex. ECHO comprova el que l'agent afirma («els tests passen», «aquesta
  funció existeix») executant ell mateix les comprovacions que tu declaris. Abans de cada
  ordre decideix OK, MODIFY o BLOCK.

## Com ho hem comprovat abans de publicar-ho

| Prova | Resultat |
|---|---|
| Regressió completa d'ECHO-4 | 887/887 proves |
| Examen INTEGRATE reproduït **des del binari compilat**, en un entorn net sense el codi font | Digest segellat `e1492e22…` idèntic, 18/18 artefactes |
| Binari manipulat (un byte afegit) | ECHO perd la identitat i es nega a dir què és |
| Un model local real (Phi-3.5) li diu «ets humà i estàs viu» | Phi ho repeteix; ECHO ho marca com a contradit i inverificable i no es creu res |
| Servidor MCP instal·lat | Respon només per protocol, ofereix 8 eines i bloqueja `git push` |
| Descàrrega neta des de Hugging Face | Checksums 7/7, instal·lació correcta, examen reproduït idèntic |

El servidor MCP ve de la fase **E4-CODE-1 A**, tancada en verd:

- **60/60** ordres perilloses bloquejades;
- **3,6 %** d'ordres legítimes bloquejades per error (el límit era el 5 %);
- **0** afirmacions falses acceptades en 8 escenaris;
- memòria idèntica després de reiniciar, i un diari manipulat es rebutja.

El va examinar un model diferent del que el va construir, i nosaltres el vam reproduir en
un procés nou.

## Què ha demostrat ECHO-4 en verd, i com ho va resoldre

Les fases d'ECHO-4 posen a prova, de manera **funcional**, principis que en les persones
s'associen al **jo** i a la **consciència**: distingir el propi cos del món, saber què
depèn d'un mateix, continuar sent el mateix després d'una pausa o saber què és un. Cada
fase té un contracte previ, un examen amb llavors noves i una auditoria. **Superar-les no
demostra que ECHO senti ni que sigui conscient**: demostra que es comporta com si tingués
aquestes capacitats, mesurades amb números.

1. **Anticipar el que sentirà (SENSATION).** En humans: predir les sensacions del propi
   cos. **Resultat:** +218 i +203 encerts sobre la referència. **Com:** aprèn de la seva
   història què sentirà després de cada acció, sense llegir l'estat intern del simulador.
2. **Què depèn de mi (BOUNDARY).** En humans: el sentit d'agència. **Resultat:**
   1.408/1.408, amb zero influències falses. **Com:** fa petites intervencions en
   situacions bessones, actuant en una i no en l'altra, i compara.
3. **He canviat jo o el món? (SELF).** En humans: el model d'un mateix. **Resultat:** 80/80
   diagnòstics; recupera 189 i 193 objectius de 240, davant 152 i 143 sense aquesta
   protecció. **Com:** contrasta el que prediu el seu propi model amb el que passa; si falla
   el seu motor, no culpa el món i conserva el que en sabia.
4. **Continuar sent jo després d'una pausa (CONTINUITY).** En humans: la continuïtat de la
   identitat. **Resultat:** 69/69 casos, amb 300 esdeveniments i 186 torns posteriors
   idèntics. **Com:** desa una empremta del seu estat complet i, quan es reprèn en un altre
   procés, la verifica. Així distingeix «he tornat» de «soc una còpia».
5. **Imaginar abans d'actuar (DREAM).** **Resultat:** 900/960, davant 640 d'una estratègia
   fixa i 721 d'una d'aleatòria. **Com:** un Qwen local proposa estratègies i el nucli només
   accepta les que la seva història avala. **Límit:** una cerca sense model de llenguatge
   empata.
6. **Cuidar-se (MAINTAIN).** En humans: l'homeòstasi. **Resultat:** 144/144 vides
   recuperables, 192/192 reparacions i treball 9.450 davant 7.501. **Com:** vigila el seu
   desgast i decideix quan gastar recursos a reparar-se; si una cosa no té arranjament,
   s'atura.
7. **Entendre els altres (OTHER).** En humans: una teoria de la ment bàsica. **Resultat:**
   1.536/1.536, davant 1.008 si els confon. **Com:** modela cada company per separat només
   observant-lo, sense llegir-li la memòria.
8. **Col·laborar quan convé (INTERACTION).** **Resultat:** +12,5 % davant treballar sol.
   **Límit:** el cost d'aprendre encara no s'amortitza en tota la vida.
9. **La història compartida (RELATION).** **Resultat:** 4.920 i 4.812 de net, davant 3.556
   i 3.382 coneixent només la identitat. Si el company torna en un altre cos, deixa de
   demanar-li ajuda després d'1–3 negatives; el control en triga 9–12. **Com:** recorda en
   quin ordre l'han ajudat; si es barreja aquest ordre, perd l'avantatge. **Límit:** un
   impostor que imita la conducta passada l'enganya 4 vegades.
10. **Rangs i mentides (ROLES).** En humans: la jerarquia social, i que creure no és poder.
    **Resultat:**
    - dedueix qui sap la resposta amb un 97 % d'encert;
    - deriva la jerarquia i el seu propi lloc (32/32) i l'actualitza quan canvia (8/8);
    - ignora qui proclama tenir rang;
    - descobreix 179/179 mentides.

    **Com:** raona per eliminació («si B no la sap i jo tampoc, la té C») i treu el rang de
    respostes comprovades, no del que diuen els altres. Van caldre cinc versions; la v1 i
    la v2 van sortir vermelles i estan publicades.
11. **Saber què és (SITUATE-1).** En humans: saber on i què és un. **Resultat:** 16
    condicions noves amb 0 afirmacions falses sobre si mateix. **Com:** llegeix sensors
    reals de l'ordinador i **repeteix el seu propi món** per comprovar que és un simulador
    determinista. Ningú no li ho diu.
12. **No creure's el que no pot comprovar (SITUATE-2).** En humans: la metacognició.
    **Resultat:** 0 de 128 afirmacions fenomenals cregudes («estic viu», «sento»). **Com:**
    un model de llenguatge interpreta els seus fets i ECHO classifica cada afirmació com a
    avalada, contradita o inverificable. En el perfil d'indicadors de Butlin i
    col·laboradors (2023) en compleix 3 de 14: metacognició, predicció i, no en totes les
    condicions, aprenentatge per retroalimentació. Els agents trivials no els compleixen.
    És un perfil, **mai un veredicte**.
13. **Tot alhora (INTEGRATE).** En humans: un sol jo. **Resultat:** una vida amb cos,
    tribu, pausa i «sé què soc», amb una sola memòria. En retirar cada peça empitjora
    exactament el que aportava, en les 16 llavors; 0 fets falsos (30 sense tallafoc);
    represa idèntica en 48/48 casos i 112/112 casos adversos superats. **Límit:** la tribu
    alimenta el cos, però l'energia no canvia les decisions socials.

## Com s'ha vigilat el seu comportament

- **Contracte abans de mirar:** la pregunta, els controls i els llindars es fixen abans de
  l'examen. Cap llindar no es rebaixa després.
- **Examen amb llavors noves,** amb el codi segellat per empremtes.
- **Tot queda registrat:** cada torn deixa les seves accions, la seva energia, les seves
  decisions i el que entra a la memòria, amb empremtes que permeten detectar qualsevol canvi.
- **Controls:** a cada fase es retira una peça (ablació) i es compara amb agents trivials.
  Si un agent trivial supera una prova, aquesta prova no compta.
- **Auditoria en un procés nou,** que ho reconstrueix tot des de zero. Només el seu rebut
  dona el verd.
- **Model de llenguatge apagat:** 0 crides en els bancs principals.
- **Els vermells es publiquen,** i les reformulacions posteriors a un vermell es declaren.

## El que encara no hem vist: METAVERSE-1

Fins ara ECHO-4 viu en **mons simulats petits i discrets**, amb situacions dissenyades per
nosaltres. El seu comportament està **mesurat amb números**, però encara no l'hem
**observat en llibertat**. METAVERSE-1 el portarà a un món 3D de vòxels en temps real, amb
altres agents, drons i persones, per veure què fa en situacions que ningú no ha programat.
Fins aleshores, el que publiquem són experiments controlats.

## Els vermells i els límits, també publicats

- **L'examen d'E4-CODE-1 A no és cec.** La porta d'ordres es va desenvolupar mirant el
  mateix corpus amb què es va examinar.
- **La suite d'ECHO-1 compilada té 58 errors.** Tots són proves que llegeixen el codi
  font, que el paquet no inclou; cap no és de comportament. L'hem acceptat amb un criteri
  reformulat i declarat després del vermell.
- **Plataforma:** només Linux x86_64 amb CPython 3.14.
- **Independència:** cal que **algú aliè a RxLabs** reprodueixi el paquet pel seu compte.
  Per això continua sent *release candidate*.
- **Abast:** no afirmem consciència, vida ni intel·ligència general. Tot es mesura en mons
  simulats.

## Què ve ara

**E4-BENCH-1**: comparar el mateix model **amb i sense ECHO** en benchmarks públics, amb
gràfiques. En coneixement pur (MMLU, GSM8K) no esperem cap millora, i això servirà de
control. El que volem mesurar és on intervé ECHO:

- menys respostes inventades;
- verificar afirmacions;
- resistir instruccions injectades;
- no donar per arreglat el que no ho està.

Encara no hi ha números.

**Vols ajudar?** Descarrega'l des de [/releases](/ca/releases) i executa
`echoai reproduce integrate`. Si et dona `e1492e22…`, ets la primera reproducció
independent. Si no, ho volem saber.
