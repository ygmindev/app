import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';

// TODO: get rid of testOverrides?
const tasks = nodeTasks({
  // testOverrides: { onBefore: ['database-start'], onFinish: ['database-kill'] },
});

export default tasks;
