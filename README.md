# Elssy Hospital — Website

Multispecialty & Laser Surgery Centre, Bengaluru. Rebuilt as a fast, professional
marketing site with React, TypeScript, Vite and Tailwind CSS.

## Stack

- Vite + React 19 + TypeScript
- React Router (client-side routing)
- Tailwind CSS v4
- lucide-react icons

## Getting started

```bash
pnpm install
pnpm dev       # start local dev server (http://localhost:5173)
pnpm build     # type-check + production build to dist/
pnpm preview   # preview the production build
```

## Structure

- `src/pages/` — one file per route (Home, About, Doctors, Departments, Laser
  Surgeries, Health Check Ups, Insurance, Contact)
- `src/components/` — shared layout (Header, Footer, sticky mobile CTA,
  WhatsApp button) and UI building blocks
- `src/data/` — site content (contact info, departments, doctors, services) —
  edit these files to update copy without touching page markup
- `public/` — favicon, `robots.txt`, `sitemap.xml`

## Content notes

- Only one doctor profile (Dr. Tinnu George) was published on the live site
  at time of rebuild — add more entries to `src/data/doctors.ts` as they
  become available.
- Health checkup package contents and the insurance provider list in
  `src/data/services.ts` are representative placeholders — confirm exact
  package inclusions and empanelled insurers with the hospital before
  publishing.
- Update `src/data/site.ts` if the phone numbers, WhatsApp number, email or
  address change.

See `TODO.md` for the original build checklist.
