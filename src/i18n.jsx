import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'sv', 'ar'],
    load : 'languageOnly',
    debug: process.env.NODE_ENV === 'development',
    ns: ['translation'],
    defaultNS: 'translation',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      // order and from where user language should be detected
      order: ['localStorage', 'navigator', 'htmlTag'],

      // keys or params to lookup language from
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',

    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

  // Se till att detta ligger efter .init({...}) i i18n.jsx

// Uppdatera automatiskt när språk ändras varsomhelst i appen
i18n.on('initialized', () => {
  // Sätt initial html lang/dir utifrån det valda språket när i18n är initierat
  const initialLang = (i18n.language || 'en').split('-')[0];
  document.documentElement.lang = initialLang;
  document.documentElement.dir = initialLang === 'ar' ? 'rtl' : 'ltr';
});

// Uppdatera automatiskt när språk ändras varsomhelst i appen
i18n.on('languageChanged', (lng) => {
  const code = (lng || 'en').split('-')[0];
  localStorage.setItem('i18nextLng', code);
  document.documentElement.lang = code;
  document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
});

export default i18n;