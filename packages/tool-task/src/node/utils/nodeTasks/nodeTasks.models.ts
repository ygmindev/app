import { type TaskParamsModel } from '#tool-task/core/core.models';
import { type CleanParamsModel } from '#tool-task/core/templates/clean/clean.models';
import { type TestParamsModel } from '#tool-task/node/templates/test/test.models';

export type NodeTasksParamsModel = {
  testOverrides?: Omit<TaskParamsModel<TestParamsModel>, 'name' | 'task'>;
};

export type NodeTasksMdoel = [
  TaskParamsModel,
  TaskParamsModel<CleanParamsModel>,
  TaskParamsModel<TestParamsModel>,
  TaskParamsModel<TestParamsModel>,
  TaskParamsModel<TestParamsModel>,
  TaskParamsModel<TestParamsModel>,
];
