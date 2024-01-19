import { type InternationalizeConfigModel } from '@lib/config/locale/internationalize/internationalize.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export const INTERNATIONALIZE_CONFIG = {
  languageDefault: 'en',

  languages: [
    { id: 'en', label: 'English' },
    { id: 'kr', label: '한국어' },
  ],
} satisfies PartialModel<InternationalizeConfigModel>;
