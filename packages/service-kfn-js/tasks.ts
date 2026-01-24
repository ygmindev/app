import { type TaskParamsModel } from '@tool/task/core/core.models';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';
import { build } from '@tool/task/server/templates/build/build';
import { dev } from '@tool/task/server/templates/dev/dev';
import { profile } from '@tool/task/server/templates/profile/profile';

const tasks = nodeTasks({
  additionalTasks: [build, dev, profile],
}) satisfies Array<TaskParamsModel<unknown>>;

export default tasks;
