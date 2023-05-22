import { ConfigDynamicModel } from '@lib/config/core/core.models';
import type { InternationalizationDetectionModel } from '@lib/frontend/locale/locale.models';
import type { i18n, Module } from 'i18next';

export interface InternationalizeConfigModel {
  addPath?: string;

  caches?: Array<InternationalizationDetectionModel>;

  filename: string;

  isPreload?: boolean;

  isReact?: boolean;

  isSuspense?: boolean;

  key: string;

  languageDefault: string;

  languages: Array<string>;

  loadPath?: string;

  modules?: Array<Module>;

  namespaceDefault: string;
};

export type _InternationalizeConfigModel = ConfigDynamicModel<i18n>;
