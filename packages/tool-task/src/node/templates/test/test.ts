import testConfigParams from '@lib/config/node/test/params/test.params.base';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { runWithConfig } from '@tool/task/core/utils/runWithConfig/runWithConfig';
import type { TestParamsModel } from '@tool/task/node/templates/test/test.models';

export const test: TaskParamsModel<TestParamsModel> = {
  environment: ENVIRONMENT.TEST,

  name: 'test',

  task: async ({ options, root }) => {
    const testMatch =
      options.isPrompt && (await prompt([{ isOptional: true, key: 'testMatch' }])).testMatch;
    testMatch && (process.env.TEST_MATCH = testMatch);
    return await runWithConfig({
      command: testConfigParams.command,
      config: testConfigParams.config,
      root,
    });
  },
};
