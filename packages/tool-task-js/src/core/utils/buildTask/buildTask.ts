import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { getAppRoot } from '@lib/backend/file/utils/getAppRoot/getAppRoot';
import { withDir } from '@lib/backend/file/utils/withDir/withDir';
import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { type ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import {
  type TaskModel,
  type TaskParamsModel,
} from '@tool/task/core/utils/buildTask/buildTask.models';
import { prompt } from '@tool/task/core/utils/prompt/prompt';

export const buildTask =
  <TParams = unknown, TResult = unknown>({
    context,
    name,
    params,
    prompts,
    task: fn,
  }: TaskParamsModel<TParams, TResult>): TaskModel<TParams, TResult> =>
  async (paramsOverrides, contextOverrides) => {
    let paramsF = merge([cleanObject(paramsOverrides), params]) as TParams;
    const promptsF = prompts?.filter((v) => !(v.key in (paramsF as object)));
        promptsF?.length && (paramsF = { ...paramsF, ...(await prompt(promptsF)) });
    const contextF = merge([cleanObject(contextOverrides), context]) as ExecutionContextModel;
    contextF.root = contextF.root ?? (contextF.app ? await getAppRoot(contextF.app) : fromRoot());
    const environment = process.env.NODE_ENV === 'undefined' ? undefined : process.env.NODE_ENV;
    const env = new Environment({
      app: contextF.app,
      environment: (environment ?? contextF.environment) as ENVIRONMENT,
      overrrides: contextF.overrrides,
    });
    await env.initialize();
    return withDir(contextF.root, async () => fn(paramsF, contextF));
  };
