import { type OptionModel } from '@lib/frontend/core/core.models';
import { type I18nModel } from '@lib/shared/locale/locale.models';

export type LocaleStoreModel = Record<string, Record<string, object>>;

export type LocaleContextModel = {
  i18n: I18nModel;
  lang?: string;
  store?: LocaleStoreModel;
};

export type TimezoneModel = OptionModel & {
  offset: number;
};

export type CountryModel = {
  callingCode: string;
  code: string;
  name: string;
};
