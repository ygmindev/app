import { fromBuild } from '@lib/backend/file/utils/fromBuild/fromBuild';
import { type TaskConfigModel } from '@lib/config/task/task.models';
import { Config } from '@lib/config/utils/Config/Config';

export const taskConfig = new Config<TaskConfigModel>({
  params: () => ({
    promptsExtension: '.prompts.ts',

    taskExtension: '.task.ts',

    tasksPathname: fromBuild('tasks.js'),

    wait: {
      delay: 1e3,

      interval: 1e3,

      timeout: 60e3,
    },

    workflowExtension: '.workflow.ts',

    workflowsPathname: fromBuild('workflows.js'),
  }),
});
