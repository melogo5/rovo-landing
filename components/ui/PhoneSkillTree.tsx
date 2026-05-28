import {
  IconCheck,
  IconPlayerPlay,
  IconLock,
  IconFlame,
  IconHome,
  IconChartBar,
  IconTrophy,
  IconUser,
} from "@tabler/icons-react";

type Lang = "ru" | "en";

const t = {
  greeting: { ru: "Привет,", en: "Hi," },
  username: { ru: "Алексей", en: "Alex" },
  streakLabel: { ru: "дней", en: "days" },
  level: { ru: "Уровень 4", en: "Level 4" },
  sectionLabel: { ru: "МОЙ ПУТЬ", en: "MY PATH" },
  nodes: {
    basics: { title: { ru: "Основы игры", en: "Game basics" }, sub: { ru: "4 урока", en: "4 lessons" } },
    stance: { title: { ru: "Стойка и перемещение", en: "Stance & footwork" }, sub: { ru: "пройдено", en: "complete" } },
    overhand: { title: { ru: "Верхняя передача", en: "Overhand pass" }, sub: { ru: "6 уроков", en: "6 lessons" } },
    bump: { title: { ru: "Нижняя передача", en: "Bump pass" }, sub: { ru: "6 уроков", en: "6 lessons" } },
    attack: { title: { ru: "Атака с разбега", en: "Approach attack" }, sub: { ru: "урок 3 из 8 · сейчас", en: "lesson 3 of 8 · now" } },
    serve: { title: { ru: "Верхняя подача", en: "Top serve" }, sub: { ru: "6 уроков", en: "6 lessons" } },
    block: { title: { ru: "Блок", en: "Block" }, sub: { ru: "6 уроков", en: "6 lessons" } },
  },
  nav: {
    path: { ru: "Путь", en: "Path" },
    stats: { ru: "Прогресс", en: "Stats" },
    awards: { ru: "Награды", en: "Awards" },
    profile: { ru: "Профиль", en: "Profile" },
  },
};

type Props = { lang?: Lang };

export function PhoneSkillTree({ lang = "ru" }: Props) {
  const l = lang;

  return (
    <div
      style={{
        width: 300,
        background: "#fff",
        borderRadius: 38,
        border: "0.5px solid #D3D1C7",
        overflow: "hidden",
        boxShadow:
          "0 40px 80px -30px rgba(15,46,40,.35), 0 16px 40px -16px rgba(15,46,40,.18)",
      }}
    >
      {/* Green top bar */}
      <div style={{ height: 10, background: "var(--green)" }} />

      {/* Screen */}
      <div style={{ background: "#F8F9FA" }}>
        {/* Top bar */}
        <div
          style={{
            background: "#fff",
            padding: "16px 18px 12px",
            borderBottom: "0.5px solid #EAEAEA",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 12, color: "#888780" }}>{t.greeting[l]}</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: "#2C2C2A", letterSpacing: "-0.01em" }}>
                {t.username[l]}
              </div>
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                background: "#FAEEDA",
                borderRadius: 20,
                padding: "4px 10px",
              }}
            >
              <IconFlame size={14} color="#854F0B" />
              <span style={{ fontSize: 13, fontWeight: 700, color: "#633806" }}>7</span>
              <span style={{ fontSize: 10, color: "#854F0B" }}>{t.streakLabel[l]}</span>
            </div>
          </div>
          {/* XP bar */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#888780", marginBottom: 4 }}>
              <span>{t.level[l]}</span>
              <span>620 / 1000 XP</span>
            </div>
            <div style={{ height: 6, background: "#E1F5EE", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ height: "100%", width: "62%", background: "#1D9E75", borderRadius: 3 }} />
            </div>
          </div>
        </div>

        {/* Section label */}
        <div style={{ fontSize: 11, fontWeight: 600, color: "#888780", textTransform: "uppercase", letterSpacing: "0.06em", padding: "14px 18px 8px" }}>
          {t.sectionLabel[l]}
        </div>

        {/* Skill tree */}
        <div style={{ padding: "0 14px 14px" }}>
          {/* Row 1 — Basics (done) */}
          <NodeRow>
            <Node variant="done">
              <NodeIcon><IconCheck size={11} color="#1D9E75" /></NodeIcon>
              <NodeText title={t.nodes.basics.title[l]} sub={t.nodes.basics.sub[l]} variant="done" />
            </Node>
          </NodeRow>
          <Connector />

          {/* Row 2 — Stance (done) */}
          <NodeRow>
            <Node variant="done">
              <NodeIcon><IconCheck size={11} color="#1D9E75" /></NodeIcon>
              <NodeText title={t.nodes.stance.title[l]} sub={t.nodes.stance.sub[l]} variant="done" />
            </Node>
          </NodeRow>
          <Connector />

          {/* Row 3 — Overhand + Bump (done, side by side) */}
          <NodeRow gap={6}>
            <Node variant="done" minWidth={108}>
              <NodeIcon><IconCheck size={11} color="#1D9E75" /></NodeIcon>
              <NodeText title={t.nodes.overhand.title[l]} sub={t.nodes.overhand.sub[l]} variant="done" />
            </Node>
            <Node variant="done" minWidth={108}>
              <NodeIcon><IconCheck size={11} color="#1D9E75" /></NodeIcon>
              <NodeText title={t.nodes.bump.title[l]} sub={t.nodes.bump.sub[l]} variant="done" />
            </Node>
          </NodeRow>
          <Connector />

          {/* Row 4 — Attack (active) */}
          <NodeRow>
            <Node variant="active">
              <IconPlayerPlay size={18} color="#1D9E75" style={{ flexShrink: 0 }} />
              <NodeText title={t.nodes.attack.title[l]} sub={t.nodes.attack.sub[l]} variant="active" />
            </Node>
          </NodeRow>
          <Connector />

          {/* Row 5 — Serve + Block (locked) */}
          <NodeRow gap={6}>
            <Node variant="locked" minWidth={108}>
              <NodeIcon locked><IconLock size={11} color="#B4B2A9" /></NodeIcon>
              <NodeText title={t.nodes.serve.title[l]} sub={t.nodes.serve.sub[l]} variant="locked" />
            </Node>
            <Node variant="locked" minWidth={108}>
              <NodeIcon locked><IconLock size={11} color="#B4B2A9" /></NodeIcon>
              <NodeText title={t.nodes.block.title[l]} sub={t.nodes.block.sub[l]} variant="locked" />
            </Node>
          </NodeRow>
        </div>

        {/* Bottom nav */}
        <div style={{ background: "#fff", borderTop: "0.5px solid #EAEAEA", display: "flex", justifyContent: "space-around", padding: "10px 0 14px" }}>
          <BnItem icon={<IconHome size={18} color="#1D9E75" />} label={t.nav.path[l]} active />
          <BnItem icon={<IconChartBar size={18} color="#B4B2A9" />} label={t.nav.stats[l]} />
          <BnItem icon={<IconTrophy size={18} color="#B4B2A9" />} label={t.nav.awards[l]} />
          <BnItem icon={<IconUser size={18} color="#B4B2A9" />} label={t.nav.profile[l]} />
        </div>
      </div>
    </div>
  );
}

