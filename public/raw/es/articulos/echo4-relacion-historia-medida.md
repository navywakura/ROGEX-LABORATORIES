# ECHO-4 · RELATION-A: una historia que se puede reconstruir

22 de septiembre de 2026 · Nota de laboratorio

RELATION-A ya está implementada y validada como primer incremento de **E4-RELATION-1**. Es un paso de infraestructura deliberadamente modesto: el agente puede guardar episodios de encuentros en su memoria existente y reconstruir la secuencia después. Todavía no hemos demostrado que esa historia ayude a decidir mejor.

## Una historia compartida, dos memorias privadas

La inspiración es sencilla: dos agentes interactúan y, con el tiempo, esa secuencia podría cambiar lo que cada uno espera del otro. En la implementación, «compartida» solo significa que ambos participaron en el encuentro. Cada observador conserva su propio registro; no hay memoria global común ni acceso a la Q, recursos o incentivos privados de la contraparte.

Cada episodio registra contexto, acciones realmente observadas, tick, coste propio y producción propia. Los enlaces permiten recorrer encuentros en orden global o por identidad conocida. Si falta la identidad o un recibo, la historia conserva esa incertidumbre: no inventa una pareja ni una acción. Una intención o un intento tampoco se convierte automáticamente en éxito.

El contrato mantiene WSP de 16 bytes, deja E[6] en cero y guarda recibos en campos host existentes de CAM. No crea otro bus o política, no cambia Agent.turn, T, Q ni el gate y no llama a un LLM. Los resúmenes se derivan al consultarlos; no añaden hechos ni una puntuación de «confianza».

## Qué dicen las pruebas

El banco usó tres semillas de desarrollo —113, 127 y 139— con 144 rondas por semilla: 96 de formación y 48 greedy. Se reconstruyeron **912 episodios primarios**. El banco ejecutó 7.440 turnos nativos contando controles, inversión del orden y observación parcial.

La comprobación clave también es un resultado negativo: con y sin registro, acciones, costes, predicciones y resultados fueron idénticos. Invertir el orden reprodujo trazas y digests de historia. Así sabemos que A guarda y reconstruye los encuentros sin alterar la política. No sabemos todavía si una biografía relacional aporta capacidad nueva.

Pasaron **36 pruebas nuevas** y **181 pruebas distintas** con regresiones seleccionadas. Cubren límites de capacidad y ticks, perspectivas diferentes, encuentros sin identidad, corrupción, recibos y fallos parciales. Si guardar falla después de ejecutar una acción, se conservan los costes y se detiene la sesión; el software no finge haber deshecho la física.

## La prueba que falta

RELATION-B pondrá la historia a trabajar: decisiones en una tarea nueva, con el mismo presupuesto y oportunidades para cada condición. Compararemos historia completa contra controles sin historia, solo el modelo OTHER, identidad agrupada y orden eliminado. También mediremos el coste de aprender esa historia: una ventaja que cuesta más de lo que devuelve no sería una mejora práctica.

Después quedan C (ruptura, reencuentro e historia contradictoria o incompleta) y D (un examen nuevo, fijado antes de ejecutarlo y reconstruido por auditoría independiente). Hasta cerrar esas pruebas, **RELATION-1 sigue abierto**. A no demuestra confianza sentida, conciencia subjetiva ni autorreparación. Es un registro auditable sobre el que ahora podemos plantear un experimento causal.

[Contrato y documentación RELATION-A](/docs/echoai/relation) · [Roadmap ECHO-4](/docs/echoai/echo4).
