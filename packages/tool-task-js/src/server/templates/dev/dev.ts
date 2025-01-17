import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import bundleConfig from '@lib/config/node/bundle/bundle.base';
import serverConfig from '@lib/config/node/server/server';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const dev: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: [
    () =>
      fromExecutable(
        `vite-node --config ${bundleConfig.params().configFilename} --watch ${serverConfig.params().entryPathname}`,
      ),
  ],
};
