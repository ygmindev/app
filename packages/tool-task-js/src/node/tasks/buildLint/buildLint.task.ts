import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromDist } from '@lib/backend/file/utils/fromDist/fromDist';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { BUILD_LINT } from '@tool/task/node/tasks/buildLint/buildLint.constants';
import {
  type BuildLintModel,
  type BuildLintParamsModel,
} from '@tool/task/node/tasks/buildLint/buildLint.models';
import { nodeBuild } from '@tool/task/node/tasks/nodeBuild/nodeBuild.task';

export const buildLint = buildTask<BuildLintParamsModel, BuildLintModel>({
  context: {
    environment: ENVIRONMENT.PRODUCTION,
  },

  name: BUILD_LINT,

  task: async () =>
    nodeBuild({
      entryFiles: fromConfig('node/lint/eslint.config.ts'),
      outDir: fromDist(),
    }),
});
