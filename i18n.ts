import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import {vietnames, english} from './src/languages';

const resources = {
  vi: {translation: vietnames},
  en: {translation: english},
};

i18next.use(initReactI18next).init({
  lng: 'vi',
  resources,
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
