/**
 * Renders a single-color icon from /public/icons/<icon> (filename including
 * extension — svg or png) using a CSS mask, so its color follows
 * `currentColor` (unlike a plain <img>, whose content is isolated from page
 * CSS).
 */
export function TreatmentIcon({
  icon,
  className = "",
}: {
  icon: string;
  className?: string;
}) {
  const maskUrl = `url(/icons/${icon})`;

  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-current ${className}`}
      style={{
        WebkitMaskImage: maskUrl,
        maskImage: maskUrl,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}
