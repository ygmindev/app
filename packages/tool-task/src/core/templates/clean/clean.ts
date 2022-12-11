import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import type { CleanParamsModel } from '@tool/task/core/templates/clean/clean.models';
import { runClean } from '@tool/task/core/utils/runClean/runClean';

export const clean: TaskParamsModel<CleanParamsModel> = {
  name: 'clean',

  task: async ({ options, root }) => {
    await runClean({ patterns: options.patterns, root });
    return { status: TASK_STATUS.SUCCESS };
  },
};
