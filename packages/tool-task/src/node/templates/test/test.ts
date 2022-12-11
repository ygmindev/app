import type { Config } from '@jest/types';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { EXTENSIONS_TEST } from '@lib/shared/file/file.constants';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import type { TestParamsModel } from '@tool/task/node/templates/test/test.models';
import { runCLI } from 'jest';
import { reduce, trim } from 'lodash';
import { join } from 'path';

export const test: TaskParamsModel<TestParamsModel> = {
  environment: ENVIRONMENT.TEST,

  name: 'test',

  task: async ({ options }) => {
    const configFilePath = options.configFilePath || fromWorking('jest.config.ts');
    const config: Config.InitialOptions = (await import(configFilePath)).default;
    const testMatch =
      (options.isPrompt && (await prompt([{ isOptional: true, key: 'testMatch' }])).testMatch) ||
      '*';
    const { results } = await runCLI(
      {
        ...config,
        // collectCoverageFrom: `<rootDir>/src/**/(${testMatch}|_${testMatch}).{ts,tsx,js,jsx}`,
        reporters: [
          'default',
          [
            'jest-stare',
            {
              coverageLink: join(config.coverageDirectory || '', 'lcov-report/index.html'),
              reportSummary: true,
              resultDir: join(config.coverageDirectory || '', 'js-stare'),
            },
          ],
        ],
        runInBand: true,
        testMatch: reduce<string, Array<string>>(
          EXTENSIONS_TEST,
          (result, ext) => {
            const _ext = trim(ext, '.');
            return [
              ...result,
              `<rootDir>/src/**/${testMatch}.${_ext}`,
              `<rootDir>/src/**/_${testMatch}.${_ext}`,
            ];
          },
          [],
        ),
      } as Config.Argv,
      [fromWorking()],
    );
    return { status: results.success ? TASK_STATUS.SUCCESS : TASK_STATUS.ERROR };
  },
};
