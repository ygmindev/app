import { join } from 'path';

import { fromExecutable } from '#lib-backend/file/utils/fromExecutable/fromExecutable';
import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { config } from '#lib-config/platform/web/web';
import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import type { TaskParamsModel } from '#tool-task/core/core.models';
import { command } from '#tool-task/core/utils/command/command';
import { staticServer } from '#tool-task/platform/server/utils/staticServer/staticServer.task';

export const build: TaskParamsModel = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build',

  onBefore: ['build-json-typescript', 'build-json-lint'],

  task: async ({ root }) => {
    const { configFile } = config();
    try {
      await command(fromExecutable(`vite build --config ${configFile}`), { root });
      await staticServer({ root: join(root || fromWorking(), 'dist/client') });
      return { status: TASK_STATUS.SUCCESS };
    } catch (e) {
      return { error: e as Error, status: TASK_STATUS.ERROR };
    }
  },
};
