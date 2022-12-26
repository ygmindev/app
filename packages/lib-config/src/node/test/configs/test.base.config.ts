import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { bundleConfig } from '@lib/config/node/bundle/configs/bundle.base.config';
import type { TestConfigParamsModel } from '@lib/config/node/test/test.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { EXTENSIONS_JS, EXTENSIONS_TEST } from '@lib/shared/file/file.constants';
import { pick } from 'lodash';

export const testConfig: TestConfigParamsModel = merge<TestConfigParamsModel>({
  values: [
    pick(bundleConfig, ['aliases', 'define', 'externals', 'platform']),

    {
      cachePath: fromWorking('.cache/test'),

      coverageOutputPath: fromWorking('coverage'),

      extensions: EXTENSIONS_TEST,

      fileExtensions: ['gif', 'jpeg', 'jpg', 'otf', 'png', 'svg', 'ttf', 'woff', 'woff2'],

      match: getEnv('TEST_MATCH', '*'),

      mockPath: fromConfig('node/test/configs/__mocks__'),

      resolveExtensions: EXTENSIONS_JS,

      root: fromWorking(),

      timeout: 30e3,
    },
  ],
});
