import { type TaskParamsModel } from '#tool-task/core/core.models';
import { watch } from '#tool-task/core/templates/watch/watch';
import { nodeTasks } from '#tool-task/node/utils/nodeTasks/nodeTasks';
import { build } from '#tool-task/platform/serverless/templates/build/build';

const tasks = nodeTasks({
  additionalTasks: [
    build,
    {
      ...watch,

      name: 'dev',
    },
  ],
}) satisfies Array<TaskParamsModel<unknown>>;

export default tasks;
