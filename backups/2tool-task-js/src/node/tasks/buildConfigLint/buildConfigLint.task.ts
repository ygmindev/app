import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { buildJs } from '@tool/task/node/templates/buildJs/buildJs';
import { type BuildJsParamsModel } from '@tool/task/node/templates/buildJs/buildJs.models';

const buildConfigLint: TaskParamsModel<BuildJsParamsModel> = {
  ...buildJs,

  name: 'build-config-lint',

  overrides: () => ({
    entryFiles: { 'eslint.config': fromConfig('node/lint/eslint.config.ts') },
    outDir: fromRoot(),
  }),
};

export default buildConfigLint;
