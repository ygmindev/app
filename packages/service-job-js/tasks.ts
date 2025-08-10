import { type TaskParamsModel } from '@tool/task/core/core.models';
import buildJobs from '@tool/task/job/templates/buildJobs/buildJobs';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';

const tasks = nodeTasks({
  additionalTasks: [buildJobs],
}) satisfies Array<TaskParamsModel<unknown>>;

export default tasks;
