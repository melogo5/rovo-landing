import { clsx } from "clsx";

type KickerProps = {
  variant?: "green" | "warm" | "muted";
  children: React.ReactNode;
  className?: string;
};

export function Kicker({ variant = "green", children, className }: KickerProps) {
  const base =
    "inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full";

  const variants = {
    green: "text-[var(--green-dark)] bg-[var(--green-soft)]",
    warm: "text-[var(--warm-ink)] bg-[var(--warm-soft)]",
    muted: "text-[var(--ink-4)] bg-white border border-[0.5px] border-[var(--border)]",
  };

  return <span className={clsx(base, variants[variant], className)}>{children}</span>;
}
