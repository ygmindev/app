import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { type PromptArrayModel } from '@lib/model/orchestrator/Prompt/Prompt.models';

export type TaskParamsModel<TParams = unknown, TResult = unknown> = {
  context?: ExecutionContextModel;
  name?: string;
  params?: TParams;
  prompts?: PromptArrayModel<TParams>;
  task(params: TParams, context?: ExecutionContextModel): Promise<TResult>;
};

export type TaskModel<TParams = unknown, TResult = unknown> = (
  params: TParams,
  context?: ExecutionContextModel,
) => Promise<TResult>;
