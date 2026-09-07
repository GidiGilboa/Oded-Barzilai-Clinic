/**
 * Centralized design-token system.
 *
 * The whole website is styled through the semantic CSS custom properties
 * generated from this file (see `src/app/[lang]/layout.tsx`, which reads
 * `ACTIVE_THEME` and writes the matching palette onto `:root` in a single
 * inline <style> tag). Components never hard-code colors — they use
 * Tailwind utilities that map to these variables (see `globals.css`).
 *
 * To change the entire visual identity of the site, edit ONE line:
 *
 *   export const ACTIVE_THEME: ThemeName = "CALM_HUMAN";
 *
 * to
 *
 *   export const ACTIVE_THEME: ThemeName = "WARM_MEDICAL_LUXURY";
 */

export type ThemeName = "CALM_HUMAN" | "WARM_MEDICAL_LUXURY";

/** The single switch that controls the entire site's visual identity. */
export const ACTIVE_THEME: ThemeName = "CALM_HUMAN";

export interface ThemeTokens {
  /** Main page background. */
  background: string;
  /** Alternating section background (slightly tinted, for rhythm). */
  backgroundSecondary: string;
  /** Card / raised surface background. */
  surface: string;
  /** Muted surface used for quiet callouts (forms, quote blocks). */
  surfaceMuted: string;
  /** Primary body text. */
  text: string;
  /** Secondary / supporting text. */
  textSecondary: string;
  /** Text placed on top of a `primary` colored background. */
  textInverse: string;
  /** Default hairline border color. */
  border: string;
  /** Solid button / primary UI color. Intentionally dark, not gold. */
  primary: string;
  /** Hover state for `primary`. */
  primaryHover: string;
  /** The brand gold, used only for purely decorative fills (never text/icons — too low-contrast to read reliably). */
  accent: string;
  /** A soft tint of the accent gold, for faint fills / badges. */
  accentSoft: string;
  /** A deeper, accessible gold for text, icons, and focus indicators (meets 4.5:1 on light backgrounds). */
  accentText: string;
  /** Used for calm confirmation states (form success, etc.). */
  success: string;
  /** Border/background for error states. */
  danger: string;
}

export const themes: Record<ThemeName, ThemeTokens> = {
  CALM_HUMAN: {
    background: "#FAF9F5",
    backgroundSecondary: "#E7ECE7",
    surface: "#FFFFFF",
    surfaceMuted: "#F1EEE7",
    text: "#28302D",
    textSecondary: "#5F6863",
    textInverse: "#FFFFFF",
    border: "#DDDCD5",
    primary: "#28302D",
    primaryHover: "#3B453F",
    accent: "#B99A55",
    accentSoft: "#EFE6D2",
    accentText: "#8A6B33",
    success: "#5C7A61",
    danger: "#A24B3F",
  },
  WARM_MEDICAL_LUXURY: {
    background: "#F8F6F1",
    backgroundSecondary: "#E9E2D6",
    surface: "#FFFFFF",
    surfaceMuted: "#EFE7DA",
    text: "#292725",
    textSecondary: "#6F6962",
    textInverse: "#FFFFFF",
    border: "#DDD7CD",
    primary: "#292725",
    primaryHover: "#3E3A36",
    accent: "#B99A55",
    accentSoft: "#EFE0C4",
    accentText: "#8A6B33",
    success: "#6B7F52",
    danger: "#A24B3F",
  },
};

const cssVarNameMap: Record<keyof ThemeTokens, string> = {
  background: "--color-background",
  backgroundSecondary: "--color-background-secondary",
  surface: "--color-surface",
  surfaceMuted: "--color-surface-muted",
  text: "--color-text",
  textSecondary: "--color-text-secondary",
  textInverse: "--color-text-inverse",
  border: "--color-border",
  primary: "--color-primary",
  primaryHover: "--color-primary-hover",
  accent: "--color-accent",
  accentSoft: "--color-accent-soft",
  accentText: "--color-accent-text",
  success: "--color-success",
  danger: "--color-danger",
};

/** Renders the active theme's tokens as a `:root { ... }` CSS string. */
export function getThemeCss(theme: ThemeName = ACTIVE_THEME): string {
  const tokens = themes[theme];
  const declarations = (Object.keys(tokens) as (keyof ThemeTokens)[])
    .map((key) => `${cssVarNameMap[key]}: ${tokens[key]};`)
    .join("\n    ");
  return `:root {\n    ${declarations}\n  }`;
}
