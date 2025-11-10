import { type WORKFLOW_EXECUTION } from '@tool/task/core/utils/workflow/workflow.constants';
import { type WorkflowStepModel } from '@tool/task/core/utils/workflow/workflow.models';

export type _WorkflowParamsModel<TParams = void, TResult = void> = {
  duriation?: number;
  execution?: WORKFLOW_EXECUTION;
  interval?: number;
  retry?: number;
  steps(params: TParams): Array<WorkflowStepModel<unknown, unknown>>;
};

export type _WorkflowModel<TParams = void, TResult = void> = (params: TParams) => Promise<TResult>;
