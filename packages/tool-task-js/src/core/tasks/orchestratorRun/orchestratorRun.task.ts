import {
  type OrchestratorRunModel,
  type OrchestratorRunParamsModel,
} from '@tool/task/core/tasks/orchestratorRun/orchestratorRun.models';
import { execute } from '@tool/task/core/utils/execute/execute';

export const orchestratorRun = async (
  parmas: OrchestratorRunParamsModel,
): Promise<OrchestratorRunModel> => execute({ command: 'temporal server start-dev' });
