import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { bundleConfig } from '@lib/config/js/bundle/configs/bundle.base.config';
import type { TestConfigParamsModel } from '@lib/config/js/test/test.models';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { EXTENSIONS_TEST } from '@lib/shared/file/file.constants';

export const testConfig: TestConfigParamsModel = {
  bundle: bundleConfig,

  cachePath: fromWorking('.cache/test'),

  configFile: 'test.config.ts',

  coverageOutputPath: fromWorking('coverage'),

  fileExtensions: ['gif', 'jpeg', 'jpg', 'otf', 'png', 'svg', 'ttf', 'woff', 'woff2'],

  match: getEnv('TEST_MATCH', '*'),

  mockPath: fromConfig('node/test/configs/__mocks__'),

  root: fromWorking(),

  testExtensions: EXTENSIONS_TEST,

  timeout: 30e3,
};
