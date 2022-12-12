import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';
import { dev } from '@tool/task/storybook/templates/dev/dev';

const tasks: Array<TaskParamsModel<unknown>> = [...nodeTasks(), { ...dev }];

export default tasks;
