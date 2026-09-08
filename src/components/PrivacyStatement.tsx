import { clinic } from "@/content/shared/clinic";
import type { PrivacyPageDictionary } from "@/lib/dictionary-types";

export function PrivacyStatement({ page }: { page: PrivacyPageDictionary }) {
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
              {section.blocks.map((block, index) => {
                switch (block.type) {
                  case "paragraph":
                    return (
                      <p
                        key={index}
                        className="prose-measure text-base leading-relaxed text-text-secondary"
                      >
                        {block.text}
                      </p>
                    );
                  case "subheading":
                    return (
                      <h3 key={index} className="text-base font-semibold text-text">
                        {block.text}
                      </h3>
                    );
                  case "list":
                    return (
                      <ul
                        key={index}
                        className="prose-measure flex list-disc flex-col gap-1.5 ps-5 text-base leading-relaxed text-text-secondary"
                      >
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  case "contact":
                    return (
                      <dl key={index} className="flex flex-col gap-1 text-base text-text-secondary">
                        <div className="flex gap-2">
                          <dt className="font-medium text-text">{page.contactLabels.email}:</dt>
                          <dd>{clinic.email}</dd>
                        </div>
                        <div className="flex gap-2">
                          <dt className="font-medium text-text">{page.contactLabels.phone}:</dt>
                          <dd>{clinic.phoneDisplay}</dd>
                        </div>
                      </dl>
                    );
                }
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
