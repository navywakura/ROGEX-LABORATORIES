# TRANSFER-3 — contracte i estat

Actualitzat: 20 de setembre de 2026. **Verd dins del seu abast de programari, amb campanya segellada i custòdia humana.**

Demostrar que allò après a A millora la conducta en altres entorns davant del mateix agent sense aquella experiència, sense transportar mapa ni solució. Pressupost, sensors, actuadors i restriccions s'emparellen entre braços. L'examen congela l'aprenentatge, però manté percepció i seguiment.

## Què es transfereix

El **desplaçament de muntatge de la càmera**: dos enters apresos a A observant on coincideixen i on no coincideixen càmera i LiDAR. No hi viatja mapa, ni episodis, ni Q. A l'examen l'agent torna a registrar la càmera abans de fusionar; la fusió continua exigint dues famílies independents per admetre una cel·la, de manera que la calibració no afebleix VERIFY.

## Resultat de la campanya segellada

| Partició | Après | Sense calibrar | Blocs | Pèrdues atribuïbles |
|---|---:|---:|---:|---:|
| B | 342/576 | 44/576 | 38/0 | 0 |
| C | 432/576 | 65/576 | 48/1 | 0 |

El braç après iguala missió a missió l'agent amb calibració perfecta. Certificat `8c77aead…` amb `transfer3_green=true`; els dos exàmens es van auditar en processos nous amb hash idèntic.

## Com es va evitar l'autoengany

1. Cribratge públic amb controls, inclosos priors programats: un prior fix igualava la conducta apresa als plans anteriors, i per això es van descartar.
2. Confirmació prospectiva amb mida, criteris i regles congelats abans de mirar sales noves.
3. Campanya final amb compromisos publicats abans d'entrenar, custòdia fora de l'abast dels agents, obertura única de B i C només després d'un B verd.

El primer intent real es va consumir sense avaluar cap sala per una fallada d'infraestructura; queda registrat, i el segon intent va fer servir un protocol independent que excloïa les sales ja revelades. Els plans A i B van quedar vermells i es conserven.

## Límits

Simulació estàtica de dues parets, sensors sense soroll, i un desplaçament d'una cel·la equival a tres metres. No acredita maquinari, HIL ni vol real. La calibració transferida es fa servir després a [DRONE-3](/ca/docs/echoai/drone3), on per a aquell cos val la identitat: que el canal és viu es demostra per control, no per un desplaçament diferent de zero.

[Article i raonament](/ca/articulos/transfer3-aprender-no-basta) · [Informe C1](/evidence/echo3/TRANSFER3-PLAN-C1-RESULTS.md) · [Informe B2](/evidence/echo3/TRANSFER3-PLAN-B2-RESULTS.md) · [Informe B3](/evidence/echo3/TRANSFER3-PLAN-B3-RESULTS.md) · [Dades i hashes](/data/echo3-status.json)
