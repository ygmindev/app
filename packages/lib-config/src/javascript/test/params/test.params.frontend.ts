import type { _TestConfigParamsModel } from '@lib/config/javascript/test/_test.models';
import { testConfigParams as testConfigParamsBase } from '@lib/config/javascript/test/params/test.params.base';
import type { CallableModel } from '@lib/shared/core/core.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export const testConfigParams: _TestConfigParamsModel = merge(
  [
    {
      onBeforeAll: async () => {
        global.requestAnimationFrame = ((cb: CallableModel) => {
          cb();
          return -1;
        }) as unknown as typeof global.requestAnimationFrame;
      },
    },
    testConfigParamsBase,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);
