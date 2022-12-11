import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';

const tasks: Array<TaskParamsModel<unknown>> = [
  ...nodeTasks({
    testOverrides: { onAfter: ['database-close'], onBefore: ['database-kill'] },
  }),
];

export default tasks;
