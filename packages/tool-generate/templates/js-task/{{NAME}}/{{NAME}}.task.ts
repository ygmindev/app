import { command } from '@tool/task/core/utils/command/command';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { {{NAME}}(pascalCase)ParamsModel } from '{{PATH}}/{{NAME}}/{{NAME}}.models';

const {{NAME}}: TaskParamsModel<{{NAME}}(pascalCase)ParamsModel> = {
  name: '{{NAME}}',

  task: async ({ options, root }) => {
    await command({ command: '', root });
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default {{NAME}}; 
