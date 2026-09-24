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
