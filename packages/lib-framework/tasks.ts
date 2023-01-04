import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';

const tasks: Array<TaskParamsModel<unknown>> = [...nodeTasks()];

export default tasks;
