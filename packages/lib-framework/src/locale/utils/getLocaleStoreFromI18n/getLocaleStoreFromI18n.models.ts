import type { LocaleStoreModel } from '@lib/frontend/locale/locale.models';
import type { i18n } from 'i18next';

export interface GetLocaleStoreFromI18nParamsModel {
  i18n: i18n;
}

export type GetLocaleStoreFromI18nModel = LocaleStoreModel;
