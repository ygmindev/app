import { _task } from '#lib-config/core/task/_task';
import { type TaskConfigModel } from '#lib-config/core/task/task.models';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  _config: _task,

  config: {
    packageConfig: 'tasks.ts',

    taskExtension: 'task.ts',
  } satisfies TaskConfigModel,
});

export { _config, config };
