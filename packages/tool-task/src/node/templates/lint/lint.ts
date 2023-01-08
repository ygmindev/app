import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { command } from '@tool/task/core/utils/command/command';

export const LINT_COMMAND = `${fromExecutable(
  'eslint',
)} --no-error-on-unmatched-pattern --fix src/**/*.{ts,tsx,js,jsx}`;

export const lint: TaskParamsModel = {
  name: 'lint',

  task: async ({ root }) => {
    const typescriptResult = await command({
      command: `${fromExecutable('tsc')} --project tsconfig.json`,
      root,
    });
    if (!typescriptResult) {
      return { status: TASK_STATUS.ERROR };
    }
    const eslintResult = await command({ command: LINT_COMMAND, root });
    if (!eslintResult) {
      return { status: TASK_STATUS.ERROR };
    }
    return { status: TASK_STATUS.SUCCESS };
  },
};
