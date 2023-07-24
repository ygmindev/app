import { fromExecutable } from '#lib-backend/file/utils/fromExecutable/fromExecutable';
import { joinPaths } from '#lib-backend/file/utils/joinPaths/joinPaths';
import { config } from '#lib-config/platform/web/web';
import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { runServer } from '#tool-task/platform/server/utils/runServer/runServer';
import { config as fileConfig } from '#lib-config/core/file/file';

export const build: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build',

  task: [
    // 'build-json-typescript',

    // 'build-json-lint',

    ({ root }) =>
      fromExecutable(`vite build --config ${joinPaths({ paths: [root, config().configFile] })}`),

    ({ root }) => runServer({ path: joinPaths({ paths: [root, fileConfig.distPath, 'client'] }) }),
  ],
};
