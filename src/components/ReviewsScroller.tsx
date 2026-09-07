"use client";

import { useRef, useState } from "react";
import type { ReviewItem } from "@/lib/dictionary-types";

function QuoteMark() {
  return (
    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden="true" className="text-accent-text">
      <path
        d="M0 22V13.75C0 6.16 4.62 1.32 11.55 0L13.75 3.85C9.35 5.5 6.6 8.25 6.05 12.1H12.1V22H0ZM15.4 22V13.75C15.4 6.16 20.02 1.32 26.95 0L29.15 3.85C24.75 5.5 22 8.25 21.45 12.1H27.5V22H15.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "prev" | "next" }) {
  const d = direction === "prev" ? "M10 3.5L5.5 8L10 12.5" : "M6 3.5L10.5 8L6 12.5";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="rtl:rotate-180">
      <path d={d} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ReviewsScroller({
  items,
  title,
  previousLabel,
  nextLabel,
}: {
  items: ReviewItem[];
  title: string;
  previousLabel: string;
  nextLabel: string;
}) {
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [index, setIndex] = useState(0);

  function goTo(nextIndex: number) {
    const clamped = Math.max(0, Math.min(items.length - 1, nextIndex));
    setIndex(clamped);
    cardRefs.current[clamped]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }

  return (
    <div className="mt-12">
      <ul
        aria-label={title}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:thin]"
      >
        {items.map((item, i) => (
          <li
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="flex w-72 shrink-0 snap-start flex-col gap-4 border border-border bg-surface p-6 sm:w-80"
          >
            <QuoteMark />
            <p className="flex-1 text-[0.95rem] italic leading-relaxed text-text-secondary">
              {item.quote}
            </p>
            <p className="text-sm font-medium text-text">{item.name}</p>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-accent-text hover:text-accent-text disabled:opacity-30"
        >
          <span className="sr-only">{previousLabel}</span>
          <ChevronIcon direction="prev" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          disabled={index === items.length - 1}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-accent-text hover:text-accent-text disabled:opacity-30"
        >
          <span className="sr-only">{nextLabel}</span>
          <ChevronIcon direction="next" />
        </button>
      </div>
    </div>
  );
}
