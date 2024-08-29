import bundleConfig from '@lib/config/node/bundle/bundle.web';
import configBase from '@lib/config/node/test/test.frontend';
import { type _TestConfigModel, type TestConfigModel } from '@lib/config/node/test/test.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const config = defineConfig<TestConfigModel, _TestConfigModel>({
  ...configBase,

  overrides: () => [
    {
      bundle: bundleConfig.params(),
    },
  ],
});

export default config;
