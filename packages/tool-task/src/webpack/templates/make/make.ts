import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { command } from '@tool/task/core/utils/command/command';

export const make: TaskParamsModel = {
  name: 'make',

  task: async () => {
    await command({ command: fromExecutable('webpack') });
    return { status: TASK_STATUS.SUCCESS };
  },
};
