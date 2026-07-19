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

## Appointment booking

The Book Appointment page (`/book-appointment`) walks patients through
department → doctor → time slot. Scheduling is powered by **Cal.com**
(embedded via `@calcom/embed-react`) as a stop-gap until the planned
in-house, on-prem booking backend is built.

To activate live slot booking:

1. Create a free team account at [cal.com](https://cal.com), add each doctor
   as a user, and create an event type per consultation (e.g. "OPD
   Consultation", working hours Mon–Sat 9:00–20:00).
2. Paste each event link into the matching `calLink` in
   `src/data/booking.ts` (e.g. `"elssy-hospital/dr-tinnu-george-opd"`).
3. Doctors with `calLink: null` automatically show a call/WhatsApp/request
   fallback instead of the slot picker.

The integration is deliberately isolated: when the on-prem system is ready,
only `src/components/BookingWidget.tsx` and `src/data/booking.ts` need to
change — the page flow and site-wide CTAs stay as they are.

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
