# echoAI

echoAI es un agente situado de dos relojes. El rápido representa, recuerda, anticipa, decide y aprende con estructuras discretas. El lento puede proponer cuando ATTEND encuentra una razón; no controla directamente el cuerpo.

```text
percibir → WSP → CAM → T / Pattern / Q → gate → acción → consecuencia → aprendizaje
```

No es un chatbot conectado a motores. WSP es el único paquete compartido; CAM, Q y T responden preguntas distintas; una hipótesis no se convierte en hecho sin evidencia; y el gate sigue teniendo la última palabra.

## Estado publicado

ECHO-1 cerró el ciclo base: memoria episódica, consecuencias, predicción, patrones, transferencia y narración póstuma. ECHO-2 cerró supervivencia, cambio de distribución, streaming, consolidación, herencia acotada, energía, temperatura y un monitor de 512 LIF + 128 Adaptive-LIF.

ECHO-3 tiene 14 de 15 certificados verdes en bancos software acotados y DRONE-3 ha cerrado su tramo SITL. A evidencia, identidad, dinámica, fusión y composición se añaden causa, enlace PX4, energía, contención y autoridad de fuentes. Las pruebas combinan simulación funcional, replay y vuelos PX4 SITL; no hay hardware robótico en el laboratorio.

La demostración no depende de que una frase suene bien. Cada fase conserva entradas, semillas, controles, informe y un auditor que vuelve a calcular el resultado. La página de [resultados](./resultados) mantiene los cierres de ECHO-1/ECHO-2 y añade el estado actual de ECHO-3.

## Qué está haciendo ECHO-3

Una observación puede decir “hay una estación allí”, pero esa observación no dice que haya un camino. ECHO-3 conserva la fuente, la edad y la certeza; busca un acceso posible, calcula un siguiente paso bajo presupuesto y lo contrasta contra la consecuencia. Cuando dos sensores discrepan, conserva el desacuerdo en lugar de fabricar una respuesta única.

[TRANSFER-3](./transfer) cerró en verde con campaña sellada y custodia humana, y [DRONE-3](./drone3) cerró la misión integrada en SITL. Lo que queda es físico: hardware-in-the-loop y jaula. La hoja de ruta está en [ECHO-3](./ruta) y el material previsto, con costes, en [hardware](./hardware).
