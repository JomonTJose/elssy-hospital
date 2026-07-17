import { Phone, CalendarPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../data/site";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-slate-200 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)] lg:hidden">
      <a
        href={`tel:${site.primaryPhone}`}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-brand-700"
      >
        <Phone size={17} /> Call Now
      </a>
      <Link
        to="/contact"
        className="flex flex-1 items-center justify-center gap-2 bg-accent-500 py-3.5 text-sm font-semibold text-white"
      >
        <CalendarPlus size={17} /> Book Appointment
      </Link>
    </div>
  );
}
