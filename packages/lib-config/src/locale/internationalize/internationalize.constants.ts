import { type InternationalizeConfigModel } from '#lib-config/locale/internationalize/internationalize.models';
import { CORE } from '#lib-shared/core/core.constants';

export const INTERNATIONALIZE_CONFIG_STATIC: Pick<
  InternationalizeConfigModel,
  'languages' | 'languageDefault' | 'namespaceDefault'
> = {
  languageDefault: 'en',

  languages: ['en', 'kr'],

  namespaceDefault: CORE,
};
