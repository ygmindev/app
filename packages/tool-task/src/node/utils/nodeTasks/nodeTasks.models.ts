import { type PartialModel } from '#lib-shared/core/core.models';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { type TestParamsModel } from '#tool-task/node/templates/test/test.models';

export type NodeTasksParamsModel<TType extends Array<TaskParamsModel<unknown>>> = {
  additionalTasks?: TType;
  eteTasks?: Array<string>;
  testParams?: PartialModel<TaskParamsModel<TestParamsModel>>;
};

export type NodeTasksMdoel = Array<TaskParamsModel<unknown>>;
