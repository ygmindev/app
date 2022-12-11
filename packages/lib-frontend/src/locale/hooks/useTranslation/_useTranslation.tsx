import type { _UseTranslationModel } from '@lib/frontend/locale/hooks/useTranslation/_useTranslation.models';
import { useTranslation } from 'react-i18next';

export const _useTranslation = (ns: Array<string> = []): _UseTranslationModel => {
  const { ready, t } = useTranslation(ns);
  return { isInitialized: ready, t };
};
