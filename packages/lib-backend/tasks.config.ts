import { registerNodeTasks } from '@tool/task/node/utils/registerNodeTasks/registerNodeTasks';

import { name } from './package.json';

registerNodeTasks({ isDatabaseStart: true, name });
