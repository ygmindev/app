import { TASK_STATUS } from '#tool-task/core/core.constants';
import type { TaskParamsModel } from '#tool-task/core/core.models';

import { Container } from '#lib-backend/core/utils/Container/Container';
import { DatabaseInMemory } from '#lib-backend/database/utils/DatabaseInMemory/DatabaseInMemory';
import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';

const kill: TaskParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'database-kill',

  task: async () => {
    await Container.get(DatabaseInMemory).stop();
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default kill;
