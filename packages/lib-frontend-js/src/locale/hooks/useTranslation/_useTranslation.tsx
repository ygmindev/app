import { INTERNATIONALIZE_CONFIG } from '@lib/config/locale/internationalize/internationalize.constants';
import {
  type _UseTranslationModel,
  type _UseTranslationParamsModel,
} from '@lib/frontend/locale/hooks/useTranslation/_useTranslation.models';
import { useTranslation } from 'react-i18next';

const { languageDefault } = INTERNATIONALIZE_CONFIG;

export const _useTranslation = (ns: _UseTranslationParamsModel = []): _UseTranslationModel => {
  const { i18n, ready, t } = useTranslation(ns);
  return {
    currentLanguage: i18n.resolvedLanguage ?? languageDefault,
    currentLanguageSet: async (value) => {
      void i18n.changeLanguage(value);
    },
    isInitialized: ready,
    t: t as <TParams = undefined>(key: string, params?: TParams) => string,
  };
};
