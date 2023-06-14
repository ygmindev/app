import { _config } from '@lib/config/platform/web/web';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { build as buildVite } from 'vite';

export const build: TaskParamsModel = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build',

  task: async () => {
    await buildVite(_config());
    return { status: TASK_STATUS.SUCCESS };
  },
};
