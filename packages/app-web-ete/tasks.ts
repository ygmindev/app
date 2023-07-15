import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { nodeTasks } from '#tool-task/node/utils/nodeTasks/nodeTasks';

const tasks: Array<TaskParamsModel<unknown>> = [
  ...nodeTasks({
    testOverrides: { environment: ENVIRONMENT.DEVELOPMENT },
  }),
];

export default tasks;
