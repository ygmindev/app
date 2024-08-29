import bundleConfig from '@lib/config/node/bundle/bundle.frontend';
import configBase from '@lib/config/node/test/test.base';
import { type _TestConfigModel, type TestConfigModel } from '@lib/config/node/test/test.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const config = defineConfig<TestConfigModel, _TestConfigModel>({
  ...configBase,

  overrides: () => [
    {
      bundle: bundleConfig.params(),

      mocks: [
        // TODO: fix typing?
        ['react-native-reanimated', () => jest.requireActual('react-native-reanimated/mock')] as [
          string,
          () => unknown,
        ],
      ],
    },
  ],
});

export default config;
