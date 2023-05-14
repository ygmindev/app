import type { _TestConfigParamsModel } from '@lib/config/node/test/_test.models';
import { testConfigParams as testConfigParamsBase } from '@lib/config/node/test/params/test.params.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { setup } from '@tool/task/core/utils/setup/setup';

export const testConfigParams: _TestConfigParamsModel = merge(
  [
    {
      onBeforeAll: setup.initialize,
    },

    testConfigParamsBase,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);
