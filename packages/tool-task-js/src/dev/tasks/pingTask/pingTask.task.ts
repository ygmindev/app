import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import {
  type PingTaskModel,
  type PingTaskParamsModel,
} from '@tool/task/dev/tasks/pingTask/pingTask.models';

export const pingTask = buildTask<PingTaskParamsModel, PingTaskModel>({
  task: async ({ test }) => {
    await sleep(5000);
    logger.info(`@@@ pingTask: ${test}`);
    return { message: 'success' };
  },
});
