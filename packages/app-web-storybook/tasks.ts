import { APP_NAME } from '@app/web-admin/app/app.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';
import { dev } from '@tool/task/storybook/templates/dev/dev';

const tasks: Array<TaskParamsModel<unknown>> = [
  ...nodeTasks(),
  { ...dev, options: { name: APP_NAME } },
];

export default tasks;
