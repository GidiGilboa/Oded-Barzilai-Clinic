import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import type { HomeDictionary } from "@/lib/dictionary-types";
import { LinkButton } from "@/components/Button";
import { ArrowIcon } from "@/components/ArrowIcon";

export function AestheticSection({
  locale,
  content,
}: {
  locale: Locale;
  content: HomeDictionary["aesthetic"];
}) {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm bg-surface-muted">
          <Image
            src="/images/patient-2.jpg"
            alt={content.imageAlt}
            fill
            sizes="(min-width: 1024px) 1120px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-start gap-4 md:items-center md:text-center">
          <span className="text-sm font-medium tracking-wide text-accent-text">{content.eyebrow}</span>
          <h2 className="text-balance text-2xl font-semibold text-text md:text-[2rem]">
            {content.title}
          </h2>
          <p className="text-balance text-base leading-relaxed text-text-secondary">
            {content.body}
          </p>
          <LinkButton href={localizedPath(locale, "treatments")} variant="ghost" className="px-0">
            {content.cta}
            <ArrowIcon />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
