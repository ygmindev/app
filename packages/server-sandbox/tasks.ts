import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { dev } from '@tool/task/node/templates/dev/dev';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';
import { make } from '@tool/task/serverless/templates/make/make';

const tasks: Array<TaskParamsModel<unknown>> = [
  ...nodeTasks(),

  make,

  { ...dev, onBefore: ['ssm'], options: { script: 'dist/index.js' } },
];

export default tasks;
