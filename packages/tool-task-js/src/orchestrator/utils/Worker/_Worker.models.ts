import { type TaskModel } from '@tool/task/core/utils/buildTask/buildTask.models';

export type _WorkerParamsModel = {
  id?: string;
  queue?: string;
  tasks?: Record<string, TaskModel>;
  workflowsDir?: string;
  workflowsName: string;
};

export type _WorkerModel = {
  initialize(): Promise<void>;
  run(): Promise<void>;
};
