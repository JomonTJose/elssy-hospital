import { ShieldCheck, Phone } from "lucide-react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { PageHeader } from "../components/PageHeader";
import { Button } from "../components/Button";
import { Seo } from "../components/Seo";
import { insuranceProviders, insuranceInfo } from "../data/services";
import { site } from "../data/site";

export function Insurance() {
  return (
    <>
      <Seo
        title="Insurance & Cashless Treatment"
        description="Elssy Hospital accepts a wide range of health insurance plans and TPAs for cashless treatment. Contact our insurance desk for assistance with your claim."
        path="/insurance"
      />

      <PageHeader
        eyebrow="Insurance"
        title="Cashless treatment, made simple"
        description="Elssy Hospital accepts a wide range of health insurance plans to provide maximum coverage for our patients."
      />

      <section className="py-20">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Accepted Providers"
              title="Insurance partners & TPAs"
              align="left"
            />
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {insuranceProviders.map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-100 p-4 text-sm font-medium text-slate-700"
                >
                  <ShieldCheck size={18} className="shrink-0 text-brand-700" />
                  {name}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-600">{insuranceInfo.note}</p>

            <h3 className="mt-12 text-lg font-semibold text-brand-950">How Cashless Treatment Works</h3>
            <ol className="mt-5 flex flex-col gap-4">
              {insuranceInfo.process.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-slate-700">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside>
            <div className="rounded-2xl bg-brand-50/60 p-7">
              <h3 className="text-lg font-semibold text-brand-950">Need Help With Your Plan?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Our insurance desk can verify your coverage and guide you
                through pre-authorization before admission.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Button to="/contact" className="w-full">
                  Contact Insurance Desk
                </Button>
                <Button
                  to={`tel:${site.primaryPhone}`}
                  variant="outline"
                  icon={<Phone size={16} />}
                  className="w-full"
                >
                  Call {site.primaryPhone}
                </Button>
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
