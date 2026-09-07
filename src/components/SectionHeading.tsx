interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  as?: "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "start",
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span className="text-sm font-medium tracking-wide text-accent-text">{eyebrow}</span>
      )}
      <Heading className="text-balance text-2xl font-semibold text-text md:text-[2rem]">
        {title}
      </Heading>
      {subtitle && (
        <p className="text-balance text-base leading-relaxed text-text-secondary md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
