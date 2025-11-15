import { type AsyncCallableModel } from '@lib/shared/core/core.models';
import { type ExceutionContextModel } from '@tool/task/core/core.models';
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

export type WorkflowStepModel<TParams = void, TResult = void> =
  | [task: string, params: TParams, context?: ExceutionContextModel]
  | [workflow: AsyncCallableModel, params: TParams, context?: ExceutionContextModel]
  | WorkflowParamsModel<TParams, TResult>;
