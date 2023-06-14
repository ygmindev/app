import { _config, config } from '#lib-config/node/lint/lint';
import type { TaskParamsModel } from '#tool-task/core/core.models';
import buildJson from '#tool-task/core/templates/buildJson/buildJson';
import type { BuildJsonLintParamsModel } from '#tool-task/node/tasks/buildJsonLint/buildJsonLint.models';

const buildJsonLint: TaskParamsModel<BuildJsonLintParamsModel> = {
  ...buildJson,

  name: 'build-json-lint',

  options: {
    filename: config().configFile,

    value: async () => _config(),
  },
};

export default buildJsonLint;
