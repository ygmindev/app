import type { InternationalizeConfigModel } from '@lib/config/locale/internationalize/_internationalize.models';
import { default as internationalizeConfigBase } from '@lib/config/locale/internationalize/internationalize.base';
import { APP_URI } from '@lib/frontend/http/http.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';

const internationalizeConfig: InternationalizeConfigModel = merge([
  {
    loadPath: APP_URI,

    modules: [new I18NextHttpBackend(0), new I18nextBrowserLanguageDetector()],
  },

  internationalizeConfigBase,
]);

export default internationalizeConfig;
