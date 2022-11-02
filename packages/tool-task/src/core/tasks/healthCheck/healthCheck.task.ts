import type { HealthCheckParamsModel } from '@tool/task/core/tasks/healthCheck/healthCheck.models';
import { runAll } from '@tool/task/core/templates/runAll/runAll';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';

const healthCheck: RegisterParamsModel<HealthCheckParamsModel> = {
  ...runAll,

  name: 'healthCheck',

  options: { patterns: ['lint', 'test'] },
};

export default healthCheck;
