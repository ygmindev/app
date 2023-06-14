import { initReactI18next } from 'react-i18next';

import { _internationalize } from '#lib-config/locale/internationalize/_internationalize';
import type {
  _InternationalizeConfigModel,
  InternationalizeConfigModel,
} from '#lib-config/locale/internationalize/internationalize.models';
import { CORE } from '#lib-shared/core/core.constants';

export const config: InternationalizeConfigModel = {
  filename: '/locales/{{lng}}/{{ns}}.json',

  isSuspense: true,

  key: 'lng',

  languageDefault: 'en',

  languages: ['en', 'kr'],

  modules: [initReactI18next],

  namespaceDefault: CORE,
};

export const _config: _InternationalizeConfigModel = () => _internationalize(config);
