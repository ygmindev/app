import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { command } from '@tool/task/core/utils/command/command';

export const make: TaskParamsModel = {
  name: 'make',

  task: async () => {
    await command({ command: 'npx sls package' });
    return { status: TASK_STATUS.SUCCESS };
  },
};
