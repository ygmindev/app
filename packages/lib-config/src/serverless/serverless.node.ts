import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { _serverless } from '@lib/config/serverless/_serverless';
import { config as configBase } from '@lib/config/serverless/serverless.base';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

const { _config, config } = defineConfig({
  _config: _serverless,

  config: configBase,

  overrides: () => [
    {
      platform: PLATFORM.NODE,
    },
  ],
});

export { _config, config };
