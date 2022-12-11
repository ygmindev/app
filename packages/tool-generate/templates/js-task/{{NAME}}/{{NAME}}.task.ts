import { command } from '@tool/task/core/utils/command/command';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import type { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { {{NAME}}(pascalCase)ParamsModel } from '{{PATH}}/{{NAME}}/{{NAME}}.models';

const {{NAME}}: TaskParamsModel<{{NAME}}(pascalCase)ParamsModel> = {
  name: '{{NAME}}',

  task: async ({ options, root }) => {
    await command({ command: '', root });
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default {{NAME}}; 
