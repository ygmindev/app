import { ASSETS_DIR } from '@lib/config/file/file.constants';
import { _framework } from '@lib/config/node/framework/_framework';
import {
  type _FrameworkConfigModel,
  type FrameworkConfigModel,
} from '@lib/config/node/framework/framework.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<FrameworkConfigModel, _FrameworkConfigModel>({
  config: _framework,

  params: () => ({
    assetsUri: {
      host: process.env.SERVER_APP_STATIC_HOST,
      port:
        process.env.SERVER_APP_STATIC_PORT ??
        ((process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') &&
        !process.env.NODE_RUNTIME
          ? process.env.APP_PORT
          : undefined),
    },

    faviconDir: `${ASSETS_DIR}/favicon/favicon.svg`,
  }),
});

export default config;
