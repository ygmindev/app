import { Container } from '@lib/backend/core/utils/Container/Container';
import { DatabaseInMemory } from '@lib/backend/database/utils/DatabaseInMemory/DatabaseInMemory';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';

const start: TaskParamsModel = {
  name: 'database-start',

  task: async () => {
    await Container.get(DatabaseInMemory).start();
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default start;
