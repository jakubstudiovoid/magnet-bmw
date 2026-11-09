# MAGNET BMW

Prémiový redesign webu autoservisu [MAGNET BMW](https://www.magnetbmw.cz) v Jablonci nad Nisou.
Statický web: Astro, Tailwind CSS, Lenis. Žádný backend.

Černobílá paleta, jeden akcent `#1C69D4`. Texty vycházejí z původního webu — bez vymyšlených recenzí, cen a čísel.

## Spuštění

```bash
npm install
npm run dev
```

Vývojový server běží na `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

Výstup je složka `dist/`. Hodí se na Vercel, Netlify i GitHub Pages.

## Nasazení

**Vercel**

1. Importujte repozitář `jakubstudiovoid/magnet-bmw`.
2. Framework: Astro. Build: `npm run build`. Výstup: `dist`.
3. Připojte doménu `www.magnetbmw.cz`.

**Netlify**

- Build command: `npm run build`
- Publish directory: `dist`

**GitHub Pages**

```bash
npm run build
```

a publikujte obsah `dist/` (například akcí `actions/upload-pages-artifact`).

## Fotky

Obrázky v `public/images/` pocházejí z původního webu. Vlastní záběry dílny a vozů nahraďte soubory se stejným názvem (WebP):

| Soubor | Kde je na webu | Co tam teď je |
| --- | --- | --- |
| `headlight.webp` | úvodní fotka | detail vozu z galerie původního webu |
| `about.webp` | sekce O nás | skutečné průčelí na Jungmannově |
| `workshop.webp` | pás pod „Proč my“ | vůz v hale z původní galerie |
| `entrance.webp` | kontakt | skutečný vjezd ze Smetanovy, i s šipkou |
| `map.webp` | kontakt, než se načte mapa | původní schéma příjezdu |

Ke každému souboru patří i varianta `*-800.webp` pro menší displeje.

## Struktura

```text
src/pages          úvod, ochrana údajů, 404
src/layouts        společný rám stránky
src/styles         Tailwind a animace
public/images      fotky
```
