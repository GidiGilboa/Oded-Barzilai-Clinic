import Image from "next/image";
import type { Locale } from "@/lib/i18n";

export function Logo({ locale, priority = false }: { locale: Locale; priority?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Image
        src="/images/logo-barzilai-header.png"
        alt="ברזילי — מרפאת שיניים ושיקום הפה"
        width={800}
        height={394}
        priority={priority}
        unoptimized
        className="h-9 w-auto sm:h-11"
      />
      {locale === "en" && (
        <span className="hidden flex-col leading-tight sm:flex">
          <span className="text-sm font-medium text-text">Dr. Oded Barzilai</span>
          <span className="text-xs text-text-secondary">Dental Clinic</span>
        </span>
      )}
    </span>
  );
}
