import { nodeTasks } from '#tool-task/node/utils/nodeTasks/nodeTasks';

const tasks = nodeTasks({
  testOverrides: { onBefore: ['database-start'], onFinish: ['database-kill'] },
});

export default tasks;
