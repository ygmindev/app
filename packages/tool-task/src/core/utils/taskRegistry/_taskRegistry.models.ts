import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import type { TaskResultModel } from '@tool/task/core/core.models';

export interface _TaskRegistryModel {
  _register(name: string, task: CallablePromiseModel): void;

  get(name: string): CallablePromiseModel<TaskResultModel>;

  registry: Record<string, CallablePromiseModel<TaskResultModel>>;
}
