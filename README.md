# RxLabs®

Landing de [rxlabs.org](https://rxlabs.org).

- `/` tres paneles que abren `/echos` · `/prisma` · `/echoai` (`/echo` redirige a `/echos`)
- `/echos` `/prisma` `/echoai` — páginas de producto en modo artículo, datos en `src/products.js`.
  La primera imagen de `media` es la imagen principal de la página y su `og:image`;
  `postbuild` falla si el ancho/alto declarados no coinciden con el archivo
- `/about` `/contact` — contacto con correo e invitación a Discord (`discord.gg/rxlabs`).
  El widget sólo aparece si `widget.json` responde, es decir, con el widget del
  servidor activado en Discord
- Footer con el mapa completo del sitio; títulos de docs compartidos en `src/docs-catalog.js`
- `/docs/prisma/eeg-dron` — campaña exploratoria intención → dron (EEG, EMG y control corporal; PRISMA × echoAI × echOS), enlazada desde `/prisma`
- `/docs` (también `docs.rxlabs.org`) — echOS, PRISMA y echoAI, en castellano
- echoAI documenta arquitectura, cierre y benchmark visual de ECHO-1, proceso experimental,
  roadmap ECHO-3, hardware previsto, siguiente frontera y artículos de laboratorio
- `/articulos/echo3-trece-fases-verdes` — 13/15 certificados software, alcance por fase e integración pendiente
- `/articulos/transfer3-aprender-no-basta` — TRANSFER-3 rojo: escuela exacta sin ventaja útil en B2/B3
- `/docs/echoai/transfer` — contrato, controles y puertas para la confirmación
- `/data/echo3-status.json` y `/evidence/echo3/` — instantánea de cifras, informes de origen y hashes
- `/articulos/echo3-a-mitad` — archivo histórico del 14/09/2026, con enlace al estado actual

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
