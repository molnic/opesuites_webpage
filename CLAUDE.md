# Kaza Living — Webpage

Public marketing landing page for **Kaza Living** (furnished apartments / hotel in Bogotá, Colombia). Two locations: **Calle 100** and **Usaquén**. Single-page site that showcases the brand and drives visitors to the booking platform. Booking itself happens on the separate **reservas** project (`reservas.kazalivingbog.com`).

> The repo folder is still named `ope-suites/webpage` — the project was rebranded from **OPE Suites** to **Kaza Living**, but the directory was kept as-is. A few legacy references may remain (e.g. `public/logo_opesuites_blanco.png`, now unused).

## Stack

- **Vite 7** + **React 19** (JavaScript, `.jsx` — not TypeScript for app components)
- **Tailwind CSS 3** + a few **shadcn/ui**-style primitives in [src/components/ui/](src/components/ui/) (`.tsx`)
- **maplibre-gl** for the location map ([src/components/ui/map.tsx](src/components/ui/map.tsx), used by [UbicacionPremium.jsx](src/components/UbicacionPremium.jsx))
- **lucide-react** icons, **next-themes**, **clsx** + **tailwind-merge** (`cn()` in [src/lib/utils.ts](src/lib/utils.ts))
- **Google Analytics GA4** (`G-BZP0T72GQN`) wired in [index.html](index.html)
- Deployed on **Vercel**

## Scripts

```sh
npm run dev      # Vite dev server (http://localhost:5173)
npm run build    # Production build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Architecture

Single-page app — no router. [App.jsx](src/App.jsx) renders all sections in order:
`Navigation → Hero → Narrative → Servicios → BentoGrid → UbicacionPremium → HistoriasHuespedes → PreguntasFrecuentes → CTA → Footer → WhatsAppButton`.

Notes:
- `Amenities.jsx` is imported as `Servicios` in App.jsx (renamed conceptually, file kept as-is).
- `CTA` and `Footer` are both exported from [FooterAndCTA.jsx](src/components/FooterAndCTA.jsx) (there is no `CTA.jsx`).

## Booking links (important)

All "Reservar" / "Ver Disponibilidad" buttons point to the booking platform `https://reservas.kazalivingbog.com/`. The platform reads a `?sede=` query param to pre-activate its location toggle (see `SearchWidget` in the sibling **reservas** project):

- `?sede=calle-100` → activates **Calle 100**
- `?sede=usaquen` → activates **Usaquén**

Current placements:
- [Hero.jsx](src/components/Hero.jsx) "RESERVAR AHORA" → `?sede=calle-100`
- [Navigation.jsx](src/components/Navigation.jsx) "Reservar Ahora" (header) → `?sede=calle-100`
- [BentoGrid.jsx](src/components/BentoGrid.jsx) `locationDetails.calle100.bookingLink` → `?sede=calle-100`
- [BentoGrid.jsx](src/components/BentoGrid.jsx) `locationDetails.usaquen.bookingLink` → `?sede=usaquen`

The two `bookingLink` values in `BentoGrid` flow into the CTA button of [LocationModal.jsx](src/components/LocationModal.jsx), so the modal's "Ver Disponibilidad y Reservar" inherits the correct sede automatically. The generic header/hero buttons are forced to Calle 100.

When adding a new booking button, always append the matching `?sede=` param so the destination toggle opens on the right location. Keep the param values exactly `calle-100` / `usaquen` — they must match what the reservas `SearchWidget` checks.

## Theme

- **Accent gold:** `#d4af37` (Tailwind `accent`)
- **Fonts:** `logo` = **Questrial** (brand titles / hero, `font-logo`, matches the Kaza Living logo), `serif` = Playfair Display, `sans` = Plus Jakarta Sans. All loaded from Google Fonts in [index.html](index.html).
- **Logo:** `public/logo-kaza-living-blanco.svg` (white, used in nav) and `public/logo-kaza-living-color.svg`.
- Dark, luxury aesthetic with a `noise-overlay` global layer. `theme-color` is `#2A1F14`.

## Integrations & tracking

- **WhatsApp** — floating button ([WhatsAppButton.jsx](src/components/WhatsAppButton.jsx)) → `wa.me/573102735824` with a pre-filled Kaza Living message.
- **Google Analytics GA4** — `G-BZP0T72GQN`, loaded in [index.html](index.html). Currently **page-view only** — no custom conversion events (e.g. no event on "Reservar" clicks) and no cross-domain linker to `reservas.kazalivingbog.com`.
- **Meta Pixel** — **not installed.** Meta Ads traffic lands here but there is no pixel, so Meta cannot attribute/optimize conversions or build audiences. (Known gap — conversion instrumentation is a pending improvement.)
- **MapLibre** — location map in the Ubicación section.

## Conventions

- **Spanish (Colombia)** for all UI copy. Avoid voseo / Spain-style conjugations.
- App components are **`.jsx`** (plain JS). Only the `ui/` primitives and `lib/utils.ts` are TypeScript.
- **Static assets** live in `public/images/` split by `hero/`, `calle-100/`, `usaquen/`. Keep filenames **lowercase** — Vercel/Linux is case-sensitive even though macOS is not.

## Project structure

```
src/
  App.jsx              # Section composition (no router)
  main.jsx             # React entry
  index.css / App.css  # Global styles
  components/          # Section components (.jsx)
    ui/               # shadcn-style primitives (.tsx: button, card, map)
  lib/utils.ts        # cn() helper
public/
  images/             # hero/, calle-100/, usaquen/
  logo-kaza-living-blanco.svg
  logo-kaza-living-color.svg
```

## Git / deploy flow

- Single branch: `main`. Commits land directly on `main`; Vercel auto-deploys.
- Commit messages in **Spanish**, conventional-style prefixes (`feat:`, `fix:`, `chore:`, `perf:`).
