import { bundleConfig } from '@lib/config/node/bundle/configs/bundle.frontend';
import { testConfig as testConfigBase } from '@lib/config/node/test/configs/test.base';
import type { TestConfigParamsModel } from '@lib/config/node/test/test.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { EXTENSIONS_FRONTEND } from '@lib/shared/file/file.constants';
import { pick } from 'lodash';

export const testConfig: TestConfigParamsModel = merge<TestConfigParamsModel>({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    pick(bundleConfig, ['aliases', 'define', 'externals', 'platform']),

    {
      aliases: { '\\.(css|sass)$': 'identity-obj-proxy' },

      resolveExtensions: EXTENSIONS_FRONTEND,
    },

    testConfigBase,
  ],
});
