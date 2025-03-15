import { config as bundleConfig } from '@lib/config/node/bundle/bundle.node';
import { config as configBase } from '@lib/config/node/test/test.base';
import { type _TestConfigModel, type TestConfigModel } from '@lib/config/node/test/test.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<TestConfigModel, _TestConfigModel>({
  ...configBase,

  overrides: () => [
    {
      bundle: bundleConfig.params(),
    },
  ],
});

export default config;
