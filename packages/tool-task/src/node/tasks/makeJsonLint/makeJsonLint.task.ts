import { _config, config } from '@lib/config/node/lint/lint';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import makeJson from '@tool/task/core/templates/makeJson/makeJson';
import type { MakeJsonLintParamsModel } from '@tool/task/node/tasks/makeJsonLint/makeJsonLint.models';

const makeJsonLint: TaskParamsModel<MakeJsonLintParamsModel> = {
  ...makeJson,

  name: 'make-json-lint',

  options: {
    filename: config.configFile,

    value: async () => _config,
  },
};

export default makeJsonLint;
