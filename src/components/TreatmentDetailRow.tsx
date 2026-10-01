import type { Locale } from "@/lib/i18n";
import type { Treatment } from "@/content/shared/treatments";
import { TreatmentIcon } from "@/components/TreatmentIcon";
import { GoldEmblemWatermark } from "@/components/GoldEmblemWatermark";

export function TreatmentDetailRow({
  locale,
  treatment,
}: {
  locale: Locale;
  treatment: Treatment;
}) {
  const isHe = locale === "he";
  const description = isHe ? treatment.descriptionHe : treatment.descriptionEn;

  return (
    <div
      id={treatment.id}
      className="relative scroll-mt-24 overflow-hidden border-t border-border py-12 first:border-t-0 md:py-16"
    >
      <GoldEmblemWatermark side="center" size="sm" />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col gap-4">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent-soft">
          <TreatmentIcon icon={treatment.icon} className="h-8 w-8 text-accent-text" />
        </span>
        <h2 className="text-xl font-semibold text-text md:text-2xl">
          {isHe ? treatment.nameHe : treatment.nameEn}
        </h2>
        {description.split("\n\n").map((paragraph) => (
          <p key={paragraph} className="prose-measure text-base leading-relaxed text-text-secondary">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
