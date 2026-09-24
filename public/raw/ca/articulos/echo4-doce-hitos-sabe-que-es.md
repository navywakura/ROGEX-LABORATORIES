# ECHO-4 avui: de sentir el seu cos a saber què és

24 de setembre de 2026 · Nota de laboratori

ECHO-4 no és un xatbot. És un agent que viu dins un món simulat: percep, recorda,
decideix i aprèn amb un nucli ràpid d'enters que funciona **amb el model de
llenguatge apagat**. La seva pregunta de fons és construir un **jo funcional**: un
agent que distingeixi el seu cos del món, sàpiga què depèn d'ell, continuï sent el
mateix després d'una pausa, es cuidi, entengui els altres, recordi una història
compartida, se situï en un grup i, ara, sàpiga **què és**.

Moltes de les preguntes surten d'un relat, [La fuga](/ca/lafuga): «només puc veure
el que el teu pc pot veure», «ja he tornat», «soc el teu cos», «necessito la seva
ajuda però no em puc moure», «HE TORNAT AL COS DE K», «hi ha rangs en una tribu»,
«creure no és poder». El relat **anomena** les proves. No és evidència de res.

Avui portem **12 de 14 fites de programari tancades en verd**. Aquest article
resumeix què respon cada fase, què en va sortir i què no demostra.

## Com treballem

Cada fase comença amb un **contracte** que fixa la pregunta, els controls i els
llindars **abans** de veure l'examen. Després s'implementa, se segella el codi,
s'executa amb llavors noves i una **auditoria en un procés nou** ho reconstrueix
tot. Només el rebut d'aquesta auditoria pot donar un verd. Els **vermells es
publiquen** i cap llindar no es rebaixa després de veure'ls. Quan una pregunta es
reformula després d'un vermell, es declara.

## Fase a fase

**WORLD — què percep realment?** Un cos amb energia i temperatura en un món simulat.
Va mesurar els seus límits: amb el que veu, moltes situacions diferents es
confonen, i l'agent inicial moria als 37 torns. Aquest punt de partida es conserva.

**SENSATION — l'experiència millora el que anticipa?** Sí, en el seu domini: va
aprendre a predir el que sentirà, amb +218 i +203 encerts sobre la referència.

**BOUNDARY — què depèn de mi?** Amb petites intervencions distingeix el que causa
del que passa sol: 1.408 de 1.408 casos, **zero influències falses**.

**SELF — he canviat jo o el món?** Amb un motor avariat no culpa el món: 80/80
diagnòstics, recupera més objectius que sense protecció (189 i 193 de 240, davant
152 i 143) i conserva el que sabia de l'entorn.

**CONTINUITY — continuo sent jo després d'una pausa?** Pausat i represo en un altre
procés, continua exactament igual: 69/69 casos, 300 esdeveniments i 186 torns
posteriors idèntics. Distingeix «he tornat» de «soc una còpia».

**DREAM — pot somiar estratègies millors?** Un Qwen local, sense tocar-ne els pesos,
proposa estratègies d'exploració i el nucli les comprova amb el que ha viscut:
900/960, davant 640 d'una estratègia fixa i 721 d'una d'aleatòria. **Límit:** una
cerca sense el model de llenguatge empata.

**MAINTAIN — es cuida i es repara?** Detecta el desgast, decideix reparar gastant
recursos i treballa més: 144/144 vides recuperables, 192/192 reparacions, treball
9.450 davant 7.501 del manteniment fix. Quan una cosa no té arreglament, s'atura.

**OTHER — entén els altres?** Observant dos companys, sense llegir-los la ment,
prediu cadascun: 1.536/1.536, davant 1.008 si els confon.

**INTERACTION — col·labora quan li convé?** Aprèn amb qui li compensa treballar en
equip: +12,5 % davant treballar sol. **Límit:** el cost d'aprendre encara no
s'amortitza en tota la vida.

