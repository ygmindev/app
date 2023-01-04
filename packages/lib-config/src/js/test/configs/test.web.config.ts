import { bundleConfig } from '@lib/config/js/bundle/configs/bundle.web.config';
import { testConfig as testConfigFrontend } from '@lib/config/js/test/configs/test.frontend.config';
import type { TestConfigParamsModel } from '@lib/config/js/test/test.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export const testConfig: TestConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    {
      bundle: merge({
        values: [{}, bundleConfig],
      }),
    },

    testConfigFrontend,
  ],
});