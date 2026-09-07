import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import type { NavDictionary } from "@/lib/dictionary-types";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MobileMenu } from "@/components/MobileMenu";

export function Header({ locale, nav }: { locale: Locale; nav: NavDictionary }) {
  const links = [
    { href: localizedPath(locale), label: nav.home },
    { href: localizedPath(locale, "about"), label: nav.about },
    { href: localizedPath(locale, "treatments"), label: nav.treatments },
    { href: localizedPath(locale, "contact"), label: nav.contact },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-6 md:px-10">
        <Link href={localizedPath(locale)} className="shrink-0">
          <Logo locale={locale} priority />
        </Link>

        <nav aria-label={nav.home} className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.95rem] text-text-secondary transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <LanguageSwitcher locale={locale} label={nav.languageSwitchLabel} />
          <Link
            href={localizedPath(locale, "contact")}
            className="inline-flex min-h-11 items-center justify-center rounded-sm bg-primary px-5 py-2.5 text-[0.95rem] font-medium text-text-inverse transition-colors hover:bg-primary-hover"
          >
            {nav.bookAppointment}
          </Link>
        </div>

        <MobileMenu locale={locale} nav={nav} languageSwitchLabel={nav.languageSwitchLabel} />
      </div>
    </header>
  );
}
