import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { DIST_DIR } from '@lib/config/file/file.constants';
import lintConfig from '@lib/config/node/lint/lint';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import buildConfig from '@tool/task/core/templates/buildConfig/buildConfig';
import { type BuildConfigParamsModel } from '@tool/task/core/templates/buildConfig/buildConfig.models';

const buildConfigLint: TaskParamsModel<BuildConfigParamsModel> = {
  ...buildConfig,

  name: 'build-config-lint',

  overrides: () => ({
    path: fromWorking(DIST_DIR, lintConfig.params().configFilename),
    value: lintConfig.config(),
  }),
};

export default buildConfigLint;
