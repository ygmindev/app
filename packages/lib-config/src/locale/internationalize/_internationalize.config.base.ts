import type { _InternationalizeConfigParamsModel } from '@lib/config/locale/internationalize/_internationalize.models';
import type { PartialModel } from '@lib/shared/core/core.models';
import type { i18n, InitOptions } from 'i18next';
import i18next, { init } from 'i18next';

export const _internationalizeConfig = ({
  languageDefault,
  languages,
  namespaceDefault,
  ...params
}: _InternationalizeConfigParamsModel & PartialModel<InitOptions>): i18n => {
  !i18next.isInitialized &&
    init({
      ...params,

      debug: false,

      defaultNS: [namespaceDefault],

      fallbackLng: languageDefault,

      lng: languageDefault,

      ns: [],

      supportedLngs: languages,
    });
  return i18next;
};
