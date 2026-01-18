// ============================================
// Centralized Types - Bruno Meireles Portfolio
// ============================================

/**
 * Project interface for portfolio projects
 */
export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    liveUrl?: string;
    repoUrl?: string;
    stack: string[];
    category: string;
}

/**
 * Experience interface for work history
 */
export interface Experience {
    id: string;
    role: string;
    company: string;
    companyUrl?: string;
    period: string;
    description: string;
}

/**
 * Supported languages
 */
export type Language = 'pt' | 'en';

/**
 * Translation keys type
 */
export type TranslationKey = string;

/**
 * Translations object type
 */
export type Translations = {
    [lang in Language]: {
        [key: string]: string;
    };
};
