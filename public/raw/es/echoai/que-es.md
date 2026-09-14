# echoAI

echoAI es un agente situado de dos relojes. El rápido representa, recuerda, anticipa, decide y aprende con estructuras discretas. El lento puede proponer cuando ATTEND encuentra una razón; no controla directamente el cuerpo.

```text
percibir → WSP → CAM → T / Pattern / Q → gate → acción → consecuencia → aprendizaje
```

No es un chatbot conectado a motores. WSP es el único paquete compartido; CAM, Q y T responden preguntas distintas; una hipótesis no se convierte en hecho sin evidencia; y el gate sigue teniendo la última palabra.

## Estado publicado

ECHO-1 cerró el ciclo base: memoria episódica, consecuencias, predicción, patrones, transferencia y narración póstuma. ECHO-2 cerró supervivencia, cambio de distribución, streaming, consolidación, herencia acotada, energía, temperatura y un monitor de 512 LIF + 128 Adaptive-LIF.

ECHO-3 lleva 8 de 15 fases software cerradas. Ya funciona con tres salas A/B/C, un cuerpo X500 en PX4 SITL, señales de cámara/LiDAR/IMU con procedencia, identidad fuera de muestra, dinámica corta, fusión de evidencias y composición de alternativas para una meta bloqueada.

La demostración no depende de que una frase suene bien. Cada fase conserva entradas, semillas, controles, informe y un auditor que vuelve a calcular el resultado. La página de [resultados](./resultados) mantiene los cierres de ECHO-1/ECHO-2 y añade el estado actual de ECHO-3.

## Qué está haciendo ECHO-3

Una observación puede decir “hay una estación allí”, pero esa observación no dice que haya un camino. ECHO-3 conserva la fuente, la edad y la certeza; busca un acceso posible, calcula un siguiente paso bajo presupuesto y lo contrasta contra la consecuencia. Cuando dos sensores discrepan, conserva el desacuerdo en lugar de fabricar una respuesta única.

El próximo experimento es CAUSE-1: escenas emparejadas para medir si una transición se debe a su propia acción o a un cambio externo. La hoja de ruta completa está en [ECHO-3](./ruta).
