# Reinos — ENEM 2026 (fonte e build)

- `src/plataforma-enem.jsx`: fonte do app (v3.6.0, com a aba Padrões do ENEM).
- `src/main.jsx`: ponto de entrada que monta o app em `#raiz`.
- `dist/`: a pasta publicada (index.html, app.js, app.css, pdfjs.js, padroes-enem.json, manifest.json, icone.svg).

Para gerar de novo: `npm install`, depois `npm run dados` (banco de padrões) e `npm run build` (app.js).
