import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { command } from '@tool/task/core/utils/command/command';

const manager: TaskParamsModel = {
  name: 'node-manager',

  task: async ({ root }) => {
    await command({
      command:
        'corepack enable \
        && corepack prepare yarn@stable --activate \
        && yarn set version stable \
        && yarn plugin import interactive-tools',
      root,
    });
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default manager;
