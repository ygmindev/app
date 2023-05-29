import { _test } from '@lib/config/node/test/_test';
import { config as configFrontend } from '@lib/config/node/test/test.frontend';
import type { _TestConfigModel, TestConfigModel } from '@lib/config/node/test/test.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

export const config: TestConfigModel = () =>
  merge(
    [
      {
        // bundleConfig,

        mocks: [
          ['@react-native-async-storage/async-storage', () => mockAsyncStorage],
          'react-native/Libraries/Animated/NativeAnimatedHelper',
          'react-native/Libraries/EventEmitter/NativeEventEmitter',
        ],
      },
      configFrontend(),
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );

export const _config: _TestConfigModel = () => _test(config());
