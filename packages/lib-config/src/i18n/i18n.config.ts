import { resources } from '@lib/config/i18n/resources';
import { CORE } from '@lib/shared/core/core.constants';
import { TESTING } from '@lib/shared/testing/testing.constants';
import type { InitOptions } from 'i18next';

export const LANGUAGE_DEFAULT = 'en';

export const LANGUAGES_SUPPORTED: string[] = ['en', 'kr'];

export const NS_DEFAULT: string[] = [CORE, process.env.NODE_ENV !== 'production' && TESTING].filter(
  Boolean,
) as string[];

export const i18nConfig: InitOptions = {
  debug: false,
  defaultNS: NS_DEFAULT,
  fallbackLng: LANGUAGE_DEFAULT,
  interpolation: { escapeValue: false },
  lng: LANGUAGE_DEFAULT,
  ns: [],
  react: { defaultTransParent: 'div', useSuspense: true },
  resources,
  supportedLngs: LANGUAGES_SUPPORTED,
};
