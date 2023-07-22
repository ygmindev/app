import { type TaskParamsModel } from '#tool-task/core/core.models';

export type NodeTasksParamsModel<TType extends Array<TaskParamsModel<unknown>>> = {
  additionalTasks?: TType;
  onBeforeEte?: Array<string>;
};

export type NodeTasksMdoel = Array<TaskParamsModel<unknown>>;
