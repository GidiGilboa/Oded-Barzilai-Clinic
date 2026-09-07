import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import type { HomeDictionary } from "@/lib/dictionary-types";
import { LinkButton } from "@/components/Button";
import { GoldEmblemWatermark } from "@/components/GoldEmblemWatermark";

export function Hero({
  locale,
  hero,
  viewTreatmentsLabel,
}: {
  locale: Locale;
  hero: HomeDictionary["hero"];
  viewTreatmentsLabel: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <GoldEmblemWatermark side="center" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:py-20 md:px-10">
        <div className="flex flex-col gap-5">
          <span className="text-lg font-semibold text-text md:text-xl">{hero.eyebrow}</span>
          <h1 className="text-balance text-[2.1rem] font-semibold leading-[1.15] text-text md:text-[2.75rem]">
            {hero.title}
          </h1>
          <p className="max-w-lg text-balance text-lg leading-relaxed text-text-secondary">
            {hero.subtitle}
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <LinkButton href={localizedPath(locale, "contact")} variant="primary">
              {hero.ctaPrimary}
            </LinkButton>
            <LinkButton href={localizedPath(locale, "treatments")} variant="secondary">
              {viewTreatmentsLabel}
            </LinkButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:mx-0 md:justify-self-end">
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-full bg-background-secondary md:-inset-8"
          />
          <div className="relative aspect-square w-full overflow-hidden rounded-full bg-surface-muted ring-1 ring-border">
            <Image
              src="/images/doctor-portrait.jpg"
              alt={hero.imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 380px, 80vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 start-1/2 flex -translate-x-1/2 translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2 shadow-sm rtl:translate-x-1/2">
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span className="text-sm font-medium text-text">{hero.eyebrow}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
