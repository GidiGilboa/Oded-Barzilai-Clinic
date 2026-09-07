import Image from "next/image";

/**
 * A very low-opacity, grayscale clinic photo used as ambient background
 * texture behind a section. Purely decorative — hidden from assistive tech,
 * ignores pointer events, and sits below the section's real content
 * (which must be wrapped in a `relative z-10` container alongside it).
 */
export function FadedBackgroundPhoto({
  src,
  position = "center",
}: {
  src: string;
  position?: "center" | "start" | "end";
}) {
  const alignClass =
    position === "start"
      ? "start-0"
      : position === "end"
        ? "end-0"
        : "start-1/2 -translate-x-1/2 rtl:translate-x-1/2";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-0 z-0 h-full w-[46rem] max-w-[85vw] opacity-[0.12] grayscale ${alignClass}`}
      style={{
        maskImage: "radial-gradient(closest-side, black, transparent)",
        WebkitMaskImage: "radial-gradient(closest-side, black, transparent)",
      }}
    >
      <Image src={src} alt="" fill sizes="736px" className="object-cover" />
    </div>
  );
}
