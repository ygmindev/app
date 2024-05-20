import { config as bundleConfig } from '@lib/config/node/bundle/bundle.web';
import { _test } from '@lib/config/node/test/_test';
import { config as configBase } from '@lib/config/node/test/test.frontend';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

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
