import { CheckCircle2, CalendarPlus } from "lucide-react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { PageHeader } from "../components/PageHeader";
import { Button } from "../components/Button";
import { Seo } from "../components/Seo";
import { checkupPackages } from "../data/services";

export function HealthCheckUps() {
  return (
    <>
      <Seo
        title="Health Check Up Packages"
        description="Preventive health checkup packages at Elssy Hospital, Bengaluru — Essential, Comprehensive, Women's Wellness and Senior Citizen checkups at fair, transparent pricing."
        path="/health-checkups"
      />

      <PageHeader
        eyebrow="Health Check Ups"
        title="Prevention is the best treatment"
        description="Catch potential health issues early with our preventive health checkup packages — designed for every age and life stage."
      />

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Best Health Check Up Packages" title="Choose the right package for you" />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {checkupPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-8 shadow-sm ${
                  pkg.highlight
                    ? "border-2 border-accent-400 bg-accent-50/40"
                    : "border border-slate-100"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 right-8 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-white">
                    Most Popular
                  </span>
                )}
                <h2 className="text-xl font-semibold text-brand-950">{pkg.name}</h2>
                <p className="mt-2 text-sm text-slate-600">{pkg.audience}</p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button to="/contact" icon={<CalendarPlus size={16} />} className="w-full">
                    Book This Package
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-slate-500">
            Package contents may be customised based on age, gender and medical
            history. Contact us for current pricing and lab availability.
          </p>
        </Container>
      </section>
    </>
  );
}
