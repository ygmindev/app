import { type TaskParamsModel } from '@tool/task/core/core.models';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';
import { build } from '@tool/task/serverless/templates/build/build';
import { dev } from '@tool/task/serverless/templates/dev/dev';
import { release } from '@tool/task/serverless/templates/release/release';
import { releaseImage } from '@tool/task/serverless/templates/releaseImage/releaseImage';

const tasks = nodeTasks({
  additionalTasks: [dev, build, release, releaseImage],
}) satisfies Array<TaskParamsModel<unknown>>;

export default tasks;
