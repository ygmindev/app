import { type TaskParamsModel } from '#tool-task/core/core.models';
import { type PortKillParamsModel } from '#tool-task/core/tasks/portKill/portKill.models';

const portKill: TaskParamsModel<PortKillParamsModel> = {
  name: 'port-kill',

  params: [{ key: 'port' }],

  task: ({ params }) => `if pids=$(lsof -ti:${params?.port}); then kill -9 $pids; fi`,
};

export default portKill;
