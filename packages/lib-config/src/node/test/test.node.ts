import type { TestConfigModel } from '@lib/config/node/test/_test.models';
import { default as testConfigBase } from '@lib/config/node/test/test.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { setup } from '@tool/task/core/utils/setup/setup';

const testConfigParams: TestConfigModel = merge(
  [
    {
      onBeforeAll: setup.initialize,
    },

    testConfigBase,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);

export default testConfigParams;
