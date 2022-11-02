import { command } from '@tool/task/core/utils/command/command';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { {{NAME}}(pascalCase)ParamsModel } from '{{PATH}}/{{NAME}}/{{NAME}}.models';

const {{NAME}}: RegisterParamsModel<{{NAME}}(pascalCase)ParamsModel> = {
  name: '{{NAME}}',

  task: async ({ options, root }) => {
    await command({ command: '', root });
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};

export default {{NAME}}; 
