import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type PortKillParamsModel } from '@tool/task/core/tasks/portKill/portKill.models';

const portKill: TaskParamsModel<PortKillParamsModel> = {
  name: 'port-kill',

  options: async () => ({
    port: {},
  }),

  task: [({ options }) => `if pids=$(lsof -ti:${options?.port}); then kill -9 $pids; fi`],
};

export default portKill;
