import { Container } from '@lib/backend/core/utils/Container/Container';
import { DatabaseInMemory } from '@lib/backend/database/utils/DatabaseInMemory/DatabaseInMemory';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const kill: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'database-kill',

  task: [async () => Container.get(DatabaseInMemory).stop()],
};

export default kill;
