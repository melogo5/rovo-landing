"use client";

import { useLang, type Lang } from "@/context/LangContext";
import { clsx } from "clsx";

export function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div
      role="tablist"
      aria-label="Language"
      className="inline-flex bg-white border border-[0.5px] border-[var(--border)] rounded-full p-[3px] text-[13px] font-semibold"
    >
      {(["ru", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          role="tab"
          aria-selected={lang === l}
          onClick={() => setLang(l)}
          className={clsx(
            "px-[14px] py-[6px] rounded-full transition-all duration-[180ms]",
            lang === l
              ? "bg-[var(--ink)] text-white"
              : "text-[var(--ink-4)] hover:text-[var(--ink-3)]"
          )}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
