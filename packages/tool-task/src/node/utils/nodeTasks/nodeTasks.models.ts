import { type TaskParamsModel } from '#tool-task/core/core.models';
import { type TestParamsModel } from '#tool-task/node/templates/test/test.models';

export type NodeTasksParamsModel<TType extends Array<TaskParamsModel<unknown>>> = {
  additionalTasks?: TType;

  testOverrides?: Omit<TaskParamsModel<TestParamsModel>, 'name' | 'task'>;
};

export type NodeTasksMdoel = Array<TaskParamsModel<unknown>>;
