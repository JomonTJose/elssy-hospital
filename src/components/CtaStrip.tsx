import type { ReactNode } from "react";
import { Container } from "./Container";

export function CtaStrip({
  title,
  description,
  children,
  align = "between",
}: {
  title: string;
  description?: string;
  children: ReactNode;
  align?: "between" | "center";
}) {
  if (align === "center") {
    return (
      <section className="border-y border-brand-100 bg-brand-50 py-16">
        <Container className="flex flex-col items-center gap-5 text-center">
          <h3 className="max-w-xl font-serif-display text-2xl font-semibold text-brand-950 sm:text-3xl">
            {title}
          </h3>
          {description && <p className="max-w-xl text-slate-600">{description}</p>}
          <div className="flex flex-wrap justify-center gap-4">{children}</div>
        </Container>
      </section>
    );
  }

  return (
    <section className="border-y border-brand-100 bg-brand-50">
      <Container className="flex flex-col items-center justify-between gap-6 py-14 text-center lg:flex-row lg:text-left">
        <div>
          <h3 className="font-serif-display text-2xl font-semibold text-brand-950 sm:text-3xl">
            {title}
          </h3>
          {description && <p className="mt-2 text-slate-600">{description}</p>}
        </div>
        <div className="flex flex-shrink-0 flex-wrap justify-center gap-4">{children}</div>
      </Container>
    </section>
  );
}
