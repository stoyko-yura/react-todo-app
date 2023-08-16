import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import ua from './locales/ua/translation.json';

const resources = {
  en: {
    translation: en
  },
  ua: {
    translation: ua
  }
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  lng: 'en',
  resources
});

export default i18n;
