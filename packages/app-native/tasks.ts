import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { dev } from '@tool/task/framework/native/templates/dev/dev';
import { iosDev } from '@tool/task/framework/native/templates/iosDev/iosDev';
import { iosPod } from '@tool/task/framework/native/templates/iosPod/iosPod';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';

const tasks: Array<TaskParamsModel<unknown>> = [
  ...nodeTasks(),
  { ...dev, onBefore: ['app-native-package-extend'] },
  { ...iosDev, onBefore: ['app-native-package-extend'] },
  { ...iosPod, onBefore: ['app-native-package-extend'] },
];

export default tasks;
