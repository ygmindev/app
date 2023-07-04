import { type i18n, type Module } from 'i18next';

export type InternationalizeConfigModel = {
  isPreload: boolean;

  language?: string;

  languageDefault: string;

  languages: Array<string>;

  modules?: Array<Module>;

  path?: string;
};

export type _InternationalizeConfigModel = i18n;
