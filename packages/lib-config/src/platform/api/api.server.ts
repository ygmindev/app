import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { config as configBase } from '@lib/config/platform/api/api.base';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';

const { config } = defineConfig({
  config: configBase,

  overrides: [
    {
      routes: [{ method: HTTP_METHOD.POST, pathname: 'auth' }],
    },
  ],
});

export { config };
