import type { _TestConfigParamsModel } from '@lib/config/javascript/test/_test.models';
import { testConfigParams as testConfigParamsFrontend } from '@lib/config/javascript/test/params/test.params.frontend';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export const testConfigParams: _TestConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    {
      onBeforeAll: async () => {
        window.open = jest.fn();
        window.addEventListener = jest.fn();
        window.removeEventListener = jest.fn();
      },
    },
    testConfigParamsFrontend,
  ],
});
