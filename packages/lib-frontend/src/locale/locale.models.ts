import { type i18n } from 'i18next';

import { type UseTranslationModel } from '@lib-frontend/locale/hooks/useTranslation/useTranslation.models';
import { type COUNTRY_FORMAT } from '@lib-frontend/locale/locale.constants';

export type TranslatableTextModel = string | ((params: UseTranslationModel) => string);

export type LocaleStoreModel = Record<string, Record<string, object>>;

export type LocaleContextModel = {
  i18n: i18n;
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
