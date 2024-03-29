import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { config as bundleConfig } from '@lib/config/node/bundle/bundle.node';
import { _test } from '@lib/config/node/test/_test';
import { config as configBase } from '@lib/config/node/test/test.frontend';

const { _config, config } = defineConfig({
  _config: _test,

  config: configBase,

  overrides: () => [
    {
      bundleConfig,
    },
  ],
});

export { _config, config };
