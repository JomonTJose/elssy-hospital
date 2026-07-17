import { CheckCircle2, CalendarPlus, Zap } from "lucide-react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { PageHeader } from "../components/PageHeader";
import { CtaStrip } from "../components/CtaStrip";
import { Button } from "../components/Button";
import { Seo } from "../components/Seo";
import { laserProcedures } from "../data/services";

export function LaserSurgeries() {
  return (
    <>
      <Seo
        title="Laser Surgeries"
        description="Elssy Hospital offers precise, minimally invasive laser surgeries for piles, pilonidal sinus, fissures, fistula and rectal prolapse with faster recovery and less pain."
        path="/laser-surgeries"
      />

      <PageHeader
        eyebrow="Laser Surgeries"
        title="Precision surgery, minimal downtime"
        description="Laser surgery provides precision and minimal invasiveness, causing minimal damage to surrounding tissue, reducing recovery time and leading to less scarring than traditional surgery."
        actions={
          <Button to="/contact" variant="accent" icon={<CalendarPlus size={18} />}>
            Book a Consultation
          </Button>
        }
      />

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Procedures We Offer" title="Our laser surgery services" />
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {laserProcedures.map((proc) => (
              <div key={proc.name} className="rounded-2xl border border-slate-100 p-8 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                  <Zap size={22} />
                </span>
                <h2 className="mt-5 text-xl font-semibold text-brand-950">{proc.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{proc.description}</p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {proc.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaStrip
        title="Have questions about a laser procedure?"
        description="Speak to our surgical team for a personalised evaluation and treatment plan."
        align="center"
      >
        <Button to="/contact" variant="accent">
          Book Appointment
        </Button>
      </CtaStrip>
    </>
  );
}
