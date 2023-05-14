import type { _TestConfigParamsModel } from '@lib/config/javascript/test/_test.models';
import { testConfigParams as testConfigParamsBase } from '@lib/config/javascript/test/params/test.params.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export const testConfigParams: _TestConfigParamsModel = merge(
  [
    {
      mocks: [
        ['react-native-reanimated', () => jest.requireActual('react-native-reanimated/mock')],
      ],
    },
    testConfigParamsBase,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);
