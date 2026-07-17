export type Department = {
  slug: string;
  name: string;
  icon: string;
  summary: string;
  description: string;
  conditions: string[];
};

export const departments: Department[] = [
  {
    slug: "gastro-general-surgery",
    name: "Gastrointestinal & General Surgery",
    icon: "Stethoscope",
    summary:
      "Advanced laparoscopic and general surgical care for the digestive system, hernias, and everyday surgical needs.",
    description:
      "Our surgical team specializes in minimally invasive, laparoscopic techniques that reduce pain, scarring, and recovery time compared to open surgery. From routine general surgery to complex gastrointestinal procedures, our surgeons combine precision with a patient-first approach.",
    conditions: [
      "Laparoscopic gallbladder (gallstone) surgery",
      "Piles, fistula & fissure treatment",
      "Hernia repair (inguinal, umbilical, incisional)",
      "Appendectomy",
      "Gastrointestinal endoscopy",
      "Thyroid & breast surgery",
    ],
  },
  {
    slug: "general-medicine",
    name: "General Medicine",
    icon: "HeartPulse",
    summary:
      "Comprehensive diagnosis and management of everyday illnesses, chronic conditions, and preventive health.",
    description:
      "Our general medicine physicians are often the first point of contact for patients — managing acute illness, chronic disease, and coordinating referrals to specialists when needed. We focus on continuity of care and long-term wellbeing.",
    conditions: [
      "Fever, infections & viral illness",
      "Diabetes & hypertension management",
      "Thyroid disorders",
      "Respiratory conditions (asthma, COPD)",
      "Preventive health & lifestyle counselling",
      "Geriatric care",
    ],
  },
  {
    slug: "ent",
    name: "ENT (Ear, Nose & Throat)",
    icon: "Ear",
    summary:
      "Complete ear, nose and throat care for all ages, from routine infections to advanced ENT surgery.",
    description:
      "Our ENT specialists treat the full range of ear, nose and throat conditions using modern diagnostic equipment and, where needed, minimally invasive surgical techniques for faster recovery.",
    conditions: [
      "Sinusitis & nasal allergies",
      "Tonsillitis & adenoid issues",
      "Hearing loss & ear infections",
      "Snoring & sleep apnea evaluation",
      "Voice & throat disorders",
      "Endoscopic ENT surgery",
    ],
  },
  {
    slug: "obg",
    name: "Obstetrics & Gynaecology",
    icon: "Baby",
    summary:
      "Compassionate women's health care — from pregnancy and childbirth to gynaecological wellness at every life stage.",
    description:
      "Our OBG team supports women through every stage of life, offering antenatal care, safe deliveries, and gynaecological treatment in a comfortable, dignified environment with experienced female consultants.",
    conditions: [
      "Antenatal care & safe delivery",
      "High-risk pregnancy management",
      "PCOS/PCOD & menstrual disorders",
      "Laparoscopic gynaecological surgery",
      "Infertility evaluation",
      "Menopause & wellness care",
    ],
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    icon: "Sparkles",
    summary:
      "Skin, hair, and nail care combining medical dermatology with modern cosmetic and laser treatments.",
    description:
      "From common skin infections to advanced laser-based cosmetic procedures, our dermatology team offers evidence-based treatment plans tailored to each patient's skin and lifestyle.",
    conditions: [
      "Acne, eczema & psoriasis",
      "Hair loss & scalp treatment",
      "Laser hair reduction",
      "Skin allergy & infections",
      "Mole & wart removal",
      "Anti-ageing & cosmetic dermatology",
    ],
  },
  {
    slug: "orthopaedics",
    name: "Orthopaedics",
    icon: "Bone",
    summary:
      "Diagnosis and treatment of bone, joint, and muscle conditions — from sports injuries to joint replacement.",
    description:
      "Our orthopaedic specialists treat injuries and degenerative conditions of the musculoskeletal system, with an emphasis on non-surgical management first and advanced surgical options when required.",
    conditions: [
      "Fracture care & trauma management",
      "Joint pain & arthritis",
      "Sports injuries",
      "Spine & back pain treatment",
      "Joint replacement surgery",
      "Physiotherapy & rehabilitation",
    ],
  },
];
