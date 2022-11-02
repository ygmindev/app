import { DatabaseMain } from '@lib/backend/database/utils/DatabaseMain/DatabaseMain';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';

const close: RegisterParamsModel = {
  name: 'database-close',

  task: async () => {
    await Container.get(DatabaseMain).close();
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};

export default close;
