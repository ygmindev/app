import type { Config } from '@jest/types';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { TEST_EXTENSIONS } from '@lib/shared/file/file.constants';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';
import type { TestParamsModel } from '@tool/task/node/templates/test/test.models';
import { runCLI } from 'jest';
import { reduce } from 'lodash';
import { join } from 'path';

export const test: RegisterParamsModel<TestParamsModel> = {
  environment: ENVIRONMENT.TEST,

  name: 'test',

  task: async ({ options, root }) => {
    const configFilePath = options.configFilePath || fromWorking('jest.config.ts');
    const config: Config.InitialOptions = (await import(configFilePath)).default;
    const testMatch =
      (options?.isPrompt && (await prompt([{ isOptional: true, key: 'testMatch' }])).testMatch) ||
      '*';
    const coverageDirectory = fromWorking('coverage');
    const { results } = await runCLI(
      {
        ...config,
        collectCoverageFrom: `<rootDir>/src/**/(${testMatch}|_${testMatch}).{ts,tsx,js,jsx}`,
        coverageDirectory,
        reporters: [
          'default',
          [
            'jest-stare',
            {
              coverageLink: join(coverageDirectory, 'lcov-report/index.html'),
              reportSummary: true,
              resultDir: join(coverageDirectory, 'js-stare'),
            },
          ],
        ],
        rootDir: root,
        runInBand: true,
        testMatch: reduce<string, Array<string>>(
          TEST_EXTENSIONS,
          (result, ext) => [
            ...result,
            `<rootDir>/src/**/${testMatch}.${ext}.{ts,tsx,js,jsx}`,
            `<rootDir>/src/**/_${testMatch}.${ext}.{ts,tsx,js,jsx}`,
          ],
          [],
        ),
        watch: options?.isWatch,
      } as Config.Argv,
      [fromWorking()],
    );
    return {
      status: results.success ? TASK_RESULTS_STATUS_TYPE.SUCCESS : TASK_RESULTS_STATUS_TYPE.ERROR,
    };
  },
};
