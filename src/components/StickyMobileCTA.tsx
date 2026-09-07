import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

export function StickyMobileCTA({ locale, label }: { locale: Locale; label: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-surface p-3 md:hidden">
      <Link
        href={localizedPath(locale, "contact")}
        className="flex min-h-11 w-full items-center justify-center rounded-sm bg-primary px-6 text-[0.95rem] font-medium text-text-inverse"
      >
        {label}
      </Link>
    </div>
  );
}
