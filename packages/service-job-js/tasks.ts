import { type TaskParamsModel } from '@tool/task/core/core.models';
import { build } from '@tool/task/job/templates/build/build';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';

const tasks = nodeTasks({
  additionalTasks: [build],
}) satisfies Array<TaskParamsModel<unknown>>;

export default tasks;
