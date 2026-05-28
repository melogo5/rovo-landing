"use client";

import { IconArrowRight, IconPlayerPlay, IconSparkles, IconFlame, IconTrophy } from "@tabler/icons-react";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { PhoneSkillTree } from "@/components/ui/PhoneSkillTree";
import { useLang } from "@/context/LangContext";

export function Hero() {
  const { lang, t } = useLang();
  const h = t.hero;

  return (
    <section
      style={{
        position: "relative",
        padding: "48px 0 80px",
        overflow: "hidden",
      }}
    >
      {/* Radial glow — top right */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-10%",
          bottom: -120,
          width: 780,
          height: 780,
          borderRadius: "50%",
          background: "radial-gradient(closest-side, var(--green-glow), transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="max-w-[1240px] mx-auto px-8 max-[640px]:px-5"
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1.05fr .95fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        {/* ── Left column ── */}
        <div>
          <Kicker variant="green">
            <IconSparkles size={13} />
            {h.kicker}
          </Kicker>

          {/* H1 */}
          <h1
            className="h1"
            style={{ marginTop: 22 }}
          >
            {/* Line 1 */}
            <span>
              {h.h1.line1}{" "}
              <span style={{ color: "var(--green)" }}>{h.h1.line1Accent}</span>
            </span>
            <br />
            {/* Line 2 */}
            <span>
              {h.h1.line2}{" "}
              <span style={{ color: "var(--green)" }}>{h.h1.line2Accent}</span>
            </span>
            <br />
            {/* Line 3 — yellow highlight pseudo-underline */}
            <span>
              {h.h1.line3}{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                {h.h1.line3Strike}
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: -4,
                    right: -4,
                    bottom: "0.12em",
                    height: "0.22em",
                    background: "var(--warm-mid)",
                    opacity: 0.5,
                    borderRadius: 4,
                    zIndex: -1,
                    display: "block",
                  }}
                />
              </span>
            </span>
          </h1>

          <p className="lead" style={{ marginTop: 22, maxWidth: 540 }}>
            {h.sub}
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap", alignItems: "center" }}>
            <Button variant="primary" href="#final">
              {h.cta}
              <IconArrowRight size={16} />
            </Button>
            <Button variant="ghost" href="#how">
              <IconPlayerPlay size={16} style={{ color: "var(--green)" }} />
              {h.ctaSecondary}
            </Button>
          </div>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 24,
              color: "var(--ink-4)",
              fontSize: 13,
              flexWrap: "wrap",
            }}
          >
            {/* Pulsing live dot */}
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--green-dark)" }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--green)",
                  display: "inline-block",
                  animation: "pulse 1.6s infinite",
                }}
              />
              {h.metaBeta}
            </span>
            <Dot />
            <span>{h.metaTime}</span>
            <Dot />
            <span>{h.metaPlatform}</span>
          </div>
        </div>

        {/* ── Right column — phone stage ── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            minHeight: 600,
          }}
        >
          {/* Glow orb behind phone */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 480,
              height: 480,
              borderRadius: "50%",
              background: "radial-gradient(closest-side, var(--green-glow-mid), transparent 70%)",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />

          {/* Float card 1 — streak */}
          <FloatCard
            style={{ position: "absolute", top: 60, left: -10, animationDelay: "0s" }}
            icon={<IconFlame size={18} color="var(--green-dark)" />}
            title={h.floatStreak}
            sub={h.floatStreakSub}
          />

          {/* Float card 2 — XP */}
          <FloatCard
            style={{ position: "absolute", bottom: 90, right: -20, animationDelay: "3s" }}
            icon={<IconTrophy size={18} color="var(--warm-ink)" />}
            iconBg="var(--warm-soft)"
            title={h.floatXp}
            sub={h.floatXpSub}
          />

          <PhoneSkillTree lang={lang} />
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%   { box-shadow: 0 0 0 0 var(--green-shadow-soft); }
          70%  { box-shadow: 0 0 0 10px transparent; }
          100% { box-shadow: 0 0 0 0 transparent; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
        .float-card { animation: floatY 6s ease-in-out infinite; }
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .float-card-1 { left: -4px !important; top: 30px !important; }
          .float-card-2 { right: -4px !important; bottom: 60px !important; }
        }
      `}</style>
    </section>
  );
}

function Dot() {
  return (
    <span
      style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--ink-5)", display: "inline-block" }}
    />
  );
}

function FloatCard({
  icon,
  iconBg = "var(--green-soft)",
  title,
  sub,
  style,
}: {
  icon: React.ReactNode;
  iconBg?: string;
  title: string;
  sub: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="float-card"
      style={{
        background: "#fff",
        borderRadius: 14,
        padding: "12px 14px",
        boxShadow: "0 16px 36px -12px rgba(15,46,40,.22), 0 4px 10px -4px rgba(15,46,40,.08)",
        border: "0.5px solid var(--border)",
        display: "flex",
        alignItems: "center",
        gap: 10,
        zIndex: 2,
        ...style,
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: 10,
          background: iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--ink)" }}>{title}</div>
        <div style={{ fontSize: 11, color: "var(--ink-4)", marginTop: 1 }}>{sub}</div>
      </div>
    </div>
  );
}
