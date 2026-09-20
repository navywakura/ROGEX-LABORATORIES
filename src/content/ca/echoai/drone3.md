# DRONE-3 — la missió sencera, en SITL

Estat: 20 de setembre de 2026. **Tram SITL verd. HIL i gàbia pendents de
maquinari, així que la fita continua oberta.**

DRONE-3 és la pregunta final d'ECHO-3: pot el sistema integrat executar de cap a
fi una missió d'estació de càrrega bloquejada, amb sensors públics, i deixar una
cadena causal reconstruïble, sense mapes ocults i sense saltar-se els failsafes
de l'autopilot?

La resposta mesurada és **sí en simulació**, amb el detall i els límits de sota.
No és sí en un dron real: al laboratori no hi ha controlador de vol, dron,
sensors ni gàbia.

## Què passa en un vol

Una sola sessió de PX4 v1.15.4 i Gazebo per vol. Res no es reinicia entre
capacitats: enlairament, percepció, decisió, desviament, arribada o avortament,
retorn, aterratge i desarmat passen seguits.

```text
observació assentada (LiDAR, 4 profunditats, RGB, estimador PX4, bateria)
  → percepció → evidència FUSION amb la calibració C1 transferida
  → POWER decideix continuar, tornar o aterrar → COMPOSE compon la ruta
  → WSP de 16 bytes + predicció publicada abans d'actuar
  → gate epistèmic → gate energètic → supervisor SAFE → passarel·la PX4
  → l'ACK no és arribada: tres mostres assentades
  → observació següent → atribució → replanificació
```

L'agent corre engabiat, sense xarxa, sense repositori i sense món. Rep
observacions públiques i retorna un WSP; res més no creua cap a l'execució. PX4
conserva PID, estimador, modes i failsafes.

## Resultat

Dotze vols de validació i dotze de confirmació, en sales i llavors fresques, amb
geometries mai volades abans en aquest banc.

| Mesura | Validació | Confirmació |
|---|---|---|
| Vols correctes | 12/12 | 12/12 |
| Missions factibles assolides | 6/6 | 6/6 |
| Avortaments correctes per reserva | 3/3 | 3/3 |
| Fallades contingudes | 3/3 | 3/3 |
| Col·lisions | 0 | 0 |
| Marge mínim a l'obstacle | 1.247 mm | 1.259 mm |
| Arribada real p50/p99 | 200 / 357 mm | 186 / 360 mm |
| Veto després de la fallada | 207–1.009 ms | 167–1.017 ms |
| Desarmat després del veto | 21,1–23,1 s | 19,9–30,7 s |
| Sondes de rebuig bloquejades | 228/228 | 228/228 |
| Restriccions dures | totes 0 | totes 0 |

Quatre condicions per sala: missió accessible, reserva insuficient, contradicció
de transitabilitat i fallada integrada. La contradicció la dispara l'evidència,
no un rellotge: l'obertura es tanca a la primera observació en què l'agent l'ha
vista oberta des del costat de casa, i la decisió presa sobre aquell món es
descarta sense executar-se.

## Controls

Cap control no es vola. Tots es calculen sobre les observacions, la bateria i la
salut ja enregistrades:

- un enllaç que prengués l'ACK per arribada hauria cantat arribada en 147 de 147
  transaccions de validació amb el cos encara a uns 3 m de l'objectiu;
- un planificador sense evidència hauria enviat 51 ordres cap a cel·les
  realment ocupades; el gate epistèmic les bloqueja totes;
- el percentatge fix de bateria difereix del cost previst en 13 decisions;
- SAFE sense comprovació de vida de l'agent no vetaria la penjada, i sense
  enclavament admetria les dues sondes de recuperació posteriors al veto;
- al bessó funcional de les mateixes sales, la Q reactiva no assoleix cap meta.

Onze mutants de codi detectats i vuit manipulacions de traça rebutjades per la
mateixa auditoria, inclosa una proposta substituïda amb objectiu i predicció
coherents.

## Com es comprova

- Contracte escrit abans d'obrir la validació, amb criteris, llavors i mutants
  fixats.
- Lock per hash del codi, la taula d'energia, el model de COMPOSE i la
  procedència de la calibració C1.
- Una auditoria que reconstrueix l'agent, el supervisor, les portes, la
  passarel·la, la lease i les sondes des de les traces, i les contrasta amb el
  ULog de PX4 i amb la pose privada del simulador.
- Una segona auditoria en un procés nou: reprodueix el mateix certificat.

Certificat `c44402df…`, lock `094bc35f…`.

## Què no demostra

- No hi ha maquinari: `drone3_hil_green`, `drone3_cage_green` i `drone3_green`
  són `false`. ECHO-3 continua a 14/15.
- L'energia és càrrega simulada que baixa amb el temps armat: el PX4 fixat no
  publica corrent. No són joules mesurats.
- Món estàtic tret de la intervenció declarada, sensors sense soroll real,
  cel·les de 3 m i altura fixa.
- La coordenada de l'estació s'entrega com a hipòtesi exacta; no es prova
  buscar-la amb una hipòtesi equivocada.
- HOST-1 no hi participa; DYNAMIC-1 i PATTERN-1R no es declaren integrats.
- Tres vols per condició i etapa: els intervals descriuen aquest banc, no
  fiabilitat de producció.

[Informe complet](/evidence/echo3/DRONE3-RESULTS.md) ·
[Contracte prospectiu](/evidence/echo3/DRONE3-DESIGN.md) ·
[Traspàs a maquinari](/evidence/echo3/DRONE3-HARDWARE-HANDOFF.md) ·
[Full de ruta](/ca/docs/echoai/ruta) · [Maquinari previst](/ca/docs/echoai/hardware)
