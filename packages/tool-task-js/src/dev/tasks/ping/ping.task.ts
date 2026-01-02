import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { type PingModel, type PingParamsModel } from '@tool/task/dev/tasks/ping/ping.models';

export const ping = buildTask<PingParamsModel, PingModel>({
  task: async ({ test }) => {
    await sleep(5000);
    logger.info(`@@@ ping5: ${test}`);
    return { message: 'success' };
  },
});
