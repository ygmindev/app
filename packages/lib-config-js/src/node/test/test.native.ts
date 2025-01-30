import bundleConfig from '@lib/config/node/bundle/bundle.native';
import configBase from '@lib/config/node/test/test.frontend';
import { type _TestConfigModel, type TestConfigModel } from '@lib/config/node/test/test.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

export const config = defineConfig<TestConfigModel, _TestConfigModel>({
  ...configBase,

  overrides: () => [
    {
      bundle: bundleConfig.params(),

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

export default config;
