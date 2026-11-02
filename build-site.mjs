// Generates index.html from shelves.mjs. Run: node build-site.mjs
import { writeFileSync } from 'node:fs';
import { IMAGE, SHELVES, ITEMS, LABELS, BROWSE } from './shelves.mjs';

const SITE = {
  name: 'Angela Lanter',
  title: "Angela Lanter's Closet",
  tagline: 'hello gorgeous',
  hint: 'tap a piece to shop',
  description: "Shop Angela Lanter's favorite style, beauty and home finds. Tap a piece to open her ShopMy shelf.",
  destination: 'https://angela-lanter-closet.vercel.app/', // production URL
  fallback: 'https://shopmy.us/angelalanter',
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const pts = (p) => p.map(([x, y]) => `${x},${y}`).join(' ');
const link = (shelf, name, shape) => {
  const s = SHELVES[shelf];
  return `    <a href="${s.url}" target="_blank" rel="noopener" class="hit hit-${shelf}" aria-label="${esc(`${name} – ${s.name} shelf (opens in a new tab)`)}">${shape}</a>`;
};

const regions = [
  ...ITEMS.map(([shelf, name, p]) => link(shelf, name, `<polygon points="${pts(p)}"/>`)),
  ...LABELS.map(([shelf, text, x, y, w, h]) => link(shelf, `“${text}” label`, `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18"/>`)),
  `    <a href="#shelves" class="hit hit-browse" aria-label="Browse all shelves"><rect x="${BROWSE[0]}" y="${BROWSE[1]}" width="${BROWSE[2]}" height="${BROWSE[3]}" rx="18"/></a>`,
].join('\n');

const shelfList = Object.values(SHELVES)
  .map((s) => `        <li><a href="${s.url}" target="_blank" rel="noopener">${s.name}<span class="sr-only"> (opens in a new tab)</span></a></li>`)
  .join('\n');

const abs = (p) => (SITE.destination ? new URL(p, SITE.destination).href : p);
const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${SITE.title}</title>
  <meta name="description" content="${esc(SITE.description)}">
${SITE.destination ? `  <link rel="canonical" href="${SITE.destination}">\n` : ''}  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(SITE.title)}">
  <meta property="og:description" content="${esc(SITE.description)}">
  <meta property="og:image" content="${abs(IMAGE.src)}">
${SITE.destination ? `  <meta property="og:url" content="${SITE.destination}">\n` : ''}  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#f4f1ec">
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="preload" href="${IMAGE.src}" as="image">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a class="skip" href="#shelves">Skip to the shelf list</a>
  <div class="page">
    <header>
      <p class="hello">${SITE.tagline}</p>
      <h1 class="name">${SITE.name}</h1>
      <p class="hint">${SITE.hint}</p>
      <p class="sr-only">Every piece and label in the picture opens one of Angela's ShopMy shelves in a new tab. A full list of shelves follows the picture.</p>
    </header>

    <main class="closet">
      <div class="frame">
        <img class="scene" src="${IMAGE.src}" width="${IMAGE.width}" height="${IMAGE.height}" alt="Angela's bedroom styled with her favorite things: a belted jacket and Fair Isle sweater on the bed, jeans and pajamas, makeup on the duvet, an iPhone, a candle on the nightstand, a Coach bag and four pairs of shoes on the rug.">
        <svg class="map" viewBox="0 0 ${IMAGE.width} ${IMAGE.height}" role="group" aria-label="Shoppable pieces in the picture">
${regions}
        </svg>
      </div>
    </main>

    <section class="shelves" id="shelves" aria-labelledby="shelves-title">
      <h2 id="shelves-title">browse all shelves</h2>
      <ul>
${shelfList}
      </ul>
    </section>

    <footer>
      <p>${SITE.name} · <a href="${SITE.fallback}" target="_blank" rel="noopener">on ShopMy<span class="sr-only"> (opens in a new tab)</span></a></p>
    </footer>
  </div>
</body>
</html>
`;
writeFileSync(new URL('./index.html', import.meta.url), html);
console.log('index.html written:', ITEMS.length, 'pieces,', LABELS.length + 1, 'labels');
