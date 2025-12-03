import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const orchestratorDev: BuildWorkflowParamsModel = {
  steps: () => [
    // ['orchestratorRun'], ['orchestratorBuild']
  ],
};
