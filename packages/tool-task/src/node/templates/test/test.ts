import { importConfig } from '@lib/config/core/utils/importConfig/importConfig';
import { _TestConfigModel } from '@lib/config/node/test/_test.models';
import testConfig from '@lib/config/node/test/test.base';
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
      options?.isPrompt && (await prompt([{ isOptional: true, key: 'testMatch' }])).testMatch;
    testMatch && (process.env.TEST_MATCH = testMatch);
    const _config = await importConfig<_TestConfigModel>(testConfig.config as string);
    return await runWithConfig({ command: testConfig.command, config: _config, root });
  },
};
