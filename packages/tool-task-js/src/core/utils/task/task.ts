import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskModel, type TaskParamsModel } from '@tool/task/core/utils/task/task.models';

export const task =
  <TParams = unknown, TResult = unknown>({
    app,
    environment = ENVIRONMENT.DEVELOPMENT,
    overrrides,
    task: fn,
  }: TaskParamsModel<TParams, TResult>): TaskModel<TParams, TResult> =>
  async (params, context) => {
    const env = new Environment();
    await env.initialize({
      app: context?.app ?? app,
      environment: context?.environment ?? environment,
      overrrides: merge([context?.overrrides ?? {}, overrrides ?? {}]),
    });
    return fn(params, context);
  };
