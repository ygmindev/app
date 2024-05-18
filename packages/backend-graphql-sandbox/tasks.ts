import { type TaskParamsModel } from '@tool/task/core/core.models';
import { dev } from '@tool/task/node/templates/dev/dev';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';
import { build } from '@tool/task/serverless/templates/build/build';

const tasks = nodeTasks({
  additionalTasks: [build, { ...dev, overrides: { script: 'src/index.ts' } }],
}) satisfies Array<TaskParamsModel<unknown>>;

export default tasks;
