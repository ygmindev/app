import { i18nConfig } from '@lib/config/locale/internationalize/internationalize';
import { get } from 'lodash';
import { NativeModules } from 'react-native';

const locale =
  (__IS_IOS__
    ? get(NativeModules, 'SettingsManager.settings.AppleLocale') ||
      get(NativeModules, 'SettingsManager.settings.AppleLanguages.0')
    : get(NativeModules, 'I18nManager.localeIdentifier')) || i18nConfig.fallbackLng;

export const _Detector = {
  cacheUserLanguage: Function.prototype,
  detect: (): string => locale.replace(/_/, '-'),
  init: Function.prototype,
  type: 'languageDetector',
};

export const _detection = {};
