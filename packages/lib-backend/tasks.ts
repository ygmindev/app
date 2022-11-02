import { registerNodeTasks } from '@tool/task/node/utils/registerNodeTasks/registerNodeTasks';

import { name } from './package.json';

registerNodeTasks({
  name,
  testOverrides: { cleanups: ['database-close'], dependencies: ['database-kill'] },
});
