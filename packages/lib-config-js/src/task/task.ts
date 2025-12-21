import { fromBuild } from '@lib/backend/file/utils/fromBuild/fromBuild';
import { TASK_QUEUE_DEFAULT } from '@lib/config/task/task.constants';
import { type TaskConfigModel } from '@lib/config/task/task.models';
import { Config } from '@lib/config/utils/Config/Config';

export const taskConfig = new Config<TaskConfigModel>({
  params: () => ({
    promptsExtension: '.prompts.ts',

    queue: TASK_QUEUE_DEFAULT,

    taskExtension: '.task.ts',

    tasksPathname: fromBuild('tasks.js'),

    wait: {
      delay: 1e3,

      interval: 1e3,

      timeout: 60e3,
    },

    workerCountDefault: 1,

    workflowExtension: '.workflow.ts',

    workflowsPathname: fromBuild('workflows.js'),
  }),
});
