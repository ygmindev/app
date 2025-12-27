import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';

export type JobHistoryPropsModel = {
  workflow: Partial<WorkflowModel>;
};
