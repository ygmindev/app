import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';
import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';

export type PipelineModel = ResourceModel & {
  app?: string;

  name: string;

  workflows?: Array<WorkflowModel>;
};
