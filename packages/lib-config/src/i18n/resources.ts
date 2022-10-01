import type { Resource } from 'i18next';

export const resources: Resource | undefined =
  process.env.NODE_ENV === 'test'
    ? {
        en: {
          core: require('@asset/static/assets/locales/en/core.json'),
          testing: require('@asset/static/assets/locales/en/testing.json'),
        },
      }
    : undefined;
