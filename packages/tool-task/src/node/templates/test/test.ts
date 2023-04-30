import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { testConfig } from '@lib/config/javascript/test/configs/test.config.base';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { command } from '@tool/task/core/utils/command/command';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import type { TestParamsModel } from '@tool/task/node/templates/test/test.models';

export const test: TaskParamsModel<TestParamsModel> = {
  environment: ENVIRONMENT.TEST,

  name: 'test',

  task: async ({ options, root }) => {
    const testMatch =
      options.isPrompt && (await prompt([{ isOptional: true, key: 'testMatch' }])).testMatch;
    testMatch && (process.env.TEST_MATCH = testMatch);

    await command({
      command: `${fromExecutable(testConfig.command)} --config=${testConfig.configFile}`,
      root,
    });
    return { status: TASK_STATUS.SUCCESS };
  },
};
