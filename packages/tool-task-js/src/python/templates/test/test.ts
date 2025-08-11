import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import testConfig from '@lib/config/python/test/test';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type TestParamsModel } from '@tool/task/python/templates/test/test.models';

export const test: TaskParamsModel<TestParamsModel> = {
  environment: ENVIRONMENT.TEST,

  name: 'test',

  options: async () => ({ testMatch: { isOptional: true } }),

  task: [
    ({ options }) => {
      const testMatch = options?.testMatch;
      const { command, ...config } = testConfig.params();
      const testDir = (
        testMatch
          ? fromGlobs([`**/${testMatch}*.py`], { isAbsolute: true, root: config.testDir })
          : []
      ).join(' ');
      return command({ ...config, testDir });
    },
  ],
};
