import { register } from '@tool/task/core/utils/register/register';
import { dev } from '@tool/task/native/tasks/dev/dev';
import { iosDev } from '@tool/task/native/tasks/iosDev/iosDev';
import { iosPod } from '@tool/task/native/tasks/iosPod/iosPod';
import { registerNodeTasks } from '@tool/task/node/utils/registerNodeTasks/registerNodeTasks';

import { name } from './package.json';

registerNodeTasks({ name });

register({ ...dev, dependencies: ['app-native-package-extend'], target: name });
register({ ...iosDev, dependencies: ['app-native-package-extend'], target: name });
register({ ...iosPod, dependencies: ['app-native-package-extend'], target: name });
