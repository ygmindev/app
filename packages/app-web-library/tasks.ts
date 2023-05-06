import type { TaskParamsModel } from '@tool/task/core/core.models';
import { dev } from '@tool/task/framework/web/templates/dev/dev';
import { make } from '@tool/task/framework/web/templates/make/make';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';

const tasks: Array<TaskParamsModel<unknown>> = [
  ...nodeTasks(),
  {
    ...dev,
    // onBefore: ['libraryDocgen']
  },
  make,
];

export default tasks;
