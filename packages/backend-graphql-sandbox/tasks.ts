import { type TaskParamsModel } from '#tool-task/core/core.models';
import { dev } from '#tool-task/node/templates/dev/dev';
import { nodeTasks } from '#tool-task/node/utils/nodeTasks/nodeTasks';
import { build } from '#tool-task/platform/serverless/templates/build/build';

const tasks: Array<TaskParamsModel<unknown>> = [
  ...nodeTasks(),

  build,

  { ...dev, onBefore: ['ssm'], options: { script: 'dist/index.js' } },
];

export default tasks;
