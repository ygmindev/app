import 'reflect-metadata';

import { DatabaseInMemory } from '@lib/backend/database/utils/DatabaseInMemory/DatabaseInMemory';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';

const kill: TaskParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'database-kill',

  task: async () => {
    await Container.get(DatabaseInMemory).stop();
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default kill;
