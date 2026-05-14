
# Furuhov Hundpark — webbplats

## Sidstruktur

```
/                       Startsida — hero, info, båda parkerna kort, regler, kontakt
/ostersund              Hundpark Östersund — info, vägbeskrivning, karta, bokning
/as                     Hundpark Ås — info, vägbeskrivning, karta, bokning
/kontakt                Kontakt — telefon, mail, Swish
/integritetspolicy      Integritetspolicy
/sitemap.xml            Genereras
/robots.txt             Allow all
```

Delad header (logga + nav: Start / Östersund / Ås / Kontakt + tydlig "Boka tid"-knapp som länkar till `https://furuhov.bokamera.se`) och footer (NAP, Swish 123 164 0556, Facebook-länk, integritetspolicy) på alla sidor.

## Innehåll

**Startsida** — Hero med logga/tagline ("Hundpark i Östersund och Ås — boka en halvtimme när det passar dig"), två park-kort som länkar vidare, "Så funkar det" (Bokamera → boka → Swish 40 kr), Parkens 10 budord, kontaktblock.

**Östersund / Ås** — H1 med ort, beskrivning (3 ha, vindskydd, fikaplats), öppet dygnet runt, pris 40 kr/halvtimme, vägbeskrivning som löpande text, Google Maps-iframe, CTA till Bokamera.

**Kontakt** — Markus, 070-376 42 78, markus@furuhov.se, Swish 123 164 0556, Facebook, Bokamera.

## Design (utifrån loggan)

- **Palett:** djup skogsgrön/nästan svart bakgrund i hero, varm benvit/cream som ljus sektion, kraftfull röd accent (matchar logotypens röda) för CTAs och highlights, mörk träbrun som sekundär.
- **Typografi:** stark kondenserad/sans display för rubriker (känsla av loggan), läsbar humanistisk sans för brödtext.
- **Form:** robust och utomhusinspirerat — tydliga sektioner, gransiluetter som dekorativ accent, lite tryckt/grynig textur sparsamt, raka kanter med svagt rundade hörn på knappar.
- Tokens i `src/styles.css` (oklch). Loggan kopieras till `src/assets/` och används i header.

## SEO — implementation

SSR via TanStack Start. Per-route `head()`:
- Unik `<title>` ≤60 tecken: "Hundpark i Östersund | Furuhov", "Hundpark i Ås | Furuhov", "Kontakt | Furuhov Hundpark".
- `meta description` 140–160 tecken på svenska, ort + nyckelord.
- `og:title`, `og:description`, `og:url`, `og:type` per route. `og:image` med loggan på root tills riktiga foton finns.
- Canonical (relativ) på leaf-routes.
- `<html lang="sv">` i `__root.tsx`.

**JSON-LD**
- Root: `Organization` (logo, sameAs Facebook, contactPoint).
- `/`: `LocalBusiness` (Furuhov, telefon, mail, openingHours 24/7, priceRange, areaServed Östersund/Ås).
- `/ostersund` och `/as`: `LocalBusiness` per park med egen `geo` + `address` + `BreadcrumbList`.
- Startsida: `FAQPage` med några av de 10 budorden som Q&A.

**Övrigt**
- `public/robots.txt` (Allow all, Sitemap-rad utan domän).
- `src/routes/sitemap[.]xml.ts` med alla 5 publika routes.
- En H1 per sida, semantisk HTML, skip-link, WCAG-AA-kontrast, font-size ≥16px.
- Bilder: platshållare med width/height + lazy-load + svenska alt-texter.
- Custom 404 (finns redan).

## Behöver av dig sen

- Riktiga foton från parkerna (ersätter platshållare på hero + parksidor).
- Domännamn när det finns (fyller i `BASE_URL` i sitemap + canonical).
- Ev. exakta koordinater för Östersundsparken (för `geo`-schema).
