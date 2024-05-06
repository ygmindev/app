import { type TaskParamsModel } from '@tool/task/core/core.models';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';
import { build } from '@tool/task/platform/serverless/templates/build/build';
import { dev } from '@tool/task/platform/serverless/templates/dev/dev';
import { release } from '@tool/task/platform/serverless/templates/release/release';

const tasks = nodeTasks({
  additionalTasks: [dev, build, release],
}) satisfies Array<TaskParamsModel<unknown>>;

export default tasks;
