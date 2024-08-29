import { type InternationalizeConfigModel } from '@lib/config/locale/internationalize/internationalize.models';

export const INTERNATIONALIZE_CONFIG: Pick<
  InternationalizeConfigModel,
  'languageDefault' | 'languages'
> = {
  languageDefault: 'en',

  languages: [
    { id: 'en', label: 'English' },
    { id: 'kr', label: '한국어' },
  ],
};
