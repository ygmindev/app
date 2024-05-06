import { type TaskParamsModel } from '@tool/task/core/core.models';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';
import { dev } from '@tool/task/platform/native/templates/dev/dev';
import { iosDev } from '@tool/task/platform/native/templates/iosDev/iosDev';
import { iosPod } from '@tool/task/platform/native/templates/iosPod/iosPod';

const tasks = nodeTasks({
  additionalTasks: [
    { ...dev, onBefore: ['app-native-package-extend'] },
    { ...iosDev, onBefore: ['app-native-package-extend'] },
    { ...iosPod, onBefore: ['app-native-package-extend'] },
  ],
}) satisfies Array<TaskParamsModel<unknown>>;

export default tasks;
