import type { Config } from '@jest/types';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import type { TestParamsModel } from '@tool/task/node/templates/test/test.models';
import { runCLI } from 'jest';

export const test: TaskParamsModel<TestParamsModel> = {
  environment: ENVIRONMENT.TEST,

  name: 'test',

  task: async ({ options }) => {
    const testMatch =
      options.isPrompt && (await prompt([{ isOptional: true, key: 'testMatch' }])).testMatch;
    testMatch && (process.env.TEST_MATCH = testMatch);
    const { results } = await runCLI(
      { config: fromWorking('test.config.ts'), runInBand: true } as Config.Argv,
      [fromWorking()],
    );
    return { status: results.success ? TASK_STATUS.SUCCESS : TASK_STATUS.ERROR };
  },
};
