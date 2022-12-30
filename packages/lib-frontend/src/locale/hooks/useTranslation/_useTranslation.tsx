import type {
  _UseTranslationModel,
  _UseTranslationParamsModel,
} from '@lib/frontend/locale/hooks/useTranslation/_useTranslation.models';
import { useTranslation } from 'react-i18next';

export const _useTranslation = (ns: _UseTranslationParamsModel = []): _UseTranslationModel => {
  const { ready, t } = useTranslation(ns);
  return { isInitialized: ready, t };
};
