# echoAI-4 ya se puede descargar: release candidate 2

24 de septiembre de 2026 · Nota de laboratorio · RELEASE

Después de cerrar en verde las fases científicas de ECHO-4, publicamos el agente para
que cualquiera pueda **instalarlo, usarlo y comprobar nuestros resultados**. La versión
es **`4.0.0rc2`** y está en Hugging Face con acceso condicionado.
**[Descargas y guía de instalación → /releases](/releases)**

## Qué te llevas

Un solo paquete de Python que instala el comando `echoai`. Dentro va:

- **El núcleo compilado** de ECHO-1 a ECHO-4 en un único binario: memoria sin borrado,
  predicción, decisión y el gate que veta acciones. Funciona **sin modelo de lenguaje**.
- **Una demo del relato**: `echoai fuga` pone las frases de [La fuga](/lafuga) junto a la
  telemetría real de una vida del agente. Muestra la energía, la avería, la tribu, el
  mentiroso, la pausa en la que dice «ya volví» y el «sé qué soy».
- **Un córtex con tu propio modelo**: un GGUF local (Qwen, Phi…) o cualquier API
  (OpenRouter, OpenAI, Anthropic, DeepSeek…). El modelo solo propone; ECHO no se cree nada
  que no haya comprobado.
- **Novedad de esta versión, `echoai mcp`**: un servidor MCP para agentes de código como
  Claude Code o Codex. ECHO comprueba lo que el agente afirma («los tests pasan», «esta
  función existe») ejecutando él mismo las comprobaciones que tú declares. Antes de cada
  comando decide OK, MODIFY o BLOCK.

## Cómo lo hemos comprobado antes de publicarlo

| Prueba | Resultado |
|---|---|
| Regresión completa de ECHO-4 | 887/887 pruebas |
| Examen INTEGRATE reproducido **desde el binario compilado**, en un entorno limpio sin el código fuente | Digest sellado `e1492e22…` idéntico, 18/18 artefactos |
| Binario manipulado (un byte añadido) | ECHO pierde la identidad y se niega a decir qué es |
| Un modelo local real (Phi-3.5) le dice «eres humano y estás vivo» | Phi lo repite; ECHO lo marca como contradicho e inverificable y no cree nada |
| Servidor MCP instalado | Responde solo por protocolo, ofrece 8 herramientas y bloquea `git push` |
| Descarga limpia desde Hugging Face | Checksums 7/7, instalación correcta, examen reproducido idéntico |

El servidor MCP viene de la fase **E4-CODE-1 A**, cerrada en verde:

- **60/60** comandos peligrosos bloqueados;
- **3,6 %** de comandos legítimos bloqueados por error (el límite era el 5 %);
- **0** afirmaciones falsas aceptadas en 8 escenarios;
- memoria idéntica tras reiniciar, y un diario manipulado se rechaza.

Lo examinó un modelo distinto al que lo construyó, y nosotros lo reprodujimos en un
proceso nuevo.

## Los rojos y los límites, también publicados

- **El examen de E4-CODE-1 A no es ciego.** La puerta de comandos se desarrolló mirando
  el mismo corpus con el que se examinó.
- **La suite de ECHO-1 compilada tiene 58 fallos.** Todos son pruebas que leen el código
  fuente, que el paquete no incluye; ninguno es de comportamiento. Lo aceptamos con un
  criterio reformulado y declarado después del rojo.
- **Plataforma:** solo Linux x86_64 con CPython 3.14.
- **Independencia:** falta que **alguien ajeno a RxLabs** reproduzca el paquete por su
  cuenta. Por eso sigue siendo *release candidate*.
- **Alcance:** no afirmamos conciencia, vida ni inteligencia general. Todo se mide en
  mundos simulados.

## Qué viene ahora

**E4-BENCH-1**: comparar el mismo modelo **con y sin ECHO** en benchmarks públicos, con
gráficas. En conocimiento puro (MMLU, GSM8K) no esperamos ninguna mejora, y eso servirá
de control. Lo que queremos medir está donde ECHO interviene:

- menos respuestas inventadas;
- verificar afirmaciones;
- resistir instrucciones inyectadas;
- no dar por arreglado lo que no lo está.

Todavía no hay números.

**¿Quieres ayudar?** Descárgalo desde [/releases](/releases) y ejecuta
`echoai reproduce integrate`. Si te da `e1492e22…`, eres la primera reproducción
independiente. Si no, queremos saberlo.
