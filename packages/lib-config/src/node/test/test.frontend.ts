import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { config as bundleConfig } from '#lib-config/node/bundle/bundle.frontend';
import { _test } from '#lib-config/node/test/_test';
import { config as configBase } from '#lib-config/node/test/test.base';
import { type OptionalCallableModel } from '#lib-shared/core/core.models';

const { _config, config } = defineConfig({
  _config: _test,

  config: configBase,

  overrides: () => [
    {
      bundleConfig,

      mocks: [
        ['react-native-reanimated', () => jest.requireActual('react-native-reanimated/mock')] as [
          string,
          OptionalCallableModel<unknown>,
        ],
      ],
    },
  ],
});

export { _config, config };
