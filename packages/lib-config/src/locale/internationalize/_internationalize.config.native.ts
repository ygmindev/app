import { _internationalizeConfig as _internationalizeConfigFrontend } from '@lib/config/locale/internationalize/_internationalize.config.frontend';
import type { _InternationalizeConfigParamsModel } from '@lib/config/locale/internationalize/_internationalize.models';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { i18n } from 'i18next';
import { use } from 'i18next';
import { NativeModules } from 'react-native';

export const _internationalizeConfig = (params: _InternationalizeConfigParamsModel): i18n => {
  const locale =
    (process.env.ENV_PLATFORM === PLATFORM.IOS
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier) || params.languageDefault;

  use({
    cacheUserLanguage: Function.prototype,
    detect: (): string => locale.replace(/_/, '-'),
    init: Function.prototype,
    type: 'languageDetector',
  });

  // Add resources
  return _internationalizeConfigFrontend({
    ...params,

    detection: {},
  });
};
