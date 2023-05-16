import type { _InternationalizeConfigParamsModel } from '@lib/config/locale/internationalize/_internationalize.models';
import { CORE } from '@lib/shared/core/core.constants';

const internationalizeConfigParams: _InternationalizeConfigParamsModel = {
  filename: '/locales/{{lng}}/{{ns}}.json',

  key: 'lng',

  languageDefault: 'en',

  languages: ['en', 'kr'],

  namespaceDefault: CORE,
};

export default internationalizeConfigParams;
