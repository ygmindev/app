import { _config } from '#lib-config/platform/web/web';
import { server } from '#lib-platform/web/utils/server/server';
import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import type { TaskParamsModel } from '#tool-task/core/core.models';

export const dev: TaskParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: async ({ root }) => {
    const port = process.env.APP_PORT || '';
    await server({ config: _config(), port, root });
    return { status: TASK_STATUS.SUCCESS };
  },
};
