import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';
import { config as configBase } from '@lib/config/locale/internationalize/internationalize.frontend';
import I18NexFsBackend from 'i18next-fs-backend';

const { _config, config } = defineConfig({
  _config: _internationalize,

  config: configBase,

  overrides: () => [
    {
      isPreload: true,

      modules: [I18NexFsBackend],

      path: fromStatic('assets'),
    },
  ],
});

export { _config, config };
