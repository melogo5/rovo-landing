"use client";

import { IconBolt, IconArrowRight, IconClock } from "@tabler/icons-react";
import { Kicker } from "@/components/ui/Kicker";
import { SectionShell } from "@/components/ui/SectionShell";
import { useT } from "@/context/LangContext";

export function FinalCta() {
  const t = useT();
  const f = t.finalCta;

  return (
    <section id="final" style={{ padding: "90px 0 110px" }}>
      <SectionShell>
        <div
          className="final-card"
          style={{
            background: "linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%)",
            borderRadius: 36,
            padding: "80px 64px",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {/* Decorative orbs */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              width: 520,
              height: 520,
              top: -260,
              left: -100,
              borderRadius: "50%",
              background: "radial-gradient(closest-side, rgba(255,255,255,.18), transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              width: 420,
              height: 420,
              bottom: -220,
              right: -140,
              borderRadius: "50%",
              background: "radial-gradient(closest-side, rgba(255,255,255,.18), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 1, maxWidth: 680, margin: "0 auto" }}>
            <Kicker
              variant="green"
              style={{ background: "rgba(255,255,255,.18)", color: "#fff" } as React.CSSProperties}
            >
              <IconBolt size={13} />
              {f.kicker}
            </Kicker>

            <h2
              style={{
                marginTop: 22,
                color: "#fff",
                fontSize: "clamp(32px, 4.2vw, 52px)",
                fontWeight: 800,
                letterSpacing: "-0.028em",
                lineHeight: 1.05,
              }}
            >
              {f.h2}
            </h2>

            <p style={{ marginTop: 18, fontSize: 18, color: "rgba(255,255,255,.85)", lineHeight: 1.55 }}>
              {f.p}
            </p>

            <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
              <a
                href="#survey"
                style={{
                  background: "#fff",
                  color: "var(--green-dark)",
                  padding: "16px 30px",
                  borderRadius: 14,
                  fontWeight: 700,
                  fontSize: 16,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "all .2s",
                  boxShadow: "0 18px 40px -14px rgba(0,0,0,.25)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; }}
              >
                {f.btn}
                <IconArrowRight size={18} />
              </a>

              <span style={{ fontSize: 13, color: "rgba(255,255,255,.7)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                <IconClock size={13} />
                {f.mini}
              </span>
            </div>
          </div>
        </div>
      </SectionShell>

      <style>{`
        @media (max-width: 640px) {
          .final-card { padding: 56px 28px !important; border-radius: 28px !important; }
        }
      `}</style>
    </section>
  );
}
