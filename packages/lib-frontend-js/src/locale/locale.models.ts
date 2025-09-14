import { type I18nModel } from '@lib/shared/locale/locale.models';

export type LocaleStoreModel = Record<string, Record<string, object>>;

export type LocaleContextModel = {
  i18n: I18nModel;
  lang?: string;
  store?: LocaleStoreModel;
};

export type TimezoneModel = {
  name: string;
  offset: number;
};

export type CountryModel = {
  callingCode: string;
  code: string;
  name: string;
};
