import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { _test } from '#lib-config/node/test/_test';
import { config as configFrontend } from '#lib-config/node/test/test.frontend';
import { type _TestConfigModel, type TestConfigModel } from '#lib-config/node/test/test.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '#lib-shared/core/utils/merge/merge.constants';

export const config: TestConfigModel = ({ ...params } = {}) =>
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
      configFrontend({ ...params }),
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );

export const _config: _TestConfigModel = ({ ...params } = {}) => _test(config({ ...params }));
