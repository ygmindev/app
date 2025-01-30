import bundleConfig from '@lib/config/node/bundle/bundle.web';
import serverConfig from '@lib/config/node/server/server';
import { _web } from '@lib/config/node/web/_web';
import { WEB_CONFIG } from '@lib/config/node/web/web.constants';
import { type _WebConfigModel, type WebConfigModel } from '@lib/config/node/web/web.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<WebConfigModel, _WebConfigModel>({
  config: _web,

  params: () => ({
    ...WEB_CONFIG,

    bundle: bundleConfig.params(),

    isSsr: true,

    server: serverConfig.params(),
  }),
});

export default config;
