import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Treatment } from "@/content/shared/treatments";
import { ArrowIcon } from "@/components/ArrowIcon";
import { TreatmentIcon } from "@/components/TreatmentIcon";
import { localizedPath } from "@/lib/i18n";

export function TreatmentCard({
  locale,
  treatment,
  readMoreLabel,
}: {
  locale: Locale;
  treatment: Treatment;
  readMoreLabel: string;
}) {
  const isHe = locale === "he";
  return (
    <li className="flex flex-col gap-4 bg-background p-6">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft">
        <TreatmentIcon icon={treatment.icon} className="h-7 w-7 text-accent-text" />
      </span>
      <div className="flex flex-1 flex-col gap-2.5">
        <h3 className="text-lg font-medium text-text">
          {isHe ? treatment.nameHe : treatment.nameEn}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-text-secondary">
          {isHe ? treatment.shortDescriptionHe : treatment.shortDescriptionEn}
        </p>
        <Link
          href={`${localizedPath(locale, "treatments")}#${treatment.id}`}
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-text"
        >
          {readMoreLabel}
          <ArrowIcon />
        </Link>
      </div>
    </li>
  );
}
