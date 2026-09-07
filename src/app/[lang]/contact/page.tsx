import type { Metadata } from "next";
import Image from "next/image";
import { isLocale, defaultLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/JsonLd";
import { ContactDetails } from "@/components/ContactDetails";
import { ContactForm } from "@/components/ContactForm";
import { GoldEmblemWatermark } from "@/components/GoldEmblemWatermark";

export async function generateMetadata(props: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "contact",
    title: dict.contact.meta.title,
    description: dict.contact.meta.description,
  });
}

export default async function ContactPage(props: PageProps<"/[lang]/contact">) {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd(locale, [
          { name: dict.nav.home, path: "" },
          { name: dict.nav.contact, path: "contact" },
        ])}
      />

      <section className="relative overflow-hidden border-b border-border bg-background">
        <GoldEmblemWatermark side="end" />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:py-20 md:px-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-[2rem] font-semibold text-text md:text-[2.5rem]">{dict.contact.title}</h1>
            <p className="prose-measure text-lg leading-relaxed text-text-secondary">{dict.contact.intro}</p>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-surface-muted ring-1 ring-border md:mx-0 md:justify-self-end">
            <Image
              src="/images/clinic-interior-1.webp"
              alt={dict.contact.mainImageAlt}
              fill
              sizes="(min-width: 768px) 380px, 80vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
          <ContactDetails locale={locale} dict={dict} />

          <div id="contact-form" className="scroll-mt-24">
            <h2 className="mb-4 text-lg font-medium text-text">{dict.contact.formTitle}</h2>
            <ContactForm form={dict.contact.form} />
          </div>
        </div>
      </section>
    </>
  );
}
