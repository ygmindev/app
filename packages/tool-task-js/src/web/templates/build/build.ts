import { fromAssets } from '@lib/backend/file/utils/fromAssets/fromAssets';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { ASSETS_DIR, BUILD_DIR } from '@lib/config/file/file.constants';
import webConfig from '@lib/config/node/web/web';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { buildApp } from '@lib/shared/web/utils/buildApp/buildApp';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { copy } from '@tool/task/file/utils/copy/copy';
import { staticServer } from '@tool/task/server/utils/staticServer/staticServer';

export const build: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build',

  onBefore: ['build-config-typescript', 'build-config-lint'],

  task: [
    () => buildApp({ web: webConfig.params() }),

    ({ root }) =>
      copy({
        from: fromAssets(),
        to: joinPaths([root, BUILD_DIR, 'client', ASSETS_DIR]),
      }),

    ({ root }) =>
      process.env.APP_IS_STATIC_SERVER &&
      staticServer({ pathname: joinPaths([root, BUILD_DIR, 'client']) }),
  ],
};
