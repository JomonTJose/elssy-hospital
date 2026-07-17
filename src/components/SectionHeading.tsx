export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-widest text-accent-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-serif-display text-3xl font-semibold text-brand-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{description}</p>
      )}
    </div>
  );
}
