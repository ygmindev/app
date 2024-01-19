import { locale } from 'expo-localization';
import { type Module } from 'i18next';

import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';
import { config as configBase } from '@lib/config/locale/internationalize/internationalize.frontend';

const { _config, config } = defineConfig({
  _config: _internationalize,

  config: configBase,

  overrides: () => [
    {
      modules: [{ detect: () => locale, type: 'languageDetector' } as Module],
    },
  ],
});

export { _config, config };
