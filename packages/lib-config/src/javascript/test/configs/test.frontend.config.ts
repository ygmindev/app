import { bundleConfig } from '@lib/config/javascript/bundle/configs/bundle.frontend.config';
import { testConfig as testConfigBase } from '@lib/config/javascript/test/configs/test.base.config';
import type { TestConfigParamsModel } from '@lib/config/javascript/test/test.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export const testConfig: TestConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    {
      bundle: merge({
        values: [{ aliases: { '\\.(css|sass)$': 'identity-obj-proxy' } }, bundleConfig],
      }),
    },

    testConfigBase,
  ],
});
