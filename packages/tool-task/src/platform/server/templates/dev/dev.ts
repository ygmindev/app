import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { config as serverConfig } from '@lib/config/platform/server/server';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const dev: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: [
    () => fromExecutable(`vite-node --config ${serverConfig.configFile} --watch src/index.ts`),
  ],
};
