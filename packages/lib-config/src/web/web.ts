import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { config as httpConfig } from '@lib/config/http/http/http';
import { config as bundleConfig } from '@lib/config/node/bundle/bundle.web';
import { _web } from '@lib/config/web/_web';
import { WEB_CONFIG } from '@lib/config/web/web.constants';
import { type WebConfigModel } from '@lib/config/web/web.models';

const { _config, config } = defineConfig({
  _config: _web,

  config: () =>
    ({
      ...WEB_CONFIG,

      bundleConfig,

      httpConfig,

      isSsr: true,
    }) satisfies WebConfigModel,
});

export { _config, config };
