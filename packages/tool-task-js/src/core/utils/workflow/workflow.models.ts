import {
  type _WorkflowModel,
  type _WorkflowParamsModel,
} from '@tool/task/core/utils/workflow/_workflow.models';

export type WorkflowParamsModel<
  TParams = void,
  TResult = void,
  TSteps extends Array<unknown> = Array<unknown>,
> = _WorkflowParamsModel<TParams, TResult, TSteps>;

export type WorkflowModel<TParams = void, TResult = void> = _WorkflowModel<TParams, TResult>;
