import {useTranslation} from 'react-i18next';

export const useI18nextTranslation = () => {
  const {t, i18n} = useTranslation();

  const changeLanguage = (language: string) => {
    const currentLanguage = i18n.language;
    if (currentLanguage !== language) {
      return i18n.changeLanguage(language);
    }
  };

  return {
    t,
    changeLanguage,
  };
};
