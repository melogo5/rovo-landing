import { IconArrowLeft, IconPlayerPlay } from "@tabler/icons-react";

type Lang = "ru" | "en";

const t = {
  back: { ru: "←", en: "←" },
  title: { ru: "Атака с разбега", en: "Approach attack" },
  sub: { ru: "Урок 3 из 8", en: "Lesson 3 of 8" },
  xp: { ru: "+30 XP", en: "+30 XP" },
  lessonTitle: { ru: "Разбег: четыре шага", en: "Approach: four steps" },
  lessonBody: {
    ru: "Правильный разбег — основа мощной атаки. Отработай технику шаг за шагом перед выходом на площадку.",
    en: "A proper approach is the foundation of a powerful attack. Practice the technique step by step before hitting the court.",
  },
  taskLabel: { ru: "ЗАДАНИЕ", en: "TASK" },
  taskText: {
    ru: "Выполни разбег 10 раз перед зеркалом, следя за положением рук",
    en: "Practice the approach 10 times in front of a mirror, watching your arm position",
  },
  doneBtn: { ru: "Задание выполнено", en: "Task complete" },
};

type Props = { lang?: Lang };

export function PhoneLesson({ lang = "ru" }: Props) {
  const l = lang;

  return (
    <div
      style={{
        width: 280,
        background: "#fff",
        borderRadius: 34,
        overflow: "hidden",
        boxShadow:
          "0 50px 100px -30px rgba(0,0,0,.7), 0 20px 40px -10px rgba(0,0,0,.35)",
        border: "0.5px solid #2a2a28",
      }}
    >
      {/* Green top bar */}
      <div style={{ height: 8, background: "var(--green)" }} />

      {/* Top bar */}
      <div
        style={{
          background: "#fff",
          padding: "14px 16px 10px",
          borderBottom: "0.5px solid #EAEAEA",
        }}
      >
        {/* Back row */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <button
            aria-label="back"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconArrowLeft size={18} color="#1D9E75" />
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#2C2C2A" }}>{t.title[l]}</div>
            <div style={{ fontSize: 10.5, color: "#888780" }}>{t.sub[l]}</div>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              background: "#FAEEDA",
              borderRadius: 20,
              padding: "3px 8px",
            }}
          >
            <span style={{ fontSize: 10, fontWeight: 700, color: "#633806" }}>{t.xp[l]}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ flex: 1, height: 5, background: "#E1F5EE", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ height: "100%", width: "37%", background: "#1D9E75" }} />
          </div>
          <span style={{ fontSize: 11, color: "#1D9E75", fontWeight: 600 }}>3/8</span>
        </div>
      </div>

      {/* Video area */}
      <div
        style={{
          background: "linear-gradient(135deg, #1D9E75, #0F6E56)",
          height: 140,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Stripe pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,.04) 0 8px, transparent 8px 16px)",
          }}
        />
        {/* Play button */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "rgba(255,255,255,.18)",
            border: "1.5px solid rgba(255,255,255,.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(6px)",
          }}
        >
          <IconPlayerPlay size={20} color="#fff" />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 16, background: "#F8F9FA" }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#2C2C2A" }}>{t.lessonTitle[l]}</div>
        <div style={{ fontSize: 12, color: "#5F5E5A", lineHeight: 1.55, marginTop: 6 }}>{t.lessonBody[l]}</div>

        {/* Task block */}
        <div
          style={{
            marginTop: 14,
            background: "#E1F5EE",
            border: "0.5px solid #9FE1CB",
            borderRadius: 10,
            padding: "12px 14px",
          }}
        >
          <div style={{ fontSize: 10, fontWeight: 700, color: "#0F6E56", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {t.taskLabel[l]}
          </div>
          <div style={{ fontSize: 12, color: "#085041", lineHeight: 1.5, marginTop: 4 }}>{t.taskText[l]}</div>
        </div>

        {/* Done button */}
        <div
          style={{
            marginTop: 14,
            background: "#1D9E75",
            borderRadius: 12,
            padding: 12,
            textAlign: "center",
            color: "#fff",
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          {t.doneBtn[l]}
        </div>
      </div>
    </div>
  );
}
