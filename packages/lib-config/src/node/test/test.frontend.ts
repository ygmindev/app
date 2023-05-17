import type { TestConfigModel } from '@lib/config/node/test/_test.models';
import { default as testConfigBase } from '@lib/config/node/test/test.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

const testConfig: TestConfigModel = merge(
    [
      {
        mocks: [
          ['react-native-reanimated', () => jest.requireActual('react-native-reanimated/mock')],
        ],
      },
  
      testConfigBase,
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );

export default testConfig;

