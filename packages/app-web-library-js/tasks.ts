import { type TaskParamsModel } from '@tool/task/core/core.models';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';
import { build } from '@tool/task/web/templates/build/build';
import { dev } from '@tool/task/web/templates/dev/dev';

const tasks = nodeTasks({
  additionalTasks: [dev, build],

  eteTasks: ['run bsd', 'run awld'],
}) satisfies Array<TaskParamsModel<unknown>>;

export default tasks;
