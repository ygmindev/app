import { config as bundleConfig } from '@lib/config/node/bundle/bundle.frontend';
import { _test } from '@lib/config/node/test/_test';
import { config as configBase } from '@lib/config/node/test/test.base';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  _config: _test,

  config: configBase,

  overrides: () => [
    {
      bundleConfig,

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

export { _config, config };
