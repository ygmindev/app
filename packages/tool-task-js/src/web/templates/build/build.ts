import { fromAssets } from '@lib/backend/file/utils/fromAssets/fromAssets';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { config as webConfig } from '@lib/config/node/web/web';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { buildApp } from '@lib/shared/web/utils/buildApp/buildApp';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { runClean } from '@tool/task/core/utils/runClean/runClean';
import { copy } from '@tool/task/file/utils/copy/copy';

export const build: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build',

  onBefore: ['build-config-typescript', 'build-config-lint'],

  task: [
    async () => runClean({ patterns: [BUILD_DIR] }),

    () => buildApp({ web: webConfig.params() }),

    ({ root }) =>
      copy({
        from: fromAssets(),
        to: joinPaths([root, BUILD_DIR, 'client']),
      }),
  ],
};
