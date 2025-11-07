import { type AsyncCallableModel } from '@lib/shared/core/core.models';
import {
  type _WorkflowModel,
  type _WorkflowParamsModel,
} from '@tool/task/core/utils/workflow/_workflow.models';

export type WorkflowParamsModel<TResult = void, TParams = void> = _WorkflowParamsModel<
  TResult,
  TParams
>;

export type WorkflowModel<TResult = void, TParams = void> = _WorkflowModel<TResult, TParams>;

export type WorkflowStepModel<TResult = void, TParams = void> =
  | [task: string, params?: TParams]
  | [workflow: AsyncCallableModel, params?: TParams]
  | WorkflowParamsModel<TResult, TParams>;
