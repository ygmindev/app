import type { Config } from '@jest/types';
import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { importConfig } from '@lib/config/core/utils/importConfig/importConfig';
import { BundleConfigModel } from '@lib/config/node/bundle/_bundle.models';
import _testConfig from '@lib/config/node/test/_test';
import type { TestConfigModel } from '@lib/config/node/test/_test.models';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import { runCLI } from 'jest';

const testConfig: TestConfigModel = async () => {
  const _bundleConfig = await importConfig<BundleConfigModel>('node/bundle/bundle');
  return {
    cachePath: fromWorking('.cache/test'),
  
    coverageOutputPath: fromWorking('coverage'),
  
    fileExtensions: ['gif', 'jpeg', 'jpg', 'otf', 'png', 'svg', 'ttf', 'woff', 'woff2'],
  
    match: process.env.TEST_MATCH || '*',
  
    mockPath: fromConfig('node/test/params/__mocks__'),
  
    root: fromWorking(),
  
    task: async ({ root = fromWorking() }) => {
      const testConfig = await _testConfig();
      await runCLI({ ...testConfig, runInBand: true } as Config.Argv, [root]);
      return { status: TASK_STATUS.SUCCESS };
    },
  
    testExtensions: permuteString(['.e2e', '.spec'], _bundleConfig.extensions),
  
    timeout: 60e3,
  };
};

export default testConfig;
