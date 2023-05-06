import type { _InternationalizeConfigParamsModel } from '@lib/config/locale/internationalize/_internationalize.models';
import { internationalizeConfigParams as internationalizeConfigParamsBase } from '@lib/config/locale/internationalize/params/internationalize.params.base';
import { APP_URI } from '@lib/frontend/http/http.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';

export const internationalizeConfigParams: _InternationalizeConfigParamsModel = merge({
  values: [
    {
      loadPath: APP_URI,

      modules: [new I18NextHttpBackend(0), new I18nextBrowserLanguageDetector()],
    },

    internationalizeConfigParamsBase,
  ],
});
