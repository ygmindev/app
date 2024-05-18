import { type LocaleStoreModel } from '@lib/frontend/locale/locale.models';
import { type I18nModel } from '@lib/shared/locale/locale.models';

export type GetLocaleStoreFromI18nParamsModel = {
  i18n: I18nModel;
};

export type GetLocaleStoreFromI18nModel = LocaleStoreModel;
