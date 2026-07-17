import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, HeartPulse, Ear, Baby, Sparkles, Bone } from "lucide-react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { PageHeader } from "../components/PageHeader";
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

export function Departments() {
  return (
    <>
      <Seo
        title="Departments"
        description="Explore Elssy Hospital's specialist departments: Gastrointestinal & General Surgery, General Medicine, ENT, Obstetrics & Gynaecology, Dermatology and Orthopaedics."
        path="/departments"
      />

      <PageHeader
        eyebrow="Departments"
        title="Specialist care under one roof"
        description="Six dedicated departments, backed by experienced consultants and modern diagnostic and surgical technology."
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="What We Treat"
            title="Choose a department to learn more"
            align="left"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => {
              const Icon = icons[d.icon] ?? Stethoscope;
              return (
                <Link
                  key={d.slug}
                  to={`/departments/${d.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-100 p-7 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon size={24} />
                  </span>
                  <h2 className="mt-5 text-lg font-semibold text-brand-950">{d.name}</h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{d.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {d.conditions.slice(0, 2).map((c) => (
                      <li
                        key={c}
                        className="rounded-full bg-accent-50 px-3 py-1 text-xs font-medium text-accent-700"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    View department{" "}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
