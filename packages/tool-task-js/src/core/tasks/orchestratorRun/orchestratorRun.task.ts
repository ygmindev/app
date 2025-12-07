import {
  type OrchestratorRunModel,
  type OrchestratorRunParamsModel,
} from '@tool/task/core/tasks/orchestratorRun/orchestratorRun.models';
import { execute } from '@tool/task/core/utils/execute/execute';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';

export const orchestratorRun = buildTask({
  task: async (parmas: OrchestratorRunParamsModel): Promise<OrchestratorRunModel> =>
    execute({ command: 'temporal server start-dev' }),
});
