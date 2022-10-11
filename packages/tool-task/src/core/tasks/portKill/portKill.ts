import { command } from '@tool/task/core/utils/command/command';
import { portIsOpen } from '@tool/task/core/utils/portIsOpen/portIsOpen';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';
import { toNumber } from 'lodash';

export const portKill: RegisterParamsModel = {
  name: 'portKill',

  task: async ({ root }) => {
    const { port } = await prompt([{ key: 'port' }]);
    !(await portIsOpen(toNumber(port))) &&
      (await command({ command: `if pids=$(lsof -ti:${port}); then kill -9 $pids; fi`, root }));
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};
