import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import type { TaskConfigModel } from '@lib/config/core/task/_task.models';
import { command } from '@tool/task/core/utils/command/command';

const taskConfig: TaskConfigModel = {
  packageConfig: 'tasks.ts',

  task: async ({ options }) =>
    await command(`gulp --cwd ${fromRoot()} --gulpfile ${fromConfig('core/task/_task.js')} ${options?.task || ''}`),

  taskExtension: 'task.ts',
};

export default taskConfig;
