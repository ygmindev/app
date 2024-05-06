import { type COUNTRY_FORMAT } from '@lib/frontend/locale/locale.constants';
import { type I18nModel } from '@lib/shared/locale/locale.models';

export type LocaleStoreModel = Record<string, Record<string, object>>;

export type LocaleContextModel = {
  i18n: I18nModel;
  lang?: string;
  store?: LocaleStoreModel;
};

export type CountryFormatModel = `${COUNTRY_FORMAT}`;

export type TimezoneModel = {
  name: string;
  offset: number;
};

export type CountryModel = {
  callingCode: string;
  code: string;
  name: string;
};
