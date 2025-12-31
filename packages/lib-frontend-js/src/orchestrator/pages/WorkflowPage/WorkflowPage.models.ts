import { type PagePropsModel } from '@lib/frontend/core/core.models';
import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';

export type WorkflowPagePropsModel = PagePropsModel<{
  workflow?: Partial<WorkflowModel>;
}>;
