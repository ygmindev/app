import { Container } from '@lib/shared/core/utils/Container/Container';
import { DatabaseInMemory } from '@lib/backend/database/utils/DatabaseInMemory/DatabaseInMemory';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const start: TaskParamsModel<unknown> = {
  name: 'database-start',

  task: [async () => Container.get(DatabaseInMemory).start()],
};

export default start;
