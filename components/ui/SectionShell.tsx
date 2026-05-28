import { clsx } from "clsx";

type SectionShellProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
};

export function SectionShell({ children, className, as: Tag = "div" }: SectionShellProps) {
  return (
    <Tag
      className={clsx(
        "max-w-[1240px] mx-auto px-8",
        "max-[640px]:px-5",
        className
      )}
    >
      {children}
    </Tag>
  );
}
