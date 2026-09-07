import type { TrustItem } from "@/lib/dictionary-types";
import { FadedBackgroundPhoto } from "@/components/FadedBackgroundPhoto";

export function TrustBar({ title, items }: { title: string; items: TrustItem[] }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background-secondary">
      <FadedBackgroundPhoto src="/images/generic-clinic-room-1.jpg" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-14">
        <h2 className="sr-only">{title}</h2>
        <ul className="grid gap-8 sm:grid-cols-2 md:gap-y-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border rtl:lg:divide-x-reverse">
          {items.map((item) => (
            <li key={item.title} className="flex flex-col gap-2 lg:px-8 lg:first:ps-0 lg:last:pe-0">
              <h3 className="text-base font-medium text-text">{item.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
