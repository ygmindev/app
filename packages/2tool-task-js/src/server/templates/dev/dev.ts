import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { config as bundleConfig } from '@lib/config/node/bundle/bundle.base';
import { config as serverConfig } from '@lib/config/node/server/server.node';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const dev: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: [
    () =>
      fromExecutable(
        `vite-node --config src/config/${bundleConfig.params().configFilename} --watch ${serverConfig.params().entryPathname}`,
      ),
  ],
};
