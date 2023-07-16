import { _task } from '#lib-config/core/task/_task';
import { type TaskConfigModel } from '#lib-config/core/task/task.models';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  _config: _task,

  config: {
    packageFilename: 'tasks.ts',

    taskExtension: '.task.ts',

    wait: {
      delay: 1000,

      interval: 3000,

      timeout: 30e3,
    },
  } satisfies TaskConfigModel,
});

export { _config, config };
