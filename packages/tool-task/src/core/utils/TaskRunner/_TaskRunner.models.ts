import { type TaskFunctionModel } from '#tool-task/core/core.models';

export type _TaskRunnerModel = {
  getTask(name: string): TaskFunctionModel;

  registerTask(name: string, task: () => Promise<void>): void;

  registry: Record<string, TaskFunctionModel>;
};
