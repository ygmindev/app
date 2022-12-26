import type { InternationalizeConfigParamsModel } from '@lib/config/locale/internationalize/internationalize.models';
import { CORE } from '@lib/shared/core/core.constants';

export const internationalizeConfig: InternationalizeConfigParamsModel = {
  languageDefault: 'en',

  languages: ['en', 'kr'],

  namespaceDefault: CORE,
};
