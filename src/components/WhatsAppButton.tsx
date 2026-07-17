import { MessageCircle } from "lucide-react";
import { site } from "../data/site";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi Elssy Hospital, I'd like to book an appointment / ask about your services."
  );
  return (
    <a
      href={`https://wa.me/${site.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 lg:bottom-6"
    >
      <MessageCircle size={26} fill="white" className="text-[#25D366]" />
    </a>
  );
}
