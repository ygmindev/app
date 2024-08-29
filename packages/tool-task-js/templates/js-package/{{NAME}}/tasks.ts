import { type TaskParamsModel } from '@tool/task/core/core.models';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';

const tasks = nodeTasks({
  additionalTasks: [],
}) satisfies Array<TaskParamsModel<unknown>>;

export default tasks;
