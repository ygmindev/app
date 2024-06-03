import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { WEB_CONFIG } from '@lib/config/node/web/web.constants';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { staticServer } from '@tool/task/server/utils/staticServer/staticServer';

export const build: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build',

  // onBefore: ['node-post-install', 'build-json-typescript', 'build-json-lint'],
  onBefore: ['build-json-typescript', 'build-json-lint'],

  task: [
    ({ root }) =>
      fromExecutable(`vite build --config ${joinPaths([root, WEB_CONFIG.configFilename])}`),

    ({ root }) =>
      process.env.APP_IS_STATIC_SERVER &&
      staticServer({ pathname: joinPaths([root, BUILD_DIR, 'client']) }),
  ],
};
