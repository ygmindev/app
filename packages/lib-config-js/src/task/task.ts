import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { type TaskConfigModel } from '@lib/config/task/task.models';
import { Config } from '@lib/config/utils/Config/Config';

export const taskConfig = new Config<TaskConfigModel>({
  params: () => ({
    outDir: fromWorking(BUILD_DIR),

    promptsExtension: '.prompts.ts',

    taskExtension: '.task.ts',

    wait: {
      delay: 1e3,

      interval: 1e3,

      timeout: 60e3,
    },

    workflowExtension: '.workflow.ts',
  }),
});
