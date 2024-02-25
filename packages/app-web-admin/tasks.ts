import { type TaskParamsModel } from '@tool/task/core/core.models';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';
import { build } from '@tool/task/platform/web/templates/build/build';
import { dev } from '@tool/task/platform/web/templates/dev/dev';

const tasks = nodeTasks({
  additionalTasks: [dev, build],

  eteTasks: ['run blgd', 'run awad'],
}) satisfies Array<TaskParamsModel<unknown>>;

export default tasks;
