import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "../globals.css";
import { locales, dirForLocale, isLocale, defaultLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { getThemeCss } from "@/styles/themes";
import { clinic } from "@/content/shared/clinic";
import { buildDentistJsonLd, buildWebsiteJsonLd } from "@/lib/structured-data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { JsonLd } from "@/components/JsonLd";
import { AccessibilityWidget, AccessibilityInitScript } from "@/components/AccessibilityWidget";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heebo",
  display: "swap",
});

export const dynamicParams = false;

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(clinic.siteUrl),
    icons: {
      icon: "/icon.png",
      apple: "/apple-icon.png",
    },
    other: {
      "geo.placename": "Ra'anana, Israel",
    },
  };
}

export default async function RootLayout(props: LayoutProps<"/[lang]">) {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);
  const dir = dirForLocale(locale);

  return (
    <html lang={locale} dir={dir} className={heebo.variable} suppressHydrationWarning>
      <head>
        <style>{getThemeCss()}</style>
        <AccessibilityInitScript />
        <JsonLd data={buildDentistJsonLd(locale)} />
        <JsonLd data={buildWebsiteJsonLd(locale)} />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-text antialiased">
        <SkipLink label={dict.nav.skipToContent} />
        <Header locale={locale} nav={dict.nav} />
        <main id="main" className="flex-1 pb-20 md:pb-0">
          {props.children}
        </main>
        <Footer locale={locale} dict={dict} />
        <StickyMobileCTA locale={locale} label={dict.nav.bookAppointment} />
        <AccessibilityWidget locale={locale} dict={dict.accessibilityWidget} />
      </body>
    </html>
  );
}

export function generateViewport() {
  return {
    themeColor: "#FAF9F5",
    width: "device-width",
    initialScale: 1,
  };
}
