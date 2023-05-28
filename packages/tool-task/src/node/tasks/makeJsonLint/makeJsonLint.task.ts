import { command } from '@tool/task/core/utils/command/command';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { MakeJsonLintParamsModel } from '@tool/task/node/tasks/makeJsonLint/makeJsonLint.models';
import makeJson from '@tool/task/core/templates/makeJson/makeJson';

const makeJsonLint: TaskParamsModel<MakeJsonLintParamsModel> = {
  ...makeJson,

  name: 'makeJsonLint',

  options: {
    value: async () => ({}),

    filename: 'eslintrc.json'
  },
};

export default makeJsonLint; 
