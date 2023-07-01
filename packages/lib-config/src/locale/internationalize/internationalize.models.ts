import { type i18n, type Module } from 'i18next';

import { type ConfigDynamicModel } from '#lib-config/core/core.models';
import { type InternationalizationDetectionModel } from '#lib-frontend/locale/locale.models';
import { type EmptyObjectModel } from '#lib-shared/core/core.models';

export type InternationalizeConfigOptionsModel = EmptyObjectModel;

export type InternationalizeConfigModel = {
  addPath?: string;

  caches?: Array<InternationalizationDetectionModel>;

  filename: string;

  isPreload?: boolean;

  isReact?: boolean;

  isSuspense?: boolean;

  key: string;

  language?: string;

  languageDefault: string;

  languages: Array<string>;

  loadPath?: string;

  modules?: Array<Module>;

  namespaceDefault: string;
};

export type _InternationalizeConfigModel = ConfigDynamicModel<
  i18n,
  InternationalizeConfigOptionsModel
>;
