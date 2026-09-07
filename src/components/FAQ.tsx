import type { Locale } from "@/lib/i18n";
import type { FaqItem } from "@/content/shared/faq";

function PlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-accent-text transition-transform duration-200 group-open:rotate-45"
    >
      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function FAQ({
  locale,
  items,
  title,
  subtitle,
}: {
  locale: Locale;
  items: FaqItem[];
  title: string;
  subtitle?: string;
}) {
  const isHe = locale === "he";

  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-text md:text-[2rem]">{title}</h2>
          {subtitle && <p className="text-base text-text-secondary">{subtitle}</p>}
        </div>

        <div className="flex flex-col">
          {items.map((item) => (
            <div key={item.id} className="border-t border-border last:border-b">
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-start text-[1.05rem] font-medium text-text marker:content-none">
                  <span>{isHe ? item.questionHe : item.questionEn}</span>
                  <PlusIcon />
                </summary>
                <p className="prose-measure pt-3 text-[0.95rem] leading-relaxed text-text-secondary">
                  {isHe ? item.answerHe : item.answerEn}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
