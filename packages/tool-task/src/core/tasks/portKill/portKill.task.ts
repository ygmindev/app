import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { command } from '@tool/task/core/utils/command/command';
import { portIsOpen } from '@tool/task/core/utils/portIsOpen/portIsOpen';
import { prompt } from '@tool/task/core/utils/prompt/prompt';

const portKill: TaskParamsModel = {
  name: 'portKill',

  task: async ({ root }) => {
    const { port } = await prompt([{ key: 'port' }]);
    !(await portIsOpen(port)) &&
      (await command({ command: `if pids=$(lsof -ti:${port}); then kill -9 $pids; fi`, root }));
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default portKill;