/* ─── sub-components ─── */

function NodeRow({ children, gap = 8 }: { children: React.ReactNode; gap?: number }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap, marginBottom: 6 }}>
      {children}
    </div>
  );
}

function Connector() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "4px 0" }}>
      <div style={{ width: 1.5, height: 14, background: "#D3D1C7", borderRadius: 1 }} />
    </div>
  );
}

type NodeVariant = "done" | "active" | "locked";

const nodeStyles: Record<NodeVariant, React.CSSProperties> = {
  done: { background: "#1D9E75", border: "0.5px solid #0F6E56" },
  active: { background: "#E1F5EE", border: "1.5px solid #5DCAA5" },
  locked: { background: "#fff", border: "0.5px solid #EAEAEA" },
};

function Node({ variant, children, minWidth = 118 }: { variant: NodeVariant; children: React.ReactNode; minWidth?: number }) {
  return (
    <div
      style={{
        borderRadius: 14,
        padding: "10px 12px",
        display: "flex",
        alignItems: "center",
        gap: 8,
        minWidth,
        ...nodeStyles[variant],
      }}
    >
      {children}
    </div>
  );
}

function NodeIcon({ children, locked }: { children: React.ReactNode; locked?: boolean }) {
  return (
    <div
      style={{
        width: 18,
        height: 18,
        borderRadius: "50%",
        background: locked ? "#F1EFE8" : "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

const textColor: Record<NodeVariant, { title: string; sub: string }> = {
  done: { title: "#fff", sub: "#9FE1CB" },
  active: { title: "#085041", sub: "#1D9E75" },
  locked: { title: "#B4B2A9", sub: "#D3D1C7" },
};

function NodeText({ title, sub, variant }: { title: string; sub: string; variant: NodeVariant }) {
  const c = textColor[variant];
  return (
    <div>
      <div style={{ fontSize: 12.5, fontWeight: 600, lineHeight: 1.2, color: c.title }}>{title}</div>
      <div style={{ fontSize: 10, marginTop: 2, lineHeight: 1.3, fontWeight: 500, color: c.sub }}>{sub}</div>
    </div>
  );
}

function BnItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
      {icon}
      <span style={{ fontSize: 9, color: active ? "#1D9E75" : "#B4B2A9", fontWeight: active ? 700 : 500 }}>{label}</span>
    </div>
  );
}
