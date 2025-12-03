import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { type WORKFLOW_EXECUTION } from '@lib/model/orchestrator/Workflow/Workflow.constants';
import { type WorkflowStepModel } from '@lib/model/orchestrator/WorkflowStep/WorkflowStep.models';
import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';

export type WorkflowModel<TParams = unknown, TResult = unknown> = ResourceModel & {
  context?: ExecutionContextModel;

  description?: string;

  execution?: WORKFLOW_EXECUTION;

  interval?: number;

  name: string;

  params?: TParams;

  retry?: number;

  steps?: Array<WorkflowStepModel>;

  timeout?: number;
};
