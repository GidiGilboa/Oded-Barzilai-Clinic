import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Treatment } from "@/content/shared/treatments";

export function TreatmentDetailRow({
  locale,
  treatment,
  reversed,
}: {
  locale: Locale;
  treatment: Treatment;
  reversed: boolean;
}) {
  const isHe = locale === "he";
  return (
    <div
      id={treatment.id}
      className="grid scroll-mt-24 gap-8 border-t border-border py-12 first:border-t-0 first:pt-0 md:grid-cols-2 md:gap-14 md:py-16"
    >
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-surface-muted ${
          reversed ? "md:order-2" : ""
        }`}
      >
        <Image
          src={treatment.image}
          alt={isHe ? treatment.imageAlt.he : treatment.imageAlt.en}
          fill
          sizes="(min-width: 768px) 520px, 90vw"
          className="object-cover"
        />
      </div>
      <div className="relative flex flex-col justify-center gap-3 overflow-hidden md:overflow-visible">
        <Image
          src="/images/tooth-emblem-gold.png"
          alt=""
          aria-hidden="true"
          width={869}
          height={1314}
          className="pointer-events-none absolute top-1/2 start-1/2 z-0 h-auto w-56 -translate-y-1/2 -translate-x-1/2 opacity-[0.07] rtl:translate-x-1/2"
        />
        <h2 className="relative z-10 text-xl font-semibold text-text md:text-2xl">
          {isHe ? treatment.nameHe : treatment.nameEn}
        </h2>
        <p className="prose-measure relative z-10 text-base leading-relaxed text-text-secondary">
          {isHe ? treatment.descriptionHe : treatment.descriptionEn}
        </p>
      </div>
    </div>
  );
}
