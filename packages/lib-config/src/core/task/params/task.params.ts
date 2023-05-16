import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import type { TaskConfigParamsModel } from '@lib/config/core/task/task.models';

const taskConfigParams: TaskConfigParamsModel = {
  command: fromExecutable('gulp'),

  // TODO: rewrite
  config: 'tasks.ts',

  taskExtension: 'task.ts',
};

export default taskConfigParams;
