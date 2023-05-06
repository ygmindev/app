import type { InternationalizationDetectionModel } from '@lib/frontend/locale/locale.models';
import type { i18n, Module } from 'i18next';

export type _InternationalizeConfigParamsModel = {
  addPath?: string;

  caches?: Array<InternationalizationDetectionModel>;

  filename: string;

  isPreload?: boolean;

  isReact?: boolean;

  key: string;

  languageDefault: string;

  languages: Array<string>;

  loadPath?: string;

  modules?: Array<Module>;

  namespaceDefault: string;
};

export type _InternationalizeConfigModel = i18n;
