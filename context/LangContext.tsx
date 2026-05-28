"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { ru } from "@/messages/ru";
import { en } from "@/messages/en";
import type { Messages } from "@/messages/ru";

export type Lang = "ru" | "en";

const STORAGE_KEY = "rovo_lang";
const dictionaries: Record<Lang, Messages> = { ru, en };

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Messages;
};

const LangContext = createContext<LangContextValue>({
  lang: "ru",
  setLang: () => {},
  t: ru,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  // Read from localStorage on mount (client only)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "ru" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

/** Shorthand: returns only the translations object */
export function useT() {
  return useContext(LangContext).t;
}
