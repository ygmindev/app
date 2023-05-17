import type { InternationalizeConfigModel } from '@lib/config/locale/internationalize/_internationalize.models';
import { CORE } from '@lib/shared/core/core.constants';

const internationalizeConfig: InternationalizeConfigModel = {
  filename: '/locales/{{lng}}/{{ns}}.json',

  key: 'lng',

  languageDefault: 'en',

  languages: ['en', 'kr'],

  namespaceDefault: CORE,
};

export default internationalizeConfig;
