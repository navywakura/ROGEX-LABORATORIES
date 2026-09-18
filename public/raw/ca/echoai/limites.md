# echoAI — límits

La política del laboratori és separar resultats, plans i hipòtesis.


## ECHO-3 · 18/09/2026

Verd significa que una versió respon la pregunta del seu banc, amb controls i un auditor capaç de rebutjar-la. Les versions vermelles anteriors es conserven. Els B/C de cada component són particions pròpies: no tanquen l'examen segellat de TRANSFER-3. Proves funcionals, replay i vols SITL tenen denominadors diferents i es publiquen per separat.

**TRANSFER-3** ha de demostrar una millora útil de l'après a A en entorns nous davant del mateix agent sense aquella experiència, sense transportar mapa ni solució. Continua vermell i sense candidat. L'escola de guany aprèn exactament, però l'últim pilot segur B3 arriba 51/72 davant 52/72 nominal i costa més, escola inclosa. No va passar a confirmació prospectiva ni va obrir B/C real.

**DRONE-3** ha d'integrar la missió completa amb traçabilitat causal en SITL, HIL i gàbia. Els certificats d'enllaç, energia o seguretat no substitueixen aquest tancament conjunt. Bateria instrumentada, latència sota càrrega i fallades combinades s'hauran de comprovar en integrar-ho. No hi ha maquinari robòtic ni Akida al laboratori; HIL i gàbia necessiten aquella plataforma.

[Full de ruta](/ca/docs/echoai/ruta) · [Recerca TRANSFER-3](/ca/docs/echoai/transfer)


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

No hi ha cap AKD1500 M.2 al laboratori. Les xifres de consum o aprenentatge del
fabricant no són resultats de RxLabs. Si arriba una placa, es publicaran la
compatibilitat, el model exacte, la toolchain, la potència mesurada i la
comparació amb CPU/Jetson abans de parlar d'avantatge.

## Estat de les paraules

- **Fet:** existeixen un informe reproduïble i una porta verda.
- **Vermell mesurat:** l'experiment s'executa i no arriba al KPI.
- **Pla:** ordre proposat; encara no és una capacitat.
- **Absent:** no existeix al laboratori.

— R.N.
