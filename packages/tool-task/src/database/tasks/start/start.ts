import 'reflect-metadata';

import { DatabaseInMemory } from '@lib/backend/database/utils/DatabaseInMemory/DatabaseInMemory';
import { seed } from '@lib/backend/database/utils/seed/seed';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';

export const start: RegisterParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'database-start',

  task: async () => {
    await Container.get(DatabaseInMemory).start();
    await seed();
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};
