import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, CalendarPlus } from "lucide-react";
import { Container } from "./Container";
import { site } from "../data/site";
import { departments } from "../data/departments";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Doctors", to: "/doctors" },
  { label: "Laser Surgeries", to: "/laser-surgeries" },
  { label: "Health Check Ups", to: "/health-checkups" },
  { label: "Insurance", to: "/insurance" },
  { label: "Contact", to: "/contact" },
];

const resourceLinks = [
  { label: "Testimonials", to: "/testimonials" },
  { label: "Learning Series", to: "/learning-series" },
];

function DesktopDropdown({
  label,
  to,
  items,
  navLinkClass,
}: {
  label: string;
  to: string;
  items: { label: string; to: string }[];
  navLinkClass: (props: { isActive: boolean }) => string;
}) {
  return (
    <div className="group relative">
      <NavLink to={to} className={navLinkClass}>
        <span className="flex items-center gap-1">
          {label} <ChevronDown size={14} />
        </span>
      </NavLink>
      <div className="invisible absolute left-1/2 top-full z-20 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        <div className="rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileExpandable({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: { label: string; to: string }[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-semibold text-slate-700"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open ? "true" : "false"}
      >
        {label}
        <ChevronDown size={18} className={open ? "rotate-180" : ""} />
      </button>
      {open && (
        <div className="ml-3 flex flex-col gap-1 border-l-2 border-brand-100 pl-3">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onNavigate}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-brand-50 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors ${
      isActive ? "text-brand-700" : "text-slate-700 hover:text-brand-700"
    }`;

  const departmentItems = departments.map((d) => ({ label: d.name, to: `/departments/${d.slug}` }));

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="hidden border-b border-brand-100 bg-brand-50 text-brand-800 lg:block">
        <Container className="flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-6">
            <p>{site.hours.emergency} &middot; {site.hours.opd}</p>
            <a href={`mailto:${site.email}`} className="hidden hover:text-brand-950 xl:inline">
              {site.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${site.primaryPhone}`} className="flex items-center gap-1.5 font-semibold hover:text-brand-950">
              <Phone size={13} /> {site.phones[0].number} / {site.phones[1].number}
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-1.5 rounded-full bg-accent-500 px-4 py-1.5 text-xs font-bold text-white hover:bg-accent-600"
            >
              <CalendarPlus size={13} /> Book Appointment
            </Link>
          </div>
        </Container>
      </div>

      <Container className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Elssy Hospital logo" className="h-14 w-auto rounded-lg" />
          <span className="flex flex-col leading-tight">
            <span className="font-serif-display text-xl font-semibold text-brand-950">
              {site.name}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-accent-600">
              Multispecialty &amp; Laser Surgery Centre
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>

          <DesktopDropdown label="Departments" to="/departments" items={departmentItems} navLinkClass={navLinkClass} />

          <NavLink to="/doctors" className={navLinkClass}>
            Doctors
          </NavLink>
          <NavLink to="/laser-surgeries" className={navLinkClass}>
            Laser Surgeries
          </NavLink>
          <NavLink to="/health-checkups" className={navLinkClass}>
            Health Check Ups
          </NavLink>
          <NavLink to="/insurance" className={navLinkClass}>
            Insurance
          </NavLink>

          <DesktopDropdown label="Resources" to="/testimonials" items={resourceLinks} navLinkClass={navLinkClass} />

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <button
          className="p-2 text-brand-900 xl:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.slice(0, 2).map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-base font-semibold ${
                    isActive ? "bg-brand-50 text-brand-700" : "text-slate-700"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}

            <MobileExpandable
              label="Departments"
              items={departmentItems}
              onNavigate={() => setMobileOpen(false)}
            />

            {links.slice(2).map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-base font-semibold ${
                    isActive ? "bg-brand-50 text-brand-700" : "text-slate-700"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}

            <MobileExpandable
              label="Resources"
              items={resourceLinks}
              onNavigate={() => setMobileOpen(false)}
            />
          </Container>
        </div>
      )}
    </header>
  );
}
