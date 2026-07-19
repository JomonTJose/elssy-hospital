import { Target, Eye, HeartHandshake, Stethoscope, HeartPulse, Ear, Baby, Sparkles, Bone } from "lucide-react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { PageHeader } from "../components/PageHeader";
import { CtaStrip } from "../components/CtaStrip";
import { Button } from "../components/Button";
import { Seo } from "../components/Seo";
import { departments } from "../data/departments";

const icons: Record<string, typeof Stethoscope> = {
  Stethoscope,
  HeartPulse,
  Ear,
  Baby,
  Sparkles,
  Bone,
};

export function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Elssy Hospital's mission to make accessible, affordable and compassionate multispecialty healthcare available in Bengaluru."
        path="/about"
      />

      <PageHeader
        eyebrow="About Elssy Hospital"
        title="A leader for the needy"
        description="Dedicated to providing exceptional care, we combine expertise with compassion to deliver the finest treatments at a cost that is both accessible and fair."
      />

      <section className="py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <Eye size={24} />
            </span>
            <h2 className="mt-5 text-2xl font-semibold text-brand-950">Our Vision</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              To become a leader for the needy — making quality healthcare
              accessible, affordable, and compassionate for every community we
              serve around Sarjapur Road and beyond.
            </p>
          </div>
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
              <Target size={24} />
            </span>
            <h2 className="mt-5 text-2xl font-semibold text-brand-950">Our Mission</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              Delivering exceptional healthcare through innovative treatments,
              advanced technology, and personalized care — treating every
              patient with the dignity and attention they deserve.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-20">
        <Container>
          <SectionHeading
            eyebrow="What Sets Us Apart"
            title="Dedicated professionals, modern technology"
            description="Our team of specialist doctors is supported by state-of-the-art diagnostic and surgical technology, so you get the right care the first time."
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <HeartHandshake className="text-brand-700" size={28} />
              <h3 className="mt-4 text-lg font-semibold text-brand-950">Patient-First Culture</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We take the time to explain conditions and treatment options clearly, in the language patients are most comfortable with.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <Stethoscope className="text-brand-700" size={28} />
              <h3 className="mt-4 text-lg font-semibold text-brand-950">Minimally Invasive Focus</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                From laparoscopic surgery to laser procedures, we prioritize techniques that mean less pain and faster recovery.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <Target className="text-brand-700" size={28} />
              <h3 className="mt-4 text-lg font-semibold text-brand-950">Fair, Transparent Cost</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Great care shouldn't be out of reach — we keep pricing honest and support cashless insurance wherever possible.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Facilities" title="Multispecialty care, all in one place" align="left" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => {
              const Icon = icons[d.icon] ?? Stethoscope;
              return (
                <div key={d.slug} className="flex items-center gap-4 rounded-xl border border-slate-100 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <Icon size={20} />
                  </span>
                  <span className="font-medium text-brand-950">{d.name}</span>
                </div>
              );
            })}
            <div className="flex items-center gap-4 rounded-xl border border-slate-100 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                <Sparkles size={20} />
              </span>
              <span className="font-medium text-brand-950">Diabetic Foot Surgery Centre</span>
            </div>
          </div>
        </Container>
      </section>

      <CtaStrip title="Experience healthcare that puts you first" align="center">
        <Button to="/book-appointment" variant="accent">
          Book an Appointment
        </Button>
      </CtaStrip>
    </>
  );
}
