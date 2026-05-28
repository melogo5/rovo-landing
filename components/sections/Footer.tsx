"use client";

import { SectionShell } from "@/components/ui/SectionShell";
import { useT } from "@/context/LangContext";

function LogoMark() {
  return (
    <div style={{ width: 32, height: 32, borderRadius: 9, overflow: "hidden", flexShrink: 0 }}>
      <svg viewBox="0 0 64 64" width={32} height={32} aria-hidden="true">
        <rect fill="var(--green)" width="64" height="64" rx="16" />
        <path d="M28 52 L28 38 L22 30" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 38 L36 32" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="22" cy="26" r="4" fill="none" stroke="#fff" strokeWidth="2" />
        <path d="M36 32 Q44 24 48 16" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="48" cy="14" r="4" fill="#fff" />
      </svg>
    </div>
  );
}

export function Footer() {
  const t = useT();
  const f = t.footer;

  return (
    <footer style={{ padding: "48px 0 60px", borderTop: "0.5px solid var(--border)" }}>
      <SectionShell>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
            color: "var(--ink-4)",
            fontSize: 13,
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: 18, color: "var(--ink)" }}>
            <LogoMark />
            <span>Rovo</span>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 22 }}>
            {([f.links.about, f.links.contact, f.links.telegram] as string[]).map((label) => (
              <a
                key={label}
                href="#"
                style={{ transition: "color .15s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink-2)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = ""; }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div>{f.copy}</div>
        </div>
      </SectionShell>
    </footer>
  );
}
