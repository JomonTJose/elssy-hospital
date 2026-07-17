export const site = {
  name: "Elssy Hospital",
  tagline:
    "Dedicated to providing exceptional care, we combine expertise with compassion to deliver the finest treatments at a cost that is both accessible and fair.",
  shortTagline: "Expert care. Real compassion. Fair cost.",
  address: {
    line1: "1st Main Road, Mulluru,",
    line2: "Carmelaram P.O, Off Sarjapur Road,",
    line3: "Bengaluru 560035",
    full: "1st Main Road, Mulluru, Carmelaram P.O, Off Sarjapur Road, Bengaluru 560035",
    plusCode: "WP2G+46 Sulikunte Colony, Karnataka, India",
    mapsUrl: "https://maps.google.com/?q=WP2G%2B46+Sulikunte+Colony,+Karnataka,+India",
  },
  phones: [
    { label: "Reception", number: "7338348555" },
    { label: "Appointments", number: "8050474222" },
  ],
  primaryPhone: "7338348555",
  whatsappNumber: "918050474222",
  email: "care@elssyhospital.com",
  socials: {
    facebook: "https://facebook.com/elssyhospital",
    instagram: "https://instagram.com/elssyhospital",
    linkedin: "https://linkedin.com/company/elssyhospital",
  },
  hours: {
    opd: "Mon – Sat: 9:00 AM – 8:00 PM",
    emergency: "24/7 Emergency Care",
  },
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Departments", to: "/departments" },
  { label: "Doctors", to: "/doctors" },
  { label: "Laser Surgeries", to: "/laser-surgeries" },
  { label: "Health Check Ups", to: "/health-checkups" },
  { label: "Insurance", to: "/insurance" },
  { label: "Contact", to: "/contact" },
] as const;
