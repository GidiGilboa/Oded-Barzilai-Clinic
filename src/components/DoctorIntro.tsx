import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import type { HomeDictionary } from "@/lib/dictionary-types";
import { LinkButton } from "@/components/Button";
import { ArrowIcon } from "@/components/ArrowIcon";

function TeamMemberBlock({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  role,
  body,
  ctaLabel,
  ctaHref,
}: {
  imageSrc: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  role?: string;
  body: string[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-10">
      <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-full bg-surface-muted ring-1 ring-border md:max-w-none">
        <Image
          src={imageSrc}
          alt={imageAlt}
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
        {eyebrow && (
          <span className="relative z-10 text-sm font-medium tracking-wide text-accent-text">
            {eyebrow}
          </span>
        )}
        <div className="relative z-10 flex flex-col gap-1">
          <h2 className="text-2xl font-semibold text-text md:text-[2rem]">{title}</h2>
          {role && <span className="text-sm font-medium text-accent-text">{role}</span>}
        </div>
        {body.map((paragraph) => (
          <p
            key={paragraph}
            className="prose-measure relative z-10 text-base leading-relaxed text-text-secondary"
          >
            {paragraph}
          </p>
        ))}
        <div className="relative z-10 mt-2">
          <LinkButton href={ctaHref} variant="ghost" className="px-0">
            {ctaLabel}
            <ArrowIcon />
          </LinkButton>
        </div>
      </div>
    </div>
  );
}

export function DoctorIntro({
  locale,
  content,
  hygienist,
}: {
  locale: Locale;
  content: HomeDictionary["doctorIntro"];
  hygienist: HomeDictionary["hygienistIntro"];
}) {
  const aboutHref = localizedPath(locale, "about");

  return (
    <section className="flex flex-col gap-16 bg-background py-16 md:gap-24 md:py-24">
      <TeamMemberBlock
        imageSrc="/images/doctor-xray-review.png"
        imageAlt={content.imageAlt}
        eyebrow={content.eyebrow}
        title={content.title}
        body={content.body}
        ctaLabel={content.cta}
        ctaHref={aboutHref}
      />
      <TeamMemberBlock
        imageSrc="/images/clinic-staff-portrait.jpg"
        imageAlt={hygienist.imageAlt}
        title={hygienist.title}
        role={hygienist.role}
        body={hygienist.body}
        ctaLabel={hygienist.cta}
        ctaHref={`${aboutHref}#hagit`}
      />
    </section>
  );
}
