import { type StartModel, type StartParamsModel } from '@tool/task/core/tasks/start/start.models';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { execute } from '@tool/task/core/utils/execute/execute';
import { waitForPort } from '@tool/task/core/utils/waitForPort/waitForPort';

export const start = buildTask({
  task: async ({ command, host, isSilent, port }: StartParamsModel): Promise<StartModel> => {
    void execute({ command, isSilent });
    port && (await waitForPort({ host, port }));
  },
});
