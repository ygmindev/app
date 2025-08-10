import { type InternationalizeConfigModel } from '@lib/config/locale/internationalize/internationalize.models';

export const LANGUAGE_DEFAULT: InternationalizeConfigModel['languageDefault'] = 'en';

export const LANGUAGES: InternationalizeConfigModel['languages'] = [
  { id: 'en', label: 'English' },
  { id: 'kr', label: '한국어' },
];

export const TIMEZONE_DEFAULT: InternationalizeConfigModel['timezoneDefault'] = 'America/New_York';
