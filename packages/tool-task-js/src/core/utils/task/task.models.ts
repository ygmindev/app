import { type EnvironmentParamsModel } from '@lib/backend/environment/utils/Environment/Environment.models';
import { type ExceutionContextModel } from '@tool/task/core/core.models';

export type TaskParamsModel<TParams = unknown, TResult = unknown> = EnvironmentParamsModel & {
  task(params: TParams, context?: ExceutionContextModel): Promise<TResult>;
};

export type TaskModel<TParams = unknown, TResult = unknown> = (
  params: TParams,
  context?: ExceutionContextModel,
) => Promise<TResult>;
