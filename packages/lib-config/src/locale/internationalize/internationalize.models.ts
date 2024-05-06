import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type I18nModel } from '@lib/shared/locale/locale.models';
import { type Module } from 'i18next';

export type InternationalizeConfigModel = {
  isPreload: boolean;

  language?: string;

  languageDefault: string;

  languages: Array<WithIdModel & { label: string }>;

  modules?: Array<Module>;

  path?: string;
};

export type _InternationalizeConfigModel = I18nModel;
