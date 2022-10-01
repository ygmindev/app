import 'reflect-metadata';

import { DatabaseInMemory } from '@lib/backend/database/utils/DatabaseInMemory/DatabaseInMemory';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';

export const kill: RegisterParamsModel = {
  name: 'database-kill',

  task: async () => {
    await Container.get(DatabaseInMemory).stop();
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};
