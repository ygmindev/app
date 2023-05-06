import type { UseTranslationModel } from '@lib/frontend/locale/hooks/useTranslation/useTranslation.models';
import type {
  COUNTRY_FORMAT,
  INTERNATIONALIZATION_DETECTION,
} from '@lib/frontend/locale/locale.constants';
import type { i18n } from 'i18next';

export type TranslatableTextModel = string | ((params: UseTranslationModel) => string);

export type LocaleStoreModel = Record<string, Record<string, object>>;

export interface LocaleContextModel {
  i18n?: i18n;
  lang?: string;
  store?: LocaleStoreModel;
}

export type CountryFormatModel = `${COUNTRY_FORMAT}`;

export interface TimezoneModel {
  name: string;
  offset: number;
}

export type InternationalizationDetectionModel = `${INTERNATIONALIZATION_DETECTION}`;
