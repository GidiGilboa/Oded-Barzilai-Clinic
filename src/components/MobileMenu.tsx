"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedPath, dirForLocale } from "@/lib/i18n";
import type { NavDictionary } from "@/lib/dictionary-types";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function MobileMenu({
  locale,
  nav,
  languageSwitchLabel,
}: {
  locale: Locale;
  nav: NavDictionary;
  languageSwitchLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    firstLinkRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const links = [
    { href: localizedPath(locale), label: nav.home },
    { href: localizedPath(locale, "about"), label: nav.about },
    { href: localizedPath(locale, "treatments"), label: nav.treatments },
    { href: localizedPath(locale, "contact"), label: nav.contact },
  ];

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-sm border border-border text-text"
      >
        <span className="sr-only">{open ? nav.closeMenu : nav.openMenu}</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {open ? (
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          ) : (
            <>
              <path d="M4 7h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              <path d="M4 12h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              <path d="M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label={nav.openMenu}
            dir={dirForLocale(locale)}
            className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col gap-8 overflow-y-auto bg-background px-6 py-8"
          >
            <nav aria-label={nav.home} className="flex flex-col gap-1 text-lg">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-4 text-text"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <LanguageSwitcher locale={locale} label={languageSwitchLabel} className="text-base" />

            <Link
              href={localizedPath(locale, "contact")}
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex min-h-11 items-center justify-center rounded-sm bg-primary px-6 py-3.5 text-center font-medium text-text-inverse"
            >
              {nav.bookAppointment}
            </Link>
          </div>,
          document.body
        )}
    </div>
  );
}
