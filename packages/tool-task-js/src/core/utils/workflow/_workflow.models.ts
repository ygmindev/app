import { type WORKFLOW_EXECUTION } from '@tool/task/core/utils/workflow/workflow.constants';
import { type WorkflowStepModel } from '@tool/task/core/utils/workflow/workflow.models';

export type _WorkflowParamsModel<TResult = void, TParams = void> = {
  duriation?: number;
  execution?: WORKFLOW_EXECUTION;
  interval?: number;
  retry?: number;
  steps: Array<WorkflowStepModel<unknown, unknown>>;
};

export type _WorkflowModel<TResult = void, TParams = void> = (params?: TParams) => Promise<TResult>;
