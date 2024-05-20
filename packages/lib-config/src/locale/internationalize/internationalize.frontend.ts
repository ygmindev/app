import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';
import { config as configBase } from '@lib/config/locale/internationalize/internationalize.base';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { APP_URI } from '@lib/shared/http/http.constants';

const { _config, config } = defineConfig({
  _config: _internationalize,

  config: configBase,

  overrides: () => [
    {
      isPreload: false,

      path: APP_URI,
    },
  ],
});

export { _config, config };
