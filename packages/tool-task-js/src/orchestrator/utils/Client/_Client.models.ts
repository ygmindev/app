import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { type ExecutionResultModel } from '@tool/task/orchestrator/utils/Client/Client.models';

export type _ClientParamsModel = {
  id?: string;
};

export type _ClientModel = {
  initialize(): Promise<void>;

  run(
    workflow: string,
    params?: unknown,
    context?: ExecutionContextModel,
  ): Promise<ExecutionResultModel>;
};
