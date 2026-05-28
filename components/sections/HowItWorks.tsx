"use client";

import { IconRoute, IconRoute2, IconPlayerPlay, IconTrendingUp } from "@tabler/icons-react";
import { Kicker } from "@/components/ui/Kicker";
import { SectionShell } from "@/components/ui/SectionShell";
import { useT } from "@/context/LangContext";

export function HowItWorks() {
  const t = useT();
  const h = t.how;

  const steps = [
    { num: "01", icon: <IconRoute2 size={26} color="#fff" />, title: h.step1.title, desc: h.step1.desc },
    { num: "02", icon: <IconPlayerPlay size={26} color="#fff" />, title: h.step2.title, desc: h.step2.desc },
    { num: "03", icon: <IconTrendingUp size={26} color="#fff" />, title: h.step3.title, desc: h.step3.desc },
  ];

  return (
    <section id="how" style={{ padding: "var(--section-pad) 0" }}>
      <SectionShell>
        {/* Head */}
        <div style={{ maxWidth: 740, marginBottom: 48 }}>
          <Kicker variant="green">
            <IconRoute size={13} />
            {h.kicker}
          </Kicker>
          <h2 className="h2" style={{ marginTop: 14 }}>{h.h2}</h2>
        </div>

        {/* Steps grid */}
        <div
          className="steps-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, position: "relative" }}
        >
          {steps.map((s) => (
            <div
              key={s.num}
              style={{
                background: "#fff",
                border: "0.5px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: 32,
                position: "relative",
              }}
            >
              {/* Decorative number */}
              <span
                style={{
                  position: "absolute",
                  top: 28,
                  right: 28,
                  fontFamily: "var(--font-body)",
                  fontSize: 54,
                  fontWeight: 800,
                  color: "var(--green-soft)",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.9,
                  userSelect: "none",
                }}
              >
                {s.num}
              </span>

              {/* Icon */}
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 16,
                  background: "var(--green)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 12px 24px -10px var(--green-shadow-soft)",
                }}
              >
                {s.icon}
              </div>

              <h3 className="h3" style={{ marginTop: 24 }}>{s.title}</h3>
              <p style={{ marginTop: 10, fontSize: 15, color: "var(--ink-3)", lineHeight: 1.55 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <style>{`
        @media (max-width: 860px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
