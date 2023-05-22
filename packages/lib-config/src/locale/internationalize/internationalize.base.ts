import type { InternationalizeConfigModel } from '@lib/config/locale/internationalize/_internationalize.models';
import { CORE } from '@lib/shared/core/core.constants';
import { initReactI18next } from 'react-i18next';

const internationalizeConfig: InternationalizeConfigModel = {
  filename: '/locales/{{lng}}/{{ns}}.json',

  isSuspense: true,

  key: 'lng',

  languageDefault: 'en',

  languages: ['en', 'kr'],

  namespaceDefault: CORE,

  modules: [initReactI18next],
};

export default internationalizeConfig;
