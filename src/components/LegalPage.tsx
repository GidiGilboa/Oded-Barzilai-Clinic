import type { LegalPageDictionary } from "@/lib/dictionary-types";

export function LegalPage({ page }: { page: LegalPageDictionary }) {
  return (
    <section className="bg-background">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-14 md:py-20 md:px-10">
        <h1 className="text-[2rem] font-semibold text-text md:text-[2.5rem]">{page.title}</h1>

        <div className="border-s-4 border-accent-text bg-surface-muted p-5 text-sm leading-relaxed text-text-secondary">
          {page.reviewNotice}
        </div>

        <div className="flex flex-col gap-5">
          {page.body.map((paragraph) => (
            <p key={paragraph} className="prose-measure text-base leading-relaxed text-text-secondary">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
