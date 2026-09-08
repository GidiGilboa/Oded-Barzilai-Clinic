import type { Metadata } from "next";
import { isLocale, defaultLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { AccessibilityStatement } from "@/components/AccessibilityStatement";

export async function generateMetadata(props: PageProps<"/[lang]/accessibility">): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "accessibility",
    title: dict.accessibilityPage.meta.title,
    description: dict.accessibilityPage.meta.description,
  });
}

export default async function AccessibilityPage(props: PageProps<"/[lang]/accessibility">) {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return <AccessibilityStatement page={dict.accessibilityPage} />;
}
