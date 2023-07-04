import { type OptionalCallablePromiseModel } from '#lib-shared/core/core.models';
import { type TaskResultModel } from '#tool-task/core/core.models';

export type _TaskRegistryModel = {
  _register(name: string, task: OptionalCallablePromiseModel): void;

  get(name: string): OptionalCallablePromiseModel<TaskResultModel>;

  registry: Record<string, OptionalCallablePromiseModel<TaskResultModel>>;
};
