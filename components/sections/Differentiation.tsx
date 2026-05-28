"use client";

import { IconBolt, IconCheck, IconX } from "@tabler/icons-react";
import { Kicker } from "@/components/ui/Kicker";
import { PhoneLesson } from "@/components/ui/PhoneLesson";
import { useLang } from "@/context/LangContext";

export function Differentiation() {
  const { lang, t } = useLang();
  const d = t.diff;

  return (
    <section style={{ padding: "30px 0 var(--section-pad)" }}>
      {/* Inset dark block */}
      <div
        className="diff-block"
        style={{
          background: "var(--ink)",
          color: "#fff",
          borderRadius: 36,
          margin: "0 32px",
          padding: "88px 80px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Decorative orb */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -150,
            right: -150,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(closest-side, rgba(29,158,117,.4), transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Inner content — constrained to 1240px, centred */}
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          className="diff-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: 64,
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Left — text */}
          <div>
            <Kicker
              variant="green"
              style={{
                background: "rgba(29,158,117,.2)",
                color: "var(--green-mid)",
              } as React.CSSProperties}
            >
              <IconBolt size={13} />
              {d.kicker}
            </Kicker>

            <h2 className="h2" style={{ color: "#fff", marginTop: 20 }}>
              {d.h2a}
              <em style={{ fontStyle: "normal", color: "var(--green-mid)" }}>{d.h2b}</em>
            </h2>

            <p style={{ color: "rgba(255,255,255,.7)", marginTop: 20, fontSize: 17, lineHeight: 1.6, maxWidth: 520 }}>
              {d.p}
            </p>

            <ul style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14, listStyle: "none" }}>
              {d.checkItems.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 14, fontSize: 15.5, color: "rgba(255,255,255,.92)" }}>
                  <span
                    style={{
                      width: 24, height: 24, borderRadius: "50%",
                      background: "var(--green)", color: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, fontSize: 13,
                    }}
                  >
                    <IconCheck size={13} />
                  </span>
                  {item}
                </li>
              ))}
              {d.crossItems.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 14, fontSize: 15.5, color: "rgba(255,255,255,.45)", textDecoration: "line-through", textDecorationColor: "rgba(255,255,255,.2)" }}>
                  <span
                    style={{
                      width: 24, height: 24, borderRadius: "50%",
                      background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.5)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, fontSize: 13,
                    }}
                  >
                    <IconX size={13} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — phone */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <PhoneLesson lang={lang} />
          </div>
        </div>
        </div> {/* /inner max-width */}
      </div>

      <style>{`
        @media (max-width: 960px) {
          .diff-block { margin: 0 20px !important; padding: 56px 28px !important; border-radius: 28px !important; }
          .diff-grid  { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
