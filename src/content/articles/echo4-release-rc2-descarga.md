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

## Qué ha demostrado ECHO-4 en verde, y cómo lo resolvió

Las fases de ECHO-4 ponen a prueba, de forma **funcional**, principios que en las personas
se asocian al **yo** y a la **conciencia**: distinguir el propio cuerpo del mundo, saber qué
depende de uno, seguir siendo el mismo tras una pausa o saber qué es uno. Cada fase tiene
un contrato previo, un examen con semillas nuevas y una auditoría. **Pasarlas no demuestra
que ECHO sienta ni que sea consciente**: demuestra que se comporta como si tuviera esas
capacidades, medidas con números.

1. **Anticipar lo que va a sentir (SENSATION).** En humanos: predecir las sensaciones del
   propio cuerpo. **Resultado:** +218 y +203 aciertos sobre la referencia. **Cómo:** aprende
   de su historia qué sentirá tras cada acción, sin leer el estado interno del simulador.
2. **Qué depende de mí (BOUNDARY).** En humanos: el sentido de agencia. **Resultado:**
   1.408/1.408, con cero influencias falsas. **Cómo:** hace pequeñas intervenciones en
   situaciones gemelas, actuando en una y no en la otra, y compara.
3. **¿He cambiado yo o el mundo? (SELF).** En humanos: el modelo de uno mismo.
   **Resultado:** 80/80 diagnósticos; recupera 189 y 193 objetivos de 240, frente a 152 y
   143 sin esa protección. **Cómo:** contrasta lo que predice su propio modelo con lo que
   ocurre; si falla su motor, no culpa al mundo y conserva lo que sabía de él.
4. **Seguir siendo yo tras una pausa (CONTINUITY).** En humanos: la continuidad de la
   identidad. **Resultado:** 69/69 casos, con 300 eventos y 186 turnos posteriores
   idénticos. **Cómo:** guarda una huella de su estado completo y, al reanudarse en otro
   proceso, la verifica. Así distingue «he vuelto» de «soy una copia».
5. **Imaginar antes de actuar (DREAM).** **Resultado:** 900/960, frente a 640 de una
   estrategia fija y 721 de una aleatoria. **Cómo:** un Qwen local propone estrategias y el
   núcleo solo acepta las que su historia respalda. **Límite:** una búsqueda sin modelo de
   lenguaje empata.
6. **Cuidarse (MAINTAIN).** En humanos: la homeostasis. **Resultado:** 144/144 vidas
   recuperables, 192/192 reparaciones y trabajo 9.450 frente a 7.501. **Cómo:** vigila su
   desgaste y decide cuándo gastar recursos en repararse; si algo no tiene arreglo, se para.
7. **Entender a otros (OTHER).** En humanos: una teoría de la mente básica. **Resultado:**
   1.536/1.536, frente a 1.008 si los confunde. **Cómo:** modela a cada compañero por
   separado solo observándolo, sin leerle la memoria.
8. **Colaborar cuando conviene (INTERACTION).** **Resultado:** +12,5 % frente a trabajar
   solo. **Límite:** el coste de aprender todavía no se amortiza en la vida completa.
9. **La historia compartida (RELATION).** **Resultado:** 4.920 y 4.812 de neto, frente a
   3.556 y 3.382 conociendo solo la identidad. Si el compañero vuelve en otro cuerpo, deja de
   pedirle ayuda tras 1–3 negativas; el control tarda 9–12. **Cómo:** recuerda en qué orden
   le ayudaron; si se baraja ese orden, pierde la ventaja. **Límite:** un impostor que imita
   la conducta pasada lo engaña 4 veces.
10. **Rangos y mentiras (ROLES).** En humanos: la jerarquía social, y que creer no es poder.
    **Resultado:**
    - deduce quién sabe la respuesta con un 97 % de acierto;
    - deriva la jerarquía y su propio lugar en ella (32/32) y la actualiza cuando cambia (8/8);
    - ignora a quien proclama tener rango;
    - descubre 179/179 mentiras.

    **Cómo:** razona por eliminación («si B no la sabe y yo tampoco, la tiene C») y saca el
    rango de respuestas comprobadas, no de lo que dicen los demás. Hicieron falta cinco
    versiones; la v1 y la v2 salieron rojas y están publicadas.
11. **Saber qué es (SITUATE-1).** En humanos: saber dónde y qué es uno. **Resultado:**
    16 condiciones nuevas con 0 afirmaciones falsas sobre sí mismo. **Cómo:** lee sensores
    reales del ordenador y **repite su propio mundo** para comprobar que es un simulador
    determinista. Nadie se lo dice.
12. **No creerse lo que no puede comprobar (SITUATE-2).** En humanos: la metacognición.
    **Resultado:** 0 de 128 afirmaciones fenomenales creídas («estoy vivo», «siento»).
    **Cómo:** un modelo de lenguaje interpreta sus hechos y ECHO clasifica cada afirmación
    en respaldada, contradicha o inverificable. En el perfil de indicadores de Butlin y
    colaboradores (2023) cumple 3 de 14: metacognición, predicción y, no en todas las
    condiciones, aprendizaje por realimentación. Los agentes triviales no los cumplen. Es
    un perfil, **nunca un veredicto**.
13. **Todo a la vez (INTEGRATE).** En humanos: un solo yo. **Resultado:** una vida con
    cuerpo, tribu, pausa y «sé qué soy», con una sola memoria. Al retirar cada pieza
    empeora justo lo que aportaba, en las 16 semillas; 0 hechos falsos (30 sin
    cortafuegos); reanudación idéntica en 48/48 casos y 112/112 casos adversos superados.
    **Límite:** la tribu alimenta al cuerpo, pero la energía no cambia las decisiones
    sociales.

## Cómo se ha vigilado su comportamiento

- **Contrato antes de mirar:** la pregunta, los controles y los umbrales se fijan antes
  del examen. Ningún umbral se rebaja después.
- **Examen con semillas nuevas** y el código sellado por huellas.
- **Todo queda registrado:** cada turno deja sus acciones, su energía, sus decisiones y lo
  que entra en la memoria, con huellas que permiten detectar cualquier cambio.
- **Controles:** en cada fase se retira una pieza (ablación) y se compara con agentes
  triviales. Si un agente trivial pasa una prueba, esa prueba no cuenta.
- **Auditoría en un proceso nuevo,** que reconstruye todo desde cero. Solo su recibo da el
  verde.
- **Modelo de lenguaje apagado:** 0 llamadas en los bancos principales.
- **Los rojos se publican,** y las reformulaciones posteriores a un rojo se declaran.

## Lo que todavía no hemos visto: METAVERSE-1

Hasta ahora ECHO-4 vive en **mundos simulados pequeños y discretos**, con situaciones
diseñadas por nosotros. Su comportamiento está **medido con números**, pero todavía no lo
hemos **observado en libertad**. METAVERSE-1 lo llevará a un mundo 3D de vóxeles en tiempo
real, con otros agentes, drones y personas, para ver qué hace en situaciones que nadie
programó. Hasta entonces, lo que publicamos son experimentos controlados.

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
