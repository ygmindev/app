import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { PORT_KILL } from '@tool/task/core/tasks/portKill/portKill.constants';
import {
  type PortKillModel,
  type PortKillParamsModel,
} from '@tool/task/core/tasks/portKill/portKill.models';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { execute } from '@tool/task/core/utils/execute/execute';

export const portKill = buildTask<PortKillParamsModel, PortKillModel>({
  name: PORT_KILL,

  prompts: [{ key: 'port' }],

  task: async ({ port }) => {
    if (!port) throw new NotFoundError('port');
    await execute({ command: `if pids=$(lsof -ti:${port}); then kill -9 $pids; fi` });
  },
});
