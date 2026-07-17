import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "./Container";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { site, nav } from "../data/site";
import { departments } from "../data/departments";

export function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-brand-50/70 text-brand-900">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-lg font-bold text-white">
              E
            </span>
            <span className="font-serif-display text-xl font-semibold text-brand-950">
              {site.name}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {site.shortTagline}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-700 shadow-sm ring-1 ring-brand-100 hover:bg-accent-500 hover:text-white"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-700 shadow-sm ring-1 ring-brand-100 hover:bg-accent-500 hover:text-white"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-700 shadow-sm ring-1 ring-brand-100 hover:bg-accent-500 hover:text-white"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-950">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-slate-600 hover:text-brand-700">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-950">Departments</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {departments.map((d) => (
              <li key={d.slug}>
                <Link to={`/departments/${d.slug}`} className="text-slate-600 hover:text-brand-700">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-950">Get in Touch</h3>
          <ul className="mt-4 space-y-3.5 text-sm text-slate-600">
            <li className="flex gap-2.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent-600" />
              <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-700">
                {site.address.full}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Phone size={18} className="mt-0.5 shrink-0 text-accent-600" />
              <span className="flex flex-col">
                <a href={`tel:${site.phones[0].number}`} className="hover:text-brand-700">{site.phones[0].number}</a>
                <a href={`tel:${site.phones[1].number}`} className="hover:text-brand-700">{site.phones[1].number}</a>
              </span>
            </li>
            <li className="flex gap-2.5">
              <Mail size={18} className="mt-0.5 shrink-0 text-accent-600" />
              <a href={`mailto:${site.email}`} className="hover:text-brand-700">{site.email}</a>
            </li>
            <li className="flex gap-2.5">
              <Clock size={18} className="mt-0.5 shrink-0 text-accent-600" />
              <span>
                {site.hours.opd}
                <br />
                {site.hours.emergency}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-brand-100">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Multispecialty &amp; Laser Surgery Centre, Bengaluru</p>
        </Container>
      </div>
    </footer>
  );
}
