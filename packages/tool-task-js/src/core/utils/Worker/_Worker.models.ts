import { type AsyncCallableModel } from '@lib/shared/core/core.models';

export type _WorkerParamsModel = {
  id?: string;
  queue?: string;
  tasks?: Record<string, AsyncCallableModel>;
  workflowsDir?: string;
  workflowsName: string;
};

export type _WorkerModel = {
  initialize(): Promise<void>;
  run(): Promise<void>;
};
