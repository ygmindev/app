import { APP_NAME } from '@app/web/app/app.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { dev } from '@tool/task/framework/web/templates/dev/dev';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';

const tasks: Array<TaskParamsModel<unknown>> = [
  ...nodeTasks(),
  { ...dev, options: { name: APP_NAME } },
];

export default tasks;
