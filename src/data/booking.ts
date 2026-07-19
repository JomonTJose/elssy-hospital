// Booking configuration: maps departments to bookable doctors and their
// Cal.com event links.
//
// To activate online slot booking for a doctor:
// 1. Create a (free) team account at https://cal.com and add the doctor as
//    a user, with an event type per consultation (e.g. "OPD Consultation",
//    15/20 min, working hours Mon–Sat 9:00–20:00).
// 2. Copy the event link — the part after cal.com/, e.g.
//    "elssy-hospital/dr-tinnu-george-opd" — into `calLink` below.
// A doctor with `calLink: null` shows a call/WhatsApp fallback instead of
// the slot picker.
//
// NOTE (future): this whole flow is deliberately isolated so Cal.com can be
// swapped for the planned in-house, on-prem booking backend later — only
// `BookingWidget` and this file should need to change.

export type BookableDoctor = {
  slug: string;
  name: string;
  role: string;
  calLink: string | null;
};

export type BookingDepartment = {
  slug: string;
  name: string;
  doctors: BookableDoctor[];
};

export const bookingDepartments: BookingDepartment[] = [
  {
    slug: "gastro-general-surgery",
    name: "Gastrointestinal & General Surgery",
    doctors: [
      {
        slug: "dr-tinnu-george",
        name: "Dr. Tinnu George",
        role: "General & Laparoscopic Surgeon",
        calLink: null, // e.g. "elssy-hospital/dr-tinnu-george-opd"
      },
    ],
  },
  {
    slug: "general-medicine",
    name: "General Medicine",
    doctors: [
      {
        slug: "general-medicine-opd",
        name: "Any available physician",
        role: "General Medicine OPD",
        calLink: null,
      },
    ],
  },
  {
    slug: "ent",
    name: "ENT (Ear, Nose & Throat)",
    doctors: [
      {
        slug: "ent-opd",
        name: "Any available specialist",
        role: "ENT OPD",
        calLink: null,
      },
    ],
  },
  {
    slug: "obg",
    name: "Obstetrics & Gynaecology",
    doctors: [
      {
        slug: "obg-opd",
        name: "Any available consultant",
        role: "OBG OPD",
        calLink: null,
      },
    ],
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    doctors: [
      {
        slug: "dermatology-opd",
        name: "Any available dermatologist",
        role: "Dermatology OPD",
        calLink: null,
      },
    ],
  },
  {
    slug: "orthopaedics",
    name: "Orthopaedics",
    doctors: [
      {
        slug: "orthopaedics-opd",
        name: "Any available specialist",
        role: "Orthopaedics OPD",
        calLink: null,
      },
    ],
  },
];
