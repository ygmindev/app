// import { dev } from '#tool-task/node/templates/dev/dev';
import { nodeTasks } from '#tool-task/node/utils/nodeTasks/nodeTasks';
import { build } from '#tool-task/platform/serverless/templates/build/build';

const tasks = [
  ...nodeTasks(),

  build,

  // { ...dev, onBefore: ['bgsb'], options: { script: 'dist/index.js' } },
];

export default tasks;
