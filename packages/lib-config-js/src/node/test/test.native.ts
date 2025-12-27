import { bundleConfig } from '@lib/config/node/bundle/bundle.native';
import { testConfig as configBase } from '@lib/config/node/test/test.base';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

export const testConfig = configBase.extend(() => ({
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
}));
