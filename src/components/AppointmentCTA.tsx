import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import type { HomeDictionary } from "@/lib/dictionary-types";
import { LinkButton } from "@/components/Button";
import { FadedBackgroundPhoto } from "@/components/FadedBackgroundPhoto";

export function AppointmentCTA({
  locale,
  content,
}: {
  locale: Locale;
  content: HomeDictionary["finalCta"];
}) {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background">
      <FadedBackgroundPhoto src="/images/generic-clinic-room-3.jpg" position="start" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-20">
        <div className="flex max-w-lg flex-col gap-2">
          <h2 className="text-2xl font-semibold text-text md:text-[1.85rem]">{content.title}</h2>
          <p className="text-base leading-relaxed text-text-secondary">{content.body}</p>
        </div>
        <LinkButton href={localizedPath(locale, "contact")} variant="primary">
          {content.ctaPrimary}
        </LinkButton>
      </div>
    </section>
  );
}
