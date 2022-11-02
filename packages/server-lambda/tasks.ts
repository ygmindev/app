import { register } from '@tool/task/core/utils/register/register';
import { registerNodeTasks } from '@tool/task/node/utils/registerNodeTasks/registerNodeTasks';
import { dev } from '@tool/task/serverless/tasks/dev/dev';
import { make } from '@tool/task/serverless/tasks/make/make';

import { name } from './package.json';

registerNodeTasks({ name });

register({ ...dev, target: name });
register({ ...make, target: name });
