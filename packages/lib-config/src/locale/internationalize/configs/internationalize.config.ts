import type { InternationalizeConfigParamsModel } from '@lib/config/locale/internationalize/internationalize.models';
import { CORE } from '@lib/shared/core/core.constants';

export const internationalizeConfig: InternationalizeConfigParamsModel = {
  key: 'lng',

  languageDefault: 'en',

  languages: ['en', 'kr'],

  namespaceDefault: CORE,

  path: '/locales/{{lng}}/{{ns}}.json',
};
