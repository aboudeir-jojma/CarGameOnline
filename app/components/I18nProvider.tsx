"use client";

import { useEffect, useState } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { detectBrowserLanguage, isLanguageSupported } from '../utils/languageDetector';

// Import translation files
import enTranslations from '../../public/locales/en/common.json';
import frTranslations from '../../public/locales/fr/common.json';

const resources = {
  en: {
    common: enTranslations,
  },
  fr: {
    common: frTranslations,
  },
};

let isInitialized = false;

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Only initialize once
    if (!isInitialized) {
      i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
          resources,
          fallbackLng: 'en',
          debug: process.env.NODE_ENV === 'development',

          detection: {
            order: ['navigator', 'localStorage', 'htmlTag'],
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage'],
          },

          interpolation: {
            escapeValue: false,
          },

          defaultNS: 'common',
          ns: ['common'],
        })
        .then(() => {
          const detectedLang = detectBrowserLanguage().language;
          const cachedLang = localStorage.getItem('i18nextLng');
          console.log('Detected browser language:', detectedLang);
          console.log('Cached language in localStorage:', cachedLang);
          console.log('Current i18next language:', i18n.language);

          if (isLanguageSupported(detectedLang) && i18n.language !== detectedLang) {
            console.log(`Changing language to detected browser language: ${detectedLang}`);
            i18n.changeLanguage(detectedLang);
            localStorage.setItem('i18nextLng', detectedLang);
          }

          isInitialized = true;
          setIsReady(true);
        })
        .catch((error) => {
          console.error('i18n initialization error:', error);
          setIsReady(true); // Still render even if initialization fails
        });
    } else {
      setIsReady(true);
    }
  }, []);

  // Don't render children until i18n is ready
  if (!isReady) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
}
