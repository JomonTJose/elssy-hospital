import type { ReactNode } from "react";
import { Container } from "./Container";

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="border-b border-brand-100 bg-brand-50/70 py-16">
      <Container>
        <p className="text-xs font-bold uppercase tracking-widest text-accent-600">{eyebrow}</p>
        <h1 className="mt-3 max-w-2xl font-serif-display text-4xl font-semibold text-brand-950 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{description}</p>
        )}
        {actions && <div className="mt-8">{actions}</div>}
      </Container>
    </section>
  );
}
