import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary-types";
import { clinic } from "@/content/shared/clinic";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const isHe = locale === "he";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
        <div className="flex flex-col gap-4">
          <Logo locale={locale} />
          <p className="max-w-xs text-sm text-text-secondary">{dict.footer.tagline}</p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-medium text-text">{dict.footer.navTitle}</h2>
          <ul className="flex flex-col gap-3 text-sm text-text-secondary">
            <li><Link href={localizedPath(locale)} className="hover:text-text">{dict.nav.home}</Link></li>
            <li><Link href={localizedPath(locale, "about")} className="hover:text-text">{dict.nav.about}</Link></li>
            <li><Link href={localizedPath(locale, "treatments")} className="hover:text-text">{dict.nav.treatments}</Link></li>
            <li><Link href={localizedPath(locale, "contact")} className="hover:text-text">{dict.nav.contact}</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h2 className="mb-4 text-sm font-medium text-text">{dict.common.address}</h2>
            <address className="text-sm not-italic leading-relaxed text-text-secondary">
              {isHe ? clinic.doctorNameHe : clinic.doctorNameEn}
              <br />
              {dict.common.addressValue}
              <br />
              {isHe ? clinic.countryHe : clinic.countryEn}
            </address>
          </div>
          <ul className="flex flex-col gap-2 text-sm text-text-secondary">
            <li>{dict.common.phone}: {clinic.phoneDisplay}</li>
            <li>{dict.common.whatsapp}: {clinic.whatsappDisplay}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-text-secondary md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            © {year} {isHe ? clinic.clinicNameHe : clinic.clinicNameEn} · {dict.footer.rightsReserved}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href={localizedPath(locale, "accessibility")} className="hover:text-text">
              {dict.footer.accessibility}
            </Link>
            <Link href={localizedPath(locale, "privacy")} className="hover:text-text">
              {dict.footer.privacy}
            </Link>
            <LanguageSwitcher locale={locale} label={dict.nav.languageSwitchLabel} />
          </div>
        </div>
      </div>
    </footer>
  );
}
