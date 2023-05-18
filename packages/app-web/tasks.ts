import type { TaskParamsModel } from '@tool/task/core/core.models';
import { dev } from '@tool/task/platform/web/templates/dev/dev';
import { make } from '@tool/task/platform/web/templates/make/make';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';

const tasks: Array<TaskParamsModel<unknown>> = [...nodeTasks(), dev, make];

export default tasks;
