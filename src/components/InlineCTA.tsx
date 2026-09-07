import { LinkButton } from "@/components/Button";

export function InlineCTA({
  title,
  body,
  buttonLabel,
  href,
}: {
  title: string;
  body: string;
  buttonLabel: string;
  href: string;
}) {
  return (
    <section className="border-t border-border bg-background-secondary">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-5 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex max-w-lg flex-col gap-2">
          <h2 className="text-xl font-semibold text-text">{title}</h2>
          <p className="text-base leading-relaxed text-text-secondary">{body}</p>
        </div>
        <LinkButton href={href} variant="primary">
          {buttonLabel}
        </LinkButton>
      </div>
    </section>
  );
}
