import {
  type OrchestratorRunModel,
  type OrchestratorRunParamsModel,
} from '@tool/task/core/tasks/orchestratorRun/orchestratorRun.models';
import { execute } from '@tool/task/core/utils/execute/execute';
import { task } from '@tool/task/core/utils/task/task';

export const orchestratorRun = task({
  task: async (parmas: OrchestratorRunParamsModel): Promise<OrchestratorRunModel> =>
    execute({ command: 'temporal server start-dev' }),
});
