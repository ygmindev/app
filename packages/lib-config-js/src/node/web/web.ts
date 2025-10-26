import { config as bundleConfig } from '@lib/config/node/bundle/bundle.web';
import { config as serverConfig } from '@lib/config/node/server/server';
import { _web } from '@lib/config/node/web/_web';
import { WEB_PREFIX, WEB_ROOT_ID, WEB_SSR_CONTEXT_KEYS } from '@lib/config/node/web/web.constants';
import { type _WebConfigModel, type WebConfigModel } from '@lib/config/node/web/web.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<WebConfigModel, _WebConfigModel>({
  config: _web,

  params: () => ({
    bundle: bundleConfig.params(),

    isSsr: true,

    rootId: WEB_ROOT_ID,

    server: serverConfig.params(),

    ssrContextKeys: WEB_SSR_CONTEXT_KEYS,

    subdomain: WEB_PREFIX,
  }),
});

export default config;
