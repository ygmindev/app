import { config as configBase } from '@lib/config/api/api.base';
import { type ApiConfigModel } from '@lib/config/api/api.models';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';

const { config } = defineConfig({
  config: configBase,

  overrides: [
    {
      routes: [{ method: HTTP_METHOD.POST, pathname: 'auth' }],
    } as ApiConfigModel,
  ],
});

export { config };
