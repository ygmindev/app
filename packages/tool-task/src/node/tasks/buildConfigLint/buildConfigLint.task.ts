import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { DIST_DIR } from '@lib/config/file/file.constants';
import lintConfig from '@lib/config/node/lint/lint';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import buildJson from '@tool/task/core/templates/buildJson/buildJson';
import { type BuildJsonParamsModel } from '@tool/task/core/templates/buildJson/buildJson.models';

const buildConfigLint: TaskParamsModel<BuildJsonParamsModel> = {
  ...buildJson,

  name: 'build-json-lint',

  overrides: () => ({
    path: joinPaths([DIST_DIR, lintConfig.params().configPath]),
    value: lintConfig.config(),
  }),
};

export default buildConfigLint;
