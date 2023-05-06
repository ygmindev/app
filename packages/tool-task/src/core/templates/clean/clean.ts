import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import type { CleanParamsModel } from '@tool/task/core/templates/clean/clean.models';
import { runClean } from '@tool/task/core/utils/runClean/runClean';

export const clean: TaskParamsModel<CleanParamsModel> = {
  name: 'clean',

  task: async ({ options, root }) => {
    await runClean({ patterns: options.patterns, root });
    return { status: TASK_STATUS.SUCCESS };
  },
};
