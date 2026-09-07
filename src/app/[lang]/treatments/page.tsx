import type { Metadata } from "next";
import Image from "next/image";
import { isLocale, defaultLocale, localizedPath } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { treatments } from "@/content/shared/treatments";
import { JsonLd } from "@/components/JsonLd";
import { TreatmentDetailRow } from "@/components/TreatmentDetailRow";
import { InlineCTA } from "@/components/InlineCTA";
import { GoldEmblemWatermark } from "@/components/GoldEmblemWatermark";

export async function generateMetadata(props: PageProps<"/[lang]/treatments">): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "treatments",
    title: dict.treatments.meta.title,
    description: dict.treatments.meta.description,
  });
}

export default async function TreatmentsPage(props: PageProps<"/[lang]/treatments">) {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd(locale, [
          { name: dict.nav.home, path: "" },
          { name: dict.nav.treatments, path: "treatments" },
        ])}
      />

      <section className="relative overflow-hidden border-b border-border bg-background">
        <GoldEmblemWatermark side="end" />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:py-20 md:px-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-[2rem] font-semibold text-text md:text-[2.5rem]">{dict.treatments.title}</h1>
            <p className="prose-measure text-lg leading-relaxed text-text-secondary">{dict.treatments.intro}</p>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-surface-muted ring-1 ring-border md:mx-0 md:justify-self-end">
            <Image
              src="/images/doctor-generic.jpg"
              alt={dict.treatments.mainImageAlt}
              fill
              sizes="(min-width: 768px) 380px, 80vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
          {treatments.map((treatment, index) => (
            <TreatmentDetailRow
              key={treatment.id}
              locale={locale}
              treatment={treatment}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <InlineCTA
        title={dict.treatments.ctaTitle}
        body={dict.treatments.ctaBody}
        buttonLabel={dict.treatments.ctaButton}
        href={localizedPath(locale, "contact")}
      />
    </>
  );
}
