import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { _config as _bundleConfig } from '#lib-config/node/bundle/bundle.web';
import { _web } from '#lib-config/platform/web/_web';
import { WEB_CONFIG } from '#lib-config/platform/web/web.constants';
import { type WebConfigModel } from '#lib-config/platform/web/web.models';

const { _config, config } = defineConfig({
  _config: _web,

  config: () =>
    ({
      bundleConfig: _bundleConfig,

      configFile: fromWorking('web.js'),

      isSsr: true,

      ...WEB_CONFIG,
    } satisfies WebConfigModel),
});

export { _config, config };
