import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { command } from '@tool/task/core/utils/command/command';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';

export const make: RegisterParamsModel = {
  name: 'make',

  task: async () => {
    await command({ command: fromExecutable('webpack') });
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};
