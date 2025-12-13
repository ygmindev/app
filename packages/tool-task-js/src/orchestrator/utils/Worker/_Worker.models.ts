import { type BootstrappableModel } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable.models';
import { type TaskModel } from '@tool/task/core/utils/buildTask/buildTask.models';

export type _WorkerParamsModel = {
  id?: string;
  queue?: string;
  tasks?: Record<string, TaskModel>;
  workflowsDir?: string;
  workflowsName: string;
};

export type _WorkerModel = BootstrappableModel & {
  run(): Promise<void>;
};
