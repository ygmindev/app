import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';
import { config as configBase } from '@lib/config/locale/internationalize/internationalize.frontend';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import I18NextHttpBackend from 'i18next-http-backend';

const { _config, config } = defineConfig({
  _config: _internationalize,

  config: configBase,

  overrides: () => [{ modules: [I18NextHttpBackend] }],
});

export { _config, config };
