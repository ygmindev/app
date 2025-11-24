import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';
import {
  LANGUAGE_DEFAULT,
  LANGUAGES,
  TIMEZONE_DEFAULT,
} from '@lib/config/locale/internationalize/internationalize.constants';
import {
  type _InternationalizeConfigModel,
  type InternationalizeConfigModel,
} from '@lib/config/locale/internationalize/internationalize.models';
import { Config } from '@lib/config/utils/Config/Config';
import { initReactI18next } from 'react-i18next';

export const internationalizeConfig = new Config<
  InternationalizeConfigModel,
  _InternationalizeConfigModel
>({
  config: _internationalize,

  params: () => ({
    isDebug: process.env.NODE_ENV === 'development',

    isPreload: false,

    languageDefault: LANGUAGE_DEFAULT,

    languages: LANGUAGES,

    modules: [initReactI18next],

    timezoneDefault: TIMEZONE_DEFAULT,
  }),
});
