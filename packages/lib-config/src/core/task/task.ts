import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import type { TaskConfigModel } from '@lib/config/core/task/_task.models';
import { command } from '@tool/task/core/utils/command/command';

const taskConfig: TaskConfigModel = {
  config: 'core/task/_task.js',

  packageConfig: 'tasks.ts',

  run: async ({ config, options, root }) =>
    await command(
      `gulp ${config ? `--gulpfile ${fromConfig(config)}` : ''} ${options?.task || ''}`,
      { root },
    ),

  taskExtension: 'task.ts',
};

export default taskConfig;
