import bundleConfig from '@lib/config/node/bundle/bundle.node';
import configBase from '@lib/config/node/test/test.base';
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
