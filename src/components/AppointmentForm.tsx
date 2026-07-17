import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { site } from "../data/site";
import { departments } from "../data/departments";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  department: string;
  message: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  department: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

export function AppointmentForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!form.firstName.trim()) next.firstName = "First name is required";
    if (!form.lastName.trim()) next.lastName = "Last name is required";
    if (!/^[0-9]{10}$/.test(form.phone.replace(/\D/g, "")))
      next.phone = "Enter a valid 10-digit phone number";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Enter a valid email address";
    if (!form.message.trim()) next.message = "Please tell us briefly what you need";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Appointment Request — ${form.firstName} ${form.lastName}`);
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\n` +
        `Phone: ${form.phone}\n` +
        `Email: ${form.email || "-"}\n` +
        `Department: ${form.department || "Not specified"}\n\n` +
        `Message:\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-accent-200 bg-accent-50/50 p-10 text-center">
        <CheckCircle2 size={40} className="text-accent-600" />
        <h3 className="mt-4 text-xl font-semibold text-brand-950">Almost done!</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
          Your email app should now be open with your appointment request
          pre-filled — just hit send. Prefer to talk instead? Call us at{" "}
          <a href={`tel:${site.primaryPhone}`} className="font-semibold text-brand-700">
            {site.primaryPhone}
          </a>
          .
        </p>
        <button
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
          className="mt-6 text-sm font-semibold text-brand-700 underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="text-sm font-semibold text-brand-950">
            First name
          </label>
          <input
            id="firstName"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="text-sm font-semibold text-brand-950">
            Last name
          </label>
          <input
            id="lastName"
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-brand-950">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="98765 43210"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-brand-950">
            Email <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="department" className="text-sm font-semibold text-brand-950">
          Department <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <select
          id="department"
          value={form.department}
          onChange={(e) => update("department", e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
        >
          <option value="">Select a department</option>
          {departments.map((d) => (
            <option key={d.slug} value={d.name}>
              {d.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-brand-950">
          How can we help?
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
      >
        <Send size={16} /> Request Appointment
      </button>
      <p className="text-center text-xs text-slate-400">
        We typically respond within a few hours during OPD timings.
      </p>
    </form>
  );
}
