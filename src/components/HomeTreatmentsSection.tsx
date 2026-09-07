import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import type { HomeDictionary } from "@/lib/dictionary-types";
import { treatments } from "@/content/shared/treatments";
import { TreatmentGrid } from "@/components/TreatmentGrid";
import { LinkButton } from "@/components/Button";
import { ArrowIcon } from "@/components/ArrowIcon";

export function HomeTreatmentsSection({
  locale,
  content,
  readMoreLabel,
}: {
  locale: Locale;
  content: HomeDictionary["treatmentsSection"];
  readMoreLabel: string;
}) {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 pt-16 md:px-10 md:pt-24">
        <div className="flex flex-col items-start justify-between gap-6 pb-10 md:flex-row md:items-end">
          <div className="flex max-w-xl flex-col gap-3">
            <h2 className="text-2xl font-semibold text-text md:text-[2rem]">{content.title}</h2>
            <p className="text-base leading-relaxed text-text-secondary">{content.subtitle}</p>
          </div>
          <LinkButton href={localizedPath(locale, "treatments")} variant="ghost" className="shrink-0 px-0">
            {content.cta}
            <ArrowIcon />
          </LinkButton>
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-10 md:pb-24">
        <TreatmentGrid locale={locale} treatments={treatments.slice(0, 6)} readMoreLabel={readMoreLabel} />
      </div>
    </section>
  );
}
