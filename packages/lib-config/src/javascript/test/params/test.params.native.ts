import type { _TestConfigParamsModel } from '@lib/config/javascript/test/_test.models';
import { testConfigParams as testConfigParamsFrontend } from '@lib/config/javascript/test/params/test.params.frontend';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

export const testConfigParams: _TestConfigParamsModel = merge(
  [
    {
      mocks: [
        ['@react-native-async-storage/async-storage', () => mockAsyncStorage],
        'react-native/Libraries/Animated/NativeAnimatedHelper',
        'react-native/Libraries/EventEmitter/NativeEventEmitter',
      ],
    },
    testConfigParamsFrontend,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);
