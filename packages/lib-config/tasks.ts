import type { TaskParamsModel } from '@tool/task/core/core.models';
import { make } from '@tool/task/node/templates/make/make';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';

const tasks: Array<TaskParamsModel<unknown>> = [...nodeTasks(), make];

export default tasks;
