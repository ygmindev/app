import type { TaskParamsModel } from '#tool-task/core/core.models';
import { nodeTasks } from '#tool-task/node/utils/nodeTasks/nodeTasks';
import { build } from '#tool-task/platform/serverless/templates/build/build';
import { dev } from '#tool-task/platform/serverless/templates/dev/dev';

const tasks: Array<TaskParamsModel<unknown>> = [...nodeTasks(), dev, build];

export default tasks;
