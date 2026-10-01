import { Fragment } from "react";
import type { Locale } from "@/lib/i18n";
import type { TreatmentArea } from "@/content/shared/treatmentAreas";
import { TreatmentCard } from "@/components/TreatmentCard";

export function TreatmentGrid({
  locale,
  treatments,
  readMoreLabel,
}: {
  locale: Locale;
  treatments: TreatmentArea[];
  readMoreLabel: string;
}) {
  // At the 3-column breakpoint, a lone card left in the final row is centered
  // between two blank cells (matching the grid's plain background) instead
  // of sitting off to one side.
  const centerLastCard = treatments.length % 3 === 1;

  return (
    <ul className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
      {treatments.map((treatment, index) => {
        const card = (
          <TreatmentCard locale={locale} treatment={treatment} readMoreLabel={readMoreLabel} />
        );
        if (centerLastCard && index === treatments.length - 1) {
          return (
            <Fragment key={treatment.id}>
              <li aria-hidden="true" className="hidden bg-background lg:block" />
              {card}
              <li aria-hidden="true" className="hidden bg-background lg:block" />
            </Fragment>
          );
        }
        return <Fragment key={treatment.id}>{card}</Fragment>;
      })}
    </ul>
  );
}
