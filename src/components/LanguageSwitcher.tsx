"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";

const labels: Record<Locale, string> = { he: "עברית", en: "English" };

export function LanguageSwitcher({
  locale,
  label,
  className = "",
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <nav aria-label={label} className={`flex items-center gap-1 text-sm ${className}`}>
      {locales.map((loc, index) => {
        const href = rest ? `/${loc}/${rest}` : `/${loc}`;
        const isActive = loc === locale;
        return (
          <span key={loc} className="flex items-center gap-1">
            {index > 0 && <span className="text-border" aria-hidden="true">|</span>}
            <Link
              href={href}
              aria-current={isActive ? "true" : undefined}
              className={
                isActive
                  ? "px-1 font-medium text-text"
                  : "px-1 text-text-secondary transition-colors hover:text-accent-text"
              }
            >
              {labels[loc]}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
