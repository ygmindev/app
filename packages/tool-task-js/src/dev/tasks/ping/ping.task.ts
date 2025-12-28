import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { type PingModel, type PingParamsModel } from '@tool/task/dev/tasks/ping/ping.models';

export const ping = buildTask<PingParamsModel, PingModel>({
  task: async ({ test }) => {
    await sleep(5000);
    return { message: 'success' };
  },
});
