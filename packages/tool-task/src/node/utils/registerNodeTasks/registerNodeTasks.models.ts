import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';
import type { TestParamsModel } from '@tool/task/node/tasks/test/test.models';

export interface RegisterNodeTasksParamsModel {
  name: string;
  testOverrides?: Omit<RegisterParamsModel<TestParamsModel>, 'name' | 'task'>;
}
