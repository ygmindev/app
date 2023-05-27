import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import type { TaskResultModel } from '@tool/task/core/core.models';

export interface _TaskRegistryModel {
  register(name: string, task: CallablePromiseModel<TaskResultModel>): void;

  registry: Record<string, CallablePromiseModel<TaskResultModel>>;
}
