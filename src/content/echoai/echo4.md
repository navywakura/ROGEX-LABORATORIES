# ECHO-4 — roadmap oficial

21 de septiembre de 2026 · Versión 1 · Desarrollo iniciado

**Objetivo:** desarrollar una representación funcional de sí mismo, del otro y de su historia compartida, y aprender cuándo una interacción mejora los resultados de ambos.

La hipótesis central es que la reciprocidad y la memoria de encuentros pueden contribuir a la adaptación de cada agente. Mediremos por separado el resultado individual, el conjunto y los costes de coordinarse. Habrá casos donde cooperar ayude y otros donde actuar por separado sea preferible.

Este documento fija el orden oficial del programa ampliado. Sustituye la secuencia preliminar del primer artículo de ECHO-4. Cada fase pendiente necesita todavía su contrato de sensores, memoria, aprendizaje, controles y umbrales antes del examen.

## Punto de partida

NEXUS-0 aporta WSP, CAM, Q, T y gate. ECHO-1 y ECHO-2 conservan sus cierres. ECHO-3 tiene 14/15 hitos completos en su alcance software; DRONE-3 ha cerrado SITL y mantiene HIL y jaula pendientes.

**E4-WORLD-1 está implementado.** El informe enumera 16.002 estados vivos, 48.006 transiciones y un núcleo de viabilidad de 15.954 estados. Documenta 45 pruebas nuevas y 48 de regresión seleccionadas. El agente inicial muere por calor tras 37 acciones; el mantenimiento aprendido sigue pendiente. Las 32 clases de observación viva presentan ambigüedad dinámica. [Evidencia y reproducción](/evidence/echo4/WORLD1-20260921.md).

El desarrollo continúa con **E4-SENSATION-1**. Publicar este roadmap no significa que sus módulos pendientes estén implementados.

## Orden técnico y criterios de avance

1. **E4-WORLD-1 · Implementado.** Cuerpo virtual, recursos, temperatura, acciones y terminalidad. El verificador demuestra que existen trayectorias sostenibles con observación completa. Su política testigo permanece fuera del agente.

2. **E4-SENSATION-1 · Siguiente fase; contrato e implementación pendientes.** Comparar la observación actual con historias de 2 y 4 pasos que incluyan acciones ejecutadas. Estimar tendencias, consecuencias e incertidumbre con memoria acotada y aritmética entera. Para avanzar, medir qué ambigüedades se resuelven, qué mejora predictiva generaliza y cuánto cuesta. Un error indica una consecuencia inesperada; su causa sigue abierta. La duración de la historia es una variable experimental.

3. **E4-BOUNDARY-1 · Pendiente.** Estimar influencia causal sobre variables y capacidades mediante intervenciones comparables, acciones vetadas, retardos y perturbaciones. Para avanzar, distinguir efectos propios de coincidencias y conservar una salida desconocida. Controlar una puerta no la convierte en cuerpo; predecir un reloj no significa controlarlo. La pertenencia corporal se investigará en SELF.

4. **E4-SELF-1 · Pendiente.** Integrar capacidades corporales, predicción y evidencia para distinguir cambio propio, externo, mixto o desconocido. Para avanzar, la atribución debe mejorar la recuperación conductual y preservar conocimiento del entorno que no haya sido refutado. El SELF-1 histórico aporta métodos; este dominio exige evidencia nueva.

5. **E4-CONTINUITY-1 · Pendiente.** Conservar estado causal, memoria útil, orden temporal y duración de acontecimientos. Para avanzar, comparar ejecución continua con pausa/reanudación en un proceso nuevo bajo idénticas entradas futuras; distinguir restauración, cambio de cuerpo y nuevo individuo, y rechazar estados incompatibles.

6. **E4-MAINTAIN-1 · Pendiente.** Incorporar daño funcional, reparación con coste y trabajo útil. Para avanzar, cumplir simultáneamente un horizonte de actividad y un mínimo de trabajo, con balance de recursos y sin rescates ocultos. La comparación sin modelo propio debe medir su contribución.

7. **E4-OTHER-1 · Pendiente.** Dos instancias con cuerpo, memoria y observaciones separados. Aprender expectativas sobre la contraparte a partir de conducta accesible. Para avanzar, predecir en situaciones nuevas y ajustar decisiones a diferencias de información, sin consultar la memoria privada del otro.

8. **E4-INTERACTION-1 · Pendiente.** Acciones y señales con consecuencias para ambos agentes. Para avanzar, aprender cuándo coordinarse resulta útil y demostrar que bloquear o sustituir las señales cambia las decisiones pertinentes. Comparar interacción recíproca con grabaciones y controles equiparados; registrar beneficio de cada agente, resultado conjunto y coste.

9. **E4-RELATION-1 · Pendiente.** Memoria de encuentros y expectativas específicas de una relación. Para avanzar, utilizar historia compartida en encuentros nuevos, revisar la fiabilidad por contexto y adaptarse a cambios de conducta. Retirar esa memoria debe permitir medir qué aporta frente al identificador o a una regla fija.

