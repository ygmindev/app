import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';

export type WorkflowLogPropsModel = {
  id: string;
  workflow: Partial<WorkflowModel>;
};
