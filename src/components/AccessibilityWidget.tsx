"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { AccessibilityWidgetDictionary } from "@/lib/dictionary-types";
import type { Locale } from "@/lib/i18n";
import { dirForLocale } from "@/lib/i18n";

const STORAGE_KEY = "a11y-prefs";

type TextSize = 0 | 1 | 2;

interface A11yPrefs {
  textSize: TextSize;
  contrast: boolean;
  reduceMotion: boolean;
  underlineLinks: boolean;
  largeCursor: boolean;
  textSpacing: boolean;
}

const defaultPrefs: A11yPrefs = {
  textSize: 0,
  contrast: false,
  reduceMotion: false,
  underlineLinks: false,
  largeCursor: false,
  textSpacing: false,
};

/**
 * Inline script injected in <head>, before hydration, so a returning
 * visitor's saved preferences apply immediately with no flash of
 * unstyled/default content.
 */
export function AccessibilityInitScript() {
  const code = `(function(){try{var p=JSON.parse(localStorage.getItem(${JSON.stringify(
    STORAGE_KEY
  )})||"{}");var h=document.documentElement;if(p.textSize)h.setAttribute("data-a11y-text-size",String(p.textSize));if(p.contrast)h.setAttribute("data-a11y-contrast","true");if(p.reduceMotion)h.setAttribute("data-a11y-reduce-motion","true");if(p.underlineLinks)h.setAttribute("data-a11y-underline-links","true");if(p.largeCursor)h.setAttribute("data-a11y-large-cursor","true");if(p.textSpacing)h.setAttribute("data-a11y-text-spacing","true");}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

function applyPrefsToDocument(prefs: A11yPrefs) {
  const html = document.documentElement;

  if (prefs.textSize > 0) {
    html.setAttribute("data-a11y-text-size", String(prefs.textSize));
  } else {
    html.removeAttribute("data-a11y-text-size");
  }
  setBooleanAttr(html, "data-a11y-contrast", prefs.contrast);
  setBooleanAttr(html, "data-a11y-reduce-motion", prefs.reduceMotion);
  setBooleanAttr(html, "data-a11y-underline-links", prefs.underlineLinks);
  setBooleanAttr(html, "data-a11y-large-cursor", prefs.largeCursor);
  setBooleanAttr(html, "data-a11y-text-spacing", prefs.textSpacing);
}

function setBooleanAttr(el: HTMLElement, name: string, value: boolean) {
  if (value) {
    el.setAttribute(name, "true");
  } else {
    el.removeAttribute(name);
  }
}

function AccessIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="5.5" r="2.25" fill="currentColor" />
      <path
        d="M4 8.5c2.5.9 5.2 1.35 8 1.35s5.5-.45 8-1.35M12 9.85V21M12 14.5l-3.5 6.2M12 14.5l3.5 6.2M8 12.5l-1.5 3M16 12.5l1.5 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AccessibilityWidget({
  locale,
  dict,
}: {
  locale: Locale;
  dict: AccessibilityWidgetDictionary;
}) {
  const [open, setOpen] = useState(false);
  // Lazy-initialized from localStorage. Safe from hydration mismatches: the
  // panel this state drives is only ever rendered client-side after a user
  // click (`open` always starts false), so it never affects the first paint.
  const [prefs, setPrefs] = useState<A11yPrefs>(() => {
    if (typeof window === "undefined") return defaultPrefs;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? { ...defaultPrefs, ...JSON.parse(stored) } : defaultPrefs;
    } catch {
      return defaultPrefs;
    }
  });
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstControlRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    applyPrefsToDocument(prefs);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // ignore unavailable storage (private browsing, etc.)
    }
  }, [prefs]);

  useEffect(() => {
    if (!open) return;

    firstControlRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const textSizeLabels = [dict.textSizeDefault, dict.textSizeLarge, dict.textSizeLarger];

  const toggles: { key: keyof A11yPrefs; label: string }[] = [
    { key: "contrast", label: dict.contrastLabel },
    { key: "reduceMotion", label: dict.reduceMotionLabel },
    { key: "underlineLinks", label: dict.underlineLinksLabel },
    { key: "largeCursor", label: dict.largeCursorLabel },
    { key: "textSpacing", label: dict.textSpacingLabel },
  ];

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-20 left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-text shadow-sm transition-colors hover:text-accent-text md:bottom-6 md:left-6"
      >
        <span className="sr-only">{open ? dict.closeLabel : dict.openLabel}</span>
        <AccessIcon />
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label={dict.title}
            dir={dirForLocale(locale)}
            className="fixed bottom-36 left-4 z-40 flex w-[min(20rem,calc(100vw-2rem))] flex-col gap-5 rounded-sm border border-border bg-surface p-5 shadow-md md:bottom-24 md:left-6"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-base font-semibold text-text">{dict.title}</h2>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  buttonRef.current?.focus();
                }}
                className="flex h-8 w-8 items-center justify-center rounded-sm text-text-secondary hover:text-text"
              >
                <span className="sr-only">{dict.closeLabel}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 3l10 10M13 3L3 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-text">{dict.textSizeLabel}</span>
              <div className="flex items-center gap-2">
                <button
                  ref={firstControlRef}
                  type="button"
                  aria-label={dict.decreaseText}
                  disabled={prefs.textSize === 0}
                  onClick={() =>
                    setPrefs((p) => ({ ...p, textSize: Math.max(0, p.textSize - 1) as TextSize }))
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-text disabled:opacity-40"
                >
                  A−
                </button>
                <span className="min-w-20 flex-1 text-center text-sm text-text-secondary">
                  {textSizeLabels[prefs.textSize]}
                </span>
                <button
                  type="button"
                  aria-label={dict.increaseText}
                  disabled={prefs.textSize === 2}
                  onClick={() =>
                    setPrefs((p) => ({ ...p, textSize: Math.min(2, p.textSize + 1) as TextSize }))
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-text disabled:opacity-40"
                >
                  A+
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {toggles.map(({ key, label }) => {
                const checked = Boolean(prefs[key]);
                return (
                  <label
                    key={key}
                    className="flex cursor-pointer items-center justify-between gap-4 text-sm text-text"
                  >
                    <span>{label}</span>
                    <span className="relative inline-flex h-6 w-11 shrink-0 items-center">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) =>
                          setPrefs((p) => ({ ...p, [key]: e.target.checked }))
                        }
                        className="peer sr-only"
                      />
                      <span className="absolute inset-0 rounded-full border border-border bg-background-secondary transition-colors peer-checked:border-accent-text peer-checked:bg-accent-text" />
                      <span className="absolute top-0.5 h-5 w-5 rounded-full bg-surface shadow-sm transition-transform ltr:left-0.5 rtl:right-0.5 peer-checked:ltr:translate-x-5 peer-checked:rtl:-translate-x-5" />
                    </span>
                  </label>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setPrefs(defaultPrefs)}
              className="self-start text-sm font-medium text-text underline decoration-border underline-offset-4 hover:decoration-accent-text"
            >
              {dict.reset}
            </button>
          </div>,
          document.body
        )}
    </>
  );
}
