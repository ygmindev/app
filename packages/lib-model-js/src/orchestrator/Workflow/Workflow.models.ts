import { type WORKFLOW_EXECUTION } from '@lib/model/orchestrator/Workflow/Workflow.constants';
import { type WorkflowStepModel } from '@lib/model/orchestrator/WorkflowStep/WorkflowStep.models';
import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';

export type WorkflowModel = ResourceModel & {
  description?: string;

  execution?: WORKFLOW_EXECUTION;

  interval?: number;

  name: string;

  retry?: number;

  steps?: Array<WorkflowStepModel>;

  timeout?: number;
};
