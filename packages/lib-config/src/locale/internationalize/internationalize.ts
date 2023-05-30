import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';
import { config as configBase } from '@lib/config/locale/internationalize/internationalize.base';
import type {
  _InternationalizeConfigModel,
  InternationalizeConfigModel,
} from '@lib/config/locale/internationalize/internationalize.models';
import { APP_URI } from '@lib/frontend/http/http.constants';
import { INTERNATIONALIZATION_DETECTION } from '@lib/frontend/locale/locale.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import type { Module } from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';

export const config: InternationalizeConfigModel = merge(
  [
    {
      caches: [INTERNATIONALIZATION_DETECTION.COOKIE, INTERNATIONALIZATION_DETECTION.LOCAL_STORAGE],

      loadPath: APP_URI,

      modules: [I18NextHttpBackend, I18nextBrowserLanguageDetector] as Array<Module>,
    },

    configBase,
  ],
  MERGE_STRATEGY.DEEP_APPEND,
);

export const _config: _InternationalizeConfigModel = () => _internationalize(config);