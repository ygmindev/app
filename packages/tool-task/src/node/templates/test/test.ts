import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { testConfigParams } from '@lib/config/node/test/params/test.params.base';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
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
      command: `${fromExecutable(testConfigParams.command)} --config=${testConfigParams.configFile}`,
      root,
    });
    return { status: TASK_STATUS.SUCCESS };
  },
};
