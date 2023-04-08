import type { UseTranslationModel } from '@lib/frontend/locale/hooks/useTranslation/useTranslation.models';
import type { i18n } from 'i18next';

export type TranslatableTextModel = string | ((params: UseTranslationModel) => string);

export type LocaleStoreModel = Record<string, Record<string, object>>;

export interface LocaleParamsModel {
  i18n?: i18n;
  lang?: string;
  store?: LocaleStoreModel;
}
