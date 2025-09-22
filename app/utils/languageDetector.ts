/**
 * Language detection utility for browser language detection
 */

export type SupportedLanguage = 'en' | 'fr';

export interface LanguageInfo {
  language: SupportedLanguage;
  confidence: number;
}

/**
 * Detects the user's browser language and maps it to supported languages
 * @returns LanguageInfo with detected language and confidence
 */
export function detectBrowserLanguage(): LanguageInfo {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return { language: 'en', confidence: 1 };
  }

  const browserLang = navigator.language || navigator.languages?.[0] || 'en';

  // Extract language code (e.g., 'fr-FR' -> 'fr', 'en-US' -> 'en')
  const langCode = browserLang.split('-')[0].toLowerCase();

  // Check for French
  if (langCode === 'fr') {
    return { language: 'fr', confidence: 1 };
  }

  // Check for English
  if (langCode === 'en') {
    return { language: 'en', confidence: 1 };
  }

  // Check if French is in the list of preferred languages
  if (navigator.languages) {
    for (const lang of navigator.languages) {
      if (lang.toLowerCase().startsWith('fr')) {
        return { language: 'fr', confidence: 0.8 };
      }
      if (lang.toLowerCase().startsWith('en')) {
        return { language: 'en', confidence: 0.8 };
      }
    }
  }

  // Default to English
  return { language: 'en', confidence: 0.5 };
}

/**
 * Gets the appropriate language code for routing
 * @param defaultLang - Default language to use if detection fails
 * @returns The language code to use for routing
 */
export function getLanguageForRouting(defaultLang: SupportedLanguage = 'en'): SupportedLanguage {
  const detected = detectBrowserLanguage();

  // If high confidence detection, use it
  if (detected.confidence >= 0.8) {
    return detected.language;
  }

  // Otherwise use default
  return defaultLang;
}

/**
 * Checks if a language is supported
 * @param lang - Language code to check
 * @returns True if the language is supported
 */
export function isLanguageSupported(lang: string): lang is SupportedLanguage {
  return ['en', 'fr'].includes(lang);
}
