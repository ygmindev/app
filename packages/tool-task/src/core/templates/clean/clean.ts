import type { CleanParamsModel } from '@tool/task/core/templates/clean/clean.models';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';
import { runClean } from '@tool/task/core/utils/runClean/runClean';

export const clean: RegisterParamsModel<CleanParamsModel> = {
  name: 'clean',

  task: async ({ options, root }) => {
    await runClean({ patterns: options.patterns, root });
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};
