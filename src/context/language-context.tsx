"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { TRANSLATIONS } from "@/data/translations";

export type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  direction: "ltr" | "rtl";
  isRTL: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof TRANSLATIONS.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("nexaflow_lang") as Language | null;
        if (saved === "ar" || saved === "en") {
          return saved;
        }
      } catch {
        // Ignore read errors
      }
    }
    return "en";
  });

  // Synchronize document attributes and localStorage when language changes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("nexaflow_lang", language);
    } catch {
      // Ignore write error
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "en" ? "ar" : "en"));
  };

  const isRTL = language === "ar";
  const direction = isRTL ? "rtl" : "ltr";
  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        isRTL,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      <div dir={direction} className={isRTL ? "font-sans rtl" : "font-sans ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
