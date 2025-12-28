import { type StartModel, type StartParamsModel } from '@tool/task/core/tasks/start/start.models';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { execute } from '@tool/task/core/utils/execute/execute';
import { waitForPort } from '@tool/task/core/utils/waitForPort/waitForPort';

export const start = buildTask<StartParamsModel, StartModel>({
  task: async ({ command, host, isSilent, port }, context) => {
    void execute({ command, isSilent, root: context?.root });
    port && (await waitForPort({ host, port }));
  },
});
