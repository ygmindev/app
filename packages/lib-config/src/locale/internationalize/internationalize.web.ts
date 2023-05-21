import type { InternationalizeConfigModel } from '@lib/config/locale/internationalize/_internationalize.models';
import { default as internationalizeConfigBase } from '@lib/config/locale/internationalize/internationalize.base';
import { APP_URI } from '@lib/frontend/http/http.constants';
import { INTERNATIONALIZATION_DETECTION } from '@lib/frontend/locale/locale.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import type { Module } from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';

const internationalizeConfig: InternationalizeConfigModel = merge([
  {
    caches: [INTERNATIONALIZATION_DETECTION.COOKIE, INTERNATIONALIZATION_DETECTION.LOCAL_STORAGE],

    loadPath: APP_URI,

    modules: [I18NextHttpBackend, I18nextBrowserLanguageDetector] as Array<Module>,
  },

  internationalizeConfigBase,
]);

export default internationalizeConfig;
