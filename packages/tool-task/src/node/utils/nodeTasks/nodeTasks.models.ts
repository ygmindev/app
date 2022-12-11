import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import type { TestParamsModel } from '@tool/task/node/templates/test/test.models';

export interface NodeTasksParamsModel {
  testOverrides?: Omit<TaskParamsModel<TestParamsModel>, 'name' | 'task'>;
}
