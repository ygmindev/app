import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import type { InternationalizeConfigModel, _InternationalizeConfigModel } from '@lib/config/locale/internationalize/internationalize.models';
import { config as configBase } from '@lib/config/locale/internationalize/internationalize.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import type { Module } from 'i18next';
import I18NexFsBackend from 'i18next-fs-backend';
import i18nextMiddleware from 'i18next-http-middleware';
import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';

export const config: InternationalizeConfigModel = merge(
  [
    {
      addPath: fromStatic('assets'),

      isSuspense: false,

      isPreload: true,

      loadPath: fromStatic('assets'),

      modules: [I18NexFsBackend, i18nextMiddleware.LanguageDetector] as Array<Module>,
    },

    configBase,
  ],
  MERGE_STRATEGY.DEEP_APPEND,
);

export const _config: _InternationalizeConfigModel = _internationalize(config);
