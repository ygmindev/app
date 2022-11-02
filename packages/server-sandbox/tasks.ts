import { register } from '@tool/task/core/utils/register/register';
import { dev } from '@tool/task/node/templates/dev/dev';
import { registerNodeTasks } from '@tool/task/node/utils/registerNodeTasks/registerNodeTasks';
import { make } from '@tool/task/webpack/templates/make/make';

import { name } from './package.json';

registerNodeTasks({ name });

const { name: buildName } = register({ ...make, target: name });

register({
  ...dev,
  cleanups: ['database-kill'],
  dependencies: [buildName, 'database-start'],
  options: { script: 'dist/index.js' },
  target: name,
});
