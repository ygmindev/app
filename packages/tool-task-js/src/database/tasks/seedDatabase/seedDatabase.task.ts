import { seed } from '@lib/backend/database/utils/seed/seed';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import databaseConfig from '@lib/config/database/database.mongo';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type SeedDatabaseModel } from '@tool/task/database/tasks/seedDatabase/seedDatabase.models';

const seedDatabase: TaskParamsModel<SeedDatabaseModel> = {
  environment: ENVIRONMENT.TEST,

  name: 'seed-database',

  options: async () => [{ key: 'environment' }],

  task: [
    async () => {
      let cleanUp: (() => Promise<void>) | undefined;
      try {
        ({ cleanUp } = await initialize({ database: databaseConfig.params() }));
        await seed();
      } finally {
        await cleanUp?.();
      }
    },
  ],
};

export default seedDatabase;
