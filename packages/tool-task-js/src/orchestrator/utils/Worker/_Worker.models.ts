import { type TaskConfigModel } from '@lib/config/task/task.models';
import { type BootstrappableModel } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable.models';
import { type TaskModel } from '@tool/task/core/utils/buildTask/buildTask.models';

export type _WorkerParamsModel = Pick<TaskConfigModel, 'workflowsPathname'> & {
  id?: string;
  queue?: string;
  tasks?: Record<string, TaskModel>;
};

export type _WorkerModel = BootstrappableModel & {
  run(): Promise<void>;
};
