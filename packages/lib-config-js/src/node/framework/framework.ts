import { ASSETS_DIR } from '@lib/config/file/file.constants';
import { _framework } from '@lib/config/node/framework/_framework';
import { SSR_CONTEXT_KEYS } from '@lib/config/node/framework/framework.constants';
import {
  type _FrameworkConfigModel,
  type FrameworkConfigModel,
} from '@lib/config/node/framework/framework.models';
import { onPrerender } from '@lib/config/node/framework/onPrerender/onPrerender';
import { Config } from '@lib/config/utils/Config/Config';

export const frameworkConfig = new Config<FrameworkConfigModel, _FrameworkConfigModel>({
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

    onPrerender,

    ssrContextKeys: SSR_CONTEXT_KEYS,
  }),
});
