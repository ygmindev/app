import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import {
  type TaskModel,
  type TaskParamsModel,
} from '@tool/task/core/utils/buildTask/buildTask.models';

export const buildTask =
  <TParams = unknown, TResult = unknown>({
    context,
    params,
    task: fn,
  }: TaskParamsModel<TParams, TResult>): TaskModel<TParams, TResult> =>
  async (paramsOverrides, contextOverrides) => {
    const paramsF = { ...(params ?? {}), ...(paramsOverrides ?? {}) } as TParams;
    const contextF = { ...(context ?? {}), ...(contextOverrides ?? {}) };
    const env = new Environment({
      app: contextF.app,
      environment: contextF.environment,
      overrrides: contextF.overrrides,
    });
    await env.initialize();
    return fn(paramsF, contextF);
  };
