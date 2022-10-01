import { register } from '@tool/task/core/utils/register/register';
import { registerNodeTasks } from '@tool/task/node/utils/registerNodeTasks/registerNodeTasks';
import { build } from '@tool/task/serverless/tasks/build/build';
import { dev } from '@tool/task/serverless/tasks/dev/dev';

import { name } from './package.json';

registerNodeTasks({ name });

register({ ...dev, target: name });
register({ ...build, target: name });
