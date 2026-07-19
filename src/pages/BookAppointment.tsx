import { useState } from "react";
import { CheckCircle2, Stethoscope, HeartPulse, Ear, Baby, Sparkles, Bone, UserRound } from "lucide-react";
import { Container } from "../components/Container";
import { PageHeader } from "../components/PageHeader";
import { BookingWidget } from "../components/BookingWidget";
import { Seo } from "../components/Seo";
import { bookingDepartments } from "../data/booking";
import { site } from "../data/site";

const departmentIcons: Record<string, typeof Stethoscope> = {
  "gastro-general-surgery": Stethoscope,
  "general-medicine": HeartPulse,
  ent: Ear,
  obg: Baby,
  dermatology: Sparkles,
  orthopaedics: Bone,
};

export function BookAppointment() {
  const [departmentSlug, setDepartmentSlug] = useState<string | null>(null);
  const [doctorSlug, setDoctorSlug] = useState<string | null>(null);

  const department = bookingDepartments.find((d) => d.slug === departmentSlug) ?? null;
  const doctor = department?.doctors.find((doc) => doc.slug === doctorSlug) ?? null;

  function selectDepartment(slug: string) {
    setDepartmentSlug(slug);
    const dept = bookingDepartments.find((d) => d.slug === slug);
    // Skip the doctor step when there's only one option
    setDoctorSlug(dept && dept.doctors.length === 1 ? dept.doctors[0].slug : null);
  }

  return (
    <>
      <Seo
        title="Book an Appointment"
        description="Book an appointment at Elssy Hospital, Bengaluru — choose your department and doctor, then pick a time that works for you."
        path="/book-appointment"
      />

      <PageHeader
        eyebrow="Book an Appointment"
        title="See a specialist, on your schedule"
        description={`Choose a department and doctor, then pick a slot. Prefer to talk? Call ${site.phones[1].number} any time during OPD hours.`}
      />

      <section className="py-16">
        <Container className="max-w-4xl">
          {/* Step 1: department */}
          <div>
            <h2 className="flex items-center gap-2.5 text-lg font-semibold text-brand-950">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                1
              </span>
              Choose a department
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {bookingDepartments.map((d) => {
                const Icon = departmentIcons[d.slug] ?? Stethoscope;
                const selected = d.slug === departmentSlug;
                return (
                  <button
                    key={d.slug}
                    type="button"
                    onClick={() => selectDepartment(d.slug)}
                    aria-pressed={selected ? "true" : "false"}
                    className={`flex flex-col items-start gap-2.5 rounded-xl border-2 p-4 text-left transition-colors ${
                      selected
                        ? "border-brand-700 bg-brand-50"
                        : "border-slate-200 hover:border-brand-300"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                        selected ? "bg-brand-700 text-white" : "bg-brand-50 text-brand-700"
                      }`}
                    >
                      <Icon size={18} />
                    </span>
                    <span className="text-sm font-semibold leading-snug text-brand-950">
                      {d.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: doctor */}
          {department && (
            <div className="mt-12">
              <h2 className="flex items-center gap-2.5 text-lg font-semibold text-brand-950">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                  2
                </span>
                Choose your doctor
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {department.doctors.map((doc) => {
                  const selected = doc.slug === doctorSlug;
                  return (
                    <button
                      key={doc.slug}
                      type="button"
                      onClick={() => setDoctorSlug(doc.slug)}
                      aria-pressed={selected ? "true" : "false"}
                      className={`flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-colors ${
                        selected
                          ? "border-brand-700 bg-brand-50"
                          : "border-slate-200 hover:border-brand-300"
                      }`}
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                          selected ? "bg-brand-700 text-white" : "bg-brand-50 text-brand-700"
                        }`}
                      >
                        <UserRound size={20} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-brand-950">{doc.name}</span>
                        <span className="block text-xs text-slate-600">{doc.role}</span>
                      </span>
                      {selected && <CheckCircle2 size={18} className="ml-auto shrink-0 text-brand-700" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: slot */}
          {doctor && (
            <div className="mt-12">
              <h2 className="flex items-center gap-2.5 text-lg font-semibold text-brand-950">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                  3
                </span>
                Pick a time
              </h2>
              <div className="mt-5">
                <BookingWidget doctor={doctor} />
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
