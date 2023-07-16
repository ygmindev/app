import { type OptionalCallablePromiseModel } from '#lib-shared/core/core.models';
import { type TaskResultModel } from '#tool-task/core/core.models';

export type _TaskRunnerModel = {
  getTask(name: string): OptionalCallablePromiseModel<TaskResultModel>;

  registerTask(name: string, task: OptionalCallablePromiseModel): void;

  registry: Record<string, OptionalCallablePromiseModel<TaskResultModel>>;
};
