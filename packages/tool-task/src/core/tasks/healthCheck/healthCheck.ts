import type { HealthCheckParamsModel } from '@tool/task/core/tasks/healthCheck/healthCheck.models';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';
import { runAll } from '@tool/task/core/utils/runAll/runAll';

export const healthCheck: RegisterParamsModel<HealthCheckParamsModel> = {
  ...runAll,

  name: 'healthCheck',

  options: { patterns: ['lint', 'test'] },
};
