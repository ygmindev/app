import { type InternationalizeConfigModel } from '#lib-config/locale/internationalize/internationalize.models';
import { type PartialModel, type ReturnTypeModel } from '#lib-shared/core/core.models';

export const INTERNATIONALIZE_CONFIG = {
  languageDefault: 'en',

  languages: ['en', 'kr'],
} satisfies PartialModel<ReturnTypeModel<InternationalizeConfigModel>>;
