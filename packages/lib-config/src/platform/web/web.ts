import { defineConfig } from '@lib-config/core/utils/defineConfig/defineConfig';
import { _config as _bundleConfig } from '@lib-config/node/bundle/bundle.web';
import { _web } from '@lib-config/platform/web/_web';
import { WEB_CONFIG } from '@lib-config/platform/web/web.constants';
import { type WebConfigModel } from '@lib-config/platform/web/web.models';

const { _config, config } = defineConfig({
  _config: _web,

  config: () =>
    ({
      ...WEB_CONFIG,

      bundleConfig: _bundleConfig,

      configFile: 'web.js',

      isSsr: true,
    }) satisfies WebConfigModel,
});

export { _config, config };
