import { clsx } from "clsx";
import Link from "next/link";

type ButtonBaseProps = {
  variant?: "primary" | "ghost" | "white";
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps & { href: string; target?: string; rel?: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = "primary", children, className, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-[22px] py-[14px] rounded-[14px] font-semibold text-[15px] transition-all duration-200 cursor-pointer select-none";

  const variants = {
    primary: [
      "bg-[var(--green)] text-white",
      "shadow-[0_12px_28px_-10px_var(--green-shadow-soft)]",
      "hover:-translate-y-px hover:shadow-[0_18px_38px_-12px_var(--green-shadow-soft)]",
    ],
    ghost: [
      "bg-white text-[var(--ink-2)]",
      "border border-[0.5px] border-[var(--border-2)]",
      "hover:border-[var(--ink-3)]",
    ],
    white: [
      "bg-white text-[var(--green-dark)] font-bold text-base",
      "shadow-[0_18px_40px_-14px_rgba(0,0,0,0.25)]",
      "hover:-translate-y-0.5",
    ],
  };

  const cls = clsx(base, variants[variant], className);

  if ("href" in props && props.href !== undefined) {
    const { href, target, rel, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} target={target} rel={rel} className={cls} {...(rest as object)}>
        {children}
      </Link>
    );
  }

  const { ...rest } = props as ButtonAsButton;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
