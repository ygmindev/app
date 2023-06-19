import { initReactI18next } from 'react-i18next';

import { _internationalize } from '#lib-config/locale/internationalize/_internationalize';
import { INTERNATIONALIZE_CONFIG_STATIC } from '#lib-config/locale/internationalize/internationalize.constants';
import type {
  _InternationalizeConfigModel,
  InternationalizeConfigModel,
} from '#lib-config/locale/internationalize/internationalize.models';

const { languageDefault, languages, namespaceDefault } = INTERNATIONALIZE_CONFIG_STATIC;

export const config: InternationalizeConfigModel = {
  filename: 'locales/{{lng}}/{{ns}}.json',

  isSuspense: true,

  key: 'lng',

  languageDefault,

  languages,

  modules: [initReactI18next],

  namespaceDefault,
};

export const _config: _InternationalizeConfigModel = () => _internationalize(config);
