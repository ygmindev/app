import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';
import type { InternationalizeConfigModel, _InternationalizeConfigModel } from '@lib/config/locale/internationalize/internationalize.models';
import { CORE } from '@lib/shared/core/core.constants';
import { initReactI18next } from 'react-i18next';

export const config: InternationalizeConfigModel = {
  filename: '/locales/{{lng}}/{{ns}}.json',

  isSuspense: true,

  key: 'lng',

  languageDefault: 'en',

  languages: ['en', 'kr'],

  namespaceDefault: CORE,

  modules: [initReactI18next],
};

export const _config: _InternationalizeConfigModel = _internationalize(config);
