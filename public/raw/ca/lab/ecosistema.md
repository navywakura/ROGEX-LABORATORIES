# El laboratori

Rogex Laboratories / RxLabs. Laboratori independent a Girona i organització
sense ànim de lucre. Tres línies de recerca —intel·ligència artificial,
neurotecnologia i sistemes operatius per a runtimes robòtics neuromòrfics
heap-0—, amb codi executable i límits publicats.

En el futur, RxLabs® es convertirà en una empresa real, una societat limitada
(S.L.), per construir drons autònoms amb echoAI i echOS.

No hi ha cap binari que les uneixi. Comparteixen un mètode: camí calent petit,
esdeveniments en comptes de sondeig quan aporta valor, memòria acotada i cap
afirmació de maquinari que no sigui sobre la taula.

| Línia | Què és | Estat |
|---|---|---|
| **echOS** | Unikernel per a robòtica a l'edge | 3.0 tancat; x86_64 BIOS/UEFI i AArch64 UEFI |
| **PRISMA Engine** | EEG a esdeveniments, Rust i anàlisi reproduïble | Engine 0.1.0 mesurat; no és un producte sanitari |
| **echoAI** | Agent situat de dos rellotges | ECHO-1 i ECHO-2 tancats; ECHO-3 14/15 i DRONE-3 tancat en SITL |

## On es toquen

echOS i echoAI no comparteixen procés: actualment echoAI s'executa en host i
no és dins de la ISO. echOS 3.0 publica un contracte acotat de sensors i
intencions que pot ser la unió futura sense posar un chatbot dins de l'OS.

PRISMA i echoAI tampoc no s'importen: l'un analitza un senyal continu; l'altre
aprèn a actuar en un món discret. Les tres línies continuen separades i només
es troben mitjançant contractes explícits.

## Estat d'echoAI

ECHO-1 integra memòria episòdica, política, model del món, cos, objectes,
operacions, llenguatge acotat, narració pòstuma, patrons temporals i
transferència. El seu tancament reprodueix 488 proves correctes, una fallada
esperada documentada i guanys de transferència de `+56` i `+72`.

ECHO-2 afegeix supervivència entre vides, patrons perceptius, streaming,
consolidació, herència i regulació conjunta d'energia i temperatura. El seu
monitor neuronal seleccionat conté 512 LIF + 128 Adaptive-LIF. ECHO-3 té
ja 14/15 certificats de programari en simulació funcional, replay i PX4 SITL,
i DRONE-3 ha tancat la missió integrada en SITL. HIL i gàbia continuen
pendents. No hi ha maquinari robòtic al laboratori.

## Maquinari

No hi ha cap AKD1500 M.2 al laboratori. Akida apareix únicament com a sonda o
maquinari futur. Si s'hi incorpora, es publicaran mesures pròpies i no xifres
heretades d'un fullet.

— R.N.
