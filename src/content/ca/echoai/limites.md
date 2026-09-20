# echoAI — límits

La política del laboratori és separar resultats, plans i hipòtesis.


## ECHO-3 · 20/09/2026

Verd significa que una versió respon la pregunta del seu banc, amb controls i un auditor capaç de rebutjar-la. Les versions vermelles anteriors es conserven. Els B/C de cada component són particions pròpies: no tanquen l'examen segellat de TRANSFER-3. Proves funcionals, replay i vols SITL tenen denominadors diferents i es publiquen per separat.

**TRANSFER-3** va tancar en verd amb campanya segellada: l'après a A millora B i C davant del mateix agent sense aquella experiència. És simulació estàtica de dues parets; no acredita maquinari ni vol real.

**DRONE-3** ha tancat el seu tram SITL: la missió completa en una sola sessió PX4/Gazebo, 12/12 en validació i 12/12 en confirmació. La fita exigeix a més hardware-in-the-loop i gàbia, i això continua pendent: `drone3_green` és `false` i ECHO-3 es queda a 14/15. La bateria instrumentada, les latències sobre maquinari real i les fallades combinades en vol físic no estan mesurades.

El domini certificat fa servir cel·les de tres metres i sales de 21 × 15 m. Una gàbia domèstica no admet aquesta escala: abans de volar en gàbia cal declarar una versió a escala i validar-la en simulació.

[Full de ruta](/ca/docs/echoai/ruta) · [DRONE-3](/ca/docs/echoai/drone3) · [TRANSFER-3](/ca/docs/echoai/transfer)


## El que ECHO-2 no demostra

- No és intel·ligència general ni una persona artificial.
- Reconeix famílies simbòliques reservades, no objectes en imatges reals.
- No fa SLAM, control de vol ni navegació certificada.
- Encara no opera amb soroll, vent, latència física o sensors incomplets.
- La supervivència demostrada ocorre en mons discrets, no en un dron físic.
- No conté cap AKD1500 M.2 ni cap altre NPU físic.
- No converteix el rendiment d'un món sintètic en una afirmació de seguretat
  robòtica.

## Deute visible

WALK-1 sense resta entera no propaga valor fins a l'objectiu i continua com a
`expectedFailure`. La variant opt-in CREDIT-1 sí que camina, però no es va
canviar l'algoritme per defecte.

El Qwen local va encertar els exemples canònics de SIGN-C i va superar l'stub
en paràfrasis, però va triar `approach` en dues amenaces no canòniques i va
rebre `-16`. Això demostra per què la seva sortida és una proposta i no una
ordre segura.

SLEEP-2 consolida 8.208 files en 144 regles sense reescriure CAM/T/Q, però els
mons continuen sent petits. La GUI 3D representa Body3D; encara no simula
aerodinàmica, IMU, motors, vent ni PID.

## Condicions per a la robòtica

Abans de volar, ECHO-3 haurà de demostrar:

- deadlines i latència P99 sota càrrega;
- sincronització i caducitat dels sensors;
- watchdog, retorn i aterratge davant la pèrdua del companion computer;
- veto independent davant d'observacions contradictòries;
- límits de bateria, massa, temperatura i vibració;
- registre reproduïble de cada decisió;
- simulació, HIL i gàbia abans de camp obert;
- compliment de la normativa aplicable i operació humana d'emergència.

Un model neuronal, un LLM o un NPU no serà l'única barrera contra una col·lisió.
L'autopilot i els mecanismes de seguretat continuen separats.

## Akida

No hi ha cap AKD1500 M.2 al laboratori. La placa M.2 està prevista per a
l'octubre de 2026 i figura a la llista de compra de
[maquinari previst](/ca/docs/echoai/hardware); mentre no sigui a la taula,
continua sent una absència. Les xifres de consum o aprenentatge del fabricant no
són resultats de RxLabs. Quan arribi una placa, es publicaran la compatibilitat,
el model exacte, la toolchain, la potència mesurada i la comparació amb
CPU/Jetson abans de parlar d'avantatge.

## Estat de les paraules

- **Fet:** existeixen un informe reproduïble i una porta verda.
- **Vermell mesurat:** l'experiment s'executa i no arriba al KPI.
- **Pla:** ordre proposat; encara no és una capacitat.
- **Absent:** no existeix al laboratori.

— R.N.
