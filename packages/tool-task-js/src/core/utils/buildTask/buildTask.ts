import { withEnvironment } from '@lib/backend/environment/utils/withEnvironment/withEnvironment';
import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { getAppRoot } from '@lib/backend/file/utils/getAppRoot/getAppRoot';
import { withDir } from '@lib/backend/file/utils/withDir/withDir';
import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { type ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type AppTaskParamsModel } from '@tool/task/core/core.models';
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
    let contextF = merge([
      { app: (paramsF as AppTaskParamsModel).app },
      cleanObject(contextOverrides),
      context,
    ]) as ExecutionContextModel;

    const pkg = contextF?.root ?? (contextF?.app ? await getAppRoot(contextF.app) : undefined);
    const rootF = pkg ?? fromRoot();
    if (pkg) {
      contextF = merge([contextF, { overrrides: { PKG_NAME: fileInfo(rootF).main } }]);
    }
    contextF.root = rootF;
    const environment =
      contextF.environment ??
      (process.env.NODE_ENV === 'undefined' ? undefined : process.env.NODE_ENV);
    return withDir(contextF.root, async () =>
      withEnvironment(
        {
          app: contextF.app,
          environment: (environment ?? contextF.environment) as ENVIRONMENT,
          overrrides: contextF.overrrides,
        },
        async () => fn(paramsF, contextF),
      ),
    );
  };
