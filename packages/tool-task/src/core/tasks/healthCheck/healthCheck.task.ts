import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import type { HealthCheckParamsModel } from '@tool/task/core/tasks/healthCheck/healthCheck.models';
import { runAll } from '@tool/task/core/templates/runAll/runAll';

const healthCheck: TaskParamsModel<HealthCheckParamsModel> = {
  ...runAll,

  name: 'healthCheck',

  options: { patterns: ['lint', 'test'] },
};

export default healthCheck;
