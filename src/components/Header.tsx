import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import type { NavDictionary } from "@/lib/dictionary-types";
import { clinic } from "@/content/shared/clinic";
import { getPhoneHref } from "@/lib/contact-links";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MobileMenu } from "@/components/MobileMenu";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header({ locale, nav }: { locale: Locale; nav: NavDictionary }) {
  const links = [
    { href: localizedPath(locale), label: nav.home },
    { href: localizedPath(locale, "about"), label: nav.about },
    { href: localizedPath(locale, "treatments"), label: nav.treatments },
    { href: localizedPath(locale, "contact"), label: nav.contact },
  ];

  const phoneHref = getPhoneHref();
  const phoneDisplay = locale === "he" ? clinic.phoneDisplay : clinic.phoneDisplayEn;

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
          {phoneHref && (
            <a
              href={phoneHref}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-[0.95rem] font-medium text-text-inverse transition-colors hover:bg-primary-hover"
            >
              <PhoneIcon />
              {phoneDisplay}
            </a>
          )}
        </div>

        {phoneHref && (
          <a
            href={phoneHref}
            aria-label={nav.callLabel}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-border text-text md:hidden"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
        )}

        <MobileMenu locale={locale} nav={nav} languageSwitchLabel={nav.languageSwitchLabel} />
      </div>
    </header>
  );
}
