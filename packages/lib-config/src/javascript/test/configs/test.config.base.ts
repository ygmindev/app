import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { bundleConfig } from '@lib/config/javascript/bundle/configs/bundle.config.base';
import type { TestConfigParamsModel } from '@lib/config/javascript/test/test.models';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';

export const testConfig: TestConfigParamsModel = {
  bundle: bundleConfig,

  cachePath: fromWorking('.cache/test'),

  command: 'jest --runInBand',

  configFile: 'test.config.ts',

  coverageOutputPath: fromWorking('coverage'),

  fileExtensions: ['gif', 'jpeg', 'jpg', 'otf', 'png', 'svg', 'ttf', 'woff', 'woff2'],

  match: process.env.TEST_MATCH || '*',

  mockPath: fromConfig('javascript/test/configs/__mocks__'),

  root: fromWorking(),

  testExtensions: permuteString(['.e2e', '.spec'], bundleConfig.extensions),

  timeout: 30e3,
};
