import { type StartModel, type StartParamsModel } from '@tool/task/core/tasks/start/start.models';
import { execute } from '@tool/task/core/utils/execute/execute';
import { task } from '@tool/task/core/utils/task/task';
import { waitForPort } from '@tool/task/core/utils/waitForPort/waitForPort';

export const start = task({
  task: async ({ command, host, isSilent, port }: StartParamsModel): Promise<StartModel> => {
    void execute({ command, isSilent });
    port && (await waitForPort({ host, port }));
  },
});
