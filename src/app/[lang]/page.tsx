import type { Metadata } from "next";
import { isLocale, defaultLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { faqItems } from "@/content/shared/faq";
import { buildFaqJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { DoctorIntro } from "@/components/DoctorIntro";
import { HomeTreatmentsSection } from "@/components/HomeTreatmentsSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { AnxietySection } from "@/components/AnxietySection";
import { AestheticSection } from "@/components/AestheticSection";
import { FAQ } from "@/components/FAQ";
import { AppointmentCTA } from "@/components/AppointmentCTA";

export async function generateMetadata(props: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.home.meta.title,
    description: dict.home.meta.description,
  });
}

export default async function HomePage(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);
  const homeFaqs = faqItems.slice(0, 4);

  return (
    <>
      <JsonLd
        data={buildFaqJsonLd(
          homeFaqs.map((item) => ({
            question: locale === "he" ? item.questionHe : item.questionEn,
            answer: locale === "he" ? item.answerHe : item.answerEn,
          }))
        )}
      />
      <Hero locale={locale} hero={dict.home.hero} viewTreatmentsLabel={dict.common.viewAllTreatments} />
      <TrustBar title={dict.home.trust.title} items={dict.home.trust.items} />
      <DoctorIntro locale={locale} content={dict.home.doctorIntro} hygienist={dict.home.hygienistIntro} />
      <HomeTreatmentsSection
        locale={locale}
        content={dict.home.treatmentsSection}
        readMoreLabel={dict.common.readMore}
      />
      <ReviewsSection dict={dict.home.reviews} />
      <AnxietySection content={dict.home.anxiety} />
      <AestheticSection locale={locale} content={dict.home.aesthetic} />
      <FAQ
        locale={locale}
        items={homeFaqs}
        title={dict.home.faqSection.title}
        subtitle={dict.home.faqSection.subtitle}
      />
      <AppointmentCTA locale={locale} content={dict.home.finalCta} />
    </>
  );
}
