import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-[0.95rem] font-medium transition-colors duration-150 min-h-11";

const variants = {
  primary: "bg-primary text-text-inverse hover:bg-primary-hover",
  secondary:
    "border border-border bg-transparent text-text hover:border-accent-text hover:text-text",
  ghost: "text-text underline decoration-border underline-offset-4 hover:decoration-accent-text",
};

type Variant = keyof typeof variants;

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
}

export function LinkButton({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function ActionButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: ActionButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
