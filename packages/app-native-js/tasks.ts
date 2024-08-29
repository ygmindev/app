import { type TaskParamsModel } from '@tool/task/core/core.models';
import { dev } from '@tool/task/native/templates/dev/dev';
import { iosDev } from '@tool/task/native/templates/iosDev/iosDev';
import { iosPod } from '@tool/task/native/templates/iosPod/iosPod';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';

const tasks = nodeTasks({
  additionalTasks: [
    { ...dev, onBefore: ['app-native-package-extend'] },
    { ...iosDev, onBefore: ['app-native-package-extend'] },
    { ...iosPod, onBefore: ['app-native-package-extend'] },
  ],
}) satisfies Array<TaskParamsModel<unknown>>;

export default tasks;
