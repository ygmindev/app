import { _task } from '@lib/config/core/task/_task';
import type { TaskConfigModel, _TaskConfigModel } from '@lib/config/core/task/task.models';

export const config: TaskConfigModel = {
  packageConfig: 'tasks.ts',

  taskExtension: 'task.ts',
};

export const _config: _TaskConfigModel = _task(config);
