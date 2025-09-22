// i18n configuration for Next.js
// This will be initialized on the client side only

export const i18nConfig = {
  fallbackLng: 'en',
  debug: process.env.NODE_ENV === 'development',

  detection: {
    order: ['localStorage', 'navigator', 'htmlTag'],
    lookupLocalStorage: 'i18nextLng',
    caches: ['localStorage'],
  },

  interpolation: {
    escapeValue: false,
  },

  defaultNS: 'common',
  ns: ['common'],
};
