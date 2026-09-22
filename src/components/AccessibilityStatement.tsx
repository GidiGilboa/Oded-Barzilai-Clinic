import { clinic } from "@/content/shared/clinic";
import type { AccessibilityPageDictionary } from "@/lib/dictionary-types";

export function AccessibilityStatement({ page }: { page: AccessibilityPageDictionary }) {
  return (
    <section className="bg-background">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-14 md:py-20 md:px-10">
        <h1 className="text-[2rem] font-semibold text-text md:text-[2.5rem]">{page.title}</h1>

        <div className="flex flex-col gap-4">
          {page.intro.map((paragraph) => (
            <p key={paragraph} className="prose-measure text-base leading-relaxed text-text-secondary">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          {page.sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-text">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="prose-measure text-base leading-relaxed text-text-secondary">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="prose-measure flex list-disc flex-col gap-1.5 ps-5 text-base leading-relaxed text-text-secondary">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.note && (
                <p className="prose-measure text-base leading-relaxed text-text-secondary">{section.note}</p>
              )}
              {section.contact && (
                <dl className="flex flex-col gap-1 text-base text-text-secondary">
                  <div className="flex gap-2">
                    <dt className="font-medium text-text">{page.contactLabels.email}:</dt>
                    <dd>{clinic.email}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium text-text">{page.contactLabels.phone}:</dt>
                    <dd>{clinic.phoneDisplay}</dd>
                  </div>
                </dl>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
