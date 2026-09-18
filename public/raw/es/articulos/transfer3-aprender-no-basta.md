# TRANSFER-3: aprender no basta

18 de septiembre de 2026 · RxLabs® · Estado: rojo, sin candidato

**TRANSFER-3 debe demostrar que aprender en un entorno ayuda a resolver otros, sin transportar el mapa ni la solución, frente al mismo agente sin esa experiencia.**

Esa pregunta exige algo más que guardar una tabla. El parámetro aprendido tiene que cambiar la conducta y mejorar el resultado bajo los mismos sensores, presupuesto y restricciones. Hasta ahora no hemos demostrado esa ventaja en el contrato de ECHO-3. La investigación es software: no tenemos dron, sensores físicos ni placa Akida en el laboratorio.

## De transferir Q a calibrar el cuerpo

Los primeros ensayos transfirieron valores de acciones. Encontramos problemas de doble ingesta, cobertura y representación; también un planificador que dejaba entrar a Q sólo como desempate tardío. Corregir esos problemas no produjo una ventaja robusta. Una tabla distinta puede contener aprendizaje sin influir bastante en la misión.

Cambiamos de pregunta: ¿puede el agente aprender una propiedad reutilizable de su cuerpo? El Plan A calibró el coste de moverse y girar. Sus confirmaciones fallaron; en una comparación de 256 salas, un prior programado produjo la misma conducta que el valor aprendido. La precisión del número no bastaba para mejorar la decisión.

El Plan B probó la ganancia de actuación: cuántas celdas avanza una ráfaga por cada orden. Un filtro inicial confundió la rotación de las salas con el efecto del parámetro. Al alinear la geometría apareció una mejora aparente. También probamos si conservar planes de varios pasos la explicaba: el compromiso fue conductualmente inerte. Retiramos aquella explicación arquitectónica.

## La escuela funciona; el examen decide

B2 aprende la ganancia exacta a partir de odometría y observaciones antes y después de **ocho movimientos por condición**. No recibe el número verdadero del simulador. Transfiere cuatro ganancias y sus conteos a un consumidor aislado, sin mapa, coordenadas ni episodios escolares. El modelo queda congelado durante el examen.

El primer piloto reprodujo las llegadas del filtro: con ganancia 2, 21/24 frente a 17/24 nominal; con ganancia 3, 20/24 frente a 19/24. El juez independiente encontró **38 y 48 violaciones de reserva** en esos brazos aprendidos. El cálculo de regreso descontaba la ganancia máxima aunque sólo una dirección estaba acelerada. Aquella mejora incumplía el contrato.

Reparar la reserva dejó cero infracciones observadas y 51/72 llegadas aprendidas frente a 52/72 nominales. La última variante, B3, incorporó el frenado ante paredes ya observadas: conocer la ganancia en espacio libre no describe por sí solo una ráfaga cerca de un obstáculo.

| Último piloto B3 | Aprendido | Nominal |
|---|---:|---:|
| Llegadas | 51/72 | 52/72 |
| Energía simulada de examen | 7004 | 6936 |
| Escuela + examen | 7100 | 6936 |
| Violaciones de seguridad observadas | 0 | 0 |

Entre éxitos conjuntos, el aprendido consumió 120 unidades más. Recuperó cuatro llegadas y perdió cinco que el nominal conseguía. Superó los dos priors fijos agregados, pero no el control principal.

Son **24 formas públicas con tres condiciones cada una**, no 72 muestras independientes ni un examen prospectivo. Los reinicios del gimnasio no tienen coste modelado; esa contabilidad no representa una calibración física.

## Qué queda abierto

Las tres auditorías B2/B3 reproducen sus hashes en procesos nuevos y pasan los 261 tests de TRANSFER-3. Eso respalda la implementación y sus números; el criterio de utilidad sigue fallando. La suite global conserva una limitación de memoria en otro banco y no se declara verificada.

El cribado rojo detuvo la confirmación de 256 formas frescas. **No se generó ni abrió B/C real de TRANSFER-3.** Primero hace falta un candidato prospectivo; después, una campaña con compromisos previos, congelación y custodia externa.

La rama de ganancia queda acotada y roja. Retardo u otras primitivas del Plan B no se han evaluado. El Plan C, calibración perceptiva reutilizable, sigue sin empezar. La próxima hipótesis tendrá que explicar por qué el dato aprendido cambia una decisión útil y cómo separarlo de una mejora genérica del controlador.

Publicar el rojo evita convertir aprendizaje exacto en una afirmación de transferencia que los controles no sostienen.

[Documentación de TRANSFER-3](/docs/echoai/transfer) · [Estado de las trece fases](/articulos/echo3-trece-fases-verdes) · [Informe B2](/evidence/echo3/TRANSFER3-PLAN-B2-RESULTS.md) · [Informe B3](/evidence/echo3/TRANSFER3-PLAN-B3-RESULTS.md) · [Datos y hashes de origen](/data/echo3-status.json)
