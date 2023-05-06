import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { bundleConfigParams } from '@lib/config/javascript/bundle/params/bundle.params.base';
import type { _TestConfigParamsModel } from '@lib/config/javascript/test/_test.models';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';

export const testConfigParams: _TestConfigParamsModel = {
  cachePath: fromWorking('.cache/test'),

  command: 'jest --runInBand',

  configFile: 'test.config.ts',

  coverageOutputPath: fromWorking('coverage'),

  fileExtensions: ['gif', 'jpeg', 'jpg', 'otf', 'png', 'svg', 'ttf', 'woff', 'woff2'],

  match: process.env.TEST_MATCH || '*',

  mockPath: fromConfig('javascript/test/configs/__mocks__'),

  root: fromWorking(),

  testExtensions: permuteString(['.e2e', '.spec'], bundleConfigParams.extensions),

  timeout: 30e3,
};
