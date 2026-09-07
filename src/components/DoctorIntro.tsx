import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import type { HomeDictionary } from "@/lib/dictionary-types";
import { LinkButton } from "@/components/Button";
import { ArrowIcon } from "@/components/ArrowIcon";

export function DoctorIntro({
  locale,
  content,
}: {
  locale: Locale;
  content: HomeDictionary["doctorIntro"];
}) {
  return (
    <section className="bg-background">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-10 md:py-24">
        <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-full bg-surface-muted ring-1 ring-border md:max-w-none">
          <Image
            src="/images/doctor-xray-review.png"
            alt={content.imageAlt}
            fill
            sizes="(min-width: 768px) 460px, 90vw"
            className="object-cover"
          />
        </div>

        <div className="relative flex flex-col gap-5">
          <Image
            src="/images/tooth-emblem-gold.png"
            alt=""
            aria-hidden="true"
            width={869}
            height={1314}
            className="pointer-events-none absolute top-1/2 start-1/2 z-0 h-auto w-64 -translate-y-1/2 -translate-x-1/2 opacity-[0.07] rtl:translate-x-1/2 md:w-80"
          />
          <span className="relative z-10 text-sm font-medium tracking-wide text-accent-text">
            {content.eyebrow}
          </span>
          <h2 className="relative z-10 text-2xl font-semibold text-text md:text-[2rem]">{content.title}</h2>
          {content.body.map((paragraph) => (
            <p
              key={paragraph}
              className="prose-measure relative z-10 text-base leading-relaxed text-text-secondary"
            >
              {paragraph}
            </p>
          ))}
          <div className="relative z-10 mt-2">
            <LinkButton href={localizedPath(locale, "about")} variant="ghost" className="px-0">
              {content.cta}
              <ArrowIcon />
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
