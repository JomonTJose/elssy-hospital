export type Doctor = {
  slug: string;
  name: string;
  credentials: string;
  specialty: string;
  departmentSlug: string;
  experience: string;
  bio: string;
  languages: string[];
};

export const doctors: Doctor[] = [
  {
    slug: "dr-tinnu-george",
    name: "Dr. Tinnu George",
    credentials: "MBBS, MS (General Surgery), DNB (Surgery), FIAGES, FALS (Hernia)",
    specialty: "General & Laparoscopic Surgeon",
    departmentSlug: "gastro-general-surgery",
    experience: "10+ years",
    bio: "Dr. Tinnu George specializes in advanced laparoscopic surgeries, diabetic foot reconstruction, and endovenous laser treatment for varicose veins. He has performed over 3,000 diabetic foot surgeries and regularly treats appendicitis, hernias, gallstone disease, and gastrointestinal perforation using minimally invasive techniques.",
    languages: ["English", "Hindi", "Kannada", "Telugu", "Malayalam", "Tamil"],
  },
];
