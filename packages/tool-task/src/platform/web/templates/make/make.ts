import { _config } from '@lib/config/platform/web/web';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { build } from 'vite';

export const make: TaskParamsModel = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'make',

  task: async () => {
    await build(_config());
    return { status: TASK_STATUS.SUCCESS };
  },
};
