import { clinic } from "@/content/shared/clinic";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

/**
 * Falls back to the contact page instead of a broken tel:/wa.me link if
 * either number is ever unset in `clinic.ts`.
 */

export function getPhoneHref(): string | undefined {
  return clinic.phoneE164 ? `tel:${clinic.phoneE164}` : undefined;
}

export function getWhatsappHref(locale: Locale): string {
  if (clinic.whatsappE164) {
    return `https://wa.me/${clinic.whatsappE164.replace(/[^0-9]/g, "")}`;
  }
  return `${localizedPath(locale, "contact")}#whatsapp`;
}
