import type { Metadata } from "next";
import Image from "next/image";
import { isLocale, defaultLocale, localizedPath } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/JsonLd";
import { InlineCTA } from "@/components/InlineCTA";
import { GoldEmblemWatermark } from "@/components/GoldEmblemWatermark";

export async function generateMetadata(props: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "about",
    title: dict.about.meta.title,
    description: dict.about.meta.description,
  });
}

export default async function AboutPage(props: PageProps<"/[lang]/about">) {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd(locale, [
          { name: dict.nav.home, path: "" },
          { name: dict.nav.about, path: "about" },
        ])}
      />

      <section className="relative overflow-hidden border-b border-border bg-background">
        <GoldEmblemWatermark side="start" />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-start gap-12 px-6 py-14 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:py-20 md:px-10">
          <div className="relative aspect-[5/6] w-full max-w-sm overflow-hidden rounded-full bg-surface-muted ring-1 ring-border md:max-w-none">
            <Image
              src="/images/oded-navy-scrubs.jpg"
              alt={dict.about.imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 420px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h1 className="text-[2rem] font-semibold text-text md:text-[2.5rem]">{dict.about.title}</h1>
              <span className="text-sm font-medium text-accent-text">{dict.about.role}</span>
            </div>
            {dict.about.body.map((paragraph) => (
              <p key={paragraph} className="prose-measure text-base leading-relaxed text-text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="hagit" className="scroll-mt-24 border-t border-border bg-background">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-12 px-6 py-16 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-10 md:py-24">
          <div className="relative aspect-[5/6] w-full max-w-sm overflow-hidden rounded-full bg-surface-muted ring-1 ring-border md:max-w-none">
            <Image
              src="/images/hagit-single.jpg"
              alt={dict.about.hygienist.imageAlt}
              fill
              sizes="(min-width: 768px) 420px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h2 className="text-[1.75rem] font-semibold text-text md:text-[2rem]">
                {dict.about.hygienist.name}
              </h2>
              <span className="text-sm font-medium text-accent-text">{dict.about.hygienist.role}</span>
            </div>
            {dict.about.hygienist.body.map((paragraph) => (
              <p key={paragraph} className="prose-measure text-base leading-relaxed text-text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <InlineCTA
        title={dict.about.cta.title}
        body={dict.about.cta.body}
        buttonLabel={dict.about.cta.button}
        href={localizedPath(locale, "contact")}
      />
    </>
  );
}
