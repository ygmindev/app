import { type TaskParamsModel } from '@tool/task/core/core.models';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';
import { dev } from '@tool/task/server/templates/dev/dev';

const tasks = nodeTasks({
  additionalTasks: [dev],
}) satisfies Array<TaskParamsModel<unknown>>;

export default tasks;
