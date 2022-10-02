import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { i18nConfig } from '@lib/config/i18n/i18n.config';
import type { PlaywrightTestConfig } from '@playwright/test';

export const playwrightConfig: PlaywrightTestConfig = {
  reporter: 'html',

  testDir: fromWorking('src'),

  testMatch: [/.*(e2e)\.(js|ts|mjs)/],

  use: {
    colorScheme: 'dark',
    locale: i18nConfig.lng,
  },
};
