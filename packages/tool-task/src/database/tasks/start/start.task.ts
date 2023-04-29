import 'reflect-metadata';

import { DatabaseInMemory } from '@lib/backend/database/utils/DatabaseInMemory/DatabaseInMemory';
// import { seed } from '@lib/backend/database/utils/seed/seed';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { Container } from '@lib/shared/core/utils/Container/Container';

const start: TaskParamsModel = {
  name: 'database-start',

  task: async () => {
    await Container.get(DatabaseInMemory).start();
    await initialize();
    // await seed();
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default start;
