import type { TaskParamsModel } from '#tool-task/core/core.models';
import type { TestParamsModel } from '#tool-task/node/templates/test/test.models';

export interface NodeTasksParamsModel {
  testOverrides?: Omit<TaskParamsModel<TestParamsModel>, 'name' | 'task'>;
}
