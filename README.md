# MAGNET BMW

Prémiový web specializovaného autoservisu BMW v Jablonci nad Nisou.

- Živý web: [magnetbmw.cz](https://www.magnetbmw.cz)
- Telefon: +420 739 661 876
- Adresa: Jungmannova 685/8, 466 01 Jablonec nad Nisou

## Nasazení na Vercel

1. V [Vercel](https://vercel.com/new) zvolte **Import Git Repository** a vyberte tento repozitář.
2. Framework nechte detekovat (Vite / Nitro). Příkaz buildu je `npm run build`.
3. Po prvním deployi v Project Settings připojte vlastní doménu `magnetbmw.cz` / `www.magnetbmw.cz`.

Žádné environment variables nejsou potřeba. Web je statická vizitka bez účtů a databáze.

## Lokálně

```bash
npm install
npm run dev
```
