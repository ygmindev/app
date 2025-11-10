import { fromPublic } from '@lib/backend/file/utils/fromPublic/fromPublic';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { config as bundleConfig } from '@lib/config/node/bundle/bundle.web';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { buildApp } from '@lib/shared/web/utils/buildApp/buildApp';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { exportEnvironemnt } from '@tool/task/core/utils/exportEnvironment/exportEnvironment';
import { runClean } from '@tool/task/core/utils/runClean/runClean';
import { copy } from '@tool/task/file/utils/copy/copy';
import buildConfigLint from '@tool/task/node/tasks/buildConfigLint/buildConfigLint.task';
import buildConfigTypescript from '@tool/task/node/tasks/buildConfigTypescript/buildConfigTypescript.task';
import buildSsr from '@tool/task/web/templates/buildSsr/buildSsr.task';

export const build: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build',

  onBefore: [buildConfigTypescript.name, buildConfigLint.name],

  task: [
    async () => runClean({ patterns: [BUILD_DIR] }),

    () => buildApp({ bundle: bundleConfig.params() }),

    () => exportEnvironemnt({ envPrefix: bundleConfig.params().envPrefix }),

    ({ root }) =>
      copy({
        from: fromPublic(),
        to: joinPaths([root, BUILD_DIR, 'client']),
      }),

    ({ target }) => `${target}-${buildSsr.name}`,
  ],
};
