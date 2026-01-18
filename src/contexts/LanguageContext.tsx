'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import type { Language } from '@/types';
import { translations } from '@/data/translations';

// ============================================
// Language Context - Bruno Meireles Portfolio
// ============================================

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    translate: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('pt');

    const translate = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translate }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
