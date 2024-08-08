import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { DIST_DIR } from '@lib/config/file/file.constants';
import lintConfig from '@lib/config/node/lint/lint';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import buildConfig from '@tool/task/core/templates/buildConfig/buildConfig';
import { type BuildConfigParamsModel } from '@tool/task/core/templates/buildConfig/buildConfig.models';

const buildConfigLint: TaskParamsModel<BuildConfigParamsModel> = {
  ...buildConfig,

  name: 'build-config-lint',

  overrides: () => ({
    path: joinPaths([DIST_DIR, lintConfig.params().configPath]),
    value: lintConfig.config(),
  }),
};

export default buildConfigLint;