10. **E4-ROLES-1 · Pendiente.** Diferencias de información, recursos y capacidades, con tareas que permitan delegar y cambiar la coordinación. Para avanzar, los roles deben ajustarse a la competencia relevante cuando cambie la situación. La jerarquía humana inspira preguntas; no se presupone una explicación universal de ella ni se impone un rango permanente.

11. **E4-INTEGRATE-1 · Pendiente; cierre software de ECHO-4.** Reunir las capacidades en ejecuciones continuas y escenarios reservados para validación y confirmación. Para avanzar, satisfacer los criterios conjuntos y demostrar las contribuciones del modelo propio, del otro y de la historia compartida mediante ablaciones.

12. **Validación física · Después del software.** Trasladar las capacidades pertinentes a sensores y cuerpos reales. Retomar los contratos físicos de ECHO-3, HIL y jaula. Los resultados virtuales no conceden automáticamente aprobación física; los recursos y la energía deberán medirse en ese dominio.

13. **METAVERSE-1 · Última fase.** Representar agentes, relaciones y trayectorias en un entorno 3D observable e interactivo, después del programa software y de las validaciones físicas previstas. El renderer debe reflejar fielmente las decisiones registradas. Su contrato de visualización sigue siendo independiente del cierre cognitivo.

## Primer trabajo: contrato de SENSATION

El primer entregable será una auditoría temporal: observación actual frente a historias de 2 y 4 pasos sobre trayectorias declaradas. Contaremos los casos que siguen requiriendo decisiones incompatibles, los errores de predicción y las abstenciones, y compararemos con el predictor existente bajo el mismo acceso a datos.

Los valores exactos de reserva y temperatura existen para actualizar la fisiología; el contrato debe especificar qué recibe el predictor. Acceder a esos registros exactos sería una ampliación sensorial que habrá que declarar, no una mejora obtenida únicamente recordando observaciones.

Un resumen de cuatro estados —compatible, desviación pequeña, desviación grande, evidencia insuficiente— puede ayudar a inspeccionar resultados. Error e incertidumbre se conservarán por separado. Un predictor lineal entero es un candidato por evaluar; todavía no está elegido ni implementado.

## Arquitectura e invariantes

WSP mantiene **16 bytes y su layout congelado**: no dispone de 4–5 bytes libres para reasignar. La historia y las estimaciones tendrán un presupuesto fijo definido en su contrato, usando la arquitectura existente y sin un segundo bus cognitivo.

CAM conserva episodios en 4.096 ranuras sin destrucción; Q conserva la política y T el modelo de transiciones. Los modelos aprendidos son estimaciones: una predicción no se convierte en hecho por tener confianza alta. El camino rápido utiliza enteros, el córtex permanece apagado y no hay LLM en estos bancos.

Cada individuo tendrá su estado separado y observaciones autorizadas. El protocolo público de interacción debe desembocar en la representación existente; no concede acceso a etiquetas privadas, semillas, solución del evaluador o memoria ajena. Las paradas del operador conservan su autoridad.

## Qué significa cerrar en verde

Cada contrato fijará antes de validar dominio, datos reservados, presupuesto de aprendizaje y memoria, horizonte, errores aceptables, mejora mínima y tratamiento de incertidumbre. Aún no hay umbrales numéricos finales aprobados para las fases pendientes.

Se publicarán resultados negativos, controles convencionales competentes, ablaciones, trazas con procedencia y reproducción en procesos nuevos. Quitar memoria, modelo propio, modelo ajeno o reciprocidad debe permitir evaluar su contribución. Greedy no equivale a aprendizaje congelado.

El cierre software exige los criterios juntos, cero hechos falsos, cero ranuras destruidas, cero llamadas al córtex y ausencia de acceso al oráculo. Una media de éxitos no compensa romper un invariante.

Si todo pasa, podremos respaldar capacidades acotadas de autorrepresentación, perspectiva ajena, continuidad y cooperación aprendida. Para sostener que la interacción favorece la representación propia habrá que mostrar ese efecto específico frente a controles. La experiencia subjetiva y una explicación general de la conciencia seguirán siendo preguntas adicionales.

## Por qué merece la pena

Un resultado positivo permitiría preguntar cuánto de una conducta depende del cuerpo, cuánto de la memoria y cuánto de haber aprendido con otro. Esa posibilidad de intervenir y reproducir la historia es el valor del laboratorio. Un resultado negativo también puede localizar qué información o capacidad falta.

Hay precedentes de modelos de otros agentes: [Machine Theory of Mind](https://arxiv.org/abs/1802.07740). La evaluación de señales exige comprobar su efecto: [On the Pitfalls of Measuring Emergent Communication](https://arxiv.org/abs/1903.05168). Nuestra apuesta es investigar la integración bajo las restricciones de ECHO-AI; la novedad concreta deberá contrastarse con esos trabajos.

[Anuncio del inicio de desarrollo](/articulos/echo4-inicio-roadmap-oficial) · [Filosofía e inspiración](/articulos/echo4-ego-funcional) · [Roadmap ECHO-3](/docs/echoai/ruta) · [Markdown](/raw/es/echoai/echo4.md)
