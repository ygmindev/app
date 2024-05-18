import { type TaskParamsModel } from '@tool/task/core/core.models';
import { proxy } from '@tool/task/http/templates/proxy/proxy';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';
import { build } from '@tool/task/web/templates/build/build';
import { dev } from '@tool/task/web/templates/dev/dev';

const tasks = nodeTasks({
  additionalTasks: [dev, build, proxy],

  eteTasks: ['run blgd', 'run awd'],
}) satisfies Array<TaskParamsModel<unknown>>;

export default tasks;
