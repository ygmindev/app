import type { TestConfigModel, _TestConfigModel } from '@lib/config/node/test/test.models';
import { config as configFrontend } from '@lib/config/node/test/test.frontend';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { _test } from '@lib/config/node/test/_test';

export const config: TestConfigModel = () => merge(
    [{
      // bundleConfig: bundleConfig(),

      mocks: [
        ['@react-native-async-storage/async-storage', () => mockAsyncStorage],
        'react-native/Libraries/Animated/NativeAnimatedHelper',
        'react-native/Libraries/EventEmitter/NativeEventEmitter',
      ],
    }, configFrontend()],
    MERGE_STRATEGY.DEEP_PREPEND,
  );

export const _config: _TestConfigModel = () => _test(config());
