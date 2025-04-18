import fileConfig from '@lib/config/file/file';
import { type TaskConfigModel } from '@lib/config/task/task.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<TaskConfigModel>({
  params: () => ({
    configFilename: 'tasks.ts',

    packageDirs: fileConfig.params().packageDirs,

    taskExtension: '.task.ts',

    wait: {
      delay: 1e3,

      interval: 1e3,

      timeout: 60e3,
    },
  }),
});

export default config;
