import { Link, Navigate, useParams } from "react-router-dom";
import {
  CheckCircle2,
  CalendarPlus,
  Stethoscope,
  HeartPulse,
  Ear,
  Baby,
  Sparkles,
  Bone,
} from "lucide-react";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { Seo } from "../components/Seo";
import { departments } from "../data/departments";
import { doctors } from "../data/doctors";

const icons: Record<string, typeof Stethoscope> = {
  Stethoscope,
  HeartPulse,
  Ear,
  Baby,
  Sparkles,
  Bone,
};

export function DepartmentDetail() {
  const { slug } = useParams();
  const department = departments.find((d) => d.slug === slug);

  if (!department) {
    return <Navigate to="/departments" replace />;
  }

  const Icon = icons[department.icon] ?? Stethoscope;
  const deptDoctors = doctors.filter((doc) => doc.departmentSlug === department.slug);
  const otherDepartments = departments.filter((d) => d.slug !== department.slug);

  return (
    <>
      <Seo
        title={department.name}
        description={department.summary}
        path={`/departments/${department.slug}`}
      />

      <section className="border-b border-brand-100 bg-brand-50/70 py-16">
        <Container>
          <Link to="/departments" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
            &larr; All Departments
          </Link>
          <div className="mt-4 flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
              <Icon size={28} />
            </span>
            <h1 className="font-serif-display text-3xl font-semibold text-brand-950 sm:text-4xl">
              {department.name}
            </h1>
          </div>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">{department.summary}</p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-brand-950">Overview</h2>
            <p className="mt-4 leading-relaxed text-slate-600">{department.description}</p>

            <h3 className="mt-10 text-lg font-semibold text-brand-950">
              Conditions &amp; Treatments
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {department.conditions.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-500" />
                  {c}
                </li>
              ))}
            </ul>

            {deptDoctors.length > 0 && (
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-brand-950">Specialists</h3>
                <div className="mt-5 flex flex-col gap-4">
                  {deptDoctors.map((doc) => (
                    <Link
                      key={doc.slug}
                      to="/doctors"
                      className="flex items-center gap-4 rounded-xl border border-slate-100 p-5 hover:bg-brand-50/60"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-sm font-bold text-brand-700">
                        {doc.name.replace("Dr. ", "").split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-semibold text-brand-950">{doc.name}</p>
                        <p className="text-sm text-slate-600">{doc.specialty}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-2xl bg-brand-50/60 p-7">
              <h3 className="text-lg font-semibold text-brand-950">Book a Consultation</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Get in touch to schedule an appointment with our{" "}
                {department.name.toLowerCase()} team.
              </p>
              <div className="mt-5">
                <Button to="/book-appointment" icon={<CalendarPlus size={16} />} className="w-full">
                  Book Appointment
                </Button>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Other Departments
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {otherDepartments.map((d) => (
                  <li key={d.slug}>
                    <Link
                      to={`/departments/${d.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-brand-700 hover:bg-brand-50"
                    >
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
