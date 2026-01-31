import { type Config } from '@jest/types';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { testConfig } from '@lib/config/node/test/test';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { TEST } from '@tool/task/node/tasks/test/test.constants';
import { type TestModel, type TestParamsModel } from '@tool/task/node/tasks/test/test.models';
import { runCLI } from 'jest';

export const test = buildTask<TestParamsModel, TestModel>({
  context: {
    environment: ENVIRONMENT.TEST,
  },

  name: TEST,

  prompts: [
    { isOptional: true, key: 'match' },

    { isOptional: true, key: 'isWatch', type: PROMPT_TYPE.CONFIRM },
  ],

  task: async ({ isWatch, match }, context) => {
    const root = context?.root ?? fromRoot();
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
