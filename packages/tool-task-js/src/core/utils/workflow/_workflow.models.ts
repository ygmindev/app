import { type ExceutionContextModel } from '@tool/task/core/core.models';
import { type WORKFLOW_EXECUTION } from '@tool/task/core/utils/workflow/workflow.constants';
import { type WorkflowStepModel } from '@tool/task/core/utils/workflow/workflow.models';

export type _WorkflowParamsModel<
  TParams = void,
  TResult = void,
  TSteps extends Array<unknown> = Array<unknown>,
> = {
  duration?: number;
  execution?: WORKFLOW_EXECUTION;
  interval?: number;
  retry?: number;
  steps(
    params: TParams,
    context?: ExceutionContextModel,
  ): Array<WorkflowStepModel<TSteps[number], unknown>>;
};

export type _WorkflowModel<TParams = void, TResult = void> = (
  params: TParams,
  context?: ExceutionContextModel,
) => Promise<TResult>;
