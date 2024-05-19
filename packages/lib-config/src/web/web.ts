import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { config as bundleConfig } from '@lib/config/node/bundle/bundle.web';
import { config as serverConfig } from '@lib/config/server/server';
import { _web } from '@lib/config/web/_web';
import { WEB_CONFIG } from '@lib/config/web/web.constants';
import { type WebConfigModel } from '@lib/config/web/web.models';

const { _config, config } = defineConfig({
  _config: _web,

  config: () =>
    ({
      ...WEB_CONFIG,

      bundleConfig,

      certificate: serverConfig().certificate,

      isSsr: true,
    }) satisfies WebConfigModel,
});

export { _config, config };
