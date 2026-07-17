import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Container } from "../components/Container";
import { PageHeader } from "../components/PageHeader";
import { Seo } from "../components/Seo";
import { AppointmentForm } from "../components/AppointmentForm";
import { site } from "../data/site";

export function Contact() {
  const message = encodeURIComponent(
    "Hi Elssy Hospital, I'd like to book an appointment / ask about your services."
  );

  return (
    <>
      <Seo
        title="Contact & Book Appointment"
        description="Contact Elssy Hospital in Carmelaram, Sarjapur Road, Bengaluru. Call, WhatsApp, or send an appointment request online."
        path="/contact"
      />

      <PageHeader
        eyebrow="Contact Us"
        title="Let's get you the care you need"
        description="Reach out by phone, WhatsApp, or the form below — our team responds quickly."
      />

      <section className="py-20">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-brand-950">Get in Touch</h2>
            <div className="mt-7 flex flex-col gap-6">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="font-semibold text-brand-950">Visit Us</p>
                  <a
                    href={site.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 hover:text-brand-700"
                  >
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.line3}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="font-semibold text-brand-950">Call Us</p>
                  {site.phones.map((p) => (
                    <a
                      key={p.number}
                      href={`tel:${p.number}`}
                      className="block text-sm text-slate-600 hover:text-brand-700"
                    >
                      {p.label}: {p.number}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <MessageCircle size={20} />
                </span>
                <div>
                  <p className="font-semibold text-brand-950">WhatsApp</p>
                  <a
                    href={`https://wa.me/${site.whatsappNumber}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 hover:text-brand-700"
                  >
                    Chat with us instantly
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="font-semibold text-brand-950">Email</p>
                  <a href={`mailto:${site.email}`} className="text-sm text-slate-600 hover:text-brand-700">
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Clock size={20} />
                </span>
                <div>
                  <p className="font-semibold text-brand-950">Hours</p>
                  <p className="text-sm text-slate-600">{site.hours.opd}</p>
                  <p className="text-sm text-slate-600">{site.hours.emergency}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-100">
              <iframe
                title="Elssy Hospital location map"
                width="100%"
                height="220"
                loading="lazy"
                className="grayscale"
                src="https://maps.google.com/maps?q=Elssy+Hospital,12.9003022,77.7256111&t=&z=16&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 p-8 shadow-sm lg:col-span-3">
            <h2 className="text-2xl font-semibold text-brand-950">Request an Appointment</h2>
            <p className="mt-2 text-sm text-slate-600">
              Fill in your details and we'll confirm your appointment slot.
            </p>
            <div className="mt-7">
              <AppointmentForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