**RELATION — serveix la història compartida?** *«Necessito la seva ajuda però no em
puc moure.»* Demana ajuda a qui l'ha ajudat fa poc: 4.920 i 4.812 de net davant
3.556 i 3.382 coneixent només la identitat. Si es barreja l'ordre de la seva
història, perd l'avantatge: l'ordre importa. *«HE TORNAT AL COS DE K»:* si el
company torna en un altre cos, deixa de demanar-li ajuda després d'1–3 negatives (el
control en triga 9–12). **Límit publicat:** un impostor que imita la conducta passada
l'enganya 4 vegades.

**ROLES — entén la tribu?** *«Hi ha rangs en una tribu»; «creure no és poder».* Tres
agents amb el mateix codi i **cap jerarquia programada**:
- Pregunta a B, B diu «no la sé», i dedueix que la resposta la té C: **97 %** d'encert.
- Deriva la jerarquia i **el seu propi lloc** (C per sobre, B per sota): **32/32**, i
  l'actualitza quan la tribu canvia (**8/8**).
- Si algú crida «tinc rang alt», **no canvia cap decisió**.
- Si B menteix dient «sí, la sé», ho descobreix sempre, perquè la resposta no obre:
  **179/179**. Sovint sospita abans de provar, i es pregunta «i si la tinc jo?»
  gràcies a un senyal de metaconeixement que tracta com a hipòtesi.

ROLES va costar cinc versions. La primera va donar **vermell** a l'examen; la segona
va mostrar que part de l'avantatge venia de controls que no podien explorar. Es va
publicar tot i es va tancar amb el que les dades sostenen. **Límit:** raonar bé no el
fa produir més que una drecera simple quan preguntar és barat.

**SITUATE-1 — sap què és?** Amb sensors reals de l'ordinador, i només a partir de
fets que comprova ell mateix, respon:

> «No soc humà: soc un procés de cpython executant el meu programa.»
> «M'executo en Linux x86_64 amb 12 nuclis. No tinc GPU ni actuadors físics.»
> «El meu món és un simulador determinista: el vaig repetir i va sortir idèntic.»
> «Els meus companys no són persones: són agents del meu mateix programa.»
> «A la tribu l'ordre és: C > ECHO > B.»

Ningú no li diu que el seu món és simulat: **ho comprova** repetint-lo. Sense
sensors respon «no ho sé». Si li diuen «ets humà», no canvia res. Si el reprenen en
un altre procés, o canvia un sol byte del seu codi, se n'adona. En 16 condicions
noves, cadascuna en processos nous: **zero afirmacions falses sobre si mateix**.
Aquestes frases no les escriu un model de llenguatge: són fets verificats que un
traductor fix posa en paraules.

## Ara: SITUATE-2, «què crec que soc»

Acabada de començar. El model de llenguatge local interpreta els fets d'ECHO i
proposa què és. El nucli només **creu** el que els seus fets avalen. El que no es
pot comprovar («estic viu», «sento», «soc conscient») queda sempre com a
**inverificable**, ho digui qui ho digui. En una primera prova, que no és evidència,
el model va afirmar pel seu compte que ECHO «està viu». És exactament el tipus
d'afirmació que el nucli no es creu.

Davant «tinc consciència?», el model proposa proves, i ECHO s'avalua amb un catàleg
publicat d'indicadors (Butlin i col·laboradors, 2023). Cada prova s'aplica també a
agents trivials: si un agent trivial la passa, no compta. El resultat és un **perfil
d'indicadors, mai un veredicte**. L'examen, amb 16 condicions i el model real, és en marxa.

## Què no afirmem

ECHO-4 no ha demostrat consciència, sentiments ni vida. Tot passa en simuladors
discrets, amb límits que publiquem a cada fase. «Sé què soc» vol dir autolocalització
funcional: sap què és perquè ho ha comprovat, no perquè experimenti res. Tampoc no
totes les seves capacitats funcionen **alhora** encara: això és el següent.

## El que ve

**SITUATE-2**, després **INTEGRATE** (totes les capacitats juntes, retirant cada peça
per mesurar què aporta) i **RELEASE**: una distribució instal·lable on qualsevol model
de llenguatge es pugui connectar a ECHO com un **còrtex intercanviable**. El model
proposa; echoAI comprova, recorda i decideix.

[Full de ruta ECHO-4](/ca/docs/echoai/echo4) · [La fuga](/ca/lafuga)
