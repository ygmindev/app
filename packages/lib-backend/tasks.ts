import { nodeTasks } from '#tool-task/node/utils/nodeTasks/nodeTasks';

const tasks = [
  ...nodeTasks({
    testOverrides: { onAfter: ['database-kill'], onBefore: ['database-start'] },
  }),
];

export default tasks;
