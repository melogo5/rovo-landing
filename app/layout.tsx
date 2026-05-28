import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { LangProvider } from "@/context/LangContext";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rovo — научись играть в волейбол за 10 минут в день",
  description:
    "Персонализированный план тренировок, дерево навыков и короткие уроки. Учись волейболу в удобном темпе.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
