import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import type { _InternationalizeConfigParamsModel } from '@lib/config/locale/internationalize/_internationalize.models';
import { internationalizeConfigParams as internationalizeConfigParamsBase } from '@lib/config/locale/internationalize/params/internationalize.params.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import I18NexFsBackend from 'i18next-fs-backend';
import i18nextMiddleware from 'i18next-http-middleware';

export const internationalizeConfigParams: _InternationalizeConfigParamsModel = merge([
  {
    addPath: fromStatic('assets'),

    loadPath: fromStatic('assets'),

    modules: [new I18NexFsBackend(), new i18nextMiddleware.LanguageDetector()],
  },

  internationalizeConfigParamsBase,
]);
