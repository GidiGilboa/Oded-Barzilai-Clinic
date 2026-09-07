import type { Locale } from "@/lib/i18n";
import { clinic, openingHours } from "@/content/shared/clinic";
import { absoluteUrl } from "@/lib/seo";

/**
 * JSON-LD builders. Every field here must be backed by something actually
 * visible on the page — no invented ratings, reviews, hours, or credentials.
 */

export function buildDentistJsonLd(locale: Locale) {
  const isHe = locale === "he";
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${clinic.siteUrl}/#dentist`,
    name: isHe ? clinic.doctorNameHe : clinic.doctorNameEn,
    alternateName: isHe ? clinic.clinicNameHe : clinic.clinicNameEn,
    description: isHe ? clinic.sloganHe : clinic.sloganEn,
    url: absoluteUrl(locale),
    image: `${clinic.siteUrl}/images/doctor-portrait.jpg`,
    priceRange: undefined,
    medicalSpecialty: "Dentistry",
    address: {
      "@type": "PostalAddress",
      streetAddress: isHe ? clinic.streetAddressHe : clinic.streetAddressEn,
      addressLocality: isHe ? clinic.cityHe : clinic.cityEn,
      addressCountry: "IL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.geo.latitude,
      longitude: clinic.geo.longitude,
    },
    hasMap: clinic.mapsLinkUrl,
    telephone: clinic.phoneE164,
    email: clinic.email,
    availableLanguage: ["he", "en"],
    openingHoursSpecification: openingHours.map((row) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: row.schemaDays.map((day) => `https://schema.org/${day}`),
      opens: row.opens,
      closes: row.closes,
    })),
  };
}

export function buildWebsiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${clinic.siteUrl}/#website`,
    url: absoluteUrl(locale),
    name: locale === "he" ? clinic.clinicNameHe : clinic.clinicNameEn,
    inLanguage: locale === "he" ? "he-IL" : "en-US",
  };
}

export function buildBreadcrumbJsonLd(
  locale: Locale,
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(locale, item.path),
    })),
  };
}

export function buildFaqJsonLd(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
