import { type WorkflowParamsModel } from '@tool/task/core/utils/workflow/workflow.models';

export const orchestratorDev: WorkflowParamsModel = {
  steps: [['orchestratorRun'], ['tasksBuild']],
};
