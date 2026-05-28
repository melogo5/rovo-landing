import { IconArrowRight, IconSparkles, IconTarget } from "@tabler/icons-react";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { SectionShell } from "@/components/ui/SectionShell";
import { PhoneSkillTree } from "@/components/ui/PhoneSkillTree";
import { PhoneLesson } from "@/components/ui/PhoneLesson";

export default function Page() {
  return (
    <main style={{ padding: "60px 0", display: "flex", flexDirection: "column", gap: 80 }}>
      {/* Kickers */}
      <SectionShell>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 className="h2" style={{ marginBottom: 24 }}>
            Дизайн-система — Этап 3
          </h2>

          <h3 className="h3">Kicker</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
            <Kicker variant="green">
              <IconSparkles size={13} />
              Бета · скоро в App Store
            </Kicker>
            <Kicker variant="warm">Популярное</Kicker>
            <Kicker variant="muted">
              <IconTarget size={13} />
              Знакомо?
            </Kicker>
          </div>

          <h3 className="h3" style={{ marginTop: 32 }}>
            Button
          </h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12, alignItems: "center" }}>
            <Button variant="primary" href="#final">
              Хочу попробовать
              <IconArrowRight size={16} />
            </Button>
            <Button variant="ghost" href="#how">
              Как это работает
            </Button>
            <div style={{ background: "var(--green)", padding: 16, borderRadius: 14 }}>
              <Button variant="white" href="#final">
                Начать бесплатно
                <IconArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Phone mockups */}
      <SectionShell>
        <h3 className="h3" style={{ marginBottom: 32 }}>
          Phone Mockups
        </h3>
        <div style={{ display: "flex", gap: 48, flexWrap: "wrap", alignItems: "flex-start" }}>
          <div>
            <p className="lead" style={{ marginBottom: 20, fontSize: 14 }}>
              PhoneSkillTree (Hero)
            </p>
            <PhoneSkillTree lang="ru" />
          </div>
          <div style={{ background: "var(--ink)", padding: 48, borderRadius: 28 }}>
            <p style={{ color: "rgba(255,255,255,.7)", marginBottom: 20, fontSize: 14 }}>
              PhoneLesson (Diff)
            </p>
            <PhoneLesson lang="ru" />
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
