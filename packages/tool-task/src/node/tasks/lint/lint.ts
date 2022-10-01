import { info } from '@lib/shared/logging/utils/logger/logger';
import { command } from '@tool/task/core/utils/command/command';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';
import { ESLINT_CLI_PARAMS } from '@tool/task/node/tasks/lint/lint.constants';
import { ESLint } from 'eslint';
import { sum } from 'lodash';

export const lint: RegisterParamsModel = {
  name: 'lint',

  task: async ({ root }) => {
    const result = await command({ command: 'tsc --project tsconfig.json', root });
    if (!result) {
      return { status: TASK_RESULTS_STATUS_TYPE.ERROR };
    }

    const eslint = new ESLint({ ...ESLINT_CLI_PARAMS, cwd: root });
    const results = await eslint.lintFiles(['src/**/*.{ts,tsx,js,jsx}']);
    await ESLint.outputFixes(results);

    const formatter = await eslint.loadFormatter('stylish');
    const formatted = formatter.format(results);
    formatted && info(formatted);

    const errorCount = sum(results.map(({ errorCount }) => errorCount || 0));
    return {
      status: errorCount ? TASK_RESULTS_STATUS_TYPE.ERROR : TASK_RESULTS_STATUS_TYPE.SUCCESS,
    };
  },
};
