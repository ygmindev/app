import type { InternationalizeConfigModel } from '@lib/config/locale/internationalize/_internationalize.models';
import { default as internationalizeConfigBase } from '@lib/config/locale/internationalize/internationalize.base';
import { APP_URI } from '@lib/frontend/http/http.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { Module } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules } from 'react-native';

const internationalizeConfig: InternationalizeConfigModel = merge([
  {
    loadPath: APP_URI,

    modules: [
      {
        // cacheUserLanguage: Function.prototype,
        detect: () =>
          (
            (process.env.ENV_PLATFORM === PLATFORM.IOS
              ? NativeModules.SettingsManager.settings.AppleLocale ||
                NativeModules.SettingsManager.settings.AppleLanguages[0]
              : NativeModules.I18nManager.localeIdentifier) || 'en-US'
          ).replace('/_/', '-'),

        initReactI18next,
        // init: Function.prototype,
        type: 'languageDetector',
      } as Module,
    ],
  },

  internationalizeConfigBase,
]);

export default internationalizeConfig;

