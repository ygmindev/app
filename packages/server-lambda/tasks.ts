import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';
import { dev } from '@tool/task/framework/serverless/templates/dev/dev';
import { make } from '@tool/task/framework/serverless/templates/make/make';

const tasks: Array<TaskParamsModel<unknown>> = [...nodeTasks(), dev, make];

export default tasks;
