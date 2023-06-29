import { _config, config } from '#lib-config/node/typescript/typescript';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import buildJson from '#tool-task/core/templates/buildJson/buildJson';
import { type BuildJsonTypescriptParamsModel } from '#tool-task/node/tasks/buildJsonTypescript/buildJsonTypescript.models';

const buildJsonTypescript: TaskParamsModel<BuildJsonTypescriptParamsModel> = {
  ...buildJson,

  name: 'build-json-typescript',

  options: {
    filename: config.configFile,

    value: async () => _config,
  },
};

export default buildJsonTypescript;
