"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, isRTL } from "@/lib/i18n"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")
  const dir = isRTL(language) ? "rtl" : "ltr"

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : language
    document.documentElement.dir = dir
  }, [language, dir])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir }}>
      <div dir={dir} className={language === "ar" ? "font-[var(--font-arabic)]" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
