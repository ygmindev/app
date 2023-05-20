import type { TestConfigModel } from '@lib/config/node/test/_test.models';
import { default as testConfigFrontend } from '@lib/config/node/test/test.frontend';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

const testConfig: TestConfigModel = async () => {
  const _testConfigFrontend = await testConfigFrontend();
  return merge(
    [{
      mocks: [
        ['@react-native-async-storage/async-storage', () => mockAsyncStorage],
        'react-native/Libraries/Animated/NativeAnimatedHelper',
        'react-native/Libraries/EventEmitter/NativeEventEmitter',
      ],
    }, _testConfigFrontend],
    MERGE_STRATEGY.DEEP_PREPEND,
  );
};

export default testConfig;
