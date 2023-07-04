import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { _test } from '#lib-config/node/test/_test';
import { config as configBase } from '#lib-config/node/test/test.frontend';
import { type _TestConfigModel, type TestConfigModel } from '#lib-config/node/test/test.models';
import { merge } from '#lib-shared/core/utils/merge/merge';

export const config: TestConfigModel = ({ ...params } = {}) =>
  merge([
    {
      // bundleConfig,

      mocks: [
        ['@react-native-async-storage/async-storage', () => mockAsyncStorage],
        'react-native/Libraries/Animated/NativeAnimatedHelper',
        'react-native/Libraries/EventEmitter/NativeEventEmitter',
      ],
    },
    configBase({ ...params }),
  ]);

export const _config: _TestConfigModel = ({ ...params } = {}) => _test(config({ ...params }));
