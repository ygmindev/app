import { _config, config } from '@lib/config/node/typescript/typescript';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import makeJson from '@tool/task/core/templates/makeJson/makeJson';
import type { MakeJsonTypescriptParamsModel } from '@tool/task/node/tasks/makeJsonTypescript/makeJsonTypescript.models';

const makeJsonTypescript: TaskParamsModel<MakeJsonTypescriptParamsModel> = {
  ...makeJson,

  name: 'make-json-typescript',

  options: {
    filename: config.configFile,

    value: async () => _config,
  },
};

export default makeJsonTypescript;
