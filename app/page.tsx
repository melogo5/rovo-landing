"use client";

import { IconArrowRight, IconSparkles, IconTarget } from "@tabler/icons-react";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { SectionShell } from "@/components/ui/SectionShell";
import { PhoneSkillTree } from "@/components/ui/PhoneSkillTree";
import { PhoneLesson } from "@/components/ui/PhoneLesson";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLang } from "@/context/LangContext";

export default function Page() {
  const { lang, t } = useLang();

  return (
    <main style={{ padding: "60px 0", display: "flex", flexDirection: "column", gap: 80 }}>
      <SectionShell>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <h2 className="h2">Дизайн-система — Этапы 3–4</h2>
            <LanguageToggle />
          </div>

          <h3 className="h3" style={{ marginTop: 16 }}>Kicker</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
            <Kicker variant="green">
              <IconSparkles size={13} />
              {t.hero.kicker}
            </Kicker>
            <Kicker variant="warm">{t.programs.popular}</Kicker>
            <Kicker variant="muted">
              <IconTarget size={13} />
              {t.problem.kicker}
            </Kicker>
          </div>

          <h3 className="h3" style={{ marginTop: 32 }}>Button</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12, alignItems: "center" }}>
            <Button variant="primary" href="#final">
              {t.hero.cta}
              <IconArrowRight size={16} />
            </Button>
            <Button variant="ghost" href="#how">
              {t.hero.ctaSecondary}
            </Button>
            <div style={{ background: "var(--green)", padding: 16, borderRadius: 14 }}>
              <Button variant="white" href="#final">
                {t.finalCta.btn}
                <IconArrowRight size={16} />
              </Button>
            </div>
          </div>

          <h3 className="h3" style={{ marginTop: 32 }}>i18n preview ({lang.toUpperCase()})</h3>
          <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
            <p className="lead">{t.hero.sub}</p>
            <p style={{ fontSize: 14, color: "var(--ink-4)" }}>{t.problem.h2}</p>
            <p style={{ fontSize: 14, color: "var(--ink-4)" }}>{t.how.h2}</p>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <h3 className="h3" style={{ marginBottom: 32 }}>Phone Mockups (lang={lang})</h3>
        <div style={{ display: "flex", gap: 48, flexWrap: "wrap", alignItems: "flex-start" }}>
          <div>
            <p className="lead" style={{ marginBottom: 20, fontSize: 14 }}>PhoneSkillTree</p>
            <PhoneSkillTree lang={lang} />
          </div>
          <div style={{ background: "var(--ink)", padding: 48, borderRadius: 28 }}>
            <p style={{ color: "rgba(255,255,255,.7)", marginBottom: 20, fontSize: 14 }}>PhoneLesson</p>
            <PhoneLesson lang={lang} />
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
