import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';

export type TaskParamsModel<TParams = unknown, TResult = unknown> = {
  context?: ExecutionContextModel;
  params?: TParams;
  task(params: TParams, context?: ExecutionContextModel): Promise<TResult>;
};

export type TaskModel<TParams = unknown, TResult = unknown> = (
  params: TParams,
  context?: ExecutionContextModel,
) => Promise<TResult>;
