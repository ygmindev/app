import { type EnvironmentConfigModel } from '@lib/config/environment/environment.models';
import { type AsyncCallableModel } from '@lib/shared/core/core.models';
import {
  type _WorkflowModel,
  type _WorkflowParamsModel,
} from '@tool/task/core/utils/workflow/_workflow.models';

export type WorkflowParamsModel<TParams = void, TResult = void> = _WorkflowParamsModel<
  TParams,
  TResult
>;

export type WorkflowModel<TParams = void, TResult = void> = _WorkflowModel<TParams, TResult>;

export type WorkflowStepModel<TParams = void, TResult = void> =
  | [task: string, context?: WorkflowStepContext<TParams>]
  | [workflow: AsyncCallableModel, context?: WorkflowStepContext<TParams>]
  | WorkflowParamsModel<TParams, TResult>;

export type WorkflowStepContext<TParams> = {
  env?: EnvironmentConfigModel;
  params?: unknown;
  workflowParams?: TParams;
};
