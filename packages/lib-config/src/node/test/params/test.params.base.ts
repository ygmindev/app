import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import bundleConfigParams from '@lib/config/node/bundle/params/bundle.params.base';
import type { _TestConfigParamsModel } from '@lib/config/node/test/_test.models';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';

const testConfigParams: _TestConfigParamsModel = {
  cachePath: fromWorking('.cache/test'),

  command: fromExecutable('jest --runInBand --detectOpenHandles'),

  config: fromConfig('node/test/configs/test.config'),

  coverageOutputPath: fromWorking('coverage'),

  fileExtensions: ['gif', 'jpeg', 'jpg', 'otf', 'png', 'svg', 'ttf', 'woff', 'woff2'],

  match: process.env.TEST_MATCH || '*',

  mockPath: fromConfig('node/test/params/__mocks__'),

  root: fromWorking(),

  testExtensions: permuteString(['.e2e', '.spec'], bundleConfigParams.extensions),

  timeout: 60e3,
};

export default testConfigParams;
