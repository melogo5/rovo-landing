"use client";

import { IconTarget, IconUser, IconUsers, IconBulb, IconMoodConfuzed, IconMoodNeutral } from "@tabler/icons-react";
import { Kicker } from "@/components/ui/Kicker";
import { SectionShell } from "@/components/ui/SectionShell";
import { useT } from "@/context/LangContext";

export function Problem() {
  const t = useT();
  const p = t.problem;

  return (
    <section
      style={{
        padding: "var(--section-pad) 0",
        background: "linear-gradient(to bottom, transparent 0, var(--sand) 40%, var(--sand) 100%)",
      }}
    >
      <SectionShell>
        {/* Head */}
        <div style={{ maxWidth: 740, marginBottom: 48 }}>
          <Kicker variant="muted">
            <IconTarget size={13} />
            {p.kicker}
          </Kicker>
          <h2 className="h2" style={{ marginTop: 14 }}>{p.h2}</h2>
          <p className="lead" style={{ marginTop: 18 }}>{p.lead}</p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 22,
          }}
          className="problem-grid"
        >
          {/* Card A — Beginner */}
          <article
            style={{
              background: "#fff",
              borderRadius: "var(--radius-lg)",
              padding: 34,
              border: "0.5px solid var(--border)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <IconMoodConfuzed
              size={32}
              style={{ position: "absolute", right: 24, top: 24, color: "var(--ink-5)", opacity: 0.5 }}
            />
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 12px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 700,
                background: "var(--green-soft)",
                color: "var(--green-dark)",
              }}
            >
              <IconUser size={13} />
              {p.cardA.tag}
            </span>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 22,
                fontWeight: 600,
                color: "var(--ink)",
                lineHeight: 1.32,
                letterSpacing: "-0.015em",
                margin: "22px 0 18px",
              }}
            >
              {p.cardA.quote}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "var(--ink-4)",
                fontSize: 13.5,
                borderTop: "0.5px dashed var(--border-2)",
                paddingTop: 14,
              }}
            >
              <IconBulb size={16} style={{ color: "var(--ink-5)", flexShrink: 0 }} />
              <span>{p.cardA.hint}</span>
            </div>
          </article>

          {/* Card B — Club player */}
          <article
            style={{
              background: "#fff",
              borderRadius: "var(--radius-lg)",
              padding: 34,
              border: "0.5px solid var(--border)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <IconMoodNeutral
              size={32}
              style={{ position: "absolute", right: 24, top: 24, color: "var(--ink-5)", opacity: 0.5 }}
            />
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 12px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 700,
                background: "var(--warm-soft)",
                color: "var(--warm-ink)",
              }}
            >
              <IconUsers size={13} />
              {p.cardB.tag}
            </span>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 22,
                fontWeight: 600,
                color: "var(--ink)",
                lineHeight: 1.32,
                letterSpacing: "-0.015em",
                margin: "22px 0 18px",
              }}
            >
              {p.cardB.quote}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "var(--ink-4)",
                fontSize: 13.5,
                borderTop: "0.5px dashed var(--border-2)",
                paddingTop: 14,
              }}
            >
              <IconBulb size={16} style={{ color: "var(--ink-5)", flexShrink: 0 }} />
              <span>{p.cardB.hint}</span>
            </div>
          </article>
        </div>
      </SectionShell>

      <style>{`
        @media (max-width: 780px) {
          .problem-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
