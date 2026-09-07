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
        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-14 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:py-20 md:px-10">
          <div className="relative aspect-[5/6] w-full max-w-sm overflow-hidden rounded-full bg-surface-muted ring-1 ring-border md:max-w-none">
            <Image
              src="/images/doctor-portrait.jpg"
              alt={dict.about.imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 420px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-[2rem] font-semibold text-text md:text-[2.5rem]">{dict.about.title}</h1>
            <p className="prose-measure text-lg leading-relaxed text-text-secondary">{dict.about.intro}</p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-12 px-6 py-16 md:px-10 md:py-24">
          {dict.about.sections.map((section) => {
            const isPlaceholder = section.body.includes("[");
            return (
              <div key={section.heading} className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-text">{section.heading}</h2>
                <p
                  className={
                    isPlaceholder
                      ? "border border-dashed border-border bg-surface-muted p-4 text-[0.95rem] italic leading-relaxed text-text-secondary"
                      : "text-base leading-relaxed text-text-secondary"
                  }
                >
                  {section.body}
                </p>
              </div>
            );
          })}

          <p className="text-sm leading-relaxed text-text-secondary">{dict.about.placeholdersNote}</p>
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
