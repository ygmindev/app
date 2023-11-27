import { fromExecutable } from '#lib-backend/file/utils/fromExecutable/fromExecutable';
import { joinPaths } from '#lib-backend/file/utils/joinPaths/joinPaths';
import { config } from '#lib-config/platform/web/web';
import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';
import { type TaskParamsModel } from '#tool-task/core/core.models';

export const build: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build',

  task: [
    'node-post-install',

    'build-json-typescript',

    'build-json-lint',

    ({ root }) => fromExecutable(`vite build --config ${joinPaths([root, config().configFile])}`),

    // ({ root }) => runServer({ pathname: joinPaths([root, fileConfig.distPath, 'client']) }),
  ],
};
