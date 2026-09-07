export const locales = ["he", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "he";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dirForLocale(locale: Locale): "rtl" | "ltr" {
  return locale === "he" ? "rtl" : "ltr";
}

/** Localized path helper — builds an internal href for a given locale. */
export function localizedPath(locale: Locale, path: string = ""): string {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}
