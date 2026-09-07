import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { clinic } from "@/content/shared/clinic";

interface BuildMetadataOptions {
  locale: Locale;
  /** Path segment under the locale, without leading/trailing slashes, e.g. "about". Empty for the home page. */
  path?: string;
  title: string;
  description: string;
  /** Relative path to an OG image under /public, defaults to the doctor portrait. */
  ogImage?: string;
}

const siteUrl = clinic.siteUrl;

export function absoluteUrl(locale: Locale, path: string = ""): string {
  const clean = path.replace(/^\/+/, "");
  return clean ? `${siteUrl}/${locale}/${clean}` : `${siteUrl}/${locale}`;
}

export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  ogImage = "/images/doctor-portrait.jpg",
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(locale, path);
  const heUrl = absoluteUrl("he", path);
  const enUrl = absoluteUrl("en", path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        he: heUrl,
        en: enUrl,
        "x-default": heUrl,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: clinic.clinicNameEn,
      locale: locale === "he" ? "he_IL" : "en_US",
      alternateLocale: locale === "he" ? "en_US" : "he_IL",
      images: [{ url: ogImage }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
