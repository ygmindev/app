import { type TaskParamsModel } from '#tool-task/core/core.models';
import { nodeTasks } from '#tool-task/node/utils/nodeTasks/nodeTasks';

const tasks: Array<TaskParamsModel<unknown>> = [
  ...nodeTasks({
    // testOverrides: { onAfter: ['database-kill'], onBefore: ['database-start'] },
  }),
];

export default tasks;
