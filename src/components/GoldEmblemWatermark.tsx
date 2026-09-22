import Image from "next/image";

/**
 * A faint brand watermark (the gold tooth mark from the logo) used behind
 * a bright section. Purely decorative — hidden from assistive tech, and
 * kept low-opacity so it never competes with foreground text. The section
 * using this must be `relative overflow-hidden`, and its real content must
 * sit in a sibling with `relative z-10`.
 */
export function GoldEmblemWatermark({
  side = "end",
  size = "md",
}: {
  side?: "start" | "end" | "center";
  size?: "sm" | "md";
}) {
  const positionClass =
    side === "start"
      ? "-top-16 -start-20 md:-top-24 md:-start-24"
      : side === "end"
        ? "-top-16 -end-20 md:-top-24 md:-end-24"
        : "top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2";

  const sizeClass = size === "sm" ? "w-40 md:w-56" : "w-72 md:w-[26rem]";

  return (
    <Image
      src="/images/tooth-emblem-gold.png"
      alt=""
      aria-hidden="true"
      width={869}
      height={1314}
      className={`pointer-events-none absolute z-0 h-auto opacity-[0.08] ${sizeClass} ${positionClass}`}
    />
  );
}
