import type { Locale } from "@/lib/i18n";
import type { Treatment } from "@/content/shared/treatments";
import { TreatmentCard } from "@/components/TreatmentCard";

export function TreatmentGrid({
  locale,
  treatments,
  readMoreLabel,
}: {
  locale: Locale;
  treatments: Treatment[];
  readMoreLabel: string;
}) {
  return (
    <ul className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
      {treatments.map((treatment) => (
        <TreatmentCard
          key={treatment.id}
          locale={locale}
          treatment={treatment}
          readMoreLabel={readMoreLabel}
        />
      ))}
    </ul>
  );
}
