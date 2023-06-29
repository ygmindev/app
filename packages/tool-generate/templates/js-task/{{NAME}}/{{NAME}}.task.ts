import { command } from '#tool-task/core/utils/command/command';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import { type {{NAME}}(pascalCase)ParamsModel } from '{{PATH}}/{{NAME}}/{{NAME}}.models';

const {{NAME}}: TaskParamsModel<{{NAME}}(pascalCase)ParamsModel> = {
  name: '{{NAME}}',

  task: async ({ options, root }) => await command('', { root }),
};

export default {{NAME}}; 
