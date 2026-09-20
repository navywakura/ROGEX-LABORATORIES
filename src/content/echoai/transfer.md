# TRANSFER-3 — contrato y estado

Actualizado: 20 de septiembre de 2026. **Verde en su alcance software, con campaña sellada y custodia humana.**

Demostrar que lo aprendido en A mejora la conducta en otros entornos frente al mismo agente sin esa experiencia, sin mapa ni solución transportada. El presupuesto, sensores, actuadores y restricciones se emparejan entre brazos. El examen congela aprendizaje, pero mantiene percepción y seguimiento.

## Qué se transfiere

El **desplazamiento de montaje de la cámara**: dos enteros aprendidos en A observando dónde coinciden y dónde no coinciden cámara y LiDAR. No viaja mapa, ni episodios, ni Q. En el examen, el agente re-registra la cámara antes de fusionar; la fusión sigue exigiendo dos familias independientes para admitir una celda, así que la calibración no debilita VERIFY.

## Resultado de la campaña sellada

| Partición | Aprendido | Sin calibrar | Bloques | Pérdidas atribuibles |
|---|---:|---:|---:|---:|
| B | 342/576 | 44/576 | 38/0 | 0 |
| C | 432/576 | 65/576 | 48/1 | 0 |

El brazo aprendido iguala misión a misión al agente con la calibración perfecta. Certificado `8c77aead…` con `transfer3_green=true`; los dos exámenes se auditaron en procesos nuevos con hash idéntico.

## Cómo se evitó el autoengaño

1. Cribado público con controles, incluidos priors programados: un prior fijo igualaba a la conducta aprendida en los planes anteriores, y por eso se descartaron.
2. Confirmación prospectiva con tamaño, criterios y reglas congelados antes de mirar salas nuevas.
3. Campaña final con compromisos publicados antes de entrenar, custodia fuera del alcance de los agentes, apertura única de B y C sólo tras un B verde.

El primer intento real se consumió sin evaluar ninguna sala por un fallo de infraestructura; queda registrado y el reintento usó un protocolo independiente que excluía las salas ya reveladas. Los planes A y B quedaron en rojo y se conservan.

## Límites

Simulación estática de dos paredes, sensores sin ruido y un desplazamiento de una celda equivale a tres metros. No acredita hardware, HIL ni vuelo real. La calibración transferida se usa después en [DRONE-3](/docs/echoai/drone3), donde para ese cuerpo vale la identidad: que el canal está vivo se demuestra por control, no por un desplazamiento distinto de cero.

[Artículo y razonamiento](/articulos/transfer3-aprender-no-basta) · [Informe C1](/evidence/echo3/TRANSFER3-PLAN-C1-RESULTS.md) · [Informe B2](/evidence/echo3/TRANSFER3-PLAN-B2-RESULTS.md) · [Informe B3](/evidence/echo3/TRANSFER3-PLAN-B3-RESULTS.md) · [Datos y hashes](/data/echo3-status.json)
