import type {
  _UseTranslationModel,
  _UseTranslationParamsModel,
} from '@lib/frontend/locale/hooks/useTranslation/_useTranslation.models';
import { useTranslation } from 'react-i18next';

export const _useTranslation = (ns: _UseTranslationParamsModel = []): _UseTranslationModel => {
  const { i18n, ready, t } = useTranslation(ns);
  return { currentLanguage: i18n.resolvedLanguage, isInitialized: ready, t };
};
