import type { Config } from '@jest/types';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import type { TaskParamsModel } from '#tool-task/core/core.models';
import { prompt } from '#tool-task/core/utils/prompt/prompt';
import type { TestParamsModel } from '#tool-task/node/templates/test/test.models';
import { runCLI } from 'jest';

import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { importConfig } from '#lib-config/core/utils/importConfig/importConfig';
import type { _TestConfigModel, TestConfigModel } from '#lib-config/node/test/test.models';
import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';

export const test: TaskParamsModel<TestParamsModel> = {
  environment: ENVIRONMENT.TEST,

  name: 'test',

  task: async ({ options, root }) => {
    const testMatch =
      options?.isPrompt && (await prompt([{ isOptional: true, key: 'testMatch' }])).testMatch;
    testMatch && (process.env.TEST_MATCH = testMatch);
    const { _config } = await importConfig<TestConfigModel, _TestConfigModel>('node/test/test');
    await runCLI(
      { config: JSON.stringify(_config), runInBand: true, watch: options?.isWatch } as Config.Argv,
      [root || fromWorking()],
    );
    return { status: TASK_STATUS.SUCCESS };
  },
};
