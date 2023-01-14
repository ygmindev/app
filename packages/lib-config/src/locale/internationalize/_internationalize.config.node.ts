import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { _internationalizeConfig as _internationalizeConfigBase } from '@lib/config/locale/internationalize/_internationalize.config.base';
import type { _InternationalizeConfigParamsModel } from '@lib/config/locale/internationalize/_internationalize.models';
import type { i18n } from 'i18next';
import { use } from 'i18next';
import I18NexFsBackend from 'i18next-fs-backend';
import i18nextMiddleware from 'i18next-http-middleware';

export const _internationalizeConfig = (params: _InternationalizeConfigParamsModel): i18n => {
  use(I18NexFsBackend).use(i18nextMiddleware.LanguageDetector);

  return _internationalizeConfigBase({
    ...params,

    backend: {
      addPath: fromStatic(params.path),
      loadPath: fromStatic(params.path),
    },

    initImmediate: false,

    preload: params.languages,

    saveMissing: true,
  });
};
