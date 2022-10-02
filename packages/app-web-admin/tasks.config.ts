import { APP_NAME } from '@app/web-admin/app/app.constants';
import { register } from '@tool/task/core/utils/register/register';
import { dev } from '@tool/task/cra/tasks/dev/dev';
import { registerNodeTasks } from '@tool/task/node/utils/registerNodeTasks/registerNodeTasks';

import { name } from './package.json';

registerNodeTasks({ name });

register({ ...dev, options: { name: APP_NAME }, target: name });