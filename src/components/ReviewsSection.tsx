import type { ReviewsDictionary } from "@/lib/dictionary-types";
import { SectionHeading } from "@/components/SectionHeading";
import { ReviewsScroller } from "@/components/ReviewsScroller";

export function ReviewsSection({ dict }: { dict: ReviewsDictionary }) {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <SectionHeading align="center" title={dict.title} subtitle={dict.subtitle} />

        <ReviewsScroller
          items={dict.items}
          title={dict.title}
          previousLabel={dict.previousLabel}
          nextLabel={dict.nextLabel}
        />

        {dict.note && (
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-text-secondary">
            {dict.note}
          </p>
        )}
      </div>
    </section>
  );
}
