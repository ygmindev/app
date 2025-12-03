import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { task } from '@tool/task/core/utils/task/task';
import {
  type BuildLintModel,
  type BuildLintParamsModel,
} from '@tool/task/node/tasks/buildLint/buildLint.models';
import { nodeBuild } from '@tool/task/node/tasks/nodeBuild/nodeBuild.task';

export const buildLint = task<BuildLintParamsModel, BuildLintModel>({
  task: async () => {
    await nodeBuild({
      entryFiles: fromConfig('node/lint/eslint.config.ts'),
      outDir: fromRoot(),
    });
  },
});
