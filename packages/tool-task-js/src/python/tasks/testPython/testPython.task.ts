import { testConfig } from '@lib/config/python/test/test';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { appPrompt } from '@tool/task/core/utils/appPrompt/appPrompt';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { execute } from '@tool/task/core/utils/execute/execute';
import { type TestPythonParamsModel } from '@tool/task/python/tasks/testPython/testPython.models';

export const testPython = buildTask<TestPythonParamsModel>({
  context: {
    environment: ENVIRONMENT.TEST,
  },

  prompts: [appPrompt({ patterns: [/^.*-py$/] }), { isOptional: true, key: 'include' }],

  task: async ({ include }, context) => {
    const { command, outDir, testDir } = testConfig.params();
    await execute({
      command: command({ include, outDir, testDir }),
      root: context?.root,
    });
  },
});
