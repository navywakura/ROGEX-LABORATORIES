# RxLabs®

Landing de [rxlabs.org](https://rxlabs.org).

- `/` dos cuadrados: echOS · PRISMA
- `/about` `/contact`
- `/docs` (también `docs.rxlabs.org`) — echOS, PRISMA y echoAI, en castellano
- echoAI documenta arquitectura, cierre y benchmark visual de ECHO-1, proceso experimental,
  roadmap ECHO-3, hardware previsto, siguiente frontera y artículos de laboratorio
- `/articulos/echo3-a-mitad` — estado verificable de ECHO-3: 8 de 15 fases de software cerradas
- `/echos` `/prisma` → 404 (productos aún no lanzados)

```
npm i
npm run dev
npm run build
```

La instantánea pública del benchmark ECHO-1 se regenera desde los informes del
laboratorio y una traza canónica nueva con `npm run data:echo1`. El exportador
valida los candados principales antes de escribir los dos JSON idénticos que
usa y ofrece la web.

`predev` y `prebuild` regeneran `llms-full.txt` y el sitemap desde las
subpáginas reales, para que los índices no deriven del contenido visible.
