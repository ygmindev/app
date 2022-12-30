import { bundleConfig } from '@lib/config/js/bundle/configs/bundle.web.config';
import { testConfig as testConfigFrontend } from '@lib/config/js/test/configs/test.frontend.config';
import type { TestConfigParamsModel } from '@lib/config/js/test/test.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { EXTENSIONS_WEB } from '@lib/shared/file/file.constants';
import { pick } from 'lodash';

export const testConfig: TestConfigParamsModel = merge<TestConfigParamsModel>({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    pick(bundleConfig, ['aliases', 'define', 'externals', 'platform']),

    { resolveExtensions: EXTENSIONS_WEB },

    testConfigFrontend,
  ],
});
