import { _task } from '@lib/config/task/_task';
import { type TaskConfigModel } from '@lib/config/task/task.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  _config: _task,

  config: {
    packageFilename: 'tasks.ts',

    taskExtension: '.task.ts',

    wait: {
      delay: 1e3,

      interval: 1e3,

      timeout: 60e3,
    },
  } satisfies TaskConfigModel,
});

export { _config, config };
