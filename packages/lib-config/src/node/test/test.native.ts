import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { config as bundleConfig } from '#lib-config/node/bundle/bundle.native';
import { _test } from '#lib-config/node/test/_test';
import { config as configBase } from '#lib-config/node/test/test.frontend';
import { type OptionalCallableModel } from '#lib-shared/core/core.models';

const { _config, config } = defineConfig({
  _config: _test,

  config: configBase,

  overrides: () => [
    {
      bundleConfig,

      mocks: [
        ['@react-native-async-storage/async-storage', () => mockAsyncStorage] as [
          string,
          OptionalCallableModel<unknown>,
        ],
        'react-native/Libraries/Animated/NativeAnimatedHelper',
        'react-native/Libraries/EventEmitter/NativeEventEmitter',
      ],
    },
  ],
});

export { _config, config };
