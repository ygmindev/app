import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { config as bundleConfig } from '@lib/config/node/bundle/bundle.native';
import { _test } from '@lib/config/node/test/_test';
import { config as configBase } from '@lib/config/node/test/test.frontend';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

const { _config, config } = defineConfig({
  _config: _test,

  config: configBase,

  overrides: () => [
    {
      bundleConfig,

      dimension: { height: 844, width: 390 },

      mocks: [
        // TODO: fix typing
        ['@react-native-async-storage/async-storage', () => mockAsyncStorage] as [
          string,
          () => unknown,
        ],
        'react-native/Libraries/Animated/NativeAnimatedHelper',
        'react-native/Libraries/EventEmitter/NativeEventEmitter',
      ],
    },
  ],
});

export { _config, config };
