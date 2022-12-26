import { internationalizeConfig } from '@lib/config/locale/internationalize/configs/internationalize.config';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { PlatformModel } from '@lib/shared/platform/platform.models';
import { get } from 'lodash';
import { NativeModules } from 'react-native';

const APP_PLATFORM = getEnv<PlatformModel>('APP_PLATFORM');

const locale =
  (APP_PLATFORM === PLATFORM.IOS
    ? get(NativeModules, 'SettingsManager.settings.AppleLocale') ||
      get(NativeModules, 'SettingsManager.settings.AppleLanguages.0')
    : get(NativeModules, 'I18nManager.localeIdentifier')) || internationalizeConfig.languageDefault;

export const _Detector = {
  cacheUserLanguage: Function.prototype,
  detect: (): string => locale.replace(/_/, '-'),
  init: Function.prototype,
  type: 'languageDetector',
};

export const _detection = {};
