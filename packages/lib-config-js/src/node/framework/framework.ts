// import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { ASSETS_DIR } from '@lib/config/file/file.constants';
import { _framework } from '@lib/config/node/framework/_framework';
import { SSR_CONTEXT_KEYS } from '@lib/config/node/framework/framework.constants';
import {
  type _FrameworkConfigModel,
  type FrameworkConfigModel,
} from '@lib/config/node/framework/framework.models';
import { Config } from '@lib/config/utils/Config/Config';

export const frameworkConfig = new Config<FrameworkConfigModel, _FrameworkConfigModel>({
  config: _framework,

  params: () => {
    // const environment = Container.get(Environment);
    return {
      assetsUri: {
        host: process.env.SERVER_APP_STATIC_HOST,

        port:
          process.env.SERVER_APP_STATIC_PORT ??
          ((process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') &&
          !process.env.NODE_RUNTIME
            ? process.env.APP_PORT
            : undefined),

        subdomain: process.env.SERVER_APP_SUBDOMAIN,
      },

      faviconDir: `${ASSETS_DIR}/favicon/favicon.svg`,

      ssrContextKeys: SSR_CONTEXT_KEYS,
    };
  },
});
