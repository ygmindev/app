import type { _TestConfigParamsModel } from '@lib/config/node/test/_test.models';
import { default as testConfigParamsBase } from '@lib/config/node/test/params/test.params.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { setup } from '@tool/task/core/utils/setup/setup';

const testConfigParams: _TestConfigParamsModel = merge<_TestConfigParamsModel>(
  [
    {
      onBeforeAll: setup.initialize,
    },

    testConfigParamsBase,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);

export default testConfigParams;
