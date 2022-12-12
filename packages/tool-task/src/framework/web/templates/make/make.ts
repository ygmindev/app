import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { command } from '@tool/task/core/utils/command/command';

export const make: TaskParamsModel = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'make',

  task: async ({ root }) => {
    await command({
      command: `${fromExecutable('astro')} build --config web.config.ts`,
      root,
    });
    return { status: TASK_STATUS.SUCCESS };
  },
};
