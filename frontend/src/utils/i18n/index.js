import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enLang from './locales/en/en.json';
import ruLang from './locales/ru/ru.json';
import koLang from './locales/ko/ko.json';

const resources = {
  en: {
    translation: enLang,
  },
  ru: {
    translation: ruLang,
  },
  ko: {
    translation: koLang,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng:'en', 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;