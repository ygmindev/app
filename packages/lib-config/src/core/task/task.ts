import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import type { TaskConfigModel } from '@lib/config/core/task/_task.models';
import { command } from '@tool/task/core/utils/command/command';

const taskConfig: TaskConfigModel = {
  packageConfig: 'tasks.ts',

  task: async ({ options, root }) =>
    await command(`gulp --gulpfile ${fromConfig('core/task/_task.js')} ${options?.task || ''}`, {
      root,
    }),

  taskExtension: 'task.ts',
};

export default taskConfig;
