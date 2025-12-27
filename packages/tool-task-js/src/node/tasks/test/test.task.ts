import { type Config } from '@jest/types';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { getAppRoot } from '@lib/backend/file/utils/getAppRoot/getAppRoot';
import { testConfig } from '@lib/config/node/test/test';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { TEST } from '@tool/task/node/tasks/test/test.constants';
import { type TestModel, type TestParamsModel } from '@tool/task/node/tasks/test/test.models';
import { runCLI } from 'jest';

export const test = buildTask<TestParamsModel, TestModel>({
  context: {
    environment: ENVIRONMENT.TEST,
  },

  name: TEST,

  task: async ({ isWatch, match }, context) => {
    const root = context?.app ? await getAppRoot(context.app) : fromRoot();
    const config = testConfig.config({ isWatch, match, root });
    await runCLI(
      {
        config: JSON.stringify(config),
        runInBand: true,
        watch: isWatch,
      } as Config.Argv,
      [root],
    );
    return {};
  },
});
