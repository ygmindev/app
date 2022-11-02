import 'reflect-metadata';

import { DatabaseInMemory } from '@lib/backend/database/utils/DatabaseInMemory/DatabaseInMemory';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';

const kill: RegisterParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'database-kill',

  task: async () => {
    await Container.get(DatabaseInMemory).stop();
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};

export default kill;
