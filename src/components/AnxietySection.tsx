import Image from "next/image";
import type { HomeDictionary } from "@/lib/dictionary-types";

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
      <circle cx="9" cy="9" r="8.25" stroke="var(--color-accent-text)" strokeWidth="1.3" />
      <path d="M5.5 9.3l2.3 2.2 4.7-5" stroke="var(--color-accent-text)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AnxietySection({ content }: { content: HomeDictionary["anxiety"] }) {
  return (
    <section className="bg-background-secondary">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:px-10 md:py-24">
        <div className="relative overflow-visible md:order-1">
          <Image
            src="/images/tooth-emblem-gold.png"
            alt=""
            aria-hidden="true"
            width={869}
            height={1314}
            className="pointer-events-none absolute top-1/2 end-0 z-0 hidden h-auto w-64 -translate-y-1/2 translate-x-1/2 opacity-[0.09] rtl:-translate-x-1/2 md:block md:w-80"
          />
          <div className="relative z-10 flex flex-col gap-5">
            <span className="text-sm font-medium tracking-wide text-accent-text">{content.eyebrow}</span>
            <h2 className="text-balance text-2xl font-semibold text-text md:text-[2rem]">
              {content.title}
            </h2>
            <p className="prose-measure text-base leading-relaxed text-text-secondary">
              {content.body}
            </p>
            <ul className="mt-2 flex flex-col gap-3">
              {content.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[0.95rem] text-text">
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-surface-muted md:order-2">
          <Image
            src="/images/clinic-patient-treatment.jpg"
            alt={content.imageAlt}
            fill
            sizes="(min-width: 768px) 420px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
