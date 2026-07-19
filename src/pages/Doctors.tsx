import { Link } from "react-router-dom";
import { GraduationCap, BriefcaseMedical, Languages, CalendarPlus } from "lucide-react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { PageHeader } from "../components/PageHeader";
import { Button } from "../components/Button";
import { Seo } from "../components/Seo";
import { doctors } from "../data/doctors";
import { departments } from "../data/departments";

export function Doctors() {
  return (
    <>
      <Seo
        title="Our Doctors"
        description="Meet the experienced specialist doctors at Elssy Hospital, Bengaluru — trusted for surgical precision and compassionate patient care."
        path="/doctors"
      />

      <PageHeader
        eyebrow="Our Doctors"
        title="Experienced specialists you can trust"
        description="Every consultant at Elssy Hospital combines clinical expertise with genuine care — so you always know you're in good hands."
      />

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {doctors.map((doc) => {
              const dept = departments.find((d) => d.slug === doc.departmentSlug);
              return (
                <div
                  key={doc.slug}
                  className="flex flex-col gap-6 rounded-2xl border border-slate-100 p-8 shadow-sm sm:flex-row"
                >
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-2xl font-bold text-brand-700">
                    {doc.name
                      .replace("Dr. ", "")
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-brand-950">{doc.name}</h2>
                    <p className="mt-1 text-sm font-semibold text-accent-600">{doc.specialty}</p>
                    {dept && (
                      <Link
                        to={`/departments/${dept.slug}`}
                        className="mt-1 inline-block text-sm text-brand-700 underline decoration-brand-200 underline-offset-2 hover:decoration-brand-700"
                      >
                        {dept.name}
                      </Link>
                    )}
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{doc.bio}</p>

                    <div className="mt-5 flex flex-col gap-2 text-sm text-slate-600">
                      <span className="flex items-start gap-2">
                        <GraduationCap size={17} className="mt-0.5 shrink-0 text-brand-700" />
                        {doc.credentials}
                      </span>
                      <span className="flex items-center gap-2">
                        <BriefcaseMedical size={17} className="shrink-0 text-brand-700" />
                        {doc.experience} experience
                      </span>
                      <span className="flex items-center gap-2">
                        <Languages size={17} className="shrink-0 text-brand-700" />
                        {doc.languages.join(", ")}
                      </span>
                    </div>

                    <div className="mt-6">
                      <Button to="/book-appointment" icon={<CalendarPlus size={16} />}>
                        Book with {doc.name.split(" ").slice(-1)[0]}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-brand-200 p-8 text-center">
              <BriefcaseMedical size={32} className="text-brand-400" />
              <h3 className="mt-4 text-lg font-semibold text-brand-950">
                Meet the rest of our specialist team
              </h3>
              <p className="mt-2 max-w-xs text-sm text-slate-600">
                Consultants across General Medicine, ENT, OBG, Dermatology and
                Orthopaedics are available by appointment.
              </p>
              <Button to="/contact" variant="outline" className="mt-5">
                Enquire About a Specialist
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-16">
        <Container>
          <SectionHeading eyebrow="Departments" title="Find the right specialist for you" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {departments.map((d) => (
              <Link
                key={d.slug}
                to={`/departments/${d.slug}`}
                className="rounded-full border border-brand-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-700 hover:text-white"
              >
                {d.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
