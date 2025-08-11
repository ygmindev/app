import { type TaskParamsModel } from '@tool/task/core/core.models';
import { containerBuildJobs } from '@tool/task/job/templates/containerBuildJobs/containerBuildJobs';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';

const tasks = nodeTasks({
  additionalTasks: [containerBuildJobs],
}) satisfies Array<TaskParamsModel<unknown>>;

export default tasks;
