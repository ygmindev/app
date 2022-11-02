import { register } from '@tool/task/core/utils/register/register';
import { registerNodeTasks } from '@tool/task/node/utils/registerNodeTasks/registerNodeTasks';
import { dev } from '@tool/task/storybook/templates/dev/dev';

import { name } from './package.json';

registerNodeTasks({ name });

register({ ...dev, target: name });
