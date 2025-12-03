import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';

export type _ClientParamsModel = {
  id?: string;
};

export type _ClientModel = {
  initialize(): Promise<void>;

  run(workflow: string, params?: unknown, context?: ExecutionContextModel): Promise<void>;
};
