import { join } from 'lodash';

import { fromExecutable } from '#lib-backend/file/utils/fromExecutable/fromExecutable';
import { config } from '#lib-config/platform/web/web';
import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { runServer } from '#tool-task/platform/server/utils/runServer/runServer';

export const build: TaskParamsModel = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build',

  task: [
    () => 'build-json-typescript',

    () => fromExecutable(`vite build --config ${config().configFile}`),

    ({ root }) => runServer({ path: join(root, 'dist/client') }),
  ],
};
