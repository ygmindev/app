import 'reflect-metadata';

import { DatabaseInMemory } from '@lib/backend/database/utils/DatabaseInMemory/DatabaseInMemory';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';

const kill: TaskParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'database-kill',

  task: async () => {
    await Container.get(DatabaseInMemory).stop();
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default kill;
