import {
  type OrchestratorRunModel,
  type OrchestratorRunParamsModel,
} from '@tool/task/core/tasks/orchestratorRun/orchestratorRun.models';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { execute } from '@tool/task/core/utils/execute/execute';

export const orchestratorRun = buildTask({
  task: async (params: OrchestratorRunParamsModel): Promise<OrchestratorRunModel> =>
    execute({ command: 'temporal server start-dev' }),
});
