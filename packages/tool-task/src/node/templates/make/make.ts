import { command } from '@tool/task/core/utils/command/command';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { MakeParamsModel } from '@tool/task/node/templates/make/make.models';

const make: TaskParamsModel<MakeParamsModel> = {
  name: 'make',

  task: async ({ options, root }) => {
    await command({ command: '', root });
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default make; 
