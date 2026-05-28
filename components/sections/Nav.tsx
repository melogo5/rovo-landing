"use client";

import { IconArrowRight } from "@tabler/icons-react";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useT } from "@/context/LangContext";

function LogoMark() {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 9,
        overflow: "hidden",
        flexShrink: 0,
        boxShadow: "0 6px 16px -6px var(--green-shadow)",
      }}
    >
      <svg viewBox="0 0 64 64" width={32} height={32} aria-hidden="true">
        <rect fill="var(--green)" width="64" height="64" rx="16" />
        <path
          d="M28 52 L28 38 L22 30"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 38 L36 32"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="22" cy="26" r="4" fill="none" stroke="#fff" strokeWidth="2" />
        <path
          d="M36 32 Q44 24 48 16"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="48" cy="14" r="4" fill="#fff" />
      </svg>
    </div>
  );
}

export function Nav() {
  const t = useT();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "saturate(140%) blur(14px)",
        WebkitBackdropFilter: "saturate(140%) blur(14px)",
        background: "rgba(251,251,249,.75)",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      <div
        className="max-w-[1240px] mx-auto px-8 max-[640px]:px-5"
        style={{
          padding: "14px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: 18, color: "var(--ink)", letterSpacing: "-0.01em" }}>
          <LogoMark />
          <span>Rovo</span>
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <LanguageToggle />
          <a
            href="#final"
            className="hidden sm:inline-flex items-center gap-1.5"
            style={{
              padding: "9px 18px",
              borderRadius: 999,
              background: "var(--green)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 13,
              boxShadow: "0 6px 14px -6px var(--green-shadow-soft)",
              transition: "all .2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 22px -8px var(--green-shadow-soft)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 14px -6px var(--green-shadow-soft)";
            }}
          >
            {t.nav.cta}
            <IconArrowRight size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}
