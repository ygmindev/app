import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { BUILD_DIR, DIST_DIR } from '@lib/config/file/file.constants';
import { config as lintConfig } from '@lib/config/node/lint/lint';
import { ESLINT_CONFIG_PARAMS_FILENAME } from '@lib/config/node/lint/lint.constants';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { runClean } from '@tool/task/core/utils/runClean/runClean';
import buildJs from '@tool/task/node/templates/buildJs/buildJs';
import { type BuildJsParamsModel } from '@tool/task/node/templates/buildJs/buildJs.models';

const paramsPathname = fromWorking(BUILD_DIR, ESLINT_CONFIG_PARAMS_FILENAME);

const buildConfigLint: TaskParamsModel<BuildJsParamsModel> = {
  ...buildJs,

  name: 'build-config-lint',

  onBefore: [
    async () => writeFile({ filename: paramsPathname, value: stringify(lintConfig.params()) }),
  ],

  onFinish: [async () => runClean({ patterns: [paramsPathname] })],

  overrides: () => ({
    entryFiles: { 'eslint.config': fromConfig('node/lint/eslint.config.ts') },
    outputPathname: fromWorking(DIST_DIR),
    transpilePatterns: [new RegExp(paramsPathname)],
  }),
};

export default buildConfigLint;
