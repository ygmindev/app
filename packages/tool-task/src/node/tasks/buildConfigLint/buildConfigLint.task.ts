import { _config, config } from '@lib/config/node/lint/lint';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import buildJson from '@tool/task/core/templates/buildJson/buildJson';
import { type BuildJsonParamsModel } from '@tool/task/core/templates/buildJson/buildJson.models';

const buildConfigLint: TaskParamsModel<BuildJsonParamsModel> = {
  ...buildJson,

  name: 'build-json-lint',

  overrides: {
    filename: config.configFile,
    value: _config,
  },
};

export default buildConfigLint;
