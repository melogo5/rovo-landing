"use client";

import { useState } from "react";
import { IconSend, IconCheck, IconAlertCircle, IconLoader2 } from "@tabler/icons-react";
import { Kicker } from "@/components/ui/Kicker";
import { SectionShell } from "@/components/ui/SectionShell";
import { useT, useLang } from "@/context/LangContext";

type State = "idle" | "loading" | "success" | "error";

export function SurveyForm() {
  const t = useT();
  const { lang } = useLang();
  const s = t.survey;

  const [selected, setSelected] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selected) return;

    setState("loading");
    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer: selected, email: email.trim() || undefined, lang }),
      });
      if (!res.ok) throw new Error("bad response");
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <section id="survey" style={{ padding: "80px 0 100px", background: "var(--sand)" }}>
      <SectionShell>
        <div
          style={{
            maxWidth: 560,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Kicker variant="green">
            <IconSend size={13} />
            {s.kicker}
          </Kicker>

          <h2
            className="h2"
            style={{ marginTop: 16, marginBottom: 36 }}
          >
            {s.question}
          </h2>

          {state === "success" ? (
            <SuccessBanner message={s.success} />
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Answer chips */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  justifyContent: "center",
                  marginBottom: 28,
                }}
              >
                {s.answers.map((answer) => (
                  <button
                    key={answer}
                    type="button"
                    onClick={() => setSelected(answer)}
                    style={{
                      padding: "12px 22px",
                      borderRadius: 999,
                      border: selected === answer
                        ? "1.5px solid var(--green)"
                        : "1.5px solid var(--border)",
                      background: selected === answer ? "var(--green-soft)" : "#fff",
                      color: selected === answer ? "var(--green-dark)" : "var(--ink-3)",
                      fontWeight: selected === answer ? 700 : 500,
                      fontSize: 15,
                      cursor: "pointer",
                      transition: "all .15s",
                      fontFamily: "inherit",
                    }}
                  >
                    {answer}
                  </button>
                ))}
              </div>

              {/* Email */}
              <div style={{ marginBottom: 20 }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={s.emailPlaceholder}
                  style={{
                    width: "100%",
                    padding: "13px 18px",
                    borderRadius: 14,
                    border: "1.5px solid var(--border)",
                    background: "#fff",
                    fontSize: 15,
                    color: "var(--ink)",
                    outline: "none",
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                    transition: "border-color .15s",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "var(--green)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
                />
                <p style={{ marginTop: 6, fontSize: 12, color: "var(--ink-4)" }}>
                  {s.emailHint}
                </p>
              </div>

              {/* Error */}
              {state === "error" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 16px",
                    borderRadius: 12,
                    background: "rgba(220,50,50,.08)",
                    color: "#c0392b",
                    fontSize: 14,
                    marginBottom: 16,
                  }}
                >
                  <IconAlertCircle size={16} />
                  {s.error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={!selected || state === "loading"}
                style={{
                  width: "100%",
                  padding: "15px 24px",
                  borderRadius: 14,
                  border: "none",
                  background: !selected ? "var(--border)" : "var(--green)",
                  color: !selected ? "var(--ink-4)" : "#fff",
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: !selected ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  transition: "all .2s",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  if (selected && state !== "loading") {
                    (e.currentTarget as HTMLElement).style.background = "var(--green-dark)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selected) {
                    (e.currentTarget as HTMLElement).style.background = "var(--green)";
                  }
                }}
              >
                {state === "loading" ? (
                  <IconLoader2 size={18} style={{ animation: "spin 1s linear infinite" }} />
                ) : null}
                {s.submit}
              </button>
            </form>
          )}
        </div>
      </SectionShell>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}

function SuccessBanner({ message }: { message: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        padding: "40px 32px",
        borderRadius: 24,
        background: "var(--green-soft)",
        border: "1.5px solid var(--green-pale)",
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "var(--green)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <IconCheck size={26} />
      </div>
      <p style={{ fontSize: 17, fontWeight: 600, color: "var(--green-dark)", margin: 0 }}>
        {message}
      </p>
    </div>
  );
}
