# Angela Lanter's ShopMy closet

A one-page site: tap a piece or a handwritten label in Angela's bedroom photo to open her ShopMy shelf.
Built from [annanoellerinke/shopmy-closet-guide](https://github.com/annanoellerinke/shopmy-closet-guide).

| File | What it's for |
| --- | --- |
| `closet.png` | The approved image (1091 × 1442). Don't edit or regenerate it; a new image needs new outlines. |
| `shelves.mjs` | Shelf names and links, the outline of every clickable piece, and the label boxes. |
| `build-site.mjs` | Writes `index.html` from `shelves.mjs` (name, page text, sharing info, production URL). |
| `styles.css`, `fonts/`, `favicon.svg` | Look and feel. Fonts are open-licensed (SIL OFL / Apache 2.0). |
| `vercel.json` | Static hosting settings: no build step, output is this folder. |

After changing `shelves.mjs` or `build-site.mjs`, run `node build-site.mjs` and commit the new `index.html` too.

| Shelf | Link |
| --- | --- |
| Style | https://shopmy.us/angelalanter/style |
| Beauty | https://shopmy.us/angelalanter/beauty |
| Home | https://shopmy.us/angelalanter/home |
| Instagram | https://shopmy.us/angelalanter/instagram |

This is an independent creator page, not an official ShopMy tool. It opens existing shelves and doesn't sync anything from ShopMy.
