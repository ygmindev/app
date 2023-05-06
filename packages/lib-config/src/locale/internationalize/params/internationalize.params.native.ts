import type { _InternationalizeConfigParamsModel } from '@lib/config/locale/internationalize/_internationalize.models';
import { internationalizeConfigParams as internationalizeConfigParamsBase } from '@lib/config/locale/internationalize/params/internationalize.params.base';
import { APP_URI } from '@lib/frontend/http/http.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { Module } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules } from 'react-native';

export const internationalizeConfigParams: _InternationalizeConfigParamsModel = merge({
  values: [
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

    internationalizeConfigParamsBase,
  ],
});
