import { register } from '@tool/task/core/utils/register/register';
import { dev } from '@tool/task/node/tasks/dev/dev';
import { registerNodeTasks } from '@tool/task/node/utils/registerNodeTasks/registerNodeTasks';
import { build } from '@tool/task/webpack/tasks/build/build';

import { name } from './package.json';

registerNodeTasks({ name });

const { name: buildName } = register({ ...build, target: name });

register({
  ...dev,
  dependencies: [buildName, 'database-start'],
  onEnd: ['database-kill'],
  options: { script: 'dist/index.js' },
  target: name,
});
