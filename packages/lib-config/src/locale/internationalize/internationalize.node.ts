import { type Module } from 'i18next';
import I18NexFsBackend from 'i18next-fs-backend';
import { LanguageDetector } from 'i18next-http-middleware';

import { fromStatic } from '#lib-backend/file/utils/fromStatic/fromStatic';
import { _internationalize } from '#lib-config/locale/internationalize/_internationalize';
import { config as configBase } from '#lib-config/locale/internationalize/internationalize.base';
import {
  type _InternationalizeConfigModel,
  type InternationalizeConfigModel,
} from '#lib-config/locale/internationalize/internationalize.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '#lib-shared/core/utils/merge/merge.constants';

export const config: InternationalizeConfigModel = merge(
  [
    {
      addPath: fromStatic('assets'),

      isPreload: true,

      isSuspense: false,

      loadPath: fromStatic('assets'),

      modules: [I18NexFsBackend, LanguageDetector] as Array<Module>,
    },

    configBase,
  ],
  MERGE_STRATEGY.DEEP_APPEND,
);

export const _config: _InternationalizeConfigModel = () => _internationalize(config);
