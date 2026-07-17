export type LaserProcedure = {
  name: string;
  description: string;
  benefits: string[];
};

export const laserProcedures: LaserProcedure[] = [
  {
    name: "Laser Hemorrhoidopexy",
    description:
      "A precise, minimally invasive treatment for piles (hemorrhoids) — one of the most common anorectal conditions. Laser energy shrinks and seals the swollen tissue with none of the cutting associated with traditional surgery.",
    benefits: [
      "Targets affected tissue without harming surrounding areas",
      "Faster healing with minimal downtime",
      "Significantly less pain during and after the procedure",
      "Scar-free results — no stitches or visible scars",
    ],
  },
  {
    name: "Laser Pilonidal Sinus Ablation",
    description:
      "A minimally invasive alternative to open pilonidal sinus surgery. A fine laser fibre is inserted into the sinus tract to precisely ablate and seal it, avoiding a large open wound.",
    benefits: [
      "No large incision or open wound",
      "Shorter recovery and return to daily activity",
      "Lower risk of recurrence when combined with proper aftercare",
      "Day-care procedure in most cases",
    ],
  },
  {
    name: "Laser Fissure & Fistula Treatment",
    description:
      "Anal fissures and fistulas are treated early with laser technology to relieve pain and prevent progression into chronic, harder-to-treat conditions.",
    benefits: [
      "Reduced post-operative pain versus conventional surgery",
      "Precise treatment of the fistula tract",
      "Lower recurrence with sphincter-preserving technique",
      "Quicker return to normal bowel habits",
    ],
  },
  {
    name: "Rectal Prolapse Surgery",
    description:
      "Corrective surgery for rectal prolapse — where the rectum slides down through the anus — preventing complications such as bleeding and ulceration if left untreated.",
    benefits: [
      "Restores normal rectal anatomy and function",
      "Prevents progression to more serious complications",
      "Minimally invasive options evaluated case-by-case",
      "Structured post-op recovery plan",
    ],
  },
];

export type CheckupPackage = {
  name: string;
  audience: string;
  includes: string[];
  highlight?: boolean;
};

export const checkupPackages: CheckupPackage[] = [
  {
    name: "Essential Health Check",
    audience: "Ideal for adults under 40 with no known conditions",
    includes: [
      "Complete blood count (CBC)",
      "Blood sugar (fasting & PP)",
      "Lipid profile",
      "Liver & kidney function tests",
      "Urine routine",
      "BMI & blood pressure assessment",
      "Physician consultation",
    ],
  },
  {
    name: "Comprehensive Wellness Check",
    audience: "Recommended for adults 40+ or with family history of lifestyle disease",
    includes: [
      "Everything in Essential Health Check",
      "Thyroid profile (TSH, T3, T4)",
      "ECG",
      "Chest X-ray",
      "Abdominal ultrasound",
      "HbA1c",
      "Specialist consultation",
    ],
    highlight: true,
  },
  {
    name: "Women's Wellness Check",
    audience: "Tailored screening for women's health at every life stage",
    includes: [
      "Everything in Essential Health Check",
      "Thyroid profile",
      "Iron studies",
      "Pap smear",
      "Pelvic ultrasound",
      "Bone density screening",
      "Gynaecologist consultation",
    ],
  },
  {
    name: "Senior Citizen Check",
    audience: "Comprehensive screening designed for adults 60+",
    includes: [
      "Everything in Comprehensive Wellness Check",
      "PSA (men) / additional hormonal panel (women)",
      "Vitamin B12 & D",
      "Bone density screening",
      "ECG & cardiac risk assessment",
      "Ophthalmology & ENT screening",
    ],
  },
];

export type InsuranceInfo = {
  process: string[];
  note: string;
};

export const insuranceProviders = [
  "Star Health Insurance",
  "HDFC ERGO Health Insurance",
  "ICICI Lombard",
  "Care Health Insurance",
  "Niva Bupa (Max Bupa)",
  "Aditya Birla Health Insurance",
  "National Insurance Company",
  "New India Assurance",
  "United India Insurance",
  "MD India (TPA)",
  "Medi Assist (TPA)",
  "Vidal Health (TPA)",
];

export const insuranceInfo: InsuranceInfo = {
  process: [
    "Share your insurance/TPA card and policy details with our help desk at admission.",
    "Our insurance desk verifies your policy coverage and initiates pre-authorization with your insurer.",
    "Once approved, avail cashless treatment for eligible procedures — no upfront payment for the covered amount.",
    "For non-empanelled insurers, we assist with documentation for reimbursement claims after discharge.",
  ],
  note:
    "If your insurance plan isn't listed, don't worry — get in touch with our insurance desk and we'll help you find the best way to use your coverage at Elssy Hospital.",
};
