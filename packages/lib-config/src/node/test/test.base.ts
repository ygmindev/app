import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import bundleConfig from '@lib/config/node/bundle/bundle.node';
import type { TestConfigModel } from '@lib/config/node/test/_test.models';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';

const testConfig: TestConfigModel = {
    cachePath: fromWorking('.cache/test'),
  
    command: 'jest --runInBand --detectOpenHandles',
  
    config: 'node/test/configs/test.config',
  
    coverageOutputPath: fromWorking('coverage'),
  
    fileExtensions: ['gif', 'jpeg', 'jpg', 'otf', 'png', 'svg', 'ttf', 'woff', 'woff2'],
  
    match: process.env.TEST_MATCH || '*',
  
    mockPath: fromConfig('node/test/params/__mocks__'),
  
    root: fromWorking(),
  
    testExtensions: permuteString(['.e2e', '.spec'], bundleConfig.extensions),
  
    timeout: 60e3,
};

export default testConfig;
