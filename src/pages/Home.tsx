import { Link } from "react-router-dom";
import {
  Phone,
  CalendarPlus,
  ShieldCheck,
  HeartHandshake,
  BadgeIndianRupee,
  Stethoscope,
  HeartPulse,
  Ear,
  Baby,
  Sparkles,
  Bone,
  ArrowRight,
} from "lucide-react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { CtaStrip } from "../components/CtaStrip";
import { Seo } from "../components/Seo";
import { site } from "../data/site";
import { departments } from "../data/departments";

const icons: Record<string, typeof Stethoscope> = {
  Stethoscope,
  HeartPulse,
  Ear,
  Baby,
  Sparkles,
  Bone,
};

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Advanced, Minimally Invasive Care",
    description:
      "Laparoscopic and laser techniques across surgery, ENT, gynaecology and more — less pain, faster recovery.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate, Patient-First Approach",
    description:
      "Every treatment plan is built around you — clear communication, dignity, and support from consultation to recovery.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Accessible, Fair Pricing",
    description:
      "Quality multispecialty treatment at transparent, honest cost — with cashless insurance support for eligible plans.",
  },
];

export function Home() {
  return (
    <>
      <Seo
        title="Multispecialty Hospital in Sarjapur Road, Bengaluru"
        description="Elssy Hospital is a multispecialty hospital in Carmelaram, Sarjapur Road, Bengaluru offering laparoscopic & laser surgery, general medicine, ENT, OBG, dermatology and orthopaedics at fair, transparent cost."
        path="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-brand-100),_transparent_60%)]"
        />
        <Container className="relative grid grid-cols-1 items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700">
              Multispecialty &amp; Laser Surgery Centre
            </p>
            <h1 className="mt-5 font-serif-display text-4xl font-semibold leading-tight text-brand-950 sm:text-5xl">
              Exceptional care, delivered with compassion &amp; fairness
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              {site.tagline}
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 p-8 shadow-xl">
                <p className="font-serif-display text-2xl font-semibold text-white">
                  Our Commitment
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-100">
                  "A leader for the needy" — making healthcare accessible, affordable
                  and compassionate for every patient who walks through our doors.
                </p>
              </div>
              <div className="rounded-3xl bg-accent-500 p-6 shadow-lg">
                <p className="text-3xl font-bold text-white">6</p>
                <p className="mt-1 text-sm font-medium text-accent-50">
                  Specialist Departments
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-100">
                <p className="text-3xl font-bold text-brand-950">10+</p>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  Years Surgical Experience
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="pt-10 pb-20">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Elssy Hospital"
            title="Healthcare built around you"
            description="We combine modern minimally invasive techniques with a personal, human approach to every patient's care."
          />
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {whyUs.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 p-8 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <item.icon size={24} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-brand-950">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Departments */}
      <section className="bg-brand-50/60 py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Departments"
            title="Specialist care under one roof"
            description="Six dedicated departments backed by experienced consultants and modern diagnostic support."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => {
              const Icon = icons[d.icon] ?? Stethoscope;
              return (
                <Link
                  key={d.slug}
                  to={`/departments/${d.slug}`}
                  className="group flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition-shadow hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-brand-950">{d.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{d.summary}</p>
                  <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Learn more{" "}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA strip */}
      <CtaStrip
        title="Ready to feel better? Let's talk."
        description="Book an appointment online or call us directly — our team responds fast."
      >
        <Button to="/book-appointment" variant="accent" icon={<CalendarPlus size={18} />}>
          Book Appointment
        </Button>
        <Button to={`tel:${site.primaryPhone}`} variant="outline" icon={<Phone size={18} />}>
          Call {site.primaryPhone}
        </Button>
      </CtaStrip>

      {/* Testimonials */}
      <section className="py-20">
        <Container className="flex flex-col items-center gap-5 text-center">
          <SectionHeading
            eyebrow="Patient Stories"
            title="Trusted by the community we serve"
            description="Read real patient testimonials and Google reviews from people we've cared for."
          />
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800"
          >
            Read Testimonials &amp; Reviews
          </Link>
        </Container>
      </section>
    </>
  );
}
