import 'reflect-metadata';

import { DatabaseInMemory } from '@lib/backend/database/utils/DatabaseInMemory/DatabaseInMemory';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
// import { seed } from '@lib/backend/database/utils/seed/seed';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';

const start: TaskParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'database-start',

  task: async () => {
    await initialize();
    await Container.get(DatabaseInMemory).start();
    // await seed();
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default start;
