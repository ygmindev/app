import { type EnvironmentParamsModel } from '@lib/backend/environment/utils/Environment/Environment.models';
import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';

export type TaskParamsModel<TParams = unknown, TResult = unknown> = EnvironmentParamsModel & {
  task(params: TParams, context?: ExecutionContextModel): Promise<TResult>;
};

export type TaskModel<TParams = unknown, TResult = unknown> = (
  params: TParams,
  context?: ExecutionContextModel,
) => Promise<TResult>;
