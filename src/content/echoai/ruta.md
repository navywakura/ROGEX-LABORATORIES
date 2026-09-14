# ECHO-3 — hoja de ruta

ECHO-1 y ECHO-2 están cerrados. ECHO-3 ya ha cruzado la mitad: **8 de 15 fases de software** tienen banco, controles, informe y certificado reproducible.

La tesis es concreta: una capa local de decisión para un robot que conserva evidencia con fuente y edad, recompone el siguiente paso cuando un supuesto falla y deja una traza auditable.

```text
sensor → WSP → CAM/evidencia → T/PATTERN → búsqueda/Q → gate → PX4 → consecuencia
```

WSP sigue siendo el único bus. CAM registra hechos; T y Pattern anticipan; Q ordena alternativas; el gate acepta, modifica o bloquea. PX4 estabiliza, ejecuta el setpoint y mantiene sus failsafes. Ningún LLM escribe hechos, memorias, setpoints aceptados ni motores.

## Cerrado

- [x] **SIM-3** — A, B y C nacen de manifiestos declarativos. El agente no recibe mapa, semilla, id de sala ni solución.
- [x] **FLIGHT-1S v6** — el X500 en SITL despega, mantiene y recupera estabilidad ante una perturbación medida.
- [x] **SENSOR-1S v3** — cámara, LiDAR e IMU publican tiempo, ruido, latencia, pérdida y procedencia.
- [x] **GROUND-1 v2** — el adaptador lleva esas observaciones al WSP y a la memoria sin coordenadas oracle ni segundo bus.
- [x] **DYNAMIC-1 v2** — separa cambio externo de escena estable y mantiene predicciones cortas.
- [x] **PATTERN-1R v4** — conserva identidad de objeto entre vistas fuera de muestra.
- [x] **FUSION-1** — mantiene evidencias independientes cuando discrepan; baja certeza y no completa el hecho.
- [x] **COMPOSE-1 v4** — compone accesos conocidos para una meta bloqueada y verifica cada paso antes de continuar.

COMPOSE-1 cerró 6.144 misiones funcionales B/C. En la rama física hay seis metas alcanzables: composición las cerró 6/6 y el control de una sola acción 0/6; el banco también incluye 32 vuelos PX4 SITL. El planificador convencional igualó la distancia física de ese escenario, por lo que se conserva como control en lugar de presentar una ventaja que no existe.

## Siguiente bloque

- [ ] **CAUSE-1** — emparejar escenas para separar “cambió por mi acto” de “cambió fuera de mí”.
- [ ] **PX4-1** — entregar objetivos acotados a PX4 sin tocar PID, control de actitud ni failsafes.
- [ ] **POWER-1** — elegir retorno o abandono por coste previsto, reserva e incertidumbre.
- [ ] **SAFE-1** — sostener sensor congelado, desconexión y propuesta errónea sin aceptar un paso inadmisible.
- [ ] **HOST-1** — aprender el valor de un signo por consecuencias observadas de fuente, contexto y señal.
- [ ] **TRANSFER-3** — congelar lo aprendido en A y medir la mejora en B/C frente a scratch, sin mapa ni nombre del mundo.
- [ ] **DRONE-3** — cerrar la misma misión mediante SITL, HIL y jaula con trazabilidad causal.

## La meta detrás de una barrera

La prueba central de COMPOSE-1 no es una regla “gira a la izquierda”. Una estación de carga puede verse o recordarse, pero la ruta recta queda bloqueada. El agente conserva ubicación, fuente y antigüedad; busca un lateral o una abertura, predice el coste del siguiente paso, lo pasa por el gate y comprueba la consecuencia antes de planificar otra vez.

Si se agota el presupuesto, `acceso_no_encontrado` es un resultado válido: pide ayuda o vuelve. Una trayectoria imaginada nunca entra en CAM como un hecho observado.

## Después del cierre

El cierre de ECHO-3 dejará preparada la base para **METAVERSE-1**: tres mapas 3D de mayor riqueza, geometría de Blender, rutas nuevas, obstáculos fijos y móviles, más vóxeles y rumbos, IMU, motores, PID/PX4, aerodinámica, viento y órdenes del usuario como aterrizar o ir a una coordenada. El mismo contrato permitirá distinguir una demo visual de una conducta que ha pasado un banco.

AKD1500 M.2 entrará cuando la tarjeta exista en el laboratorio. Será un coprocesador de percepción con comparación CPU/placa sobre la misma tarea. WSP, CAM, VERIFY, T, Q y gate se mantienen en CPU.
