"use client";

import { IconStack2, IconClock, IconSeeding, IconShield, IconFlame, IconBeach } from "@tabler/icons-react";
import { Kicker } from "@/components/ui/Kicker";
import { SectionShell } from "@/components/ui/SectionShell";
import { useT } from "@/context/LangContext";

const COVERS = [
  { cls: "c1", gradient: "linear-gradient(135deg, #9FE1CB, #5DCAA5)", icon: <IconSeeding size={20} /> },
  { cls: "c2", gradient: "linear-gradient(135deg, #BFE2F5, #7FB5DC)", icon: <IconShield size={20} /> },
  { cls: "c3", gradient: "linear-gradient(135deg, #FAEEDA, #EFB668)", icon: <IconFlame size={20} /> },
  { cls: "c4", gradient: "linear-gradient(135deg, #F5D7A7, #E89B4C)", icon: <IconBeach size={20} /> },
];

export function Programs() {
  const t = useT();
  const p = t.programs;

  return (
    <section style={{ padding: "var(--section-pad) 0" }}>
      <SectionShell>
        {/* Head */}
        <div style={{ maxWidth: 740, marginBottom: 48 }}>
          <Kicker variant="green">
            <IconStack2 size={13} />
            {p.kicker}
          </Kicker>
          <h2 className="h2" style={{ marginTop: 14 }}>{p.h2}</h2>
          <p className="lead" style={{ marginTop: 18 }}>{p.lead}</p>
        </div>

        {/* Cards grid */}
        <div
          className="prog-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}
        >
          {p.items.map((item, i) => (
            <article
              key={item.title}
              className="prog-card"
              style={{
                background: "#fff",
                border: "0.5px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: 24,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "all .2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 28px 50px -22px rgba(15,46,40,.18)";
                el.style.borderColor = "var(--green-pale)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "";
                el.style.boxShadow = "";
                el.style.borderColor = "var(--border)";
              }}
            >
              {/* Cover */}
              <div
                style={{
                  height: 130,
                  borderRadius: 16,
                  marginBottom: 18,
                  background: COVERS[i].gradient,
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: 14,
                }}
              >
                {/* Icon badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    right: 14,
                    width: 38,
                    height: 38,
                    borderRadius: 11,
                    background: "rgba(255,255,255,.85)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(4px)",
                    color: "var(--ink)",
                  }}
                >
                  {COVERS[i].icon}
                </div>
                {/* Days pill */}
                <span
                  style={{
                    background: "rgba(255,255,255,.92)",
                    color: "var(--ink)",
                    padding: "5px 10px",
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.days}
                </span>
              </div>

              {/* Title row */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: 18, fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.015em" }}>
                  {item.title}
                </span>
                {item.popular && (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      background: "var(--warm-soft)",
                      color: "var(--warm-ink)",
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: 999,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {p.popular}
                  </span>
                )}
              </div>

              {/* Desc */}
              <p style={{ fontSize: 14, color: "var(--ink-3)", lineHeight: 1.55, marginTop: 10, flex: 1 }}>
                {item.desc}
              </p>

              {/* Meta */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 16,
                  paddingTop: 14,
                  borderTop: "0.5px dashed var(--border-2)",
                  fontSize: 12,
                  color: "var(--ink-4)",
                }}
              >
                <IconClock size={14} />
                <span>{p.metaTime}</span>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <style>{`
        @media (max-width: 1080px) { .prog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px)  { .prog-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
