import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { START } from '@tool/task/core/tasks/start/start.constants';
import { type StartParamsModel } from '@tool/task/core/tasks/start/start.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';
import { ORCHESTRATOR_RUN } from '@tool/task/orchestrator/workflows/orchestratorRun/orchestratorRun.constants';
import {
  type OrchestratorRunModel,
  type OrchestratorRunParamsModel,
} from '@tool/task/orchestrator/workflows/orchestratorRun/orchestratorRun.models';

export const orchestratorRun: BuildWorkflowParamsModel<
  OrchestratorRunParamsModel,
  OrchestratorRunModel,
  [StartParamsModel]
> = {
  context: {
    environment: ENVIRONMENT.DEVELOPMENT,
  },

  name: ORCHESTRATOR_RUN,

  steps: () => [{ name: START, params: { command: 'temporal server start-dev' } }],
};
