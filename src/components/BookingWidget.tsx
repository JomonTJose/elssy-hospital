import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Phone, MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import type { BookableDoctor } from "../data/booking";

// Single integration point for the scheduling backend. Today this renders a
// Cal.com inline embed; when the in-house on-prem booking system is ready,
// replace this component's internals and leave the rest of the flow intact.
export function BookingWidget({ doctor }: { doctor: BookableDoctor }) {
  useEffect(() => {
    if (!doctor.calLink) return;
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#1f636c" } },
        hideEventTypeDetails: false,
      });
    })();
  }, [doctor.calLink]);

  if (doctor.calLink) {
    return (
      <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
        <Cal
          calLink={doctor.calLink}
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    );
  }

  const message = encodeURIComponent(
    `Hi Elssy Hospital, I'd like to book an appointment with ${doctor.name} (${doctor.role}).`
  );

  return (
    <div className="rounded-2xl border border-dashed border-brand-200 bg-white p-8 text-center">
      <p className="font-semibold text-brand-950">
        Online slot booking for {doctor.name} is coming soon
      </p>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
        Until then, our front desk will confirm your appointment in minutes —
        call, WhatsApp, or send a request and we'll get right back to you.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a
          href={`tel:${site.phones[1].number}`}
          className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-800"
        >
          <Phone size={16} /> Call {site.phones[1].number}
        </a>
        <a
          href={`https://wa.me/${site.whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
        >
          <MessageCircle size={16} /> WhatsApp Us
        </a>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full border-2 border-brand-700 px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
        >
          <Send size={16} /> Send a Request
        </Link>
      </div>
    </div>
  );
}
