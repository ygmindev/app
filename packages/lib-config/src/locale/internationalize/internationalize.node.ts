import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import type { InternationalizeConfigModel } from '@lib/config/locale/internationalize/_internationalize.models';
import { default as internationalizeConfigBase } from '@lib/config/locale/internationalize/internationalize.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import I18NexFsBackend from 'i18next-fs-backend';
import i18nextMiddleware from 'i18next-http-middleware';

const internationalizeConfig: InternationalizeConfigModel = merge([
  {
    addPath: fromStatic('assets'),

    loadPath: fromStatic('assets'),

    modules: [new I18NexFsBackend(), new i18nextMiddleware.LanguageDetector()],
  },

  internationalizeConfigBase,
]);

export default internationalizeConfig;
