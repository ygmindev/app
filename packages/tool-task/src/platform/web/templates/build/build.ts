import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { config as fileConfig } from '@lib/config/core/file/file';
import { config } from '@lib/config/platform/web/web';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { runServer } from '@tool/task/platform/server/utils/runServer/runServer';

export const build: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build',

  onBefore: ['node-post-install', 'build-json-typescript', 'build-json-lint'],

  task: [
    ({ root }) => fromExecutable(`vite build --config ${joinPaths([root, config().configFile])}`),

    ({ root }) =>
      process.env.APP_IS_STATIC_SERVER &&
      runServer({ pathname: joinPaths([root, fileConfig.buildPath, 'client']) }),
  ],
};
