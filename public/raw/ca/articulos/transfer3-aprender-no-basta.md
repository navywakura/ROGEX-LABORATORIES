# TRANSFER-3: aprendre no és suficient

18 de setembre de 2026 · RxLabs® · Estat: vermell, sense candidat

**TRANSFER-3 ha de demostrar que aprendre en un entorn ajuda a resoldre'n d'altres, sense transportar el mapa ni la solució, davant del mateix agent sense aquesta experiència.**

Desar una taula és només una part de la pregunta. El paràmetre après ha de canviar la conducta i millorar el resultat amb els mateixos sensors, pressupost i restriccions. Encara no hem demostrat aquest avantatge dins del contracte d'ECHO-3. La recerca és programari: no tenim dron, sensors físics ni placa Akida al laboratori.

## De transferir Q a calibrar el cos

Els primers assajos transferien valors d'accions. Vam trobar problemes de doble ingesta, cobertura i representació, i un planificador que feia servir Q només com a desempat tardà. Les correccions no van produir un avantatge robust. Una taula pot canviar sense influir prou en la missió.

Vam passar a propietats reutilitzables del cos. El Pla A calibrava el cost de moure's i girar. Les confirmacions van fallar; en 256 sales, un prior programat va produir la mateixa conducta que el valor après. La precisió numèrica no millorava la decisió.

El Pla B va provar el guany d'actuació: quantes cel·les avança una ràfega per ordre. Un filtre inicial confonia la rotació de les sales amb l'efecte del paràmetre. En alinear la geometria va aparèixer una millora aparent. També vam provar si mantenir plans de diversos passos l'explicava: el compromís era conductualment inert. Vam retirar aquella explicació arquitectònica.

## L'escola funciona; l'examen decideix

B2 aprèn el guany exacte amb odometria i observacions abans i després de **vuit moviments per condició**. No rep el paràmetre privat del simulador. Transfereix quatre guanys i els recomptes a un consumidor aïllat, sense mapa, coordenades ni episodis escolars. El model queda congelat durant l'examen.

El primer pilot reproduïa les arribades del filtre: amb guany 2, 21/24 davant 17/24 nominal; amb guany 3, 20/24 davant 19/24. El jutge independent va trobar **38 i 48 violacions de reserva** als braços apresos. El càlcul de retorn descomptava el guany màxim encara que només una direcció estava accelerada. Aquella millora incomplia el contracte.

Reparar la reserva va deixar zero infraccions observades i 51/72 arribades apreses davant 52/72 nominals. L'última variant, B3, incorporava el frenat davant parets ja observades: el guany en espai lliure no descriu tota una ràfega prop d'un obstacle.

| Últim pilot B3 | Après | Nominal |
|---|---:|---:|
| Arribades | 51/72 | 52/72 |
| Energia simulada d'examen | 7004 | 6936 |
| Escola + examen | 7100 | 6936 |
| Violacions de seguretat observades | 0 | 0 |

Entre èxits conjunts, l'après consumia 120 unitats més. Recuperava quatre arribades i en perdia cinc que el nominal aconseguia. Superava els dos priors fixos en arribades agregades, però no el control principal.

Són **24 formes públiques amb tres condicions cadascuna**, no 72 mostres independents ni un examen prospectiu. Els reinicis del gimnàs no tenen cost modelat; no és un pressupost de calibració física.

## Què continua obert

Les tres auditories B2/B3 reprodueixen els hashes en processos nous i passen els 261 tests de TRANSFER-3. Això sosté la implementació i les xifres; el criteri d'utilitat continua fallant. La suite global conserva una limitació de memòria en un altre banc i no es declara verificada.

El cribratge vermell va aturar la confirmació de 256 formes noves. **No s'ha generat ni obert B/C real de TRANSFER-3.** Primer cal un candidat prospectiu; després, una campanya amb compromisos previs, congelació i custòdia externa.

La branca acotada de guany és vermella. Retard i altres primitives del Pla B continuen sense provar. El Pla C, calibració perceptiva reutilitzable, no ha començat. La hipòtesi següent haurà d'explicar per què la dada apresa canvia una decisió útil i separar-ho d'una millora genèrica del controlador.

Publicar el vermell evita convertir aprenentatge exacte en una afirmació de transferència que els controls no sostenen.

[Documentació de TRANSFER-3](/ca/docs/echoai/transfer) · [Les tretze fases](/ca/articulos/echo3-trece-fases-verdes) · [Informe B2](/evidence/echo3/TRANSFER3-PLAN-B2-RESULTS.md) · [Informe B3](/evidence/echo3/TRANSFER3-PLAN-B3-RESULTS.md) · [Dades i hashes d'origen](/data/echo3-status.json)
