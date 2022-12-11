import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { info } from '@lib/shared/logging/utils/logger/logger';
import { command } from '@tool/task/core/utils/command/command';
import { ESLINT_CLI_PARAMS } from '@tool/task/node/templates/lint/lint.constants';
import { ESLint } from 'eslint';
import { sum } from 'lodash';

export const lint: TaskParamsModel = {
  name: 'lint',

  task: async ({ root }) => {
    const result = await command({
      command: `${fromExecutable('tsc')} --project tsconfig.json`,
      root,
    });
    if (!result) {
      return { status: TASK_STATUS.ERROR };
    }

    const eslint = new ESLint({ ...ESLINT_CLI_PARAMS, cwd: root });
    const results = await eslint.lintFiles(['src/**/*.{ts,tsx,js,jsx}']);
    await ESLint.outputFixes(results);

    const formatter = await eslint.loadFormatter('stylish');
    const formatted = formatter.format(results);
    formatted && info(formatted);

    const errorCount = sum(results.map(({ errorCount }) => errorCount || 0));
    return {
      status: errorCount ? TASK_STATUS.ERROR : TASK_STATUS.SUCCESS,
    };
  },
};
